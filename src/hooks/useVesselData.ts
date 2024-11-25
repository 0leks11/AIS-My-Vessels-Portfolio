// src/hooks/useVesselData.ts
import { useState, useEffect } from 'react';
import { VesselData } from '../types/vesselTypes';

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
            const message = JSON.parse(event.data);

            if (message && message.MessageType === 'PositionReport') {
              const vesselMMSI = message.MetaData.MMSI.toString();

              if (vesselMMSI === mmsi) {
                const vesselData: VesselData = {
                  speed: parseFloat(message.Message.PositionReport.Sog?.toString() || '0'),
                  course: parseFloat(message.Message.PositionReport.Cog?.toString() || '0'),
                  status: message.Message.PositionReport.NavigationalStatus?.toString() || 'Неизвестно',
                  destination: message.Message.PositionReport.Destination || "Unknown Destination",
                  eta: message.Message.PositionReport.ETA || 'Неизвестно',
                  atd: message.Message.PositionReport.ATD || 'Неизвестно', 
                  previousPort: message.Message.previousPort || "Unknown Port",
                  latitude: message.Message.PositionReport.Latitude,
                  longitude: message.Message.PositionReport.Longitude,
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

        ws.onerror = (err) => {
          if (isMounted) {
            setError('Ошибка при получении потоковых данных');
            setLoading(false);
          }
          console.error('WebSocket ошибка:', err);
        };

        ws.onclose = () => {
          console.log('WebSocket соединение закрыто');
          if (isMounted && !error) {
            setError('Соединение закрыто');
            setLoading(false);
          }
        };
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'Ошибка при получении данных');
          setLoading(false);
        }
        console.error('Ошибка при подключении WebSocket:', err);
      }
    };

    fetchVesselData();

    return () => {
      isMounted = false;
      if (ws) {
        ws.close();
      }
    };
  }, [mmsi]);

  return { data, loading, error };
};