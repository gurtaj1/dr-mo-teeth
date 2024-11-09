import { RefObject } from "react";
import Image from "next/image";

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
    <div
      ref={imageRef}
      className={`transition-all duration-1000 ease-out ${
        isImageVisible
          ? "translate-x-0 opacity-100"
          : imagePosition === "left"
          ? "-translate-x-8 opacity-25"
          : "translate-x-8 opacity-25"
      }`}
    >
      <Image
        src={imageSrc}
        width={600}
        height={400}
        alt={imageAlt}
        className="rounded-lg shadow-lg"
      />
    </div>
  );

  return (
    <section className={isDark ? "bg-dental-navy py-16" : "py-16"}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {imagePosition === "left" && (
            <div className="w-full md:w-1/2">{imageContent}</div>
          )}
          <div className="w-full md:w-1/2">
            <h2
              ref={titleRef}
              className={`text-3xl md:text-5xl lg:text-6xl mb-6 ${
                isDark ? "text-white" : "text-dental-navy"
              }`}
              style={
                scrollFactor
                  ? { transform: `translateY(${scrollY * scrollFactor}px)` }
                  : undefined
              }
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
            <div
              className={`w-1/4 border-b-2 ${
                isDark ? "border-dental-teal" : "border-dental-accent1"
              } mb-6`}
            ></div>
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
