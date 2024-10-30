// src/components/Header/ContactButton.tsx
import React from 'react';
import {EnvelopeIcon} from '@heroicons/react/24/outline';
interface ButtonProps {
  className?: string;
}

const ContactButton: React.FC<ButtonProps> = ({ className = "" }) => (
  <a
    href="#contact"
    className={`flex items-center gap-2 px-4 py-2 text-gray-300 font-semibold hover:text-blue-400 transition transform hover:scale-105 ${className}`}
    aria-label="Contact"
  >
    <EnvelopeIcon className="w-6 h-6" />
    <span>Contact</span>
  </a>
);

export default ContactButton;