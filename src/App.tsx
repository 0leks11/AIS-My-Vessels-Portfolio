import React, { useState } from 'react';
import Header from './header/Header';
import ChatMeButton from './header/ChatMeButton';
import ContactButton from './header/ContactButton';
import ProjectsButton from './header/ProjectsButton';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import CalculatorModal from './components/CalculatorModal';
import Footer from './components/Footer';
import FallenHearts from './components/FallenHearts';
import ChatBot from './components/ChatBot';
import ChatButton from './components/ChatButton';
import AboutButton from './header/AboutButton';

// Объявляем типы для пропсов
const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <Header />
      <AboutSection />
      <AboutButton />
      <ChatMeButton />
      <ContactButton />
      <ProjectsButton />
      <FallenHearts />
      <AboutSection />
      <ResumeSection />
      <CalculatorModal />
      <Footer />
      {/* Кнопка открытия/закрытия чата */}
      <ChatButton onClick={toggleChat} isChatOpen={isChatOpen} />
      {/* Отображаем чат, только если он открыт */}
      {isChatOpen && <ChatBot />}
    </div>
  );
};

export default App;