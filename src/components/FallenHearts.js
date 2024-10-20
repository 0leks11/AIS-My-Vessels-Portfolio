import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const FallenHearts = () => {
  const canvasRef = useRef(null);  // Используем реф для привязки к canvas

  useEffect(() => {
    const { Engine, Render, Runner, Bodies, Composite } = Matter;

    // Создаем физический движок
    const engine = Engine.create();
    const world = engine.world;

    // Создаем землю (пол)
    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight,
      window.innerWidth, 
      10, 
      { isStatic: true }
    );
  
    // Обновляем позицию пола в зависимости от позиции футера
    const updateGroundPosition = () => {
      const footerElement = document.getElementById('footer');
      const groundY = footerElement ? footerElement.offsetTop : window.innerHeight; // Положение верхней границы футера
      Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: groundY }); // Устанавливаем позицию пола
    };

    window.addEventListener('resize', updateGroundPosition);  // Слушаем изменение размеров окна
    window.addEventListener('scroll', updateGroundPosition);
    updateGroundPosition(); // Обновляем позицию пола при первой загрузке

    // Настройки рендеринга
    const render = Render.create({
      element: canvasRef.current.parentNode,  // Привязываем рендер к родителю canvas
      canvas: canvasRef.current,  // Привязываем рендер к canvas через ref
      engine: engine,
      options: {
        width: window.innerWidth,
        height: document.documentElement.scrollHeight, // Высота равна высоте всего документа
        wireframes: false,
        background: 'transparent',  // Прозрачный фон
      }
    });

    Render.run(render);
    Runner.run(Runner.create(), engine); // Запускаем движок и рендер

    // Функция для добавления пиксельного сердца
    function addPixelHeart(x, y) {
      const heartPattern = [ // Шаблон сердца в виде двумерного массива
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

      const blockSize = 10;  // Размер каждого блока

      heartPattern.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
          if (value === 1) {
            const heartBlock = Bodies.rectangle(
              x + colIndex * blockSize,  // Позиция по X
              y + rowIndex * blockSize,  // Позиция по Y
              blockSize,  // Ширина
              blockSize,  // Высота
              {
                restitution: 0.9, // Упругость при столкновении
                isStatic: false,  // Блок не статический
                render: {
                  fillStyle: 'red',  // Цвет блоков
                },
              }
            );
            Composite.add(world, heartBlock); // Добавляем блок в мир
          }
        });
      });
    }

    // Вызов функции для добавления пиксельного сердца
    const interval = setInterval(() => {
      addPixelHeart(Math.random() * window.innerWidth, 0);  // Сердце появляется в случайной позиции по X
    }, 800); // Появляется каждую 800 миллисекунд

    return () => {
      clearInterval(interval);  // Очищаем интервал при размонтировании компонента
      Render.stop(render); // Останавливаем рендер
      Composite.clear(world); // Очищаем мир
      Engine.clear(engine); // Очищаем движок
    };
  }, []);

  return <canvas ref={canvasRef} id="world"></canvas>;  // Привязываем реф к canvas
};

export default FallenHearts;