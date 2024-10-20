// src/App.js
import React from 'react';
import './components/styles.css'; // Импортируем стили
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import CalculatorModal from './components/CalculatorModal';
import ChatPopup from './components/ChatPopup';
import Footer from './components/Footer';
import FallenHearts from './components/FallenHearts';
import ChatBot from './components/ChatBot';


const App = () => {
    return (
        <div>
            <Header />
            <FallenHearts />
            <AboutSection />
            <ResumeSection />
            <CalculatorModal />
            <ChatPopup />
            <Footer />
            <ChatBot />
        </div>
    );
};

export default App;