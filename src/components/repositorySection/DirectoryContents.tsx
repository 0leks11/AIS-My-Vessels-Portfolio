//src/components/RepositorySection/DirectoryContents.tsx
import React from 'react';
import { GitHubContent } from '../../types/githubTypes';

interface DirectoryContentsProps {
  contents: GitHubContent[];
  handleNavigate: (item: GitHubContent) => void;
}

const DirectoryContents: React.FC<DirectoryContentsProps> = ({ contents, handleNavigate }) => {
  return (
    <div className="repository-content">
      {contents.map((item) => (
        <div
          key={item.sha}
          className="flex items-center py-2 cursor-pointer hover:bg-gray-100"
          onClick={() => handleNavigate(item)}
        >
          <span className="mr-2">{item.type === 'dir' ? '📁' : '📄'}</span>
          <span className="text-blue-700">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default DirectoryContents;