// src/hooks/useRepositoryTree.ts
import { useState, useEffect } from 'react';

interface TreeItem {
  path: string;
  mode: string;
  type: 'blob' | 'tree';
  sha: string;
  url: string;
}

interface TreeResponse {
  sha: string;
  url: string;
  tree: TreeItem[];
  truncated: boolean;
}

const OWNER = '0leks11';
const REPO = 'ai-chatbot';
const BRANCH = 'main';

export const useRepositoryTree = () => {
  const [treeData, setTreeData] = useState<TreeItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepositoryTree = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`
        );
        if (!response.ok) {
          throw new Error('Ошибка при загрузке дерева репозитория');
        }
        const data: TreeResponse = await response.json();
        setTreeData(data.tree);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositoryTree();
  }, []);

  return { treeData, loading };
};