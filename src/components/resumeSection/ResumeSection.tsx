// src/components/ResumeSection/ResumeSection.tsx
import React from "react";
import { SkillItem } from "./SkillItem";
import { ExperienceItem } from "./ExperienceItem";
import { ActiveButton } from "../aboutSection/ActiveButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
    <section className="resume-section-wrapper min-w-[320px] max-w-5xl mx-auto p-8 bg-black ">
      <h2 className="text-white text-3xl font-bold mb-4">Resume</h2>
      <div className="skills-experience-container text-white flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 w-full ml-4">
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

      <div className="bg-black text-gray-300 ml-4 mb-10 mr-4 w-full max-w-4xl ">
        {/* Верхняя строка: год, линия, Present, компания (Dirac) справа */}
        <div className="flex items-center justify-between mb-6">
          {/* Левая часть: "2024" + горизонтальная линия, + "Present" */}

          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base">2023</span>
            <div className="h-px w-full bg-gray-600 sm:w-32 md:w-48 lg:w-56"></div>
            <span className="text-sm sm:text-base">2024</span>
          </div>

          {/* Правая часть: название компании */}
        </div>

        {/* Большой заголовок с ссылкой + "↗" */}
        <a
          href="https://www.websolo.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" inline-flex items-center gap-2 text-white font-bold text-2xl sm:text-3xl">
            <span className="text-white font-bold text-3xl sm:text-2xl">
              Software Engineer
            </span>
            <span className="text-xl sm:text-3xl">↗</span>
            <span className="text-white font-bold text-3xl sm:text-2xl">
              WebSolo
            </span>
          </div>
        </a>

        <p className="w-full mt-3 text-gray-400 leading-relaxed text-sm sm:text-base">
          Developed and maintained responsive, dynamic user interfaces using
          JavaScript, TypeScript, React, and Tailwind CSS, focusing on modular
          and clean code. Collaborated on building new front-end features that
          enhanced user engagement and improved usability. Ensured cross-browser
          compatibility and performance optimization for web applications,
          leveraging Tailwind CSS for efficient styling and responsiveness.
          Utilized Git for version control, effectively collaborating with team
          members and managing code updates. Conducted code reviews and testing
          to ensure high-quality deliverables aligned with project requirements.
        </p>

        {/* Список технологий внизу: React, Redux, TypeScript, AWS */}
        <div className="mt-6 flex flex-wrap gap-6 text-sm sm:text-base text-gray-300">
          <div className="w-full flex flex-row justify-start">
            <div className="flex w-full flex-col mr-2 items-start">
              <span>React</span>
              <div className="w-full mt-1 h-px w-16 bg-gray-600"></div>
            </div>
            <div className="flex w-full flex-col mr-2 items-start">
              <span>Matters.js</span>
              <div className="w-full mt-1 h-px w-16 bg-gray-600"></div>
            </div>
            <div className="flex w-full flex-col mr-2 items-start">
              <span>TypeScript</span>
              <div className="w-full mt-1 h-px w-16 bg-gray-600"></div>
            </div>
            <div className="flex w-full flex-col mr-2 items-start">
              <span>Google Serwer</span>
              <div className="w-full mt-1 h-px w-16 bg-gray-600"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 ml-4 mr-10 mt-3">
        <ActiveButton
          href="mailto:ak.kozyrev01@gmail.com"
          icon={
            <ArrowRightIcon className="self-end text-white stroke-[2] h-10 w-10 ml-3" />
          }
          button={
            <div className="text-white items-start font-normal text-4xl flex flex-col ml-2">
              <p className="mb-2">View</p>
              <p className="mb-1">Full Resume</p>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default ResumeSection;
