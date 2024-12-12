// GalleryCarousel.tsx
import React, { useState, useEffect, useRef } from "react";

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
  autoScrollDelay,
  resumeDelay,
  children,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const autoScrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  const childArray = React.Children.toArray(children);
  const totalCards = childArray.length;

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const x = index * (cardWidth + gap);
    scrollContainerRef.current.scrollTo({
      left: x,
      behavior: "smooth",
    });
  };

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
  }, [isAutoScrolling, currentIndex, totalCards, autoScrollDelay]);

  const handleUserInteraction = () => {
    setIsAutoScrolling(false);
    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }
    resumeTimeout.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, resumeDelay);
  };

  return (
    <div
      className="flex gap-5 overflow-hidden py-4"
      ref={scrollContainerRef}
      onMouseEnter={handleUserInteraction}
      onMouseLeave={handleUserInteraction}
      onScroll={handleUserInteraction}
      style={{ cursor: "grab" }}
    >
      {childArray.map((child, idx) => (
        <div key={idx} className="flex-shrink-0" style={{ width: cardWidth }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default GalleryCarousel;
