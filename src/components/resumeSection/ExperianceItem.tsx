// src/components/ExperianceItem.tsx
import React, { useState } from 'react';

interface ExperianceItemProps {
    experiance: string[];
    description: string[];
}

const ExperianceItem: React.FC<ExperianceItemProps> = ({ experiance, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full">
            {/* Верхний контейнер: Текст + Кнопка */}
            <div className="flex justify-between items-center w-full py-2">
                {/* Контейнер текста (колонка) */}
                <div className="flex flex-col">
                    {experiance.map((exp, index) => (
                        <div key={index} className="text-lg font-semibold text-gray-900">
                            {exp}
                        </div>
                    ))}
                </div>

                {/* Кнопка со стрелкой */}
                <button
                    onClick={toggleDescription}
                    className="ml-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-900 transform transition-transform duration-300"
                >
                    <span className={`${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                </button>
            </div>

            {/* Раскрывающееся описание */}
            {isOpen && (
                <div className="mt-2 text-gray-600 transition-opacity duration-300">
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

export default ExperianceItem;









