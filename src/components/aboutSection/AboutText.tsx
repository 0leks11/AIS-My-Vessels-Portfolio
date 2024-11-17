// src/components/AboutSection/AboutText.tsx
import React from 'react';

interface AboutTextProps {
    className?: string;
  }
  
  const AboutText: React.FC<AboutTextProps> = ({ className }) => {
    return (
        <p className={`text-base sm:text-sx md:text-lg lg:text-xl xl:text-xl font-light sm:font-normal md:font-normal lg:font-normal leading-tight text-gray-800 ${className}`}>
            Junior Front-End Developer with a foundation in React, TypeScript, and TailwindCSS. My journey, previously marked by a decade of work as an engineer on container vessels, has become a valuable experience that I now leverage in creating interactive and visually appealing solutions. Closing the chapter of my maritime career, I enthusiastically step into a world where my ideas can take shape and inspire others. I strive for creative projects that spark interest and help me grow as a professional.
        </p>
    );
};

export default AboutText;