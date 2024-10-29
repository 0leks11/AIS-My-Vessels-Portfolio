This project is an interactive website featuring a real-time chatbot, built using a stack of JavaScript/TypeScript, Python, and PostgreSQL. The chatbot fetches responses from a database and generates answers with OpenAI’s API when necessary.

Key Features

	1.	Frontend: Initially developed in JavaScript with CSS, the frontend has been migrated to TypeScript with TailwindCSS for styling and responsiveness.
	2.	Backend: The backend, written in Python, uses PostgreSQL to manage data storage. It processes user queries, searches for answers within the database, and interacts with OpenAI’s API when additional information is required.
	3.	Interactive Animation: Visual effects, like falling pixelated hearts, are rendered with Matter.js, adding an interactive experience to the site.
	4.	Real-Time Chatbot: The chatbot leverages OpenAI and database data to provide responses, enhancing the site with AI-powered interactions.

Project Structure

my-website/
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── backend
│   │   ├── chatbot
│   │   │   ├── chat
│   │   │   ├── chatbot
│   │   │   ├── manage.py
│   │   │   └── venv/
│   ├── components
│   │   ├── AboutSection.tsx
│   │   ├── CalculatorModal.tsx
│   │   ├── FallenHearts.tsx
│   │   ├── Footer.tsx
│   │   ├── ResumeSection.tsx
│   │   ├── SocialIcons.tsx
│   │   └── img/
│   │       ├── myphoto.jpeg
│   │       └── photo1.jpeg
│   ├── header
│   │   ├── AboutButton.tsx
│   │   ├── ChatMeButton.tsx
│   │   ├── ContactButton.tsx
│   │   ├── Header.tsx
│   │   └── ProjectsButton.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── tailwind.config.js
└── tsconfig.json


Technology Stack

	•	TypeScript: For robust and maintainable code.
	•	TailwindCSS: For responsive styling.
	•	Matter.js: Handles visual physics-based animations (e.g., falling hearts).
	•	PostgreSQL: Database for storing chatbot response data.
	•	OpenAI API: AI-based responses for the chatbot in real-time.

This project is designed as an interactive website with an AI-powered chatbot, capable of providing real-time, database-informed responses.
