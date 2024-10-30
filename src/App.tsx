import React, { useState } from 'react';
import Header from './components/header/Header';
import AboutSection from './components/aboutSection/AboutSection';
import ResumeSection from './components/resumeSection/ResumeSection';
import CalculatorModal from './components/calculator/CalculatorModal';
import Footer from './components/footer/Footer';
import FallenHearts from './components/fallenHearts/FallenHearts';
import ChatBot from './components/chatBot/ChatBot';
import ChatButton from './components/chatButton/ChatButton';


// Объявляем типы для пропсов
const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <FallenHearts />
      <Header />
      <AboutSection />
      <ResumeSection />
      <CalculatorModal />
      <Footer />
      <ChatButton onClick={toggleChat} isChatOpen={isChatOpen} />
      {isChatOpen && <ChatBot />}
    </div>
  );
};

export default App;