// src/hooks/useDataBack.ts
import { useVesselRepository } from "./useVesselRepository";
import { useState, useEffect } from "react";
import { VesselData } from "../types/vesselTypes";

/*
 * This hook returns saved data from ReportRepository at
 * initial load. It will be used by VesselCard to show data
 * before new WebSocket data arrives.
 */
export const useDataBack = (mmsi: string) => {
  const { getVesselData } = useVesselRepository();
  const [initialData, setInitialData] = useState<VesselData | null>(null);

  useEffect(() => {
    // Get saved data from repository on mount
    const data = getVesselData(mmsi);
    if (data) {
      setInitialData(data);
    }
  }, [mmsi, getVesselData]);

  return initialData;
};
