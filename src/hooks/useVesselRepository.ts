// src/hooks/useVesselRepository.ts
import { useReportRepositoryContext } from "../context/ReportRepositoryContext";
import { VesselData } from "../types/vesselTypes";

/*
 * This hook provides an interface to update and retrieve
 * vessel data from the ReportRepository.
 */
export const useVesselRepository = () => {
  const { vessels, updateVessel } = useReportRepositoryContext();

  // updateVesselData: saves incoming data into repository
  const updateVesselData = (mmsi: string, data: VesselData) => {
    // Store latest vessel data
    updateVessel(mmsi, data);
  };

  // getVesselData: retrieve current data for a specific vessel
  const getVesselData = (mmsi: string): VesselData | undefined => {
    return vessels[mmsi];
  };

  return { getVesselData, updateVesselData };
};
