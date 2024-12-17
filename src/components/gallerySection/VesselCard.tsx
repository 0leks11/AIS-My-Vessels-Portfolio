// src/components/GallerySection/VesselCard.tsx
import React, { useState, useEffect } from "react";
import { Vessel } from "../../types/vesselTypes";
import { useVesselData } from "../../hooks/useVesselData";
import { useDataBack } from "../../hooks/useDataBack";
import Flag from "react-world-flags";
import { Collapsible } from "../resumeSection/Collapsible";
import NavigationStatus from "./NavigationalStatus";
import TimeAgo from "./TimeAgo";
import FormattedDate from "./FormattedDate";

/*
 * VesselCard now:
 * 1. On initial load, it retrieves data from the repository using useDataBack.
 * 2. It sets its state with these initial data.
 * 3. After WebSocket messages arrive via useVesselData, it updates the state with fresh data.
 */

interface VesselCardProps {
  vessel: Vessel;
}

const VesselCard: React.FC<VesselCardProps> = ({ vessel }) => {
  // Get initial data from repository at load
  const initialData = useDataBack(vessel.mmsi.toString());

  // Local state to hold current vessel data displayed
  const [vesselData, setVesselData] = useState(initialData || null);

  // Update state with initial data once it's loaded
  useEffect(() => {
    if (initialData && !vesselData) {
      setVesselData(initialData);
    }
  }, [initialData, vesselData]);

  // useVesselData will provide new data from WebSocket
  useVesselData({
    mmsi: vessel.mmsi.toString(),
    onDataUpdate: (data) => {
      // Update local state with fresh data from WebSocket
      setVesselData(data);
    },
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
        </div>

        <div className="relative">
          <Collapsible
            button={
              <p className=" text-sm font-medium px-3 py-1 mt-2">
                Vessel details
              </p>
            }
            content={
              <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-gray-300 p-2 rounded-md z-20">
                <div className="flex justify-between items-center text-sm font-medium mb-1">
                  <p className="w-2/4 flex text-sm font-medium ml-2">
                    Vessel Type:
                  </p>
                  <span className="w-2/4 text-left">{vessel.type}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium mb-1">
                  <p className="w-2/4 flex text-sm font-medium ml-2">
                    Port of registry:
                  </p>
                  <span className="w-2/4 text-left">{vessel.registryPort}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium mb-1">
                  <p className="w-2/4 flex text-sm font-medium ml-2">
                    Year built:
                  </p>
                  <span className="w-2/4 text-left">{vessel.yearBuilt}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium mb-1">
                  <p className="w-2/4 flex flex-row text-sm font-medium ml-2">
                    Vessel DWT:
                  </p>
                  <span className="w-2/4 text-left">{vessel.dwt}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium mb-1">
                  <p className="w-2/4 flex flex-row text-sm font-medium ml-2">
                    IMO Number:
                  </p>
                  <span className="w-2/4 text-left">{vessel.imoNumber}</span>
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <div className="flex justify-between items-center text-sm font-medium mb-0">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Latitude:
          </p>
          <span className="w-3/5 text-gray-500 text-left">
            {vesselData?.latitude !== undefined ? vesselData.latitude : "N/A"}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-2">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Longitude:
          </p>
          <span className="w-3/5 text-gray-500 text-left">
            {vesselData?.longitude !== undefined ? vesselData.longitude : "N/A"}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-0">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Speed:
          </p>
          <span className="w-3/5 text-gray-500 text-left">
            {vesselData?.speed !== undefined
              ? vesselData.speed.toFixed(1)
              : "N/A"}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-0">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Course:
          </p>
          <span className="w-3/5 text-gray-500 text-left">
            {vesselData?.course !== undefined ? vesselData.course : "N/A"}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-2">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Service status:
          </p>
          <span className="w-3/5 text-gray-500 text-left">
            <NavigationStatus status={vesselData?.status} />
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-0">
          <p className="w-2/5 flex text-sm text-gray-600 font-small ml-2">
            Vessel's local time:
          </p>
          <span className="w-3/5 text-gray-500 text-left">
            {vesselData &&
            vesselData.latitude !== undefined &&
            vesselData.longitude !== undefined ? (
              <FormattedDate
                utcTime={vesselData.utcTime}
                latitude={vesselData.latitude}
                longitude={vesselData.longitude}
              />
            ) : (
              "N/A"
            )}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-2">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Received:
          </p>
          <span className="w-3/5 text-gray-500 text-left">
            {vesselData ? <TimeAgo utcTime={vesselData.utcTime} /> : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VesselCard;
