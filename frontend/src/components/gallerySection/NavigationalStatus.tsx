// src/components/GallerySection/NavigationalStatus.tsx
import React from "react";

interface NavigationStatusProps {
  status?: number;
}

const statusDescriptions: Record<number, string> = {
  0: "Underway using engine",
  1: "At anchor",
  2: "Not under command",
  3: "Restricted maneuverability",
  4: "Constrained by her draft",
  5: "Moored",
  6: "Aground",
  7: "Engaged in fishing",
  8: "Underway sailing",
};

const NavigationStatus: React.FC<NavigationStatusProps> = ({ status }) => {
  const description =
    status === undefined
      ? "No data"
      : statusDescriptions[status] || "Unknown status";

  return <span>{description}</span>;
};

export default NavigationStatus;
