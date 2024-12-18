// src/components/GallerySection/GallerySection.tsx
import React, { useState } from "react";
import VesselCard from "./VesselCard";
import { vesselList } from "../../data/vesselList";
import RefreshableGallerySection from "./RefreshableGallerySection";
import GalleryCarousel from "./GalleryCarousel";
import { Collapsible } from "../resumeSection/Collapsible";

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
        <div className="relative">
          <Collapsible
            button={
              <p className="text-sm font-medium px-3 py-1 mt-2">
                This section describes its components and the technologies used,
                as well as why they are positioned here.
              </p>
            }
            content={
              <div>
                <p className="text-sm font-medium px-3 py-1 mt-2">
                  Our service offers free access to our state-of-the-art
                  product, delivering real-time ship data directly to you. We
                  gather information from each vessel through AIS shore stations
                  strategically positioned along the coastline. Unlike other
                  services that rely on expensive satellite data and charge
                  fees, our approach ensures reliable signal reception as long
                  as ships remain within the 200-kilometer range of our shore
                  stations. However, if a ship sails beyond this zone, the
                  signal may occasionally drop. While you have the option to
                  upgrade to another service, please note that alternative
                  providers typically charge a fee. Rest assured, your data
                  remains secure even when you refresh the page. Once we receive
                  data from the ships, we store it in a MySQL Lite database
                  hosted on the same server. On your first page load, the most
                  recent data automatically populates our ship cards. Each card
                  also displays the timestamp of the last received signal,
                  allowing you to easily track the freshness of the information.
                  When new, relevant data arrives, it’s instantly delivered via
                  WebSockets, seamlessly replacing outdated information and
                  updating our database with the latest details. This is how our
                  product operates—efficiently keeping you informed with
                  up-to-the-minute maritime information, all at no cost.
                  Experience seamless and reliable ship tracking with our
                  innovative solution, designed to keep you connected without
                  the hassle of additional expenses.
                </p>
              </div>
            }
          />
        </div>
      </div>
      <div>
        {error && (
          <div className="absolute top-16 right-4 bg-red-200 text-red-800 px-4 py-2 rounded shadow">
            {error}
          </div>
        )}
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
      </div>
    </section>
  );
};

export default GallerySection;
