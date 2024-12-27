// src/components/AboutSection/AboutNameplate.tsx
import React from "react";

interface AboutNameplateProps {
  className?: string;
}

const AboutNameplate: React.FC<AboutNameplateProps> = ({ className }) => {
  return (
    <div className={`flex flex-col flex-wrap items-start ${className}`}>
      <p className="text-6xl font-thin italic text-slate-50 font-custom mb-3">
        Oleksii Kozyrev
      </p>
      <p className="text-2xl font-light italic sm:ml-0 text-gray-400 font-custom">
        Front-End Engineer
      </p>
      <p className="text-2xl font-light italic sm:ml-0 text-gray-400 font-custom">
        Tbilisi, Georgia
      </p>
    </div>
  );
};

export default AboutNameplate;
