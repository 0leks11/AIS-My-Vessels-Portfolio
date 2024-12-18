// src/context/WebSocketContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

interface WebSocketContextProps {
  messages: string[];
}

interface WebSocketProviderProps {
  children: React.ReactNode;
}

const WebSocketContext = createContext<WebSocketContextProps>({ messages: [] });

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080'); 
    ws.onopen = () => {
      console.log('WebSocket соединение установлено');
    };

    ws.onmessage = (event) => {
      console.log('Получено сообщение:', event.data);
      setMessages((prev) => [...prev, event.data]);
    };

    ws.onerror = (error) => {
      console.error('WebSocket ошибка:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket соединение закрыто');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ messages }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);