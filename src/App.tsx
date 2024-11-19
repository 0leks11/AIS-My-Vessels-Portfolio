import React, { useState, useEffect, useRef } from 'react';
import Header from './components/header/Header';
import AboutSection from './components/aboutSection/AboutSection';
import ResumeSection from './components/resumeSection/ResumeSection';
import RepositorySection from './components/repositorySection/RepositorySection';
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
        <div className="h-[70px] sm:h-[50px] lg:h-[80px] transition-all duration-500"></div>

        
        {/* Main container for AboutSection and ResumeSection with 8px margin */}
        <div className="container m-2">
          <AboutSection />
          {/* Spacer between AboutSection and ResumeSection */}
          <div className="h-[20px] sm:h-[10px] lg:h-[30px] transition-all duration-500"></div>
          <ResumeSection />
          <div className="h-[20px] sm:h-[10px] lg:h-[30px] transition-all duration-500"></div>
          <RepositorySection />
        </div>

        <CalculatorModal />

        {/* Отступ между ResumeSection и Footer с гибким ростом и плавным переходом */}
        <div className="h-[20px] sm:h-[10px] lg:h-[30px] flex-grow transition-all duration-500"></div>

        <Footer ref={footerRef} windowSize={windowSize} />
      </div>
      <div className="absolute inset-30 z-40">
      {isChatOpen && <ChatBot />}
      </div>
      <div className="absolute bottom-5 right-5 z-50">
      <ChatButton onClick={toggleChat} isChatOpen={isChatOpen} />
      </div>
    </div>
  );
};

export default App;