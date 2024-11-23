// src/components/GallerySection/GallerySection.tsx
import React from 'react';
import VesselCard from './VesselCard';
import vesselList from '../../data/vesselList';

const GallerySection: React.FC = () => {
  return (
    <section className="gallery-section container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Галерея судов
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vesselList.map((vessel) => (
          <VesselCard key={vessel.imoNumber} vessel={vessel} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;