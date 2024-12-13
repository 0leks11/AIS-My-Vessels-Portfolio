// src/hooks/useVesselRepository.ts

import { useCallback } from "react";
import { ReportRepository } from "../utils/reportRepository";
import { VesselData } from "../types/vesselTypes";

export const useVesselRepository = () => {
  const saveReport = useCallback((mmsi: string, data: VesselData) => {
    ReportRepository.saveReport(mmsi, data);
  }, []);

  return { saveReport };
};
