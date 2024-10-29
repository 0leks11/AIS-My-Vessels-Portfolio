// src/components/Header/AboutButton.tsx
import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

interface ButtonProps {
  className?: string;
}

const AboutButton: React.FC<ButtonProps> = ({ className = "" }) => (
  <a
    href="#about"
    className={`flex items-center gap-2 px-4 py-2 text-gray-300 font-semibold hover:text-blue-400 transition transform hover:scale-105 ${className}`}
    aria-label="About"
  >
    <UserCircleIcon className="w-6 h-6" />
    <span>About</span>
  </a>
);

export default AboutButton;