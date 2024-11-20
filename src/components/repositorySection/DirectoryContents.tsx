//src/components/RepositorySection/DirectoryContents.tsx
import React from 'react';
import { GitHubContent } from '../../types/githubTypes';
import { FileIcon, FileDirectoryIcon } from '@primer/octicons-react';

interface DirectoryContentsProps {
  contents: GitHubContent[];
  handleNavigate: (item: GitHubContent) => void;
}

const DirectoryContents: React.FC<DirectoryContentsProps> = ({ contents, handleNavigate }) => {
  return (
    <ul className="Box border-slate-200 list-style-none">
      {contents.map((item) => (
        <li
          key={item.sha}
          className="Box-row border-slate-200 d-flex flex-items-center"
          onClick={() => handleNavigate(item)}
          style={{ cursor: 'pointer' }}
        >
          <span className="mr-2">
            {item.type === 'dir' ? <FileDirectoryIcon /> : <FileIcon />}
          </span>
          <span className="Link--primary text-bold">{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default DirectoryContents;