// src/hooks/useVesselData.ts
import { useState, useEffect } from 'react';
import { VesselData } from '../types/vesselTypes';
import { AISMessage } from '../types/aisMessageTypes';

interface UseVesselDataOptions {
  mmsi: string;
}

export const useVesselData = ({ mmsi }: UseVesselDataOptions) => {
  const [data, setData] = useState<VesselData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    let ws: WebSocket | null = null;

    const fetchVesselData = () => {
      setLoading(true);
      setError(null);

      try {
        // Подключение к локальному серверу WebSocket
        ws = new WebSocket('ws://localhost:8080');

        ws.onopen = () => {
          console.log('Подключено к серверу WebSocket');
        };

        ws.onmessage = (event) => {
          console.log('Получено сообщение от сервера:', event.data);
          try {
            const message: AISMessage = JSON.parse(event.data); // Используем интерфейс AISMessage
        
            if (message.MessageType === 'PositionReport') {
              const vesselMMSI = message.MetaData.MMSI.toString();
        
              if (vesselMMSI === mmsi) {
                const positionReport = message.Message.PositionReport;
                const vesselData: VesselData = {
                  speed: positionReport.Sog || 0,
                  course: positionReport.Cog || 0,
                  status: positionReport.NavigationalStatus || 'Неизвестно',
                  latitude: positionReport.Latitude,
                  longitude: positionReport.Longitude,
                };
        
                if (isMounted) {
                  setData(vesselData);
                  setLoading(false);
                }
              }
            }
          } catch (err) {
            console.error('Ошибка при парсинге сообщения:', err);
          }
        };
  
        ws.onerror = () => {
          if (isMounted) {
            setError('Ошибка при получении потоковых данных');
            setLoading(false);
          }
        };
  
        ws.onclose = () => {
          console.log('WebSocket соединение закрыто');
          if (isMounted) {
            setError('Соединение закрыто');
            setLoading(false);
          }
        };
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'Ошибка при получении данных');
          setLoading(false);
        }
      }
    };
  
    fetchVesselData();
  
    return () => {
      isMounted = false;
      if (ws) ws.close();
    };
  }, [mmsi, error]); // 'error' добавлен в зависимости

  return { data, loading, error };
};