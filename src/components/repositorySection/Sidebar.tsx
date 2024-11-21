//src/components/RepositorySection/Sidebar.tsx
import React from 'react';
import { TreeNode } from '../../types/githubTypes';
import TreeNodeItem from './TreeNodeItem';

interface SidebarProps {
  treeData: TreeNode[];
  onSelectFile: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ treeData, onSelectFile }) => {
  return (
    <div className="Box border-slate-300 bg-slate-200 overflow-y-auto" style={{ height: '100%' }}>
      <ul className="list-none p-2">
        {treeData.map((node) => (
          <TreeNodeItem key={node.path} node={node} onSelectFile={onSelectFile} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;