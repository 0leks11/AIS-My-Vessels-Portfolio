// src/components/Footer/Footer.tsx
import React from 'react';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 flex flex-col items-center">
      <SocialIcons />
      <p className="text-xs mt-2">© 2024 Oleksii Kozyrev. All rights reserved.</p>
    </footer>
  );
};

export default Footer;