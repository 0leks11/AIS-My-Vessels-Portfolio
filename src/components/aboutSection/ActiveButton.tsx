import React, { FC, ReactNode, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group flex justify-between border-2 bg-neutral-900 ${isHovered ? "hover:bg-neutral-800" : "bg-neutral-900"} border-zinc-600 h-55 w-full p-4 transition-colors no-underline `}
    >
      {button}
      <Arrow icon={icon} />
    </a>
  );
};
