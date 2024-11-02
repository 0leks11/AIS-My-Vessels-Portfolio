// src/components/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="about-section max-w-2xl mx-auto p-6 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md mb-10">
            <img src="./components/img/myphoto.jpeg" alt="Oleksii" className="profile-pic w-36 h-36 rounded-full mx-auto mb-4" />
            <p className="text-lg text-gray-800 text-center">
            Junior Front-End Developer with a foundation in React TypeScript, TailwindCSS. My journey, previously marked by a decade of work as an engineer on container vessels, has become a valuable experience that I now leverage in creating interactive and visually appealing solutions. Closing the chapter of my maritime career, I enthusiastically step into a world where my ideas can take shape and inspire others. I strive for creative projects that spark interest and help me grow as a professional.
            </p>
            <div className="flex justify-center mt-4 space-x-4">
                <button className="px-4 py-2 bg-button text-header-footer-text rounded-lg hover:bg-green-600 transition">
                    Learn More
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
                    Calculate Cost
                </button>
            </div>
        </section>
    );
};

export default AboutSection;