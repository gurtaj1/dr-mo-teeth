import AnimatedElement from "@/components/ui/animated-element";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TitleSectionProps {
  titleText: string;
  bodyText: string[];
  isFullPageHeight?: boolean;
}

const TitleSection = ({
  titleText,
  bodyText,
  isFullPageHeight,
}: TitleSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`py-16 bg-dental-navy ${isFullPageHeight ? "flex-grow" : ""}`}
    >
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-8"
          >
            {titleText}
          </h1>
        </AnimatedElement>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isVisible ? 1 : 0,
            height: 2,
            transition: {
              duration: 0.7,
              ease: "easeOut",
            },
          }}
          className={
            "w-1/4 mx-auto border-b-2 border-dental-gold mb-6 origin-left"
          }
        ></motion.div>
        {bodyText.map((text, index) => (
          <AnimatedElement key={index}>
            <p
              className={`max-w-3xl mx-auto text-center ${
                index > 0 ? "mt-4" : ""
              }`}
            >
              {text}
            </p>
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
};

export default TitleSection;
