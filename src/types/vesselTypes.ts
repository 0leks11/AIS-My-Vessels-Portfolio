// src/types/vesselTypes.ts

export interface Vessel {
  name: string;
  type: string;
  flag: string;
  flagCode: string;
  mmsi: string;
  dwt?: number;
  loa?: number;
  beam?: number;
  yearBuilt?: number;
  registryPort: string;
  imoNumber: string;
  imageComponent?: React.FC;
  marinetrafficUrl: string;
  previousPort?: string;
  destination?: string;
}

export interface VesselData {
  speed?: number;
  course?: number;
  status?: string;
  destination?: string;
  eta?: string;
  atd?: string;
  previousPort?: string;
  latitude?: number;
  longitude?: number;
}
