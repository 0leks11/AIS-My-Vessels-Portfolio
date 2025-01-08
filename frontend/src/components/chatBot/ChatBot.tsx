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
        setMessages([...newMessages, { sender: 'bot', text: 'Sorry, I couldn’t find an answer to your question. Please clarify it.' }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, { sender: 'bot', text: 'An error occurred. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }

    setUserQuestion('');
  };

  return (
    <div className="fixed bottom-5 right-5 w-[90vw] max-w-md max-h-[80vh] bg-[rgba(245,245,245,0.85)] border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col z-50 md:w-[70%] lg:w-96 lg:h-[500px] lg:bottom-10 lg:right-10">
      <div className="flex-1 p-2 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`p-3 rounded-md ${msg.sender === 'user' ? 'bg-blue-100 text-left' : 'bg-gray-200 text-left'}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && <div className="text-sm text-gray-500 text-center p-2">Typing…</div>}
      </div>
      <div className="flex items-center p-2 border-t border-gray-300 bg-gray-100">
        <input
          type="text"
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          placeholder="Ask your question…"
          className="flex-1 px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-1 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Sendggggg
        </button>
      </div>
    </div>
  );
};

export default ChatBot;