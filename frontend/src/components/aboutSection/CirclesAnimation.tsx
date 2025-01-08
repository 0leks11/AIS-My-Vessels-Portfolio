// Comments are in English and each line is limited to 80 characters.

import React from "react";

// We define props if needed, or you can leave it out if it's a simple demo.
interface CirclesAnimationProps {
  circleCount?: number;
}

export const CirclesAnimation: React.FC<CirclesAnimationProps> = ({
  // Default to 20 circles, or let the parent specify a different number.
  circleCount = 20,
}) => {
  // We'll create an array of the desired length to map over in JSX.
  const circlesArray = Array.from({ length: circleCount }, (_, i) => i);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center 
                    bg-black overflow-hidden"
    >
      {/* 
        Define our keyframes in an inline <style> block.
        Because in the original code, there's a "animate" keyframe 
        that does rotateX(70deg) + translateZ(50px) + hue-rotate changes. 
      */}
      <style>
        {`
          @keyframes circleAnimate {
            0%, 100% {
              transform: rotateX(70deg) translateZ(50px) translateY(0);
              filter: hue-rotate(0deg);
            }
            50% {
              transform: rotateX(70deg) translateZ(50px) translateY(-50vmin);
              filter: hue-rotate(360deg);
            }
          }
        `}
      </style>

      <div
        className="container absolute top-[20%] h-[90%]
                      flex items-center justify-center"
      >
        {/* 
          Render each circle. 
          For each "i", we replicate the behavior of `--i` 
          by applying inline styles. 
        */}
        {circlesArray.map((i) => {
          // We can scale width by i, similar to calc(var(--i) * 2.5vmin).
          // Because i starts at 0, we might want i+1 or something else
          // to avoid a zero-size circle.
          const size = (i + 1) * 11.5; // in vmin
          // We'll also define a custom animation delay.
          // The original code uses calc(var(--i) * 0.08s).
          const delaySec = 0.08 * i;

          return (
            <div
              key={i}
              // Tailwind classes for circle style
              className="
                absolute
                bg-transparent
                rounded-full
                border-[3px]
                border-[rgb(0,255,13)]
                [transform-style:preserve-3d]
                shadow-[0_0_15px_rgb(124,124,124)_inset,0_0_15px_rgb(124,124,124)]
              "
              style={{
                // We approximate "width: calc(var(--i) * 2.5vmin)"
                // by using size in vmin. We also want aspect-ratio: 1.
                width: `${size}vmin`,
                aspectRatio: "1", // Tailwind doesn't have built-in aspect ratio
                // for arbitrary sizes, so we use inline style.

                // The transform from the original code:
                // rotateX(70deg) translateZ(50px).
                // We'll animate that in the keyframes,
                // but also set initial transform here if desired:
                transform: "rotateX(70deg) translateZ(50px)",

                // We apply our custom keyframes animation.
                // 3s is the base duration, ease-in-out.
                // The 'infinite' repeats, and we add the delay.
                animation: `circleAnimate 3s ease-in-out ${delaySec}s infinite`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CirclesAnimation;
