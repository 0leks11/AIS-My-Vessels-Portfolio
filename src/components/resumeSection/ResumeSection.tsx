// src/components/ResumeSection/ResumeSection.tsx
import React from "react";
import { SkillItem } from "./SkillItem";
import { ExperienceItem } from "./ExperienceItem";
import { ActiveButton } from "../aboutSection/ActiveButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import AnimatedLine from "./AnimatedLine";

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

      <a
        href="https://www.websolo.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        @#
      </a>

      <div className="bg-black ml-4 mb-10 mr-4 w-full max-w-4xl ">
        <div className="w-full flex justify-between items-center mb-2 gap-2 text-gray-300">
          <span className="text-xl ">2023</span>
          <AnimatedLine className="h-px justify-self-stretch w-full bg-black sm:w-132 md:w-148 lg:w-156 ml-2 mr-2" />
          <span className="text-xl ">2024</span>
        </div>

        <div className="flex w-full justify-between items-center gap-2 text-white font-bold">
          <span className="text-white font-bold text-3xl sm:text-3xl flex items-center gap-1">
            Front-End Engineer
            <ArrowUpRightIcon className="text-white stroke-[1] h-6 w-6" />
          </span>
          <span className="text-white font-bold text-2xl sm:text-2xl">
            WebSolo
          </span>
        </div>

        <p className="w-full mt-4 text-base sm:text-xs md:text-base lg:text-base xl:text-lg font-thin leading-tight text-slate-50">
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

        <div className="mt-4 flex flex-wrap gap-6 text-sm sm:text-base text-gray-300">
          <div className="w-full flex flex-row justify-start">
            <div className="flex w-full flex-col mr-2 items-start">
              <span>React</span>
              <AnimatedLine className="w-full h-px w-16 bg-black" />
            </div>
            <div className="flex w-full flex-col mr-2 items-start">
              <span>Matters.js</span>
              <AnimatedLine className="w-full h-px w-16 bg-black" />
            </div>
            <div className="flex w-full flex-col mr-2 items-start">
              <span>TypeScript</span>
              <AnimatedLine className="w-full h-px w-16 bg-black" />
            </div>
            <div className="flex w-full flex-col mr-2 items-start">
              <span>Google Serwer</span>
              <AnimatedLine className="w-full h-px w-16 bg-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 ml-4 mr-10 mt-3">
        <ActiveButton
          href="mailto:ak.kozyrev01@gmail.com"
          icon={
            <ArrowRightIcon className="self-end text-white stroke-[2] h-10 w-10 ml-3 transition-transform duration-500 ease-in-out group-hover:translate-x-4" />
          }
          button={
            <div className="transition-transform transform text-white items-start font-normal sm:text-xl  md:text-2xl lg:text-4xl xl:text-4xl flex flex-col ml-3">
              <div className="relative overflow-hidden w-full sm:h-5 md:h-6 lg:h-9 xl:h-9">
                <p className=" duration-500 ease-in-out  sm:group-hover:-translate-y-6 md:group-hover:-translate-y-7 lg:group-hover:-translate-y-10 xl:group-hover:-translate-y-10 flex flex-col">
                  <span>View</span>
                  <span>View</span>
                </p>
              </div>
              <div className="h-2"></div>
              <div className="relative overflow-hidden w-full sm:h-5 md:h-6 lg:h-9 xl:h-9">
                <p className="duration-500 delay-150 ease-in-out  sm:group-hover:-translate-y-6 md:group-hover:-translate-y-7 lg:group-hover:-translate-y-10 xl:group-hover:-translate-y-10 flex flex-col">
                  <span>Full Resumé</span>
                  <span>Full Resumé</span>
                </p>
              </div>
              <div className="h-2"></div>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default ResumeSection;
