// src/hooks/useVesselData.ts
import { useState, useEffect } from "react";
import { VesselData } from "../types/vesselTypes";
import { AISMessage } from "../types/aisMessageTypes";

interface UseVesselDataOptions {
  mmsi: string;
}

export const useVesselData = ({ mmsi }: UseVesselDataOptions) => {
  const [data, setData] = useState<VesselData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    let ws: WebSocket | null = null;

    try {
      ws = new WebSocket("ws://localhost:8080");

      ws.onopen = () => {
        console.log("Connecting to WebSocket (data renew)");
      };

      ws.onmessage = (event) => {
        if (!isMounted) return;
        try {
          const message: AISMessage = JSON.parse(event.data);
          if (message.MessageType === "PositionReport" && message.MetaData) {
            const vesselMMSI = message.MetaData.MMSI.toString();

            if (vesselMMSI === mmsi) {
              const positionReport = message.Message.PositionReport;
              const metaData = message.MetaData;

              const vesselData: VesselData = {
                speed: positionReport.Sog || 0,
                course: positionReport.Cog || 0,
                status:
                  positionReport.NavigationalStatus !== undefined
                    ? Number(positionReport.NavigationalStatus)
                    : undefined,
                latitude: positionReport.Latitude,
                longitude: positionReport.Longitude,
                utcTime: metaData.time_utc,
              };

              setData(vesselData);
            }
          }
        } catch (err) {
          console.error("Parsing error", err);
        }
      };

      ws.onerror = () => {
        if (isMounted) {
          setError("Error receiving streaming data via WebSocket");
        }
      };

      ws.onclose = () => {
        console.log("WebSocket connection closed (data updates)");
      };
    } catch (err: any) {
      if (isMounted) {
        setError(err.message || "Error establishing WS connection");
      }
    }

    return () => {
      isMounted = false;
      if (ws) ws.close();
    };
  }, [mmsi]);

  return { data, error };
};
