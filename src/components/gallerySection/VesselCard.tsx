// src/components/GallerySection/VesselCard.tsx
import React, { useMemo } from "react";
import { Vessel } from "../../types/vesselTypes";
import { useVesselDB } from "../../hooks/useVesselDB";
import { useVesselData } from "../../hooks/useVesselData";
import Flag from "react-world-flags";
import { Collapsible } from "../resumeSection/Collapsible";
import NavigationStatus from "./NavigationalStatus";
import TimeAgo from "./TimeAgo";
import FormattedDate from "./FormattedDate";
import { ArrowDownLeftIcon } from "@heroicons/react/24/solid";

interface VesselCardProps {
  vessel: Vessel;
}

const VesselCard: React.FC<VesselCardProps> = ({ vessel }) => {
  const {
    data: dbData,
    loading: dbLoading,
    error: dbError,
  } = useVesselDB({
    mmsi: vessel.mmsi.toString(),
  });

  const { data: wsData, error: wsError } = useVesselData({
    mmsi: vessel.mmsi.toString(),
  });

  const currentData = useMemo(() => {
    return wsData || dbData || null;
  }, [wsData, dbData]);

  const loading = dbLoading && !currentData;

  const error =
    !currentData && (wsError || dbError) ? wsError || dbError : null;

  const handleClick = () => {
    window.open(vessel.marinetrafficUrl, "_blank");
  };

  return (
    <div className="bg-neutral-300 shadow-md rounded-md w-full border border-gray-300 cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <div>
        <div>
          <div className="flex items-center text-sm text-gray-600 mt-0 p-2">
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
              <button className="flex items-center justify-between w-full px-3 py-2 font-medium text-base bg-neutral-300 hover:bg-neutral-100 text-gray-600 transition duration-300">
                Vessel Details
              </button>
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
                    imoNumber:
                  </p>
                  <span className="w-2/4 text-left">{vessel.imoNumber}</span>
                </div>
              </div>
            }
            icon={
              <ArrowDownLeftIcon className="w-5 h-5 text-white bg-neutral-300" />
            }
          />
        </div>
      </div>

      <div className="text-sm text-gray-600 p-2">
        <div className="flex justify-between items-center text-sm font-medium mb-0">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Latitude:
          </p>
          <span className="w-3/5 text-left">
            {loading && <span className="text-gray-500">Loading...</span>}
            {error && <span className="text-red-600">Signal lost</span>}
            {!loading && !error && (
              <span className="text-sky-600">
                {currentData?.latitude ?? "N/A"}
              </span>
            )}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-2">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Longitude:
          </p>
          <span className="w-3/5 text-left">
            {loading && <span className="text-gray-500">Loading...</span>}
            {error && <span className="text-red-600">Signal lost</span>}
            {!loading && !error && (
              <span className="text-sky-600">
                {currentData?.longitude ?? "N/A"}
              </span>
            )}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-0">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Speed:
          </p>
          <span className="w-3/5 text-left">
            {loading && <span className="text-gray-500">Loading...</span>}
            {error && <span className="text-red-600">Signal lost</span>}
            {!loading && !error && (
              <span className="text-lime-700">
                {currentData?.speed?.toFixed(1) || "N/A"}
              </span>
            )}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-0">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Course:
          </p>
          <span className="w-3/5 text-left">
            {loading && <span className="text-gray-500">Loading...</span>}
            {error && <span className="text-red-600">Signal lost</span>}
            {!loading && !error && (
              <span className="text-lime-700">
                {currentData?.course || "N/A"}
              </span>
            )}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-2">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Service status:
          </p>
          <span className={`w-3/5 text-left`}>
            {loading && <span className="text-gray-500">Loading...</span>}
            {error && <span className="text-red-600">Signal lost</span>}
            {!loading && !error && (
              <span className="text-amber-600">
                <NavigationStatus status={currentData?.status} />
              </span>
            )}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-0">
          <p className="w-2/5 flex text-sm text-gray-600 font-small ml-2">
            Vessel's local time:
          </p>
          <span className={`w-3/5 text-left`}>
            {loading && <span className="text-gray-500">Loading...</span>}
            {error && <span className="text-red-600">Signal lost</span>}
            {!loading && !error && (
              <span className="text-cyan-600">
                <FormattedDate
                  utcTime={currentData?.utcTime || ""}
                  latitude={currentData?.latitude || 0}
                  longitude={currentData?.longitude || 0}
                />
              </span>
            )}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mb-2">
          <p className="w-2/5 flex text-sm text-gray-600 font-medium ml-2">
            Received:
          </p>
          <span className={`w-3/5 text-left`}>
            {loading && <span className="text-gray-500">Loading...</span>}
            {error && <span className="text-red-600">Signal lost</span>}
            {!loading && !error && (
              <span className="text-emerald-700">
                <TimeAgo utcTime={currentData?.utcTime} />
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VesselCard;
