// src/components/GallerySection/VesselCard.tsx
import React from 'react';
import { Vessel } from '../../types/vesselTypes';
import { useVesselData } from '../../hooks/useVesselData';
import Flag from 'react-world-flags';

interface VesselCardProps {
  vessel: Vessel;
}

const VesselCard: React.FC<VesselCardProps> = ({ vessel }) => {
  const { data, loading, error } = useVesselData({ mmsi: vessel.mmsi.toString() });

  const handleClick = () => {
    window.open(vessel.marinetrafficUrl, '_blank');
  };

  return (
    <div
      className="bg-white shadow-md rounded-md w-full p-4 border border-gray-300 cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={handleClick}
    >
      {/* Изображение судна */}
      <div className="relative">
        <img
          src={vessel.imageUrl}
          alt={vessel.name}
          className="rounded-md w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-white text-xs font-bold py-1 px-2 rounded-md shadow">
          {vessel.type}
        </div>
      </div>

      {/* Статические детали судна */}
      <div className="mt-3">
        <h3 className="font-semibold text-lg">{vessel.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <Flag code={vessel.flagCode} className="w-5 h-5 mr-2" />
          <span>{vessel.flag}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {vessel.previousPort ? `${vessel.previousPort} → ` : ""}{vessel.destination || "Unknown destination"}
        </p>
      </div>

      {/* Динамические данные */}
      <div className="mt-2 text-sm">
        {loading ? (
          <p className="text-gray-500">Загрузка данных...</p>
        ) : error ? (
          <p className="text-red-500">Ошибка загрузки данных: {error}</p>
        ) : (
          <>
            <p>ATD: {data?.atd}</p>
            <p>ETA: {data?.eta}</p>
          </>
        )}
      </div>

      {/* Индикатор прогресса */}
      <div className="flex items-center mt-4">
        <div className="flex-grow bg-gray-200 h-1 rounded">
          {loading ? (
            <div className="bg-gray-300 h-1 rounded"></div>
          ) : (
            <div
              className="bg-blue-600 h-1 rounded"
              style={{ width: `${(data?.eta && data?.atd) ? calculateProgress(data.atd, data.eta) : 0}%` }}
            ></div>
          )}
        </div>
        <span className="ml-2 text-sm text-gray-600">
          {(data?.eta && data?.atd) ? `${calculateProgress(data.atd, data.eta)}%` : '0%'}
        </span>
      </div>

      {/* Кнопки */}
      <div className="flex justify-between mt-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-3 py-1 rounded">
          Past Track
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1 rounded">
          Route Forecast
        </button>
      </div>

      {/* Статус и прочая информация */}
      <div className="mt-4 text-sm text-gray-600">
        {loading ? (
          <p className="text-gray-500">Загрузка статуса...</p>
        ) : error ? (
          <p className="text-red-500">Ошибка загрузки данных: {error}</p>
        ) : (
          <>
            <p>Статус: {data?.status}</p>
            <p>
              Скорость/Курс: {data?.speed?.toFixed(1) || 'N/A'} узлов / {data?.course || 'N/A'}°
            </p>
          </>
        )}
      </div>
    </div>
  );

  // Функция для вычисления прогресса
  function calculateProgress(atd: string, eta: string): number {
    const atdDate = new Date(atd).getTime();
    const etaDate = new Date(eta).getTime();
    const currentDate = Date.now();

    if (isNaN(atdDate) || isNaN(etaDate)) return 0;
    if (currentDate < atdDate) return 0;
    if (currentDate > etaDate) return 100;

    return Math.round(((currentDate - atdDate) / (etaDate - atdDate)) * 100);
  }
};

export default VesselCard;