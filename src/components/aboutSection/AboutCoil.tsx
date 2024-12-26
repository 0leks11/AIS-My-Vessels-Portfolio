// AboutCoil.tsx
// Comments are in English and each line is limited to 80 characters.

import React from "react";

// This interface describes props for our AboutCoil component.
interface AboutCoilProps {
  additionalClassName?: string;
}

export const AboutCoil: React.FC<AboutCoilProps> = ({
  additionalClassName,
}) => {
  // Here we define how many circles we need.
  const circleCount = 20;

  // We define the first offset (2.5) and the distance between circles (5).
  const firstOffset = 2.5;
  const offsetIncrement = 5;

  // This is our base class string for the text in the parent container.
  const baseTextClass = [
    // Font sizes
    "text-base",
    "sm:text-sm",
    "md:text-lg",
    "lg:text-xl",
    "xl:text-xl",

    // Font weight and line height
    "font-light",
    "sm:font-normal",
    "md:font-normal",
    "lg:font-normal",
    "leading-tight",

    // Text color
    "text-slate-50",
  ].join(" ");

  // We combine our base class string with the optional additional class name.
  const paragraphClassName = additionalClassName
    ? `${baseTextClass} ${additionalClassName}`
    : baseTextClass;

  return (
    <div className="relative w-full">
      {/* 
        Usually, you might have some text or children here.
        For demonstration, we simply show a container
        that includes the moving circles.
      */}
      <p className={paragraphClassName}></p>

      {/* 
        We loop over the number of circles and generate a style tag and a div
        for each. This way, we avoid repeating the same @keyframes code.
      */}
      {Array.from({ length: circleCount }, (_, index) => {
        // Calculate offset for each circle.
        const offsetValue = firstOffset + index * offsetIncrement;
        const animationName = `move-circle-${index}`;
        const colorAnimName = `color-circle-${index}`;

        // Create the keyframe definition for this circle.
        const animationStyle = `
          @keyframes ${animationName} {
            0%   { left: calc(${offsetValue}% - 100px); }
            50%  { left: calc(50% - 100px); }
            100% { left: calc(${offsetValue}% - 100px); }
          }
        `;

        const colorAnimStyle = `
          @keyframes ${colorAnimName} {
            0% {
              outline-color: rgb(255, 153, 102); /* #FF9966 */
            }
            50% {
              outline-color: rgb(102, 255, 204); /* #66FFCC */
            }
            100% {
              outline-color: rgb(255, 153, 102); /* #FF9966 */
            }
          }
        `;

        return (
          <React.Fragment key={index}>
            <style>{animationStyle}</style>
            <style>{colorAnimStyle}</style>
            <div
              className="absolute top-0 outline outline-1 
                         w-[200px] h-[200px] 
                         rounded-full 
                         pointer-events-none"
              style={{
                outlineColor: "linear-gradient(to right, #009c51, #00e496) 1",
                animation: `${animationName} 3s linear infinite, ${colorAnimName} 4s ease-in-out infinite`,
              }}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AboutCoil;
