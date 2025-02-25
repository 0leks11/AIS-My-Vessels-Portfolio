// src/hooks/useVesselDB.ts
import { useState, useEffect } from "react";
import { VesselData } from "../types/vesselTypes";

interface UseVesselDBOptions {
  mmsi: string;
}

export const useVesselDB = ({ mmsi }: UseVesselDBOptions) => {
  const [data, setData] = useState<VesselData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    fetch(`https://ais-server.onrender.com/api/vessels/${mmsi}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((dbData) => {
        if (!isMounted) return;

        const positionReport = dbData.Message?.PositionReport;
        const metaData = dbData.MetaData;

        const vesselData: VesselData = {
          speed: positionReport?.Sog || 0,
          course: positionReport?.Cog || 0,
          status:
            positionReport?.NavigationalStatus !== undefined
              ? Number(positionReport.NavigationalStatus)
              : undefined,
          latitude: positionReport?.Latitude,
          longitude: positionReport?.Longitude,
          utcTime: metaData?.time_utc,
        };

        setData(vesselData);
        setLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [mmsi]);

  return { data, loading, error };
};
