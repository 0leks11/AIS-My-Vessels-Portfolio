// Comments are in English and each line is limited to 80 characters.

import React from "react";

// We'll define props if needed, or you can remove them for a simple demo.
interface WavingGridProps {
  rows?: number;
  cols?: number;
}

// The component
export const WavingGrid: React.FC<WavingGridProps> = ({
  // Default to 10 rows and 10 columns
  rows = 30,
  cols = 30,
}) => {
  // Create arrays for rows and columns
  const rowArray = Array.from({ length: rows }, (_, i) => i);
  const colArray = Array.from({ length: cols }, (_, i) => i);

  return (
    <div
      className="relative w-full h-screen bg-black overflow-hidden"
      // We use flex + center just to see the grid in the middle of the screen
    >
      {/* 
        Inline keyframes describing how each line "waves" over time.
        We'll shift the line upward (translateZ) at 50% of the animation,
        giving the illusion of a wave.
      */}
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

      {/* 
        This container will hold the entire grid in a 3D perspective.
        We rotateX to get that angled perspective (like your screenshot).
        You can adjust perspective(...) and rotateX(...) as you wish.
      */}
      <div
        className="absolute inset-0"
        style={{
          perspective: "400px", // controls depth
        }}
      >
        {/* 
          We wrap lines in another container so that we can apply rotateX
          to the whole set of lines together.
        */}
        <div
          className="absolute w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(60deg)", // tilt the whole plane
          }}
        >
          {/* HORIZONTAL LINES */}
          {rowArray.map((rowIndex) => {
            // Each row gets an animation delay so the wave passes over time
            const delaySec = rowIndex * 0.3; // adjust 0.2 for wave speed

            return (
              <div
                key={`row-${rowIndex}`}
                className="absolute left-0 w-full 
                           border-t border-zinc-600"
                style={{
                  // Position the line along the Y axis
                  top: `${(rowIndex / rows) * 100}%`,

                  // Animate each line with waveLine keyframes + a delay
                  animation: `waveLine 3s ease-in-out ${delaySec}s infinite`,

                  // Because we want the line to be "3D", we set transform-style
                  transformStyle: "preserve-3d",
                }}
              />
            );
          })}

          {/* VERTICAL LINES */}
          {colArray.map((colIndex) => {
            const delaySec = colIndex * 0.3; // stagger wave for columns too

            return (
              <div
                key={`col-${colIndex}`}
                className="absolute top-0 h-full 
                           border-l border-zinc-700"
                style={{
                  // Position the line along the X axis
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
