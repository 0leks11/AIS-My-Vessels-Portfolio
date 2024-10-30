// src/components/ResumeSection.tsx
import React from 'react';

const ResumeSection: React.FC = () => {
    return (
        <section className="resume-section bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md p-6 max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-center mb-4">Resume</h2>
            <div className="skills mb-6">
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <ul className="list-disc list-inside">
                    <li>HTML5, CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Responsive Web Design</li>
                    <li>Basic knowledge of Git and version control</li>
                </ul>
            </div>
            <div className="experience mb-6">
                <h3 className="text-lg font-semibold mb-2">Why Hire Me?</h3>
                <ul className="list-disc list-inside">
                    <li>Eager to learn and adapt to new challenges</li>
                    <li>Focused on clear communication and delivering results</li>
                    <li>Available for part-time or short-term projects</li>
                </ul>
            </div>
            <div className="experience">
                <h3 className="text-lg font-semibold mb-2">Suggested Hourly Rate:</h3>
                <p>As a junior developer starting out on Upwork...</p>
            </div>
        </section>
    );
};

export default ResumeSection;