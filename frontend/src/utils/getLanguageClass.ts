// src/utils/getLanguageClass.ts
export const getLanguageClass = (filename: string): string => {
    const extension = filename.split('.').pop();
    switch (extension) {
      case 'js':
        return 'language-javascript';
      case 'ts':
        return 'language-typescript';
      case 'jsx':
        return 'language-jsx';
      case 'tsx':
        return 'language-tsx';
      case 'html':
        return 'language-html';
      case 'css':
        return 'language-css';
      case 'json':
        return 'language-json';
      case 'md':
        return 'language-markdown';
      default:
        return '';
    }
  };