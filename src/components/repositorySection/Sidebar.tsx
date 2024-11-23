// src/components/repositorySection/Sidebar.tsx
import React, { useState } from 'react';
import { TreeNode } from '../../types/githubTypes';
import TreeNodeItem from './TreeNodeItem';

interface SidebarProps {
  treeData: TreeNode[];
  onSelectFile: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ treeData, onSelectFile }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (path: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(path)) {
        newSet.delete(path);
      } else {
        newSet.add(path);
      }
      return newSet;
    });
  };

  // Функция для фильтрации дерева по поисковому запросу
  const filterTree = (nodes: TreeNode[]): TreeNode[] => {
    return nodes
      .map((node) => {
        if (node.type === 'directory') {
          const filteredChildren = node.children ? filterTree(node.children) : [];
          if (
            filteredChildren.length > 0 ||
            node.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return { ...node, children: filteredChildren };
          }
        } else if (node.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return node;
        }
        return null;
      })
      .filter((node): node is TreeNode => node !== null);
  };

  // Получаем отфильтрованное дерево
  const filteredTreeData = searchTerm ? filterTree(treeData) : treeData;

  return (
    <div className="Box border-slate-300 bg-slate-200 overflow-y-auto" style={{ height: '100%' }}>
      {/* Поле поиска */}
      <div className="p-2">
        <input
          type="text"
          placeholder="Search file or folder..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-1 border border-gray-300 rounded"
        />
      </div>
      <ul className="list-none p-2">
        {filteredTreeData.map((node) => (
          <TreeNodeItem
            key={node.path}
            node={node}
            onSelectFile={onSelectFile}
            expandedNodes={expandedNodes}
            toggleNode={toggleNode}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;