// src/components/repositorySection/RepositorySection.tsx
import React from 'react';
import RepositoryHeader from './RepositoryHeader';
import UserProfile from './UserProfile';
import CommitsList from './CommitsList';
import Navigation from './Navigation';
import DirectoryContents from './DirectoryContents';
import FileContent from './FileContent';
import { useRepositoryContents } from '../../hooks/useRepositoryContents';
import { useUserProfile } from '../../hooks/useUserProfile';
import { useCommits } from '../../hooks/useCommits';
import 'tailwindcss/tailwind.css';

const RepositorySection: React.FC = () => {
  const {
    contents,
    fileContent,
    currentFileName,
    pathStack,
    handleNavigate,
    handleBack,
  } = useRepositoryContents();
  const userProfile = useUserProfile();
  const commits = useCommits();

  return (
    <section className="repository-section-wrapper min-w-[320px] max-w-7xl mx-auto p-3 md:p-6 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md">
      {/* Заголовок секции */}
      <RepositoryHeader />

      {/* Основной контент */}
      <div className="flex">
        {/* Боковая панель (если нужна, можно добавить компонент Sidebar) */}
        {/* Основная область контента */}
        <div className="w-full">
          {/* Информация о профиле пользователя */}
          {userProfile && <UserProfile userProfile={userProfile} />}

          {/* Последние коммиты */}
          {commits.length > 0 && <CommitsList commits={commits} />}

          {/* Навигация */}
          <Navigation pathStack={pathStack} handleBack={handleBack} />

          {/* Содержимое директории или файла */}
          {!fileContent ? (
            <DirectoryContents contents={contents} handleNavigate={handleNavigate} />
          ) : (
            <FileContent fileContent={fileContent} currentFileName={currentFileName} />
          )}
        </div>
      </div>
    </section>
  );
};

export default RepositorySection;