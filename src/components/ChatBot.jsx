import React, { useState } from 'react';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [userQuestion, setUserQuestion] = useState('');

  const sendMessage = async () => {
    if (userQuestion.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: userQuestion }];
    setMessages(newMessages);

    try {
      const response = await fetch('http://localhost:8000/api/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userQuestion }),
      });
      const data = await response.json();
      setMessages([...newMessages, { sender: 'bot', text: data.answer }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, { sender: 'bot', text: 'Произошла ошибка. Попробуйте снова позже.' }]);
    }

    setUserQuestion('');
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'message user' : 'message bot'}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          placeholder="Задайте свой вопрос..."
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default ChatBot;