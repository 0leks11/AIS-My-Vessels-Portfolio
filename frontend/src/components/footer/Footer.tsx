// src/components/Footer/Footer.tsx
import React, { forwardRef } from "react";
import { IconCard } from "./IconCard";
import { footerList } from "../../data/footerList";
import CirclesAnimation from "../aboutSection/CirclesAnimation";

interface FooterProps {
  isCompact?: boolean;
  windowSize: { width: number; height: number };
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ windowSize }, ref) => {
    return (
      <footer className="w-full h-[300px] flex flex-col md:flex-row bg-gray-950 text-white overflow-hidden">
        {/* Левая часть: Анимация */}
        <div className="w-full md:w-1/2 h-full flex justify-center md:justify-start overflow-hidden">
          <CirclesAnimation />
        </div>

        {/* Правая часть: Контакты и текст */}
        <div
          ref={ref}
          className="w-full md:w-1/2 h-full item-center flex-col justify-items-start px-4"
        >
          {/* Иконки контактов */}
          <div className="flex gap-4">
            {footerList.map((contact, index) => {
              return <IconCard key={index} contact={contact} />;
            })}
          </div>

          {/* Текстовые строки */}
          <p className="text-xs mt-2">
            © 2024 Oleksii Kozyrev. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            The idea to create this website was inspired by my friend and
            front-end developer, Eugene.
          </p>
        </div>
      </footer>
    );
  }
);

export default Footer;
