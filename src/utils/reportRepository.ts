// src/utils/reportRepository.ts

import { VesselData } from "../types/vesselTypes";

const REPORT_KEY = "vesselReports";

export const ReportRepository = {
  getReports: (): { [mmsi: string]: VesselData } => {
    const data = localStorage.getItem(REPORT_KEY);
    return data ? JSON.parse(data) : {};
  },

  saveReport: (mmsi: string, report: VesselData): void => {
    const reports = ReportRepository.getReports();
    // reports[mmsi] = { ...report, lastUpdated: Date.now() };
    localStorage.setItem(REPORT_KEY, JSON.stringify(reports));
  },
};
