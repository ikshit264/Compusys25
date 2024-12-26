import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ImageFloatProps {
    image1Start: { top: string; left: string };
    image2Start: { bottom: string; right: string };
}

const ImageFloat: React.FC<ImageFloatProps> = ({ image1Start, image2Start }) => {
    const [hoveredImage, setHoveredImage] = useState<{ src: string; x: number; y: number } | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (hoveredImage) {
            setHoveredImage({ ...hoveredImage, x: e.clientX, y: e.clientY });
        }
    };

    const floatVariants = {
        float1: {
            y: [0, -10, 5, -5, 0],
            x: [0, 5, -3, 7, 0],
            transition: {
                y: {
                    repeat: Infinity,
                    duration: 6,
                    ease: 'easeInOut',
                },
                x: {
                    repeat: Infinity,
                    duration: 7,
                    ease: 'easeInOut',
                },
            },
        },
        float2: {
            y: [0, 10, -15, 5, 0],
            x: [0, -7, 3, -5, 0],
            transition: {
                y: {
                    repeat: Infinity,
                    duration: 8,
                    ease: 'easeInOut',
                },
                x: {
                    repeat: Infinity,
                    duration: 9,
                    ease: 'easeInOut',
                },
            },
        },
    };

    return (
        <div className="relative w-56 h-56" onMouseMove={handleMouseMove}>
            <motion.div
                className="absolute"
                style={{ top: image1Start.top, left: image1Start.left }}
                variants={floatVariants}
                animate="float1"
                onHoverStart={(e) =>
                    setHoveredImage({ src: '/assets/images/manzar.jpg', x: e.clientX, y: e.clientY })
                }
                onHoverEnd={() => setHoveredImage(null)}
            >
                <div className="w-20 h-20 relative overflow-hidden rounded-full shadow-red-300/40 border border-red-400 shadow-lg">
                    <Image
                        src="/assets/images/manzar.jpg"
                        alt="Floating image 1"
                        fill
                        className="rounded-full object-cover "
                    />
                </div>
            </motion.div>
            <motion.div
                className="absolute"
                style={{ bottom: image2Start.bottom, right: image2Start.right }}
                variants={floatVariants}
                animate="float2"
                onHoverStart={(e) =>
                    setHoveredImage({ src: '/assets/images/manzar.jpg', x: e.clientX, y: e.clientY })
                }
                onHoverEnd={() => setHoveredImage(null)}
            >
                <div className="w-20 h-20 relative overflow-hidden rounded-full shadow-red-300/40 border border-red-400 shadow-lg">
                    <Image
                        src="/assets/images/manzar.jpg"
                        alt="Floating image 2"
                        fill
                        className="rounded-full object-cover "
                    />
                </div>
            </motion.div>
            {hoveredImage && (
                <div
                    style={{
                        position: 'fixed',
                        top: hoveredImage.y - 150, // Adjust to show above the cursor
                        left: hoveredImage.x - 100, // Center horizontally
                        zIndex: 1000,
                        pointerEvents: 'none', // Prevent mouse events on this element
                    }}
                    className="w-72 h-72"
                >
                    <Image
                        src={hoveredImage.src}
                        alt="Hovered full image"
                        width={500}
                        height={500}
                        className="object-cover rounded-lg border-4 border-red-400/50 shadow-2xl"
                    />
                </div>
            )}
        </div>
    );
};

export default ImageFloat;
