// src/components/Header/Header.tsx
import React from 'react';
import AboutButton from './AboutButton';
import ContactButton from './ContactButton';
import ProjectsButton from './ProjectsButton';
import ChatButton from './ChatMeButton';

interface HeaderProps {
  isCompact?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isCompact = false }) => {
  return (
    <header className={`fixed top-0 w-full bg-gray-900 p-4 flex justify-center items-center shadow-lg z-10 ${isCompact ? "py-2" : "py-4"}`}>
      <nav className="flex space-x-6">
        <AboutButton />
        <ContactButton />
        <ProjectsButton />
        <ChatButton />
      </nav>
    </header>
  );
};

export default Header;