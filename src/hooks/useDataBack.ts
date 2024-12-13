// src/hooks/useDataBack.ts

import { useEffect, useState } from "react";
import { ReportRepository } from "../utils/reportRepository";
import { VesselData } from "../types/vesselTypes";

export const useDataBack = (mmsi: string) => {
  const [data, setData] = useState<VesselData | null>(null);

  useEffect(() => {
    const reports = ReportRepository.getReports();
    if (reports[mmsi]) {
      setData(reports[mmsi]);
    }
  }, [mmsi]);

  return data;
};
