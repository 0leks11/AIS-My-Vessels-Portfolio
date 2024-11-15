import React, { useState } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userQuestion, setUserQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (userQuestion.trim() === '') return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: userQuestion }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userQuestion }),
      });
      const data = await response.json();

      if (data.answer) {
        setMessages([...newMessages, { sender: 'bot', text: data.answer }]);
      } else {
        setMessages([...newMessages, { sender: 'bot', text: 'Извините, я не смог найти ответ на ваш вопрос. Пожалуйста, уточните его.' }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, { sender: 'bot', text: 'Произошла ошибка. Попробуйте снова.' }]);
    } finally {
      setIsLoading(false);
    }

    setUserQuestion('');
  };

  return (
    <div className="fixed bottom-5 right-5 w-[90vw] max-w-md max-h-[80vh] bg-white bg-opacity-20 backdrop-blur-lg border border-gray-300 border-opacity-40 rounded-lg shadow-lg overflow-hidden flex flex-col z-50 md:w-[70%] lg:w-96 lg:h-[500px] lg:bottom-10 lg:right-10 border-[2px]">
      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`p-3 rounded-lg ${msg.sender === 'user' ? 'bg-gray-800 bg-opacity-30 text-right text-white' : 'bg-gray-200 bg-opacity-20 text-left text-gray-800'}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && <div className="text-sm text-gray-500 text-center p-2">Печатаю...</div>}
      </div>
      <div className="flex items-center p-4 border-t border-gray-300 border-opacity-40 bg-gray-800 bg-opacity-20 backdrop-blur-lg">
        <input
          type="text"
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          placeholder="Задайте свой вопрос..."
          className="flex-1 px-3 py-2 border border-gray-300 bg-white bg-opacity-20 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="ml-3 px-4 py-2 bg-gray-700 bg-opacity-30 text-white rounded-md hover:bg-opacity-50 transition backdrop-blur-lg border-[2px]"
        >
          send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;