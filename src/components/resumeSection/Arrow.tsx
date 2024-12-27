// src/components/Arrow.tsx
import React from "react";

interface ArrowProps {
  isOpen: boolean;
  icon?: React.ReactNode;
}

const Arrow: React.FC<ArrowProps> = ({ isOpen, icon }) => {
  return (
    <span
      className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"} mr-4`}
      style={{
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {icon || "▼"}
    </span>
  );
};

export default Arrow;
