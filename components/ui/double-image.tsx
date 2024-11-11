import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import Image from "next/image";

type Image = {
  imageSrc: string;
  imageAlt: string;
};

interface DoubleImageProps {
  images: Image[];
}

const DoubleImage = ({ images }: DoubleImageProps) => {
  const [isLeftImageVisible, setIsLeftImageVisible] = useState(false);
  const [isRightImageVisible, setIsRightImageVisible] = useState(false);

  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: leftImageRef,
        onIntersect: () => setIsLeftImageVisible(true),
      },
      {
        ref: rightImageRef,
        onIntersect: () => setIsRightImageVisible(true),
      },
    ],
  });

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          ref={leftImageRef}
          initial={{ opacity: 0, x: -16 }}
          animate={{
            opacity: isLeftImageVisible ? 1 : 0.25,
            x: isLeftImageVisible ? 0 : -16,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <Image
            src={images[0].imageSrc}
            width={600}
            height={400}
            alt={images[0].imageAlt}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
        <motion.div
          ref={rightImageRef}
          initial={{ opacity: 0, x: 16 }}
          animate={{
            opacity: isRightImageVisible ? 1 : 0.25,
            x: isRightImageVisible ? 0 : 16,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <Image
            src={images[1].imageSrc}
            width={600}
            height={400}
            alt={images[1].imageAlt}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DoubleImage;
