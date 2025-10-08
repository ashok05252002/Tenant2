import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
    'https://images.unsplash.com/photo-1582450871972-ab6964574975?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590650213165-c1fef80648c4?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop'
];

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

const BannerCarousel = () => {
    const [page, setPage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPage((prevPage) => (prevPage + 1) % banners.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-4">
            <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                <AnimatePresence initial={false}>
                    <motion.img
                        key={page}
                        src={banners[page]}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            opacity: { duration: 0.5 },
                        }}
                        alt="Promotional Banner"
                        className="absolute w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {banners.map((_, index) => (
                        <div 
                            key={index} 
                            onClick={() => setPage(index)}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                                page === index ? 'bg-white' : 'bg-white/50'
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel;
