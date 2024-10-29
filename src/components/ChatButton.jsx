// ChatButton.jsx
import React from 'react';
import './ChatButton.css';

function ChatButton({ onClick, isChatOpen }) {
  return (
    <div className="chat-button-container">
      <button onClick={onClick} className="chat-button">
        {isChatOpen ? '✕' : 'Chat me'}
      </button>
    </div>
  );
}

export default ChatButton;