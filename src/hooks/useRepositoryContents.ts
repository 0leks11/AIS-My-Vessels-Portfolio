// src/hooks/useRepositoryContents.ts
import { useState, useEffect, useCallback } from 'react';
import { GitHubContent } from '../types/githubTypes';
import { useLoadingError } from './useLoadingError';

const OWNER = '0leks11';
const REPO = 'ai-chatbot';
const BRANCH = 'main';

export const useRepositoryContents = () => {
  const [contents, setContents] = useState<GitHubContent[]>([]);
  const [pathStack, setPathStack] = useState<string[]>(['']);

  const {
    loading: loadingDirectoryContents,
    error: errorDirectoryContents,
    execute: executeFetchContents,
  } = useLoadingError<GitHubContent[]>();

  const fetchRepoContents = useCallback(
    async (path: string): Promise<GitHubContent[]> => {
      const response = await fetch(
        `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`
      );
      if (!response.ok) {
        throw new Error('Ошибка при загрузке содержимого директории');
      }
      return await response.json();
    },
    []
  );

  const loadDirectoryContents = useCallback(
    async (path: string) => {
      const data = await executeFetchContents(() => fetchRepoContents(path));
      if (data) {
        setContents(data);
      }
    },
    [executeFetchContents, fetchRepoContents]
  );

  const handleNavigate = useCallback(
    (item: GitHubContent) => {
      if (item.type === 'dir') {
        setPathStack((prev) => [...prev, item.path]);
      }
    },
    []
  );

  const handleBack = useCallback(() => {
    setPathStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }, []);

  useEffect(() => {
    const currentPath = pathStack[pathStack.length - 1];
    loadDirectoryContents(currentPath);
  }, [pathStack, loadDirectoryContents]);

  return {
    contents,
    pathStack,
    handleNavigate,
    handleBack,
    loadingDirectoryContents,
    errorDirectoryContents,
  };
};