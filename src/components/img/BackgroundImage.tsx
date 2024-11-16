import React, { useEffect, useState } from 'react';
import horizontalImage from './horizontal.jpeg';
import verticalImage from './vertical.jpeg';

const BackgroundImage: React.FC = () => {
  const [bgHeight, setBgHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setBgHeight(window.innerHeight); // Высота экрана для фиксации высоты фона
    setIsMobile(window.innerWidth <= 768); // Проверка мобильного устройства
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full bg-cover bg-center"
      style={{
        height: `${bgHeight}px`, // Высота равна высоте окна
        backgroundImage: `url(${isMobile ? verticalImage : horizontalImage})`,
      }}
    />
  );
};

export default BackgroundImage;