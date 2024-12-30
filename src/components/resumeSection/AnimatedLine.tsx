// src/components/ResumeSection/AnimatedLine.tsx
import React, { useEffect, useRef, useState } from "react";

interface AnimatedLineProps {
  className?: string;
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({ className = "" }) => {
  const fillClassName = "bg-zinc-600 ";
  const durationMs = 2000;

  const [hasAnimated, setHasAnimated] = useState(false);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!lineRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(lineRef.current);

    return () => {
      if (lineRef.current) observer.unobserve(lineRef.current);
    };
  }, [hasAnimated]);

  const transitionStyle = {
    transition: `width ${durationMs}ms ease-in-out`,
  };

  return (
    <div ref={lineRef} className={`relative overflow-hidden ${className}`}>
      <div
        style={transitionStyle}
        className={`
          absolute left-0 top-0 h-full
          ${fillClassName}
          ${hasAnimated ? "w-full" : "w-0"}
        `}
      />
    </div>
  );
};

export default AnimatedLine;
