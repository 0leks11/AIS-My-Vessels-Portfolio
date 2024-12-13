// src/components/GallerySection/NavigationStatus.tsx
import React from "react";

interface NavigationStatusProps {
  status?: number;
}

const statusDescriptions: Record<number, string> = {
  0: "В пути под двигателем",
  1: "На якоре",
  2: "Не управляется",
  3: "Ограничено в маневре",
  4: "Ограничено осадкой",
  5: "Швартуется",
  6: "Село на мель",
  7: "Занято рыболовством",
  8: "В пути под парусом",
};

const NavigationStatus: React.FC<NavigationStatusProps> = ({ status }) => {
  const description =
    status !== undefined
      ? statusDescriptions[status] || "Неизвестный статус"
      : "Нет данных";

  return <span>{description}</span>;
};

export default NavigationStatus;
