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
    <button
      onClick={onClick} 
      className="flex flex-row justify-between border-2 bg-gray-800 hover:bg-gray-700 border-white h-55 w-80 p-4 transition-colors"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {button}
      </a>
      <Arrow icon={icon} />
    </button>
  );
};
