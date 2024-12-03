// src/components/ToggleButton.tsx
import React from "react";

interface ToggleButtonProps {
  isOpen: boolean;
}

const Arrow: React.FC<ToggleButtonProps> = ({ isOpen }) => {
  return (
    <span
      className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"} mr-4`}
    >
      ▼
    </span>
  );
};

export default Arrow;
