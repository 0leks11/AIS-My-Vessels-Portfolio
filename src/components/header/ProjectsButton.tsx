// src/components/Header/ProjectsButton.tsx
import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

interface ButtonProps {
  className?: string;
}

const ProjectsButton: React.FC<ButtonProps> = ({ className = "" }) => (
  <a
    href="#projects"
    className={`flex items-center gap-2 px-4 py-2 text-gray-300 font-semibold hover:text-blue-400 transition transform hover:scale-105 ${className}`}
    aria-label="Projects"
  >
    <BriefcaseIcon className="w-6 h-6" />
    <span>Projects</span>
  </a>
);

export default ProjectsButton;