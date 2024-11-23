// src/components/repositorySection/FileContent.tsx
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { getLanguageClass } from '../../utils/getLanguageClass';
import { useFileContent } from '../../hooks/useFileContent';

interface FileContentProps {
  currentFileName: string; // Имя текущего файла (путь к файлу)
}

const FileContent: React.FC<FileContentProps> = ({ currentFileName }) => {
  const { fileContent, loadingFileContent, errorFileContent } = useFileContent(currentFileName);
  const codeRef = useRef<HTMLElement>(null);

  // Подсветка синтаксиса после загрузки содержимого
  useEffect(() => {
    if (fileContent && codeRef.current) {
      hljs.highlightElement(codeRef.current); // Подсвечиваем содержимое
    }
  }, [fileContent]);

  return (
    <div className="my-0">
      {/* Заголовок с именем файла */}
      <h3 className="Box border-slate-200 bg-white text-base font-semibold p-2 mb-1">
        {currentFileName}
      </h3>

      {/* Контейнер с содержимым файла */}
      <div className="Box border border-slate-200 rounded-md bg-white">
        {loadingFileContent ? (
          // Индикатор загрузки
          <div className="p-3 text-center text-gray-500">Загрузка файла...</div>
        ) : errorFileContent ? (
          // Сообщение об ошибке
          <div className="p-2 text-center text-red-500">{errorFileContent}</div>
        ) : fileContent ? (
          // Содержимое файла
          <pre className="p-2 overflow-x-auto text-sm">
            <code ref={codeRef} className={getLanguageClass(currentFileName)}>
              {fileContent}
            </code>
          </pre>
        ) : null}
      </div>
    </div>
  );
};

export default FileContent;