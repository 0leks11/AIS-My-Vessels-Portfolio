import React from "react";
interface WavingGridProps {
  rows?: number;
  cols?: number;
}
export const WavingGrid: React.FC<WavingGridProps> = ({
  rows = 30,
  cols = 30,
}) => {
  const rowArray = Array.from({ length: rows }, (_, i) => i);
  const colArray = Array.from({ length: cols }, (_, i) => i);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <style>
        {`
          @keyframes waveLine {
            0%, 100% {
              transform: translateZ(0);
            }
            50% {
              transform: translateZ(20px);
            }
          }
        `}
      </style>
      <div
        className="absolute inset-0"
        style={{
          perspective: "400px",
        }}
      >
        <div
          className="absolute w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(60deg)",
          }}
        >
          {rowArray.map((rowIndex) => {
            const delaySec = rowIndex * 0.3;
            
            return (
              <div
                key={`row-${rowIndex}`}
                className="absolute left-0 w-full 
                           border-t border-zinc-600"
                style={{
                  top: `${(rowIndex / rows) * 100}%`,
                  animation: `waveLine 3s ease-in-out ${delaySec}s infinite`,
                  transformStyle: "preserve-3d",
                }}
              />
            );
          })}
          {colArray.map((colIndex) => {
            const delaySec = colIndex * 0.3;
            return (
              <div
                key={`col-${colIndex}`}
                className="absolute top-0 h-full 
                           border-l border-zinc-700"
                style={{
                  left: `${(colIndex / cols) * 100}%`,
                  animation: `waveLine 3s ease-in-out ${delaySec}s infinite`,
                  transformStyle: "preserve-3d",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WavingGrid;
