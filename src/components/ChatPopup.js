import React, { useState } from 'react';
import './ChatPopup.css';

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Кнопка открытия чата */}
      <button className="chat-btn" onClick={toggleChat}>
        {isOpen ? 'Закрыть чат' : 'Открыть чат'}
      </button>

      {/* Само окно чата */}
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h2>Привет, я Алексей!</h2>
            <button className="close-btn" onClick={toggleChat}>
              ×
            </button>
          </div>
          <div className="chat-body">
            <p>Какой у вас вопрос?</p>
            {/* Здесь позже будет интеграция с ChatGPT */}
          </div>
          <div className="chat-footer">
            <button className="predefined-option">Вопрос 1</button>
            <button className="predefined-option">Вопрос 2</button>
            <button className="predefined-option">Вопрос 3</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;