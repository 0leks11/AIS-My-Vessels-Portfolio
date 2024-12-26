import React, { useState, useEffect, useRef, Component } from "react";
import Header from "./components/header/Header";
import AboutSection from "./components/aboutSection/AboutSection";
import ResumeSection from "./components/resumeSection/ResumeSection";
import RepositorySection from "./components/repositorySection/RepositorySection";
import GallerySection from "./components/gallerySection/GallerySection";
import CalculatorModal from "./components/calculator/CalculatorModal";
import Footer from "./components/footer/Footer";
import FallenHearts from "./components/fallenHearts/FallenHearts";
import ChatBot from "./components/chatBot/ChatBot";
import ChatButton from "./components/chatButton/ChatButton";
import { WebSocketProvider } from "./context/WebSocketContext";
import WavingGrid from "./components/aboutSection/WavingGrid";

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-black flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-10">
        <WavingGrid />
      </div>
      <div className="relative min-h-screen flex flex-col items-center z-20">
        <Header windowSize={windowSize} />
        <div className="h-[100px] sm:h-[90px] lg:h-[110px] transition-all duration-500"></div>
        <CalculatorModal />
        <div className="container m-2">
          <AboutSection />
          <div className="h-[20px] sm:h-[10px] lg:h-[30px] transition-all duration-500"></div>
          <ResumeSection />
          <div className="h-[20px] sm:h-[10px] lg:h-[30px] transition-all duration-500"></div>
          <WebSocketProvider>
            <div className="App">
              <GallerySection />
            </div>
          </WebSocketProvider>
          <div className="h-[20px] sm:h-[10px] lg:h-[30px] transition-all duration-500"></div>
          <RepositorySection />
        </div>
        <div className="h-[20px] sm:h-[10px] lg:h-[30px] transition-all duration-500"></div>
        <Footer ref={footerRef} windowSize={windowSize} />
      </div>
      <div className="absolute inset-30 z-40">{isChatOpen && <ChatBot />}</div>
      <div className="absolute bottom-5 right-5 z-50">
        <ChatButton onClick={toggleChat} isChatOpen={isChatOpen} />
      </div>
    </div>
  );
};

export default App;
