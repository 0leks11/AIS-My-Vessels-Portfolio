// src/components/GallerySection/GallerySection.tsx
import React, { useState } from 'react';
import VesselCard from './VesselCard';
import { vesselList } from '../../data/vesselList';
import RefreshableGallerySection from './RefreshableGallerySection'; // Импортируем новый компонент

const GallerySection: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setError(null);
    setRefreshKey(prevKey => prevKey + 1);

    // Здесь можно добавить реальную логику перезагрузки данных
    // Например, повторный запрос данных с сервера
    // Для демонстрации используем таймаут
    setTimeout(() => {
      // После завершения перезагрузки сбрасываем состояние
      setIsRefreshing(false);
    }, 1000); // 1 секунда
  };

  return (
    <section className="gallery-section container mx-auto px-4 py-8 relative">
      {/* Кнопка перезагрузки */}
      <div className="absolute top-4 right-4">
        <RefreshableGallerySection onRefresh={handleRefresh} isRefreshing={isRefreshing} />
      </div>

      {/* Сообщение об ошибке */}
      {error && (
        <div className="absolute top-16 right-4 bg-red-200 text-red-800 px-4 py-2 rounded shadow">
          {error}
        </div>
      )}

      {/* Перезагружаемая секция */}
      <div key={refreshKey} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vesselList.map((vessel) => (
          <VesselCard key={vessel.imoNumber} vessel={vessel} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;