// src/components/chatButton/ChatButton.tsx
import React from 'react';

interface ChatButtonProps {
  onClick: () => void;
  isChatOpen: boolean;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick, isChatOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`
        fixed 
        bottom-5 right-5 
        md:bottom-8 md:right-8 
        lg:bottom-10 lg:right-10 
        xl:bottom-12 xl:right-12
        w-12 h-12 
        sm:w-14 sm:h-14 
        md:w-16 md:h-16
        lg:w-18 lg:h-18 
        xl:w-18 xl:h-18
        rounded-full 
        bg-black bg-opacity-60 backdrop-blur-lg
        border border-white border-opacity-40 border-[2px]
        text-white 
        hover:bg-opacity-20 hover:bg-white hover:text-gray-800 
        flex items-center justify-center 
        transition duration-300 transform hover:scale-110 
        z-50
      `}
    >
      {isChatOpen ? '✕' : 'Chat'}
    </button>
  );
};

export default ChatButton;