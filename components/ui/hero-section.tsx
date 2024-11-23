import AnimatedElement from "./animated-element";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: {
    lineOne: string;
    lineTwo: string;
    isFirstLineBold: boolean; // true for first line bold, false for second line
  };
  description: string;
  bulletPoints?: string[];
  className?: string;
}

const HeroSection = ({
  title,
  description,
  bulletPoints,
  className = "",
}: HeroSectionProps) => {
  return (
    <section className={`py-16 bg-dental-navy ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start">
          <AnimatedElement>
            <h1 className="text-3xl md:text-5xl lg:text-7xl mb-8 text-white">
              <span className={title.isFirstLineBold ? "font-bold" : ""}>
                {title.lineOne}
              </span>
              <br />
              <span className={!title.isFirstLineBold ? "font-bold" : ""}>
                {title.lineTwo}
              </span>
            </h1>
          </AnimatedElement>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              height: 2,
              transition: {
                duration: 0.7,
                ease: "easeOut",
              },
            }}
            className={"w-1/4 border-b-2 border-dental-gold mb-6 origin-left"}
          ></motion.div>
        </div>

        <AnimatedElement>
          <p className=" mx-auto">{description}</p>
        </AnimatedElement>
        {bulletPoints && (
          <AnimatedElement>
            <ul className=" mx-auto mt-4 space-y-2">
              {bulletPoints.map((point, index) => (
                <li key={index}>- {point}</li>
              ))}
            </ul>
          </AnimatedElement>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
