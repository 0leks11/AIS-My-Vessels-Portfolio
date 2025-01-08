// src/context/WebSocketContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface VesselDataMap {
  [mmsi: string]: any;
}

interface WebSocketContextProps {
  vesselDataMap: VesselDataMap;
  error: string | null;
}

const WebSocketContext = createContext<WebSocketContextProps>({
  vesselDataMap: {},
  error: null,
});

export const WebSocketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vesselDataMap, setVesselDataMap] = useState<VesselDataMap>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);

        if (message.MessageType === "PositionReport" && message.MetaData) {
          const mmsi = message.MetaData.MMSI?.toString();
          if (mmsi) {
            setVesselDataMap((prev) => ({
              ...prev,
              [mmsi]: message,
            }));
          }
        }
      } catch (err) {
        console.error("Error parsing WebSocket message:", err);
      }
    };

    ws.onerror = (ev) => {
      console.error("WebSocket error:", ev);
      setError("WebSocket connection error");
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ vesselDataMap, error }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocketContext = () => useContext(WebSocketContext);
