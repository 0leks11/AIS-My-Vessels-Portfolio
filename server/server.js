// server/server.js
require("dotenv").config();
const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");
const http = require("http");
const { initDB, Vessel } = require("./database");

const API_KEY = process.env.AIS_API_KEY;

// Список MMSI, по которым хотим получать и рассылать данные
const MMSI_LIST = [
  "636020776",
  "211482350",
  "538005057",
  "565967000",
  "636017197",
  "636017781",
  "636017782",
  "636018051",
  "636015034",
  "667022000",
  "255802490",
];

const app = express();
app.use(cors());
const server = http.createServer(app);

// Инициализация базы данных
initDB().then(() => {
  console.log("Database initialized");
});

// Создаем WebSocket-сервер для наших клиентов (UI)
const wss = new WebSocket.Server({ server });

// Функция для трансляции сообщения всем подключенным клиентам
function broadcastToClients(message) {
  if (wss.clients.size === 0) {
    console.log("No WebSocket clients connected, skipping broadcast");
    return;
  }

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });

  console.log("Broadcasted message to all connected WebSocket clients");
}

// Подключение к aisstream.io
let aisSocket;

function connectAisStream() {
  aisSocket = new WebSocket("wss://stream.aisstream.io/v0/stream");

  aisSocket.on("open", () => {
    console.log("Connected to aisstream.io");
    const subscriptionMessage = {
      APIKey: API_KEY,
      BoundingBoxes: [
        [
          [-90, -180],
          [90, 180],
        ],
      ],
      FiltersShipMMSI: MMSI_LIST,
      FilterMessageTypes: ["PositionReport"],
    };
    aisSocket.send(JSON.stringify(subscriptionMessage));
    console.log(
      "Sent subscription message to aisstream.io:",
      subscriptionMessage
    );
  });

  aisSocket.on("message", async (data) => {
    const message = data.toString("utf8");
    console.log("Отправляемое сообщение клиенту:", message);
    try {
      const parsed = JSON.parse(message);
      const receivedMMSI = parsed.MetaData?.MMSI?.toString();

      broadcastToClients(message);

      // Сохраняем данные для нужных MMSI
      if (
        parsed.MessageType === "PositionReport" &&
        receivedMMSI &&
        MMSI_LIST.includes(receivedMMSI)
      ) {
        await Vessel.upsert({ mmsi: receivedMMSI, rawData: message });
        console.log(`Data for MMSI ${receivedMMSI} saved to DB`);
      }

      // Передаем данные всем клиентам по WebSocket
    } catch (err) {
      console.error("Error parsing aisstream.io message:", err);
    }
  });

  aisSocket.on("close", () => {
    console.log(
      "Connection to aisstream.io closed. Reconnecting in 3 seconds..."
    );
    setTimeout(connectAisStream, 3000);
  });

  aisSocket.on("error", (error) => {
    console.error("aisstream.io error:", error);
    aisSocket.close();
  });
}

connectAisStream();

// При подключении клиента к нашему WebSocket-серверу
wss.on("connection", (ws) => {
  console.log("A WebSocket client connected");
  ws.on("close", () => {
    console.log("A WebSocket client disconnected");
  });
  ws.on("error", (error) => {
    console.error("WebSocket client error:", error);
  });
});

// REST API для получения данных из БД
app.get("/api/vessels/:mmsi", async (req, res) => {
  const { mmsi } = req.params;
  const vessel = await Vessel.findOne({ where: { mmsi } });
  if (vessel && vessel.rawData) {
    try {
      const parsedData = JSON.parse(vessel.rawData);
      res.json(parsedData);
    } catch (e) {
      console.error("Stored data invalid JSON:", e);
      res.status(500).json({ error: "Stored data is invalid JSON" });
    }
  } else {
    res.status(404).json({ error: "No data found for this MMSI" });
  }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
