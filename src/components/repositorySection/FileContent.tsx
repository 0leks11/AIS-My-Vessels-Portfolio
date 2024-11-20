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
      <div>
        <h3 className="Box border-slate-200 text-base font-semibold p-2 mb-1">{currentFileName}</h3>
        <div className="Box border-slate-100">
          <pre className="Box-body bg-slate-100 overflow-x-auto text-sm border-none">
            <code className={getLanguageClass(currentFileName)}>{fileContent}</code>
          </pre>
        </div>
      </div>
    );
  };

export default FileContent;