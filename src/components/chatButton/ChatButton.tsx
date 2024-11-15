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
        ${isChatOpen ? 'w-14 h-14' : 'w-16 h-16'}
        rounded-full 
        bg-blue-500 text-white 
        flex items-center justify-center 
        transition transform duration-300 
        hover:scale-110 
        z-50
        text-xl
      `}
    >
      {isChatOpen ? '✕' : 'Chat me'}
    </button>
  );
};

export default ChatButton;