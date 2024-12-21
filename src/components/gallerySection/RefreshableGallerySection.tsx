// src/components/RefreshableGallerySection.tsx
import React from "react";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";

interface RefreshableGallerySectionProps {
  onRefresh: () => void;
  isRefreshing: boolean;
}

const RefreshableGallerySection: React.FC<RefreshableGallerySectionProps> = ({
  onRefresh,
  isRefreshing,
}) => {
  return (
    <div className="flex items-center justify-start space-x-4">
      <button
        onClick={onRefresh}
        className={`flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-2 shadow transition-transform duration-300 ${
          isRefreshing ? "cursor-not-allowed opacity-50" : ""
        }`}
        title="Gallery Refresh"
        disabled={isRefreshing}
      >
        <ArrowPathRoundedSquareIcon
          className={`h-5 w-5 ${isRefreshing ? "animate-spin" : ""}`}
        />
      </button>
    </div>
  );
};

export default RefreshableGallerySection;
