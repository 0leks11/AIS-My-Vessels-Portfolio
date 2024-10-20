// src/Components/ResumeSection.js
import React from 'react';

const ResumeSection = () => {
    return (
        <section className="resume-section">
            <h2>Resume</h2>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    <li>HTML5, CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Responsive Web Design</li>
                    <li>Basic knowledge of Git and version control</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Why Hire Me?</h3>
                <ul>
                    <li>Eager to learn and adapt to new challenges</li>
                    <li>Focused on clear communication and delivering results</li>
                    <li>Available for part-time or short-term projects</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Suggested Hourly Rate:</h3>
                <p>As a junior developer starting out on Upwork...</p>
            </div>
        </section>
    );
};

export default ResumeSection;