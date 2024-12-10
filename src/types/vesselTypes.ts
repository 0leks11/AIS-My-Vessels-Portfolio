// src/types/vesselTypes.ts

export interface Vessel {
  vessel_name: string;  // было name: string;
  ship_type: string;    // было type: string;
  flag: string;         // Без изменений
  flagCode: string;     // Без изменений
  mmsi: number;         // было mmsi: string; теперь число
  dwt?: number;         // Без изменений
  loa?: number;         // Без изменений
  beam?: number;        // Без изменений
  yearBuilt?: number;   // Без изменений
  registryPort: string; // Без изменений
  imoNumber: string;    // Без изменений
  imageComponent?: React.FC; // Без изменений
  marinetrafficUrl: string;  // Без изменений
  previousPort?: string;     // Без изменений
  destination?: string;      // Без изменений
}

export interface VesselData {
  sog?: number;         // было speed?: number;
  cog?: number;         // было course?: number;
  status?: string;      // Без изменений
  destination?: string; // Без изменений
  eta?: string;         // Без изменений
  atd?: string;         // Без изменений
  previousPort?: string;// Без изменений
  latitude?: number;    // Без изменений
  longitude?: number;   // Без изменений
}
