// src/components/AboutSection/AboutButtons.tsx
import React from 'react';

interface AboutButtonsProps {
    onLearnMore: () => void;
    onCalculateCost: () => void;
  }
  
  const AboutButtons: React.FC<AboutButtonsProps> = ({ onLearnMore, onCalculateCost }) => {
    return (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button onClick={onLearnMore} className="w-full px-4 py-2 bg-white bg-opacity-30 backdrop-blur-lg text-gray-800 rounded-lg hover:bg-opacity-50 hover:bg-black hover:text-white transition duration-300">
                Learn More
            </button>
            <button onClick={onCalculateCost} className="w-full px-4 py-2 bg-white bg-opacity-30 backdrop-blur-lg text-gray-800 rounded-lg hover:bg-opacity-50 hover:bg-black hover:text-white transition duration-300">
                Calculate Cost
            </button>
        </div>
    );
};

export default AboutButtons;