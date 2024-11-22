// src/hooks/useRepositoryTree.ts
import { useState, useEffect } from 'react';
import { useLoadingError } from './useLoadingError';

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
  const { loading, error, execute } = useLoadingError<TreeResponse>();

  useEffect(() => {
    const fetchRepositoryTree = async () => {
      const data = await execute(async () => {
        const response = await fetch(
          `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`
        );
        if (!response.ok) {
          throw new Error('Ошибка при загрузке дерева репозитория');
        }
        return response.json();
      });
      if (data) {
        setTreeData(data.tree);
      }
    };

    fetchRepositoryTree();
  }, [execute]);

  return { treeData, loading, error };
};