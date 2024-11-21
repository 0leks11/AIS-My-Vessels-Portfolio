// src/components/repositorySection/RepositorySection.tsx
import React from 'react';
import RepositoryHeader from './RepositoryHeader';
import UserProfile from './UserProfile';
import Sidebar from './Sidebar';
import FileContent from './FileContent';
import { useRepositoryTree } from '../../hooks/useRepositoryTree';
import { useUserProfile } from '../../hooks/useUserProfile';
import 'tailwindcss/tailwind.css';
import '@primer/css/dist/primer.css';

import { constructTree } from '../../utils/constructTree';
interface RepositorySectionProps {
    className?: string;
}

const RepositorySection: React.FC<RepositorySectionProps> = ({ className }) => {
  const { treeData, loading } = useRepositoryTree();
  const userProfile = useUserProfile();
  const [fileContent, setFileContent] = React.useState<string | null>(null);
  const [currentFileName, setCurrentFileName] = React.useState<string>('');

  const handleSelectFile = async (path: string) => {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/0leks11/ai-chatbot/main/${path}`
      );
      if (!response.ok) {
        throw new Error('Ошибка при загрузке файла');
      }
      const text = await response.text();
      setFileContent(text);
      setCurrentFileName(path);
    } catch (error) {
      console.error(error);
    }
  };

  const tree = React.useMemo(() => constructTree(treeData), [treeData]);

  return (
    <section className={`reposytory-section min-w-[320px] max-w-4xl mx-auto p-3 md:p-6 bg-slate-100 rounded-lg shadow-md ${className}`}>
      {/* Верхняя часть с аватаром и информацией о репозитории */}
        {userProfile &&(
            <div className="mr-2">
                <UserProfile userProfile={userProfile} />
            </div>
        )}
      {/* Основной контент */}
      <div className="flex">
        {/* Боковая панель */}
        {!loading && (
          <div className="w-1/5 bg-slate-100 border-r border-gray-300 mt-2" style={{ height: 'calc(100vh - 100px)' }}>
            <Sidebar treeData={tree} onSelectFile={handleSelectFile} />
          </div>
        )}

        {/* Область просмотра файла */}
        <div className="w-4/5 p-2">
          
          

          {/* Содержимое файла или приветственное сообщение */}
          {fileContent ? (
            <FileContent fileContent={fileContent} currentFileName={currentFileName} />
          ) : (
            <p>Выберите файл в боковой панели для просмотра содержимого.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default RepositorySection;