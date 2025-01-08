import React from "react";

const AnimatedCard: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      {/* Внешний контейнер с анимированным градиентом */}
      <div className="relative w-80 h-80 rounded-lg overflow-hidden">
        {/* Вращающийся градиент */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#ff4545,_#006aff,_#00ff99,_#ff4545)] animate-spinGradient"></div>
        {/* Внутренний контент */}
        <div className="relative z-10 bg-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-bold text-center text-white">
            Animate Borders
          </h2>
          <p className="text-sm mt-4 text-center text-gray-300">
            This is a glowing border with a rotating gradient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
