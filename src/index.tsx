import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Получаем корневой элемент из HTML-документа, куда будет монтироваться приложение
const rootElement = document.getElementById('root');

// Проверяем, что корневой элемент существует
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

// Запуск функции для анализа производительности (по желанию)
reportWebVitals();