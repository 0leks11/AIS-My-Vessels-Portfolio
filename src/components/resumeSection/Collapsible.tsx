import React, { FC, ReactNode, useState } from "react";
import Arrow from "./Arrow";

type CollapsibleProps = {
  content: ReactNode;
  button: ReactNode;
};

export const Collapsible: FC<CollapsibleProps> = ({ content, button }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full"
      >
        {button}
        <Arrow isOpen={isOpen} />
      </button>

      {isOpen && content}
    </div>
  );
};
