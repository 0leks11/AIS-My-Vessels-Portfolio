// src/components/Header/ChatMeButton.tsx
import React from 'react';
import {ChatBubbleLeftIcon} from '@heroicons/react/24/outline';

interface ButtonProps {
  className?: string;
}

const ChatMeButton: React.FC<ButtonProps> = ({ className = "" }) => (
  <a
    href="#chat"
    className={`flex items-center gap-2 px-4 py-2 text-gray-300 font-semibold hover:text-blue-400 transition transform hover:scale-105 ${className}`}
    aria-label="Chat"
  >
    <ChatBubbleLeftIcon className="w-6 h-6" />
    <span>Chat</span>
  </a>
);

export default ChatMeButton;