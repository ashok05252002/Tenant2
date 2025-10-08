import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const colors = ['#FFC700', '#FF0000', '#2E3192', '#44C4A1', '#006782'];

const PartyPopper = () => {
    const confetti = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            color: colors[i % colors.length],
            x: Math.random() * 100,
            y: -20 - Math.random() * 50,
            rotate: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.5,
            duration: Math.random() * 3 + 4,
            delay: Math.random() * 2,
        }));
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {confetti.map(({ id, color, x, y, rotate, scale, duration, delay }) => (
                <motion.div
                    key={id}
                    initial={{ x: `${x}vw`, y: `${y}vh`, rotate, scale }}
                    animate={{
                        y: '110vh',
                        x: `${x + (Math.random() - 0.5) * 20}vw`,
                        rotate: rotate + (Math.random() - 0.5) * 720,
                    }}
                    transition={{
                        duration,
                        delay,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}
                    style={{
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        backgroundColor: color,
                    }}
                />
            ))}
        </div>
    );
};

export default PartyPopper;
