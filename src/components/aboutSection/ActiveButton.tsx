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
      className="flex justify-between border-2 bg-neutral-900 hover:bg-neutral-800 border-zinc-600 h-55 w-full p-4 transition-colors "
    >
      {button}
      <Arrow icon={icon} />
    </a>
  );
};
