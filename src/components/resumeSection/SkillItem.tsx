import React, { FC } from "react";
import { Collapsible } from "./Collapsible";

type SkillItemProps = {
  title: string;
  description: string[];
};

export const SkillItem: FC<SkillItemProps> = ({ title, description }) => {
  const label = (
    <span className="text-base sm:text-lg md:text-xl font-semibold">
      {title}
    </span>
  );

  return (
    <Collapsible
      button={label}
      content={
        <div className="overflow-hidden transition-all duration-500 ease-in-out mt-2 text-gray-600">
          {description.map((desc, index) => (
            <p key={index} className="mb-2">
              {desc}
            </p>
          ))}
        </div>
      }
    />
  );
};
