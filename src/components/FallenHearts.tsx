import React, { useEffect, useRef } from 'react';
import { Engine, Render, Runner, Bodies, Composite, Body, Events } from 'matter-js';

const FallenHearts: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);  // Используем реф для привязки к canvas

  useEffect(() => {
    // Создаем физический движок
    const engine: Engine = Engine.create(); 
    const world = engine.world;

    // Создаем землю (пол)
    const ground = Bodies.rectangle(
      window.innerWidth / 2,  // Положение по оси X
      window.innerHeight,     // Положение по оси Y
      window.innerWidth,      // Ширина земли
      10,                     // Высота земли
      { isStatic: true }      // Делаем землю статичной
    );

    // Добавляем землю в мир
    Composite.add(world, ground);

    // Обновляем позицию пола в зависимости от футера
    const updateGroundPosition = () => {
      const footerElement = document.getElementById('footer');
      const groundY = footerElement ? footerElement.offsetTop : window.innerHeight;
      Body.setPosition(ground, { x: window.innerWidth / 2, y: groundY });
    };

    window.addEventListener('resize', updateGroundPosition);
    window.addEventListener('scroll', updateGroundPosition);
    updateGroundPosition();

    // Настройки рендеринга
    const render = Render.create({
      element: canvasRef.current?.parentNode as HTMLElement, // Привязываем рендер к родителю canvas
      canvas: canvasRef.current as HTMLCanvasElement,        // Привязываем рендер к canvas через ref
      engine: engine,
      options: {
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
        wireframes: false,
        background: 'transparent',  // Прозрачный фон
      },
    });

    Render.run(render);  // Запускаем рендер
    const runner = Runner.create();
    Runner.run(runner, engine);  // Запускаем физический движок

    // Функция для добавления пиксельного сердца
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
                restitution: 0.9,  // Упругость при столкновении
                isStatic: false,   // Блок не статический
                render: {
                  fillStyle: 'red',  // Цвет блоков
                },
              }
            );
            Composite.add(world, heartBlock);  // Добавляем блок в мир


            // Добавляем событие столкновения с землей
            Events.on(engine, 'collisionStart', (event: Matter.IEventCollision<Engine>) => {
              event.pairs.forEach(({ bodyA, bodyB }) => {
                const block = bodyA === ground ? bodyB : bodyA;
                if (block === heartBlock) {
                  // Устанавливаем таймер на удаление
                  setTimeout(() => {
                    Composite.remove(world, block);
                  }, 2000); // Удаляем блок через 2 секунды после столкновения
                }
              });
            });
          }
        });
      });
    };

    // Периодически добавляем сердца
    const interval = setInterval(() => {
      addPixelHeart(Math.random() * window.innerWidth, 0);
    }, 1000);

    // Очищаем все при размонтировании компонента
    return () => {
      clearInterval(interval);
      Render.stop(render);
      Composite.clear(world, false, true);
      Engine.clear(engine);    // Останавливаем движок
    };
  }, []);

  return <canvas ref={canvasRef} id="world"></canvas>;
};

export default FallenHearts;