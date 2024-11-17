// src/components/ResumeSection.tsx
import React from 'react';
import SkillItem from './SkillItem';


const skills = [
    { skill: 'JavaScript & TypeScript', description: 'Advanced knowledge of JavaScript with type-safe practices in TypeScript for creating scalable and reliable applications.' },
    { skill: 'React', description: 'Skilled in building modular, component-based architectures in React.' },
    { skill: 'Tailwind CSS', description: 'Proficient in Tailwind CSS for efficient and flexible styling, enabling rapid prototyping and customization in various projects.' },
    { skill: 'Django & Python', description: 'Experience with Django for backend development, building robust APIs, and managing PostgreSQL databases for data-driven applications.' },
    { skill: 'API Integration', description: 'Strong experience in integrating and managing APIs, ensuring seamless data flow between front-end interfaces and backend services.' },
    { skill: 'Git', description: 'Proficient in Git for managing code changes and collaborating on projects with distributed teams.' },
    { skill: 'Google Cloud & Docker', description: 'Familiar with deploying applications on Google Cloud and using Docker for containerized environments, ensuring consistent and reliable deployments.' },
];

const ResumeSection: React.FC = () => {
    return (
        // 7th Container: Main Wrapper Container
        <section className="resume-section-wrapper min-w-[320px] max-w-4xl mx-auto p-3 md:p-6 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md">
            
            {/* 1st Container: Resume Header */}
            <div className="resume-header text-center mb-6">
                <h2 className="text-4xl font-bold">Resume</h2>
            </div>

            {/* 4th Container: Skills and Experience combined */}
            <div className="skills-experience-container flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 w-full">
                {/* Skills Section */}
                <div className="skills-container flex-1 w-full mb-6 lg:mb-0 lg:w-auto">
                    <h3 className="text-lg font-semibold mb-2">Skills</h3>
                    <div>
                        {skills.map((item, index) => (
                            <SkillItem key={index} skill={item.skill} description={item.description} />
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-px h-auto bg-gray-300 mx-6"></div>

                {/* Experience Section */}
                <div className="experience-container flex-1 w-full mb-6 lg:mb-0 lg:w-auto">
                    <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Advanced full-stack capabilities by developing and deploying a personal portfolio application...</li>
                        <li>Refined front-end skills through hands-on work with JavaScript, TypeScript, React, and Tailwind CSS...</li>
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
        </section>
    );
};

export default ResumeSection;