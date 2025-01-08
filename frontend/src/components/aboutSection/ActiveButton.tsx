import React, { FC, ReactNode } from "react";
import Arrow from "../resumeSection/Arrow";

interface ActiveButtonProps {
  onClick?: () => void;
  button: ReactNode;
  href: string;
  icon?: ReactNode;
}

export const ActiveButton: FC<ActiveButtonProps> = ({
  onClick,
  button,
  icon,
  href,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`group flex justify-between   w-full transition-colors no-underline `}
    >
      {button}
      <Arrow icon={icon} />
    </a>
  );
};

//      className={`group flex justify-between border-2 bg-neutral-900 ${isHovered ? "hover:bg-neutral-800" : "bg-neutral-900"} border-zinc-600 h-55 w-full p-4 transition-colors no-underline `}
