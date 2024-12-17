// src/context/src/context/ReportRepositoryContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { VesselData } from "../types/vesselTypes";

interface RepositoryState {
  [mmsi: string]: VesselData;
}

// Описываем контекст
const ReportRepositoryContext = createContext<{
  vessels: RepositoryState;
  updateVessel: (mmsi: string, data: VesselData) => void;
} | null>(null);

// Определяем тип пропсов провайдера, включающий children
type ReportRepositoryProviderProps = PropsWithChildren<{}>;

export const ReportRepositoryProvider: React.FC<
  ReportRepositoryProviderProps
> = ({ children }) => {
  const [vessels, setVessels] = useState<RepositoryState>({});

  useEffect(() => {
    const savedData = localStorage.getItem("vessel_repository");
    if (savedData) {
      setVessels(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("vessel_repository", JSON.stringify(vessels));
  }, [vessels]);

  const updateVessel = (mmsi: string, data: VesselData) => {
    setVessels((prev) => ({ ...prev, [mmsi]: data }));
  };

  return (
    <ReportRepositoryContext.Provider value={{ vessels, updateVessel }}>
      {children}
    </ReportRepositoryContext.Provider>
  );
};

export const useReportRepositoryContext = () => {
  const context = useContext(ReportRepositoryContext);
  if (!context) {
    throw new Error(
      "useReportRepositoryContext must be used within ReportRepositoryProvider"
    );
  }
  return context;
};
