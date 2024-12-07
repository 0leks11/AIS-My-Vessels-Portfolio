// src/components/GallerySection/VesselCard.tsx
import React from "react";
import { Vessel } from "../../types/vesselTypes";
import { useVesselData } from "../../hooks/useVesselData";
import Flag from "react-world-flags";
import { Collapsible } from "../resumeSection/Collapsible";
import { vesselList } from "../../data/vesselList";

interface VesselCardProps {
  vessel: Vessel;
}

const VesselCard: React.FC<VesselCardProps> = ({ vessel }) => {
  const { data, loading, error } = useVesselData({
    mmsi: vessel.mmsi.toString(),
  });

  const handleClick = () => {
    window.open(vessel.marinetrafficUrl, "_blank");
  };

  return (
    <div className="bg-white shadow-md rounded-md w-full p-2 border border-gray-300 cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <div>
        <div>
          <div className="flex items-center text-sm text-gray-600 mt-0">
            <Flag code={vessel.flagCode} className="w-11 h-8 mr-2" />
            <div className="mb-2">
              <h3 className=" w-30 h-5 font-semibold text-lg">{vessel.name}</h3>
              <h4 className="w-30 h-3">{vessel.flag}</h4>
            </div>
          </div>

          <div className="relative" onClick={handleClick}>
            {vessel.imageComponent && <vessel.imageComponent />}
            <div className="absolute top-2 left-2 bg-white text-xs font-bold py-1 px-2 rounded-md shadow">
              {vessel.type}
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-white text-xs font-bold py-1 px-2 rounded-md shadow"></div>
        </div>

        {/* Статические детали судна */}
        <div className="relative">
          <Collapsible
            button={
              <p className=" text-sm font-medium px-3 py-1 mt-2">
                Vessel detiles
              </p>
            }
            content={
              <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-gray-300 p-2 rounded-md z-20">
                <div className="flex justify-between items-center text-sm font-medium mb-2">
                  <p className="w-2/4 flex flex-row text-sm font-medium ml-2">
                    Vessel DWT:
                  </p>
                  <span className="w-2/4 text-left">{vessel.dwt}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium mb-2">
                  <p className="w-2/4 flex flex-row text-sm font-medium ml-2">
                    imoNumber:
                  </p>
                  <span className="w-2/4 text-left">{vessel.imoNumber}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium mb-2">
                  <p className="w-2/4 flex text-sm font-medium ml-2">
                    Year built:
                  </p>
                  <span className="w-2/4 text-left">{vessel.yearBuilt}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium mb-2">
                  <p className="w-2/4 flex text-sm font-medium ml-2">
                    Port of registry:
                  </p>
                  <span className="w-2/4 text-left">{vessel.registryPort}</span>
                </div>
              </div>
            }
          />
        </div>
      </div>

      {/* Динамические данные */}
      <div className="mt-2 text-sm">
        <p className="text-sm text-gray-600 mt-2">
          {vessel.previousPort ? `${vessel.previousPort} → ` : ""}
          {vessel.destination || "Unknown destination"}
        </p>
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
              Скорость/Курс: {data?.speed?.toFixed(1) || "N/A"} узлов /{" "}
              {data?.course || "N/A"}°
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default VesselCard;
