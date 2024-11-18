// src/components/ExperianceItem.tsx
import React, { useState, useRef, useEffect } from 'react';
import ToggleButton from './ToggleButton';

interface ExperianceItemProps {
    experiance: string | string[];
    description: string[];
}

const ExperianceItem: React.FC<ExperianceItemProps> = ({ experiance, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    const toggleDescription = () => {
        setIsOpen(!isOpen);
        if (contentRef.current) {
            setHeight(isOpen ? 0 : contentRef.current.scrollHeight);
        }
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [isOpen]);

    return (
        <div className="mb-4">
            {/* Используем универсальный компонент кнопки */}
            <ToggleButton
                label={Array.isArray(experiance) ? experiance.join(', ') : experiance}
                isOpen={isOpen}
                onClick={toggleDescription}
            />

            {/* Контент с раскрытием */}
            <div
                ref={contentRef}
                style={{ height: isOpen ? `${height}px` : '0px' }}
                className="overflow-hidden transition-all duration-500 ease-in-out"
            >
                <ul className="text-gray-600 mt-2 space-y-1">
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperianceItem;