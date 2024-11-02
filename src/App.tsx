import React, { useState, useEffect, useRef } from 'react';
import Header from './components/header/Header';
import AboutSection from './components/aboutSection/AboutSection';
import ResumeSection from './components/resumeSection/ResumeSection';
import CalculatorModal from './components/calculator/CalculatorModal';
import Footer from './components/footer/Footer';
import FallenHearts from './components/fallenHearts/FallenHearts';
import ChatBot from './components/chatBot/ChatBot';
import ChatButton from './components/chatButton/ChatButton';
import BackgroundImage from './components/img/BackgroundImage'; 

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const footerRef = useRef<HTMLDivElement | null>(null);

  // Добавляем состояние для хранения размеров окна
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Обработчик изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

    <div className="relative min-h-screen flex flex-col overflow-hidden">


      <BackgroundImage />


      <div className="absolute inset-0 z-10">
        <FallenHearts footerRef={footerRef} windowSize={windowSize} />
      </div>


      <div className="relative min-h-screen flex flex-col items-center z-20">
        <Header windowSize={windowSize} />

        {/* Отступ с плавным переходом между Header и AboutSection */}
        <div className="h-[30px] sm:h-[20px] lg:h-[10px] transition-all duration-500"></div>

        <AboutSection  />

        {/* Отступ с плавным переходом между AboutSection и ResumeSection */}
        <div className="h-[30px] sm:h-[20px] lg:h-[10px] transition-all duration-500"></div>

        <ResumeSection  />
        <CalculatorModal />

        {/* Отступ между ResumeSection и Footer с гибким ростом и плавным переходом */}
        <div className="h-[30px] sm:h-[20px] lg:h-[10px] flex-grow transition-all duration-500"></div>

        <Footer ref={footerRef} windowSize={windowSize} />
        <ChatButton onClick={toggleChat} isChatOpen={isChatOpen} />
        {isChatOpen && <ChatBot />}
      </div>
    </div>
  );
};

export default App;