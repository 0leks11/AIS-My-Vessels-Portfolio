// src/components/ResumeSection/
import React, { FC, ReactNode, useState } from "react";
import Arrow from "./Arrow";

type CollapsibleProps = {
  content: ReactNode;
  button: ReactNode;
  icon?: ReactNode;
};

export const Collapsible: FC<CollapsibleProps> = ({
  content,
  button,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full transition-colors"
      >
        {button}
        <Arrow isOpen={isOpen} icon={icon} />
      </button>

      {isOpen && content}
    </div>
  );
};
