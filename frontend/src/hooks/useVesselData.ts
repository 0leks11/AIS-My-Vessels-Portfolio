// src/hooks/useVesselData.ts
import { useEffect, useState } from "react";
import { useWebSocketContext } from "../context/WebSocketContext";
import { VesselData } from "../types/vesselTypes";

interface UseVesselDataOptions {
  mmsi: string;
}

export const useVesselData = ({ mmsi }: UseVesselDataOptions) => {
  const { vesselDataMap } = useWebSocketContext();
  const [data, setData] = useState<VesselData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const rawMessage = vesselDataMap[mmsi];
    if (!rawMessage) {
      setData(null);
      return;
    }
    try {
      if (
        rawMessage.MessageType === "PositionReport" &&
        rawMessage.Message?.PositionReport
      ) {
        const positionReport = rawMessage.Message.PositionReport;
        const metaData = rawMessage.MetaData;
        const vesselData: VesselData = {
          speed: positionReport.Sog || 0,
          course: positionReport.Cog || 0,
          status:
            positionReport.NavigationalStatus !== undefined
              ? Number(positionReport.NavigationalStatus)
              : undefined,
          latitude: positionReport.Latitude,
          longitude: positionReport.Longitude,
          utcTime: metaData?.time_utc,
        };
        setData(vesselData);
      }
    } catch (err) {
      console.error("Error extracting VesselData:", err);
      setError("Error receiving streaming data via WebSocket");
    }
  }, [vesselDataMap, mmsi]);

  return { data, error };
};
