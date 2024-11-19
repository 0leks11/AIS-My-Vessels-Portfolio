//src/components/RepositorySection/Navigation.tsx
import React from 'react';

interface NavigationProps {
  pathStack: string[];
  handleBack: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ pathStack, handleBack }) => {
  return (
    <>
      {pathStack.length > 1 && (
        <button
          onClick={handleBack}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Назад
        </button>
      )}
    </>
  );
};

export default Navigation;