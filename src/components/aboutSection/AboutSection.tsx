// src/components/AboutSection/AboutSection.tsx
import React from 'react';
import ProfileAvatarL from './ProfileAvatarL';
import ProfileAvatarS from './ProfileAvatarS';

interface AboutSectionProps {
    className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
    return (
        <section className={`resume-section min-w-[320px] max-w-4xl mx-auto p-6 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md ${className}`}>
            {/* Main Container */}
            <div className="flex flex-col md:flex-row md:space-x-6">
                {/* Left Block for Medium and Large Screens */}
                <div className="hidden md:flex flex-shrink-0 w-full md:w-1/3 lg:w-1/4 justify-center md:justify-start mb-6 md:mb-0">
                    <ProfileAvatarL />
                </div>

                {/* Right Block */}
                <div className="flex flex-col w-full">
                    {/* Small Screen Layout: PhotoS + Nameplate */}
                    <div className="flex flex-row items-center mb-4 md:hidden">
                        <div className="flex-shrink-0">

                            
                            <ProfileAvatarS />
                        </div>
                        <p className="text-gray-800 text-xl font-bold ml-4">
                            Oleksii Kozyrev Front-End Dev
                        </p>
                    </div>
                    {/* Medium and Large Screen Layout: Nameplate */}
                    <div className="hidden md:block mb-4">
                        <p className="text-gray-800 text-2xl font-bold">
                            Oleksii Kozyrev Front-End Dev
                        </p>
                    </div>

                    {/* Text */}
                    <div className="mb-4 text-justify">
                        <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl font-light sm:font-normal md:font-normal lg:font-medium leading-relaxed text-gray-800">
                            Junior Front-End Developer with a foundation in React, TypeScript, and TailwindCSS. My journey, previously marked by a decade of work as an engineer on container vessels, has become a valuable experience that I now leverage in creating interactive and visually appealing solutions. Closing the chapter of my maritime career, I enthusiastically step into a world where my ideas can take shape and inspire others. I strive for creative projects that spark interest and help me grow as a professional.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col space-y-4">
                        <button className="w-full px-4 py-2 bg-white bg-opacity-30 backdrop-blur-lg text-gray-800 rounded-lg hover:bg-opacity-50 hover:bg-black hover:text-white transition duration-300">
                            Learn More
                        </button>
                        <button className="w-full px-4 py-2 bg-white bg-opacity-30 backdrop-blur-lg text-gray-800 rounded-lg hover:bg-opacity-50 hover:bg-black hover:text-white transition duration-300">
                            Calculate Cost
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;