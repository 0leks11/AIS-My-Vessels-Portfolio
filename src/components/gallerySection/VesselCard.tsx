// src/components/GallerySection/VesselCard.tsx
import React from 'react';
import { Vessel } from '../../types/vesselTypes';
import { useVesselData } from '../../hooks/useVesselData';

interface VesselCardProps {
  vessel: Vessel;
}

const VesselCard: React.FC<VesselCardProps> = ({ vessel }) => {
  const { data, loading, error } = useVesselData(vessel.imoNumber);

  const handleClick = () => {
    window.open(vessel.marinetrafficUrl, '_blank');
  };

  return (
    <div
      className="vessel-card border rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={handleClick}
    >
      <img
        src={vessel.imageUrl}
        alt={vessel.name}
        className="vessel-image w-full h-48 object-cover"
      />
      <div className="vessel-info p-4 bg-white">
        <h3 className="text-xl font-bold text-gray-800">{vessel.name}</h3>
        <p className="text-gray-600">{vessel.type}</p>
        <p className="text-gray-600">{vessel.flag}</p>
        {/* Отображение динамической информации */}
        {loading ? (
          <p className="text-gray-500">Загрузка данных...</p>
        ) : error ? (
          <p className="text-red-500">Ошибка загрузки данных</p>
        ) : (
          data && (
            <>
              <p>Скорость: {data.speed} узлов</p>
              <p>Курс: {data.course}°</p>
              <p>Статус: {data.status}</p>
              <p>Пункт назначения: {data.destination}</p>
              <p>ETA: {data.eta}</p>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default VesselCard;