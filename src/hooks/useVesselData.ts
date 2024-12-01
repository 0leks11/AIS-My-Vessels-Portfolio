// src/hooks/useVesselData.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { VesselData } from '../types/vesselTypes';

interface UseVesselsDataOptions {
  mmsiList: string[];
}

export const useVesselsData = ({ mmsiList }: UseVesselsDataOptions) => {
  const [data, setData] = useState<Record<string, VesselData>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.post<VesselData[]>('http://localhost:8000/vessels/list', mmsiList)
      .then((response) => {
        const vesselsData: Record<string, VesselData> = {};
        response.data.forEach((vesselData: VesselData) => {
          vesselsData[vesselData.mmsi] = vesselData;
        });
        setData(vesselsData);
        setLoading(false);
      })
      .catch((err: any) => {
        setError(err.response?.data?.detail || 'Ошибка при получении данных');
        setLoading(false);
      });
  }, [mmsiList]);

  return { data, loading, error };
};