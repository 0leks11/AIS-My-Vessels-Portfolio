// src/components/AboutSection/AboutText.tsx
import React from "react";

interface AboutTextProps {
  className?: string;
}

const AboutText: React.FC<AboutTextProps> = ({ className }) => {
  return (
    <div
      className={`text-base sm:text-sx md:text-lg lg:text-xl xl:text-xl font-thin leading-tight text-inherit ${className}`}
    >
      <p className="mb-2">
        I enjoy exploring new tools, finding creative solutions, and
        collaborating with teams to make projects intuitive and user-friendly
        for everyone. I am open to collaboration and always welcome new ideas.
      </p>
      <p>
        I draw inspiration from traveling, instrumental music, learning about
        different cultures, and connecting with people who share my interests
        and values. I love discovering new things and strive to stay mindful of
        the environment. I also care deeply about animals and value the
        opportunity to learn kindness and spontaneity from them.
      </p>
    </div>
  );
};

export default AboutText;
