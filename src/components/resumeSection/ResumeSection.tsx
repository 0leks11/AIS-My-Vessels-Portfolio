// src/components/ResumeSection/ResumeSection.tsx
import React from "react";
import { SkillItem } from "./SkillItem";
import { ExperienceItem } from "./ExperienceItem";

const skills = [
  {
    title: "JavaScript & TypeScript",
    description: [
      "Advanced knowledge of JavaScript with type-safe practices in TypeScript for creating scalable and reliable applications.",
    ],
  },
  {
    title: "React",
    description: [
      "Skilled in building modular, component-based architectures in React.",
    ],
  },
  {
    title: "Tailwind CSS",
    description: [
      "Proficient in Tailwind CSS for efficient and flexible styling, enabling rapid prototyping and customization in various projects.",
    ],
  },
  {
    title: "Django & Python",
    description: [
      "Experience with Django for backend development, building robust APIs, and managing PostgreSQL databases for data-driven applications.",
    ],
  },
  {
    title: "API Integration",
    description: [
      "Strong experience in integrating and managing APIs, ensuring seamless data flow between front-end interfaces and backend services.",
    ],
  },
  {
    title: "Git",
    description: [
      "Proficient in Git for managing code changes and collaborating on projects with distributed teams.",
    ],
  },
  {
    title: "Google Cloud & Docker",
    description: [
      "Familiar with deploying applications on Google Cloud and using Docker for containerized environments, ensuring consistent and reliable deployments.",
    ],
  },
];

const experiences = [
  {
    title: [
      "Frontend Developer WebSolo",
      "Kyiv (Remote)",
      "November 2023 – April 2024",
    ],
    description: [
      "Developed and maintained responsive, dynamic user interfaces using JavaScript, TypeScript, React, and Tailwind CSS, focusing on modular and clean code.",
      "Collaborated on building new front-end features that enhanced user engagement and improved usability.",
      "Ensured cross-browser compatibility and performance optimization for web applications, leveraging Tailwind CSS for efficient styling and responsiveness.",
      "Utilized Git for version control, effectively collaborating with team members and managing code updates.",
      "Conducted code reviews and testing to ensure high-quality deliverables aligned with project requirements.",
    ],
  },

  {
    title: [
      "Full-Stack Developer (Freelance)",
      "UpWork, Remote",
      "July 2024 – Present",
    ],
    description: [
      "Developed and deployed a personal web application that functions as a dynamic portfolio, built with JavaScript, TypeScript, React, and Tailwind CSS, showcasing interactive elements and responsive design.",
      "Integrated a custom ChatBot using OpenAI API, with backend logic written in Python and Django, and managed a PostgreSQL database for storing query-response pairs.",
      "Designed RESTful APIs in Django, enabling smooth interaction between the chatbot front-end and backend database.",
      "Worked with clients on Upwork to develop and enhance various web applications, incorporating JavaScript, React, TypeScript, Django, and PostgreSQL to deliver scalable and high-performing solutions.",
      "Ensured data integrity and security in backend applications, implementing best practices in API management and database interactions.",
    ],
  },
];

const ResumeSection: React.FC = () => {
  return (
    <section className="resume-section-wrapper min-w-[320px] max-w-5xl mx-auto p-6 md:p-5 bg-black ">
      <div className="resume-header text-center mb-6">
        <h2 className="text-4xl font-bold">Resume</h2>
      </div>
      <div className="skills-experience-container text-white flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 w-full">
        <div className="skills-container flex-1 w-full mb-6 lg:mb-0 lg:w-auto">
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <div>
            {skills.map((item, index) => (
              <SkillItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:block w-px h-auto bg-gray-300 mx-6"></div>
        <div className="experience-container flex-1 flex-col w-full mb-6 lg:mb-0 lg:w-auto">
          <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
          <div>
            {experiences.map((item, index) => (
              <ExperienceItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
