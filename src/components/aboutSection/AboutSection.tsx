// src/components/AboutSection/AboutSection.tsx
import React from "react";
import ProfileAvatarL from "./ProfileAvatarL";
import ProfileAvatarS from "./ProfileAvatarS";
import AboutNameplate from "./AboutNameplate";
import AboutText from "./AboutText";
import CirclesAnimation from "./CirclesAnimation";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section
      className={`bg-black text-white min-w-[320px] max-w-4xl mx-auto p-6 ${className}`}
    >
      {/* Top part with name, location, color circles and large avatar */}
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Large avatar hidden on small screens */}
        <div className="hidden md:block mr-4">
          <ProfileAvatarL />
        </div>

        {/* Name, location, color circles */}
        <div className="flex-1">
          <div className="flex flex-col">
            {/* This part visible on small screens: avatar + name */}
            <div className="flex items-center mb-2 md:hidden">
              <div className="mr-2">
                <ProfileAvatarS />
              </div>
              <AboutNameplate />
            </div>

            {/* This part visible on medium+ screens: just name */}
            <div className="hidden md:block mb-2">
              <AboutNameplate />
            </div>
          </div>
        </div>
      </div>

      {/* Divider spacing */}
      <div className="my-6 border-b border-gray-700" />

      {/* Main content: two-column text + decorative shape + CTA button */}
      <div className="flex flex-col md:flex-row">
        {/* Left column */}
        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <p className="leading-relaxed mb-4">
            I'm a software engineer who loves designing, collaborating, and
            creating new tech on the web.
          </p>
          <CirclesAnimation />
          <div className="mt-6"></div>
        </div>

        {/* Right column */}
        <div className="md:w-1/2">
          <div className="mb-4">
            {/* AboutText – если внутри у вас несколько абзацев, 
               можно добавить нужные стили в AboutText 
            */}
            <AboutText />
          </div>
          <div className="mt-6">
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium
                         px-5 py-3 rounded-md transition-colors"
            >
              Let's Build Together →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
