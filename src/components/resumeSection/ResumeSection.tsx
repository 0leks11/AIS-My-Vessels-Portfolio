// src/components/ResumeSection.tsx
import React from 'react';

const ResumeSection: React.FC = () => {
    return (
        // 7th Container: Main Wrapper Container
        <div className="resume-section-wrapper min-w-[320px] max-w-4xl mx-auto p-6 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md">
            
            {/* 1st Container: Resume Header */}
            <div className="resume-header text-center mb-6">
                <h2 className="text-4xl font-bold">Resume</h2>
            </div>

            {/* 4th Container: Skills and Experience combined */}
            <div className="skills-experience-container flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
                
                {/* 2nd Container: Skills Section */}
                <div className="skills-container flex-1 mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Skills</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>JavaScript & TypeScript: Advanced knowledge of JavaScript with type-safe practices in TypeScript for creating scalable and reliable applications.</li>
                        <li>React: Skilled in building modular, component-based architectures in React.</li>
                        <li>Tailwind CSS: Proficient in Tailwind CSS for efficient and flexible styling, enabling rapid prototyping and customization in various projects.</li>
                        <li>Django & Python: Experience with Django for backend development, building robust APIs, and managing PostgreSQL databases for data-driven applications.</li>
                        <li>API Integration: Strong experience in integrating and managing APIs, ensuring seamless data flow between front-end interfaces and backend services.</li>
                        <li>Git: Proficient in Git for managing code changes and collaborating on projects with distributed teams.</li>
                        <li>Google Cloud & Docker: Familiar with deploying applications on Google Cloud and using Docker for containerized environments, ensuring consistent and reliable deployments.</li>
                    </ul>
                </div>

                {/* Divider between Skills and Experience */}
                <div className="hidden lg:block w-px h-auto bg-gray-300 mx-6"></div>

                {/* 3rd Container: Experience Section */}
                <div className="experience-container flex-1 mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Advanced full-stack capabilities by developing and deploying a personal portfolio application, integrating OpenAI-powered ChatBot with a Django and PostgreSQL backend. Strengthened expertise in Python for backend logic and API design, while consistently implementing security and data integrity best practices. This approach highlights adaptability and growth across both front-end and back-end technologies.</li>
                        <li>Refined front-end skills through hands-on work with JavaScript, TypeScript, React, and Tailwind CSS. Enhanced web applications with responsive, cross-browser compatible design and optimized for performance. Gained collaboration experience, using Git for streamlined teamwork and effective version control.</li>
                    </ul>
                </div>
            </div>

            {/* 5th Container: Suggested Hourly Rate Header */}
            <div className="suggested-rate-header text-center mt-6">
                <h3 className="text-lg font-semibold">Suggested Hourly Rate:</h3>
            </div>

            {/* 6th Container: Suggested Hourly Rate Content */}
            <div className="suggested-rate-content text-center">
                <p>As a junior developer starting out on Upwork...</p>
            </div>
        </div>
    );
};

export default ResumeSection;