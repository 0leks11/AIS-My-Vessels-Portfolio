// src/types/aisMessageTypes.ts
export interface MetaData {
    MMSI: string; // MMSI как строка
    ShipName: string;
    latitude: number;
    longitude: number;
    time_utc: string; // Время в формате строки
  }
  
  export interface PositionReport {
    Cog?: number; // Курс
    Sog?: number; // Скорость
    Latitude?: number; // Широта
    Longitude?: number; // Долгота
    NavigationalStatus?: string; // Статус судна
  }
  
  export interface AISMessage {
    MessageType: string; // Тип сообщения, например "PositionReport"
    MetaData: MetaData; // Данные судна
    Message: {
      PositionReport: PositionReport; // Данные из отчёта
    };
  }
