import { RefObject } from "react";
import Image from "next/image";
import AnimatedElement from "@/components/ui/animated-element";

interface AnimatedImageTextSectionProps {
  imageRef: RefObject<HTMLDivElement>;
  titleRef?: RefObject<HTMLHeadingElement>; // Add new prop for title ref
  isImageVisible: boolean;
  imagePosition: "left" | "right";
  imageSrc: string;
  imageAlt: string;
  title: string | React.ReactNode;
  titleColor: string;
  backgroundColor?: string;
  scrollY?: number;
  scrollFactor?: number;
  children: React.ReactNode;
}

const AnimatedImageTextSection = ({
  imageRef,
  titleRef, // Add new prop
  isImageVisible,
  imagePosition,
  imageSrc,
  imageAlt,
  title,
  titleColor,
  backgroundColor = "transparent",
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
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {imagePosition === "left" && (
            <div className="w-full md:w-1/2">{imageContent}</div>
          )}
          <div className="w-full md:w-1/2">
            <h2
              ref={titleRef} // Apply the ref
              className={`text-3xl mb-6 ${titleColor}`}
              style={
                scrollFactor
                  ? { transform: `translateY(${scrollY * scrollFactor}px)` }
                  : undefined
              }
            >
              {title}
            </h2>
            {children}
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
