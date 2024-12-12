// // src/components/GallerySection/NavigationStatus.tsx
import React from "react";

interface NavigationStatusProps {
  status?: string;
}
const NavigationStatus: React.FC<NavigationStatusProps> = ({ status }) => {
  const getStatusDescription = (status?: string): string => {
    switch (status) {
      case "0":
        return "В пути, под двигателем";
      case "1":
        return "Стоит на якоре";
      case "2":
        return "Не управляется";
      case "3":
        return "Ограничено в маневре";
      case "4":
        return "Ограничено осадкой";
      case "5":
        return "Стоит у причала";
      case "6":
        return "Село на мель";
      case "7":
        return "Занято рыболовством";
      case "8":
        return "В пути, под парусом";
      default:
        return "Неизвестный статус"; // Если статус не определён
    }
  };

  return <span>{getStatusDescription(status)}</span>;
};

export default NavigationStatus;
