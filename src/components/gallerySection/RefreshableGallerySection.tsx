// src/components/RefreshableGallerySection.tsx
import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline'; 

interface RefreshableGallerySectionProps {
  onRefresh: () => void;
  isRefreshing: boolean;
}

const RefreshableGallerySection: React.FC<RefreshableGallerySectionProps> = ({ onRefresh, isRefreshing }) => {
  return (
    <button
      onClick={onRefresh}
      className={`bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full shadow transition-transform duration-300 ${
        isRefreshing ? 'cursor-not-allowed opacity-50' : ''
      }`}
      title="Перезагрузить галерею"
      disabled={isRefreshing}
    >
      <ArrowPathIcon className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} />
    </button>
  );
};

export default RefreshableGallerySection;