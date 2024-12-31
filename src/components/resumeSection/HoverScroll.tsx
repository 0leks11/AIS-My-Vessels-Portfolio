// src/components/HoverScroll.tsx
import React from "react";

interface HoverScrollProps {
  children: React.ReactNode;
}

const HoverScroll: React.FC<HoverScrollProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="transition-transform duration-500 ease-in-out transform hover:-translate-y-full">
        {children}
      </div>
    </div>
  );
};

export default HoverScroll;
