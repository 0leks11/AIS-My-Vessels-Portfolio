// src/components/ResumeSection.tsx
import React from 'react';

const ResumeSection: React.FC = () => {
    return (
        <section className="max-w-2xl mx-auto p-6 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md mb-10">
            <h2 className="text-2xl font-bold text-center mb-6">Resume</h2>

            {/* Контейнер для Skills и Why Hire Me? */}
            <div className="flex flex-col md:flex-row md:space-x-8 mb-6">
                
                {/* Skills Section */}
                <div className="skills flex-1 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Skills</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>HTML5, CSS3</li>
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Responsive Web Design</li>
                        <li>Basic knowledge of Git and version control</li>
                    </ul>
                </div>

                {/* Why Hire Me Section */}
                <div className="experience flex-1">
                    <h3 className="text-lg font-semibold mb-2">Why Hire Me?</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Eager to learn and adapt to new challenges</li>
                        <li>Focused on clear communication and delivering results</li>
                        <li>Available for part-time or short-term projects</li>
                    </ul>
                </div>
            </div>

            {/* Suggested Hourly Rate Section */}
            <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Suggested Hourly Rate:</h3>
                <p>As a junior developer starting out on Upwork...</p>
            </div>
        </section>
    );
};

export default ResumeSection;