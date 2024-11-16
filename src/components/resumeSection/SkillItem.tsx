// src/components/SkillItem.tsx
import React, { useState } from 'react';

interface SkillItemProps {
    skill: string;
    description: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleDescription}
                className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-1000 py-2"
            >
                {skill}
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </button>
            {isOpen && (
                <p className="text-gray-600 mt-2 transition-opacity duration-300">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SkillItem;