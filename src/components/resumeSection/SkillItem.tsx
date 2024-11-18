import React, { useState, useRef, useEffect } from 'react';
import ToggleButton from './ToggleButton';
interface SkillItemProps {
    skill: string;
    description: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, description }) => {
    const [isOpen, setIsOpen] = useState(false); // Состояние открытия секции
    const [height, setHeight] = useState(0); // Хранение высоты секции
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleDescription = () => {
        if (contentRef.current) {
            setHeight(isOpen ? 0 : contentRef.current.scrollHeight); // Установка высоты
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight); // Автоматически подстраивает высоту при открытии
        }
    }, [isOpen]);

    return (
        <div className="mb-4">
            {/* Используем универсальный компонент кнопки */}
            <ToggleButton label={skill} isOpen={isOpen} onClick={toggleDescription} />


            {/* Раскрывающееся описание с анимацией */}
            <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ height: `${height}px` }} // Устанавливаем высоту динамически
                ref={contentRef}
            >
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default SkillItem;