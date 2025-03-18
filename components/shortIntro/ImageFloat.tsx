import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIsPhone } from "@/hooks/IsPhone";
import { getCdnUrl } from "@/utils/CdnWrapper";

interface ImageFloatProps {
  image1Start: { top: string; left: string; duration: number; src: string };
  image2Start: { bottom: string; right: string; duration: number; src: string };
}

const ImageFloat: React.FC<ImageFloatProps> = ({ image1Start, image2Start }) => {
  const [hoveredImage, setHoveredImage] = useState<{
    src: string;
    x: number;
    y: number;
  } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (hoveredImage) {
      setHoveredImage({ ...hoveredImage, x: e.clientX, y: e.clientY });
    }
  };

  const isMobileView = useIsPhone();

  const floatVariants = {
    float1: {
      y: [0, -10, 5, -5, 0],
      x: [0, 5, -3, 7, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: image1Start.duration,
          ease: "easeInOut",
        },
        x: {
          repeat: Infinity,
          duration: image1Start.duration - image2Start.duration / 2,
          ease: "easeInOut",
        },
      },
    },
    float2: {
      y: [0, 10, -15, 5, 0],
      x: [0, -7, 3, -5, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: image2Start.duration,
          ease: "easeInOut",
        },
        x: {
          repeat: Infinity,
          duration: image1Start.duration,
          ease: "easeInOut",
        },
      },
    },
  };

  const getFullPath = (src: string) => getCdnUrl(`/assets/images/${src}`);

  return (
    <div className="relative w-56 h-56" onMouseMove={handleMouseMove}>
      <motion.div
        className="absolute overflow-hidden"
        style={{ top: image1Start.top, left: image1Start.left }}
        variants={floatVariants}
        animate="float1"
        onHoverStart={(e) =>
          setHoveredImage({
            src: getFullPath(image1Start.src),
            x: e.clientX,
            y: e.clientY,
          })
        }
        onHoverEnd={() => setHoveredImage(null)}
      >
        <div className="w-20 h-20 relative overflow-hidden rounded-full shadow-red-300/40 border border-red-400 shadow-lg">
          <Image
            src={getFullPath(image1Start.src)}
            alt="Floating image 1"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute overflow-hidden"
        style={{ bottom: image2Start.bottom, right: image2Start.right }}
        variants={floatVariants}
        animate="float2"
        onHoverStart={(e) =>
          setHoveredImage({
            src: getFullPath(image2Start.src),
            x: e.clientX,
            y: e.clientY,
          })
        }
        onHoverEnd={() => setHoveredImage(null)}
      >
        <div className="w-20 h-20 relative overflow-hidden rounded-full shadow-red-300/40 border border-red-400 shadow-lg">
          <Image
            src={getFullPath(image2Start.src)}
            alt="Floating image 2"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </motion.div>

      {hoveredImage && (
        <motion.div
          initial={{ y: 20, scale: 0.3, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 50, scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            position: "fixed",
            top: hoveredImage.y - 150,
            left: hoveredImage.x - 100,
            zIndex: 1000,
            pointerEvents: "none",
          }}
          className={`${isMobileView ? "w-48 h-48" : "w-72 h-72"}`}
        >
          <Image
            src={hoveredImage.src}
            alt="Hovered full image"
            width={500}
            height={500}
            className="object-cover rounded-lg border-4 border-red-400/50 shadow-2xl"
          />
        </motion.div>
      )}
    </div>
  );
};

export default ImageFloat;