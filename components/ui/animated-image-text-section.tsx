import { RefObject } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedImageTextSectionProps {
  imageRef: RefObject<HTMLDivElement>;
  titleRef?: RefObject<HTMLHeadingElement>;
  isImageVisible: boolean;
  imagePosition: "left" | "right";
  imageSrc: string;
  imageAlt: string;
  titleLineOne: string;
  titleLineTwo: string;
  isTitleLineOneBold?: boolean;
  isDark?: boolean;
  scrollY?: number;
  scrollFactor?: number;
  children: React.ReactNode;
}

const AnimatedImageTextSection = ({
  imageRef,
  titleRef,
  isImageVisible,
  imagePosition,
  imageSrc,
  imageAlt,
  titleLineOne,
  titleLineTwo,
  isTitleLineOneBold = false,
  isDark = false,
  scrollY = 0,
  scrollFactor = 0,
  children,
}: AnimatedImageTextSectionProps) => {
  const imageContent = (
    <motion.div
      ref={imageRef}
      initial={{ opacity: 0, x: imagePosition === "left" ? -16 : 16 }}
      animate={{
        opacity: isImageVisible ? 1 : 0.25,
        x: isImageVisible ? 0 : imagePosition === "left" ? -16 : 16,
      }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Image
        src={imageSrc}
        width={600}
        height={400}
        alt={imageAlt}
        className="rounded-lg shadow-lg"
      />
    </motion.div>
  );

  return (
    <section className={isDark ? "bg-dental-navy py-16" : "py-16"}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {imagePosition === "left" && (
            <div className="w-full md:w-1/2">{imageContent}</div>
          )}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: scrollFactor ? scrollY * scrollFactor : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2
                ref={titleRef}
                className={`text-3xl md:text-5xl lg:text-6xl mb-6 ${
                  isDark ? "text-white" : "text-dental-navy"
                }`}
              >
                {isTitleLineOneBold ? (
                  <>
                    <span className="font-bold">{titleLineOne}</span>
                    <br />
                    {titleLineTwo}
                  </>
                ) : (
                  <>
                    {titleLineOne}
                    <br />
                    <span className="font-bold">{titleLineTwo}</span>
                  </>
                )}
              </h2>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: isImageVisible ? 1 : 0,
                height: 2,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              }}
              className={`w-1/4 border-b-2 ${
                isDark ? "border-dental-teal" : "border-dental-accent1"
              } mb-6 origin-left`}
            ></motion.div>
            <span className={`${isDark ? "text-white" : "text-gray-600"}`}>
              {children}
            </span>
          </div>
          {imagePosition === "right" && (
            <div className="w-full md:w-1/2">{imageContent}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnimatedImageTextSection;
