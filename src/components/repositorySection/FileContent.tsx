import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { getLanguageClass } from '../../utils/getLanguageClass';
import { useRepositoryContents } from '../../hooks/useRepositoryContents';
import { RepositoryFile } from '../../types/githubTypes';

interface FileContentProps {
  currentFileName: string; // Имя текущего файла
}

const FileContent: React.FC<FileContentProps> = ({ currentFileName }) => {
  // Используем хук для загрузки содержимого файла
  const { content, isLoading, error } = useRepositoryContents(currentFileName);
  const codeRef = useRef<HTMLElement>(null);

  // Подсветка синтаксиса после загрузки содержимого
  useEffect(() => {
    if (content && codeRef.current) {
      hljs.highlightElement(codeRef.current); // Подсвечиваем содержимое
    }
  }, [content]);

  return (
    <div className="my-4">
      {/* Заголовок с именем файла */}
      <h3 className="Box border-slate-200 bg-white text-base font-semibold p-2 mb-1">
        {currentFileName}
      </h3>

      {/* Контейнер с содержимым файла */}
      <div className="Box border border-slate-200 rounded-md bg-white">
        {isLoading ? (
          // Индикатор загрузки
          <div className="p-4 text-center text-gray-500">Загрузка файла...</div>
        ) : error ? (
          // Сообщение об ошибке
          <div className="p-4 text-center text-red-500">Ошибка загрузки файла</div>
        ) : (
          // Содержимое файла
          <pre className="p-4 overflow-x-auto text-sm">
            <code ref={codeRef} className={getLanguageClass(currentFileName)}>
              {content}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default FileContent;