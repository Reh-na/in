import React, { useEffect } from 'react';

const MovingDotsBackground = () => {
  useEffect(() => {
    const moveDots = () => {
      const dots = document.querySelectorAll('.dot');

      dots.forEach((dot, index) => {
        const animationDuration = [4000, 3000, 5000]; // Adjust animation durations as needed
        const animationDelay = index * 500; // Adjust delay between animations as needed

        setInterval(() => {
          dot.animate(
            [{ transform: 'translate(0, 0)' }, { transform: 'translate(100vw, 100vh)' }, { transform: 'translate(0, 0)' }],
            {
              duration: animationDuration[index],
              easing: 'linear',
              iterations: Infinity
            }
          );
        }, animationDelay);
      });
    };

    moveDots();
  }, []);

  return (
    <div className="moving-dots-container">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      {/* Add more dots as needed */}
    </div>
  );
}

export default MovingDotsBackground;
