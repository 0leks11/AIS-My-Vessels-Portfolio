// src/components/AboutSection/AboutSection.tsx
import React from "react";
import ProfileAvatarL from "./ProfileAvatarL";
import ProfileAvatarS from "./ProfileAvatarS";
import AboutNameplate from "./AboutNameplate";
import AboutText from "./AboutText";
import AboutButtons from "./AboutButtons";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  const handleLearnMore = () => {
    console.log('Кнопка "Learn More" нажата');
  };

  const handleCalculateCost = () => {
    console.log('Button "Calculate Cost" pressed');
  };
  return (
    <section
      className={`resume-section min-w-[320px] max-w-4xl mx-auto p-4 md:p-6 bg-white bg-opacity-40 backdrop-blur-xl rounded-lg shadow-md ${className}`}
    >
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="hidden md:flex flex-shrink-0 w-full md:w-1/3 lg:w-1/4 justify-center md:justify-start mb-6 md:mb-0">
          <ProfileAvatarL />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center mb-1 md:hidden">
            <div className="flex-shrink-0">
              <ProfileAvatarS />
            </div>
            <div className="ml-2">
              <AboutNameplate />
            </div>
          </div>
          <div className="hidden md:block mb-2">
            <AboutNameplate />
          </div>
          <div className="mb-2 text-justify">
            <AboutText />
          </div>
          <AboutButtons
            onLearnMore={handleLearnMore}
            onCalculateCost={handleCalculateCost}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
