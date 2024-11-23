// src/components/repositorySection/RepositorySection.tsx
import React from 'react';
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
  const [currentFileName, setCurrentFileName] = React.useState<string>('README.md');

  const handleSelectFile = (path: string) => {
    setCurrentFileName(path);
  };

  const tree = React.useMemo(() => constructTree(treeData), [treeData]);

  return (
    <section
      className={`repository-section min-w-[320px] max-w-4xl mx-auto p-3 md:p-6 bg-slate-100 rounded-lg shadow-md ${className}`}
    >
      {userProfile && (
        <div className="mr-2">
          <UserProfile userProfile={userProfile} />
        </div>
      )}
      <div className="flex">
        {!loading && (
          <div
            className="w-1/5 bg-slate-100 border-r border-gray-300 mt-1"
            style={{ height: 'calc(100vh - 100px)' }}
          >
            <Sidebar treeData={tree} onSelectFile={handleSelectFile} />
          </div>
        )}
        <div className="w-4/5 p-2">
          {currentFileName ? (
            <FileContent currentFileName={currentFileName} />
          ) : (
            <p>Выберите файл в боковой панели для просмотра содержимого.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default RepositorySection;