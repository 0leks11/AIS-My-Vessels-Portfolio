import React from 'react';
import backgroundImage from './photo1.jpeg';

const BackgroundImage: React.FC = () => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    />
  );
};

export default BackgroundImage;