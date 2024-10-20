// src/Components/AboutSection.js
import React from 'react';

const AboutSection = () => {
    return (
        <section className="about-section">
            <img src="./components/img/myphoto.jpeg" alt="oleksii" className="profile-pic" />
            <p>
            Hi there! I’m Oleksii Kozyrev, a passionate front-end development student with a strong foundation in HTML, CSS, and JavaScript. As a beginner, I’m dedicated to building responsive and visually appealing websites that meet modern web standards. My focus is on clean code, attention to detail, and delivering projects on time.
            Even though I’m at the start of my career, I’m eager to take on projects that allow me to grow while providing value to clients. Whether it’s a simple landing page or a more complex feature, I’m here to help bring your vision to life with high-quality front-end solutions.
            I am continuously improving my skills, and I’m excited to collaborate with clients who are open to working with a developer who is driven, hardworking, and eager to learn. Let’s work together to turn your ideas into reality.
            </p>

            <button id="more-info">Learn More</button>
            <button id="open-calculator">Calculate Cost</button>
        </section>
    );
};

export default AboutSection;