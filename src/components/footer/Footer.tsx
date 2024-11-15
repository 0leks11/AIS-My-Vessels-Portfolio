// src/components/Footer/Footer.tsx
import React, { forwardRef } from 'react';
import SocialIcons from './SocialIcons';

interface FooterProps { 
  isCompact?: boolean;
  windowSize: { width: number; height: number };
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(({ windowSize }, ref) => {
  return (
    <footer ref={ref} className="w-full bg-black text-white py-4 flex flex-col items-center">
      <SocialIcons />
      <p className="text-xs mt-2">© 2024 Oleksii Kozyrev. All rights reserved.</p>
      <p className="text-xs mt-2">The idea to create this website was inspired by my friend and front-end developer, Eugene.</p>
    </footer>
  );
});

// Указываем displayName для лучшей отладки (опционально)
Footer.displayName = "Footer";

export default Footer;


