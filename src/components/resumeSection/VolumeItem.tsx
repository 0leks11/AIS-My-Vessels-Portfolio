// src/components/ResumeSection/VolumeItem.tsx
import React, { useState, useRef, useEffect } from 'react';
import ToggleButton from './ToggleButton';

interface VolumeItemProps {
  title: string | string[]; 
  description: string[];    
  isSkill?: boolean;        
}

const VolumeItem: React.FC<VolumeItemProps> = ({ title, description, isSkill = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

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
    if (contentRef.current) {
        setHeight(isOpen ? 0 : contentRef.current.scrollHeight);
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="mb-4">
      <ToggleButton
        label={label}
        isOpen={isOpen}
        onClick={toggleDescription}
        className="w-full flex justify-between items-center py-2"
      />
      
      {isOpen && (
        <div className="overflow-hidden transition-all duration-500 ease-in-out">
          <div className="mt-2 text-gray-600">
            {description.map((desc, index) => (
              <p key={index} className="mb-2">
                {desc}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VolumeItem;