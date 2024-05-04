// BubbleEffect.js
import React, { useEffect } from 'react';
import './BubbleEffect.css';

const BubbleEffect = () => {
    const numBubbles = 200;

    useEffect(() => {
        const moveBubbles = () => {
            const bubbles = document.querySelectorAll('.bubble');
            bubbles.forEach(bubble => {
                const speed = Math.random() * 2 + 1; // Random speed between 1 and 3
                const currentY = parseFloat(bubble.style.top);
                const newY = currentY - speed;
                if (newY < -100) { // Reset position if bubble goes above the screen
                    bubble.style.top = '100vh';
                } else {
                    bubble.style.top = newY + 'px';
                }
            });
        };

        // Move bubbles every 50 milliseconds
        const intervalId = setInterval(moveBubbles, 50);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const createBubble = () => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        const size = Math.random() * 20 + 10;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = x + 'px';
        bubble.style.top = y + 'px';

        document.body.appendChild(bubble);
    };

    for (let i = 0; i < numBubbles; i++) {
        createBubble();
    }

    return (
        <div className="bubble-container">
            {/* No need to render anything in the component */}
        </div>
    );
}

export default BubbleEffect;
