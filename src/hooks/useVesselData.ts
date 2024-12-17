// src/hooks/useVesselData.ts
import { useEffect } from "react";
import { AISMessage } from "../types/aisMessageTypes";
import { VesselData } from "../types/vesselTypes";
import { useVesselRepository } from "./useVesselRepository";

/*
 * This hook connects to the WebSocket, listens for updates,
 * and when data arrives:
 * 1. It can update the UI (via parent component state).
 * 2. It stores the data into the ReportRepository using
 *    useVesselRepository.
 */
interface UseVesselDataOptions {
  mmsi: string;
  onDataUpdate: (data: VesselData) => void;
}

export const useVesselData = ({ mmsi, onDataUpdate }: UseVesselDataOptions) => {
  const { updateVesselData } = useVesselRepository();

  useEffect(() => {
    // Establish WebSocket connection
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.onmessage = (event) => {
      console.log("Message from server:", event.data);
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

            // Update UI with latest data
            onDataUpdate(vesselData);

            // Also save data to repository
            updateVesselData(mmsi, vesselData);
          }
        }
      } catch (err) {
        console.error("Error parsing message:", err);
      }
    };

    ws.onerror = () => {
      console.error("WebSocket error occurred");
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.close();
    };
  }, [mmsi, onDataUpdate, updateVesselData]);
};
