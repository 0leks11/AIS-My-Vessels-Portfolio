//src/components/RepositorySection/FileContent.tsx
import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { getLanguageClass } from '../../utils/getLanguageClass';

interface FileContentProps {
  fileContent: string;
  currentFileName: string;
}

const FileContent: React.FC<FileContentProps> = ({ fileContent, currentFileName }) => {
  useEffect(() => {
    if (fileContent) {
      hljs.highlightAll();
    }
  }, [fileContent]);

  return (
    <div className="file-content mt-4">
      <h3 className="text-2xl font-semibold mb-4">{currentFileName}</h3>
      <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm">
        <code className={getLanguageClass(currentFileName)}>{fileContent}</code>
      </pre>
    </div>
  );
};

export default FileContent;