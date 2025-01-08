// src/components/ResumeSection/
import React, { FC } from "react";
import { Collapsible } from "./Collapsible";

type ExperienceItemProps = {
  title: string[];
  description: string[];
};

export const ExperienceItem: FC<ExperienceItemProps> = ({
  title,
  description,
}) => {
  const label = (
    <div className="flex flex-col items-start">
      {title.map((t, index) => (
        <span
          key={index}
          className={
            "flex flex-col text-base sm:text-lg md:text-xl font-medium"
          }
        >
          {t}
          {index < title.length - 1 ? ", " : ""}
        </span>
      ))}
    </div>
  );

  return (
    <Collapsible
      button={label}
      content={
        <div className="overflow-hidden transition-all duration-500 ease-in-out mt-2 text-white">
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
