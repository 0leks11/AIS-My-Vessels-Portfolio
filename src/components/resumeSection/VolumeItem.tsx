import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

interface VolumeItemProps {
  title: string | string[]; // Заголовок (для навыков или опыта)
  description: string[];    // Описание (массив строк)
  isSkill?: boolean;        // Флаг для указания типа (Skill или Experience)
}

const VolumeItem: React.FC<VolumeItemProps> = ({ title, description, isSkill = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isArray = Array.isArray(title);

  const labelStyle = isSkill
    ? 'text-base sm:text-lg md:text-xl font-semibold '
    : 'flex flex-coltext-base sm:text-lg md:text-xl font-medium ';

  const label = isArray ? (
    title.map((t, index) => (
      <span key={index} className={labelStyle}>
        {t}
        {index < title.length - 1 ? ', ' : ''}
      </span>
    ))
  ) : (
    <span className={labelStyle}>{title}</span>
  );

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <ToggleButton
        label={label}
        isOpen={isOpen}
        onClick={toggleDescription}
        className="w-full flex justify-between items-center py-2"
      />

      {isOpen && (
        <div className="mt-2 text-gray-600">
          {description.map((desc, index) => (
            <p key={index} className="mb-2">
              {desc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default VolumeItem;