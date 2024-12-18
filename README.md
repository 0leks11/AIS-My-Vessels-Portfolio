This project is an interactive website featuring a real-time chatbot, built using a stack of JavaScript/TypeScript, Python, and PostgreSQL. The chatbot fetches responses from a database and generates answers with OpenAI’s API when necessary.

Key Features

    1.	Frontend: Initially developed in JavaScript with CSS, the frontend has been migrated to TypeScript with TailwindCSS for styling and responsiveness.
    2.	Backend: The backend, written in Python, uses PostgreSQL to manage data storage. It processes user queries, searches for answers within the database, and interacts with OpenAI’s API when additional information is required.
    3.	Interactive Animation: Visual effects, like falling pixelated hearts, are rendered with Matter.js, adding an interactive experience to the site.
    4.	Real-Time Chatbot: The chatbot leverages OpenAI and database data to provide responses, enhancing the site with AI-powered interactions.

Project Structure

```
my-website/
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
├── server
│   ├── database.js
│   ├── db.sqlite
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── backend
│   │   ├── chatbot
│   │   │   ├── chat
│   │   │   ├── chatbot
│   │   │   ├── manage.py
│   │   │   ├── requirements.txt
│   │   │   └── venv
│   │   └── venv
│   │       ├── bin
│   │       ├── include
│   │       ├── lib
│   │       └── pyvenv.cfg
│   ├── components
│   │   ├── aboutSection
│   │   │   ├── AboutButtons.tsx
│   │   │   ├── AboutNameplate.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── AboutText.tsx
│   │   │   ├── ProfileAvatarL.tsx
│   │   │   └── ProfileAvatarS.tsx
│   │   ├── calculator
│   │   │   └── CalculatorModal.tsx
│   │   ├── chatBot
│   │   │   └── ChatBot.tsx
│   │   ├── chatButton
│   │   │   └── ChatButton.tsx
│   │   ├── fallenHearts
│   │   │   └── FallenHearts.tsx
│   │   ├── footer
│   │   │   ├── Footer.tsx
│   │   │   └── IconCard.tsx
│   │   ├── gallerySection
│   │   │   ├── FormattedDate.tsx
│   │   │   ├── GalleryCarousel.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── NavigationalStatus.tsx
│   │   │   ├── RefreshableGallerySection.tsx
│   │   │   ├── TimeAgo.tsx
│   │   │   └── VesselCard.tsx
│   │   ├── header
│   │   │   ├── AboutButton.tsx
│   │   │   ├── ChatMeButton.tsx
│   │   │   ├── ContactButton.tsx
│   │   │   ├── Header.tsx
│   │   │   └── ProjectsButton.tsx
│   │   ├── img
│   │   │   ├── BackgroundImage.tsx
│   │   │   ├── GalerySectionVessels
│   │   │   │   ├── VesselAntares.tsx
│   │   │   │   ├── VesselApolon.tsx
│   │   │   │   ├── VesselHector.tsx
│   │   │   │   ├── VesselIolaos.tsx
│   │   │   │   ├── VesselMilady.tsx
│   │   │   │   ├── VesselOrpheus.tsx
│   │   │   │   ├── VesselPatroklos.tsx
│   │   │   │   ├── VesselgslVioletta.tsx
│   │   │   │   ├── VesselmaerskBenguella.tsx
│   │   │   │   ├── VesselmaerskVigo.tsx
│   │   │   │   ├── VesselsafinPrize.tsx
│   │   │   │   ├── antares.jpeg
│   │   │   │   ├── apolon.jpeg
│   │   │   │   ├── gslVioletta.jpeg
│   │   │   │   ├── hector.jpeg
│   │   │   │   ├── iolaos.jpeg
│   │   │   │   ├── maerskBenguella.jpeg
│   │   │   │   ├── maerskVigo.jpeg
│   │   │   │   ├── milady.jpeg
│   │   │   │   ├── orpheus.jpeg
│   │   │   │   ├── patroklos.jpeg
│   │   │   │   └── safinPrize.jpeg
│   │   │   ├── horizontal.jpeg
│   │   │   ├── myphotoL.jpeg
│   │   │   ├── myphotoS.jpeg
│   │   │   └── vertical.jpeg
│   │   ├── repositorySection
│   │   │   ├── CommitsList.tsx
│   │   │   ├── DirectoryContents.tsx
│   │   │   ├── FileContent.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── RepositorySection.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── TreeNodeItem.tsx
│   │   │   └── UserProfile.tsx
│   │   └── resumeSection
│   │       ├── Arrow.tsx
│   │       ├── Collapsible.tsx
│   │       ├── ExperienceItem.tsx
│   │       ├── ResumeSection.tsx
│   │       └── SkillItem.tsx
│   ├── context
│   │   └── WebSocketContext.tsx
│   ├── data
│   │   ├── footerList.ts
│   │   └── vesselList.ts
│   ├── declarations.d.ts
│   ├── hooks
│   │   ├── useCommits.ts
│   │   ├── useFileContent.ts
│   │   ├── useLoadingError.ts
│   │   ├── useRepositoryContents.ts
│   │   ├── useRepositoryTree.ts
│   │   ├── useUserProfile.ts
│   │   ├── useVesselDB.ts
│   │   └── useVesselData.ts
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-world-flags.d.ts
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── types
│   │   ├── aisMessageTypes.ts
│   │   ├── githubTypes.ts
│   │   └── vesselTypes.ts
│   └── utils
│       ├── constructTree.ts
│       └── getLanguageClass.ts
├── tailwind.config.js
└── tsconfig.json

```

Technology Stack

    •	TypeScript: For robust and maintainable code.
    •	TailwindCSS: For responsive styling.
    •	Matter.js: Handles visual physics-based animations (e.g., falling hearts).
    •	PostgreSQL: Database for storing chatbot response data.
    •	OpenAI API: AI-based responses for the chatbot in real-time.

This project is designed as an interactive website with an AI-powered chatbot, capable of providing real-time, database-informed responses.
