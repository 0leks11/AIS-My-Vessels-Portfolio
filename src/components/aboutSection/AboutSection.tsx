// src/components/AboutSection.tsx
import React from 'react';
import ProfileAvatar from './ProfileAvatar';

interface AboutSectionProps {
    className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
    return (
        <section className="resume-section min-w-[320px] max-w-4xl mx-auto p-6 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
                
                {/* Левая часть: Фотография и кнопки */}
                <div className="flex flex-col items-center lg:items-start">
                    
                    {/* Контейнер с фотографией */}
                    <div className="mb-4 lg:mb-0">
                        <ProfileAvatar />
                    </div>
                   
                    {/* Контейнер с кнопками */}
                    
                </div>

                {/* Разделитель между левой и правой частями (вертикальный для десктопов) */}
                <div className="hidden lg:block w-px h-auto bg-gray-300 mx-6"></div>

                {/* Правая часть: Текст */}
                <div className="w-full lg:w-8/10 text-justify lg:text-justify">
                    <p className="text-lg text-gray-800">
                        Junior Front-End Developer with a foundation in React, TypeScript, and TailwindCSS. My journey, previously marked by a decade of work as an engineer on container vessels, has become a valuable experience that I now leverage in creating interactive and visually appealing solutions. Closing the chapter of my maritime career, I enthusiastically step into a world where my ideas can take shape and inspire others. I strive for creative projects that spark interest and help me grow as a professional.
                    </p>
                    <div className="flex space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
                        <button className="px-4 py-2 bg-white bg-opacity-30 backdrop-blur-lg text-gray-800 rounded-lg hover:bg-opacity-50 hover:bg-black hover:text-white transition duration-300">
                            Learn More
                        </button>
                        <button className="px-4 py-2 bg-white bg-opacity-30 backdrop-blur-lg text-gray-800 rounded-lg hover:bg-opacity-50 hover:bg-black hover:text-white transition duration-300">
                            Calculate Cost
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;