// src/hooks/useRepositoryContents.ts
import { useState, useEffect, useCallback } from 'react';
import { GitHubContent } from '../types/githubTypes';

const OWNER = '0leks11';
const REPO = 'ai-chatbot';
const BRANCH = 'main';

export const useRepositoryContents = () => {
  const [contents, setContents] = useState<GitHubContent[]>([]);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [currentFileName, setCurrentFileName] = useState<string>('');
  const [pathStack, setPathStack] = useState<string[]>(['']);

  const fetchRepoContent = useCallback(async (path: string): Promise<GitHubContent[]> => {
    const response = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`
    );
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных');
    }
    const data = await response.json();
    return data;
  }, []);

  const loadDirectoryContents = useCallback(
    async (path: string) => {
      try {
        const data = await fetchRepoContent(path);
        setContents(data);
        setFileContent(null);
      } catch (error) {
        console.error(error);
      }
    },
    [fetchRepoContent]
  );

  const loadFileContent = useCallback(async (file: GitHubContent) => {
    try {
      const response = await fetch(file.download_url);
      const text = await response.text();
      setFileContent(text);
      setCurrentFileName(file.name);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleNavigate = useCallback(
    (item: GitHubContent) => {
      if (item.type === 'dir') {
        setPathStack((prev) => [...prev, item.path]);
      } else if (item.type === 'file') {
        loadFileContent(item);
      }
    },
    [loadFileContent]
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
    fileContent,
    currentFileName,
    pathStack,
    handleNavigate,
    handleBack,
  };
};