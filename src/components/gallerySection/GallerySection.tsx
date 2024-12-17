// src/components/GallerySection/GallerySection.tsx
import React, { useState } from "react";
import VesselCard from "./VesselCard";
import { vesselList } from "../../data/vesselList";
import RefreshableGallerySection from "./RefreshableGallerySection";
import GalleryCarousel from "./GalleryCarousel";
import { ReportRepositoryProvider } from "../../context/ReportRepositoryContext";

const GallerySection: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setError(null);
    setRefreshKey((prevKey) => prevKey + 1);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const cardWidth = 350;
  const gap = 20;
  const autoScrollDelay = 2000;
  const resumeDelay = 3000;

  return (
    <section className="gallery-section container mx-auto px-4 py-8 relative">
      <div className="absolute top-4 right-4">
        <RefreshableGallerySection
          onRefresh={handleRefresh}
          isRefreshing={isRefreshing}
        />
      </div>

      {error && (
        <div className="absolute top-16 right-4 bg-red-200 text-red-800 px-4 py-2 rounded shadow">
          {error}
        </div>
      )}

      {/* Оборачиваем карусель провайдером */}
      <ReportRepositoryProvider>
        <GalleryCarousel
          cardWidth={cardWidth}
          gap={gap}
          autoScrollDelay={autoScrollDelay}
          resumeDelay={resumeDelay}
          key={refreshKey}
        >
          {vesselList.map((vessel) => (
            <VesselCard key={vessel.imoNumber} vessel={vessel} />
          ))}
        </GalleryCarousel>
      </ReportRepositoryProvider>
    </section>
  );
};

export default GallerySection;
