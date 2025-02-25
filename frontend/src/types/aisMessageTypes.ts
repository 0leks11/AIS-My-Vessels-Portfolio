// src/types/aisMessageTypes.ts
export interface MetaData {
  MMSI: string;
  ShipName: string;
  latitude: number;
  longitude: number;
  time_utc: string;
}

export interface PositionReport {
  Cog?: number;
  Sog?: number;
  Latitude?: number;
  Longitude?: number;
  NavigationalStatus?: string;
}

export interface AISMessage {
  MessageType: string;
  MetaData: MetaData;
  Message: {
    PositionReport: PositionReport;
  };
}
