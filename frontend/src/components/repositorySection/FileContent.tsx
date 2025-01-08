// src/components/repositorySection/FileContent.tsx
import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { getLanguageClass } from "../../utils/getLanguageClass";
import { useFileContent } from "../../hooks/useFileContent";

interface FileContentProps {
  currentFileName: string;
}

const FileContent: React.FC<FileContentProps> = ({ currentFileName }) => {
  const { fileContent, loadingFileContent, errorFileContent } =
    useFileContent(currentFileName);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (fileContent && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [fileContent]);

  return (
    <div className="my-0">
      <h3 className="Box border-slate-200 bg-white text-base font-semibold p-2 mb-1">
        {currentFileName}
      </h3>
      <div className="Box border-slate-200 rounded-md bg-white">
        {loadingFileContent ? (
          <div className="p-3 text-center text-gray-500">File loading...</div>
        ) : errorFileContent ? (
          <div className="p-2 text-center text-red-500">{errorFileContent}</div>
        ) : fileContent ? (
          <pre className="p-2 overflow-x-auto overflow-y-auto max-h-[830px] text-sm">
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
