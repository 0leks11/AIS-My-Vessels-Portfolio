// server/server.js
require('dotenv').config();
const express = require('express');
const WebSocket = require('ws');
const cors = require('cors');

const API_KEY = process.env.AIS_API_KEY; // Храним API-ключ в переменной окружения

const app = express();
app.use(cors());

const server = require('http').createServer(app);

// Создаем WebSocket-сервер
const wss = new WebSocket.Server({ server });

// Глобальное WebSocket-соединение к aisstream.io
let aisSocket;

// Функция для подключения к aisstream.io
const connectAisStream = () => {
  aisSocket = new WebSocket('wss://stream.aisstream.io/v0/stream');

  aisSocket.on('open', () => {
    console.log('Подключено к aisstream.io');

    // Отправляем сообщение подписки
    const subscriptionMessage = {
      APIKey: API_KEY,
      BoundingBoxes: [
        [[-90, -180], [90, 180]], // Получаем данные со всего мира
      ],
      FiltersShipMMSI: [
        "636020776", // GSL VIOLETTA
        "477552400", // MAERSK BENGUELA
        "538005057", // SAFEEN PRIZE
        "565967000", // MAERSK VIGO
        "636017197", // IOLAOS
        "636017781", // APOLLON
        "636017782", // ORPHEUS
        "636018051", // PATROKLOS
        "636015034", // HECTOR
        "667022000", // ANTARES
        "255802490", // BREB TIMBER
      ],
      FilterMessageTypes: ["PositionReport"],
    };

    aisSocket.send(JSON.stringify(subscriptionMessage));
  });

  aisSocket.on('message', (data) => {
    const message = data.toString('utf8');
    console.log('Отправляемое сообщение клиенту:', message);
    // Рассылаем всем подключённым клиентам
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  aisSocket.on('close', () => {
    console.log('Соединение с aisstream.io закрыто. Попытка переподключения через 5 секунд...');
    setTimeout(connectAisStream, 5000); // Пытаемся переподключиться через 5 секунд
  });

  aisSocket.on('error', (error) => {
    console.error('Ошибка aisstream.io:', error);
    aisSocket.close();
  });
};

// Инициализируем подключение к aisstream.io при запуске сервера
connectAisStream();

// Подключение клиентов
wss.on('connection', (ws) => {
  console.log('Клиент подключен');

  ws.on('close', () => {
    console.log('Клиент отключен');
  });

  ws.on('error', (error) => {
    console.error('Ошибка клиента:', error);
  });
});

// Запуск сервера
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});