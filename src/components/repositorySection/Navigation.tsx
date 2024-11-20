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
        <button onClick={handleBack} className="btn btn-sm mb-2">
          ← Back
        </button>
      )}
    </>
  );
};

export default Navigation;