// src/components/AboutSection/AboutNameplate.tsx
import React from "react";

interface AboutNameplateProps {
  className?: string;
}

const AboutNameplate: React.FC<AboutNameplateProps> = ({ className }) => {
  return (
    <div className={`flex flex-col flex-wrap items-center ${className}`}>
      <p className="text-3xl font-thin italic text-slate-50 font-custom mr-2">
        Oleksii Kozyrev
      </p>
      <p className="text-2xl font-light italic sm:ml-0 text-slate-100 font-custom">
        Front-End Developer
      </p>
    </div>
  );
};

export default AboutNameplate;
