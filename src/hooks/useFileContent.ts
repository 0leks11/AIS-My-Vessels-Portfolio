// src/hooks/useFileContent.ts
import { useState, useEffect } from "react";
import { useLoadingError } from "./useLoadingError";

const OWNER = "0leks11";
const REPO = "ai-chatbot";
const BRANCH = "main";

export const useFileContent = (filePath: string) => {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const {
    loading: loadingFileContent,
    error: errorFileContent,
    execute,
  } = useLoadingError<string>();

  useEffect(() => {
    let isMounted = true;

    const loadFileContent = async () => {
      const data = await execute(async () => {
        const response = await fetch(
          `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${filePath}`
        );
        if (!response.ok) {
          throw new Error("Ошибка при загрузке файла");
        }
        return await response.text();
      });

      if (isMounted && data) {
        setFileContent(data);
      }
    };

    loadFileContent();

    return () => {
      isMounted = false;
    };
  }, [filePath, execute]);

  return { fileContent, loadingFileContent, errorFileContent };
};
