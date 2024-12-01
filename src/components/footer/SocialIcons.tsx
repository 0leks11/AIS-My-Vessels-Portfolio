// src/components/Footer/SocialIcons.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faFacebook, faTelegram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const SocialIcons: React.FC = () => (
  <div className="flex space-x-4">
    <a href="https://www.instagram.com/leorjini" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram as IconProp} className="text-white text-xl hover:text-blue-500 transition duration-300" />
    </a>
    <a href="https://www.linkedin.com/in/oleksii-kozyrev-106b37261" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin as IconProp} className="text-white text-xl hover:text-blue-500 transition duration-300" />
    </a>
    <a href="https://github.com/0leks11" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub as IconProp} className="text-white text-xl hover:text-blue-500 transition duration-300" />
    </a>
    <a href="https://www.facebook.com/faa.hfvptc" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook as IconProp} className="text-white text-xl hover:text-blue-500 transition duration-300" />
    </a>
    <a href="https://t.me/Leorjini" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTelegram as IconProp} className="text-white text-xl hover:text-blue-500 transition duration-300" />
    </a>
    <a href="mailto:ak.kozyrev01@gmail.com">
      <FontAwesomeIcon icon={faGoogle as IconProp} className="text-white text-xl hover:text-blue-500 transition duration-300" />
    </a>
  </div>
);

export default SocialIcons;