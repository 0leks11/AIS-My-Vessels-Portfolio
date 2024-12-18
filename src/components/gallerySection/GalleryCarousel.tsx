// src/components/GallerySection/GalleryCarousel.tsx
import React, { useState, useEffect, useRef, useCallback } from "react";

interface GalleryCarouselProps {
  cardWidth: number;
  gap: number;
  autoScrollDelay?: number;
  resumeDelay?: number;
  children: React.ReactNode;
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({
  cardWidth,
  gap,
  autoScrollDelay = 3000, 
  resumeDelay = 5000, 
  children,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const autoScrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const childArray = React.Children.toArray(children);
  const totalCards = childArray.length;

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!scrollContainerRef.current) return;
      const x = index * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: x,
        behavior: "smooth",
      });
    },
    [cardWidth, gap]
  );

  useEffect(() => {
    function startAutoScroll() {
      stopAutoScroll();
      autoScrollTimeout.current = setInterval(() => {
        let nextIndex = currentIndex + 1;
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

    if (isAutoScrolling && totalCards > 0) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [
    isAutoScrolling,
    currentIndex,
    totalCards,
    autoScrollDelay,
    scrollToIndex,
  ]);

  const handleUserInteraction = () => {
    setIsAutoScrolling(false);
    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }
    resumeTimeout.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, resumeDelay);
  };

  // Обработчик колесика мыши для горизонтальной прокрутки
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: e.deltaY < 0 ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
      handleUserInteraction();
    }
  };

  // Обработчики для перетаскивания (drag)
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollContainerRef.current?.scrollLeft || 0;
    handleUserInteraction();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 1; // Коэффициент прокрутки
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="flex gap-5 overflow-hidden py-4 cursor-grab"
      ref={scrollContainerRef}
      onMouseEnter={handleUserInteraction}
      onMouseLeave={(e) => {
        handleUserInteraction();
        handleMouseLeave();
      }}
      onScroll={handleUserInteraction}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ userSelect: "none" }}
    >
      {childArray.map((child, idx) => (
        <div
          key={idx}
          className="flex-shrink-0"
          style={{ width: cardWidth, marginRight: gap }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default GalleryCarousel;
