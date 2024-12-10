// src/components/GallerySection/GallerySection.tsx
import React, { useState, useEffect, useRef } from "react";
import VesselCard from "./VesselCard";
import { vesselList } from "../../data/vesselList";
import RefreshableGallerySection from "./RefreshableGallerySection";

const GallerySection: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Ссылка на контейнер с карточками
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Параметры карусели
  const cardWidth = 400; // ширина карточки, px
  const gap = 24; // gap между карточками, px (Tailwind gap-6 = 1.5rem ~ 24px)
  const autoScrollDelay = 2000; // 3 секунды между переключениями
  const resumeDelay = 3000; // 5 секунд простоя после пользовательского вмешательства, чтобы возобновить автопрокрутку

  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Индекс текущей карточки
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setError(null);
    setRefreshKey((prevKey) => prevKey + 1);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  // Функция для прокрутки к определённому индексу карточки
  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const x = index * (cardWidth + gap);
    scrollContainerRef.current.scrollTo({
      left: x,
      behavior: "smooth",
    });
  };

  // Автопрокрутка: каждые 3 секунды переходим к следующей карточке
  useEffect(() => {
    function startAutoScroll() {
      stopAutoScroll();
      autoScrollTimeout.current = setInterval(() => {
        if (!scrollContainerRef.current) return;
        const totalCards = vesselList.length;
        let nextIndex = currentIndex + 1;
        // Если дошли до конца, вернёмся в начало
        if (nextIndex >= totalCards) {
          nextIndex = 0;
        }
        setCurrentIndex(nextIndex);
        scrollToIndex(nextIndex);
      }, autoScrollDelay);
    }

    function stopAutoScroll() {
      if (autoScrollTimeout.current) {
        clearInterval(autoScrollTimeout.current);
        autoScrollTimeout.current = null;
      }
    }

    if (isAutoScrolling) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [isAutoScrolling, currentIndex]);

  // Если пользователь взаимодействует - остановить автопрокрутку
  const handleUserInteraction = () => {
    setIsAutoScrolling(false);
    // Если пользователь перестанет взаимодействовать, через 5 сек возобновим
    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }
    resumeTimeout.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, resumeDelay);
  };

  // Обновление размера окна или изменение количества карточек может потребовать recalculation
  // но сейчас предполагается фиксированный размер.

  return (
    <section className="gallery-section container mx-auto px-4 py-8 relative">
      {/* Кнопка перезагрузки */}
      <div className="absolute top-4 right-4">
        <RefreshableGallerySection
          onRefresh={handleRefresh}
          isRefreshing={isRefreshing}
        />
      </div>

      {/* Сообщение об ошибке */}
      {error && (
        <div className="absolute top-16 right-4 bg-red-200 text-red-800 px-4 py-2 rounded shadow">
          {error}
        </div>
      )}

      <div
        key={refreshKey}
        className="flex gap-6 overflow-hidden py-4 cursor-grab"
        ref={scrollContainerRef}
        onMouseEnter={handleUserInteraction}
        onMouseLeave={handleUserInteraction}
        onScroll={handleUserInteraction}
      >
        {vesselList.map((vessel) => (
          <div
            key={vessel.imoNumber}
            className="flex-shrink-0"
            style={{ width: cardWidth }}
          >
            <VesselCard vessel={vessel} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
