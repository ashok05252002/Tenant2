import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-64 bg-secondary-200">
            <img src={images[currentIndex]} alt="Property" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex justify-between items-center px-2">
                <button onClick={prevImage} className="bg-black/40 text-white p-2 rounded-full"><ChevronLeft size={24} /></button>
                <button onClick={nextImage} className="bg-black/40 text-white p-2 rounded-full"><ChevronRight size={24} /></button>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}></div>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
