// src/react-world-flags.d.ts
declare module 'react-world-flags' {
    import * as React from 'react';
  
    export interface FlagProps extends React.ImgHTMLAttributes<HTMLImageElement> {
      code: string; // ISO 3166-1 alpha-2 код страны
      fallback?: string;
    }
  
    const Flag: React.FC<FlagProps>;
  
    export default Flag;
  }