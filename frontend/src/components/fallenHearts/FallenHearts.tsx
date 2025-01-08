import React, { useEffect, useRef } from "react";
import {
  Engine,
  Render,
  Runner,
  Bodies,
  Composite,
  Body,
  Events,
} from "matter-js";

interface FallenHeartsProps {
  footerRef: React.RefObject<HTMLDivElement>;
  windowSize: { width: number; height: number };
}

const FallenHearts: React.FC<FallenHeartsProps> = ({
  footerRef,
  windowSize,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const groundRef = useRef<Body | null>(null);

  useEffect(() => {
    const engine = Engine.create();
    const world = engine.world;

    const ground = Bodies.rectangle(
      windowSize.width / 2,
      window.innerHeight,
      windowSize.width,
      10,
      { isStatic: true }
    );

    groundRef.current = ground;
    Composite.add(world, ground);

    const updateGroundPosition = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const groundY = footerRect.top + window.scrollY;
        if (groundRef.current) {
          Body.setPosition(ground, { x: windowSize.width / 2, y: groundY });
        }
      }
    };

    window.addEventListener("resize", updateGroundPosition);
    window.addEventListener("scroll", updateGroundPosition);
    updateGroundPosition();

    const render = Render.create({
      element: canvasRef.current?.parentNode as HTMLElement,
      canvas: canvasRef.current as HTMLCanvasElement,
      engine: engine,
      options: {
        width: windowSize.width,
        height: document.documentElement.scrollHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    const addPixelHeart = (x: number, y: number) => {
      const heartPattern: number[][] = [
        [0, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0],
      ];

      const blockSize = 10;

      heartPattern.forEach((row: number[], rowIndex: number) => {
        row.forEach((value: number, colIndex: number) => {
          if (value === 1) {
            const heartBlock = Bodies.rectangle(
              x + colIndex * blockSize,
              y + rowIndex * blockSize,
              blockSize,
              blockSize,
              {
                restitution: 1.2,
                isStatic: false,
                render: {
                  fillStyle: "white",
                },
              }
            );
            Composite.add(world, heartBlock);
            Events.on(
              engine,
              "collisionStart",
              (event: Matter.IEventCollision<Engine>) => {
                event.pairs.forEach(({ bodyA, bodyB }) => {
                  const block = bodyA === ground ? bodyB : bodyA;
                  if (block === heartBlock) {
                    setTimeout(() => {
                      Composite.remove(world, block);
                    }, 3000);
                  }
                });
              }
            );
          }
        });
      });
    };

    let interval = setInterval(() => {
      addPixelHeart(Math.random() * windowSize.width, 0);
    }, 2000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        clearInterval(interval);
      } else {
        interval = setInterval(() => {
          addPixelHeart(Math.random() * windowSize.width, 0);
        }, 3000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener("resize", updateGroundPosition);
      window.removeEventListener("scroll", updateGroundPosition);
      Render.stop(render);
      Composite.clear(world, false, true);
      Engine.clear(engine);
      clearTimeout(interval);
    };
  }, [footerRef, windowSize]);

  return <canvas ref={canvasRef} id="world"></canvas>;
};

export default FallenHearts;
