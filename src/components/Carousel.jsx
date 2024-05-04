import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        'https://media.geeksforgeeks.org/img-practice/banner/mern-full-stack-development-classroom-thumbnail.png?v=19625',
        'https://media.geeksforgeeks.org/img-practice/banner/dsa-to-development-coding-guide-thumbnail.png?v=19625',
        'https://media.geeksforgeeks.org/img-practice/banner/geeks-classes-live-thumbnail.png?v=19625',
        'https://media.geeksforgeeks.org/img-practice/banner/gate-crash-course-2024-thumbnail.png?v=19625'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="relative w-270 h-160 overflow-hidden bg-gray-300">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-all duration-300 ${
                            index === activeIndex ? 'left-0' : 'left-full'
                        }`}
                    >
                        <div
                            className="w-full h-full bg-cover bg-no-repeat"
                            style={{ backgroundImage: `url('${slide}')` }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
