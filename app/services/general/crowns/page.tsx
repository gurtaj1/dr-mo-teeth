"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";

const Crowns = () => {
  const [isCrownsImageVisible, setIsCrownsImageVisible] = useState(false);
  const [isProcessImageVisible, setIsProcessImageVisible] = useState(false);
  const [crownsParallaxOffset, setCrownsParallaxOffset] = useState(0);
  const [processParallaxOffset, setProcessParallaxOffset] = useState(0);

  const crownsImageRef = useRef(null);
  const processImageRef = useRef(null);
  const crownsParallaxRef = useRef(null);
  const processParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: crownsImageRef,
        onIntersect: () => setIsCrownsImageVisible(true),
      },
      {
        ref: processImageRef,
        onIntersect: () => setIsProcessImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: crownsParallaxRef,
        onScroll: (offset) => setCrownsParallaxOffset(offset),
      },
      {
        ref: processParallaxRef,
        onScroll: (offset) => setProcessParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="text-5xl text-center text-dental-accent1 bg-dental-navy pt-8">
        <h1>Crowns</h1>
      </div>
      {/* Dental Crowns Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container max-w-3xl mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-4xl mb-8 text-dental-accent1">
              Place a crown
              <br /> <span className="font-bold">Before your tooth cracks</span>
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 text-center">
              A dental crown is a cap that fits over a damaged or weakened tooth
              to restore its shape, size, strength, and appearance. Crowns are
              often used after a tooth has been significantly decayed, cracked,
              or after root canal treatment. Made from materials like porcelain,
              metal, or a combination of both, crowns are designed to look and
              feel like natural teeth.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={crownsImageRef}
        titleRef={crownsParallaxRef}
        isImageVisible={isCrownsImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Dental Crown Procedure"
        title={
          <>
            The Crown <br /> <span className="font-bold">Process</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={crownsParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-gray-600 mb-4">
          The process typically involves two visits:
        </p>
        <ol className="space-y-2 text-gray-600">
          <li>
            <strong>First Visit:</strong> Your dentist will prepare the tooth
            and take impressions to create space for the crown, take impressions
            of the tooth, and provide you with a temporary crown
          </li>
          <li>
            <strong>Second Visit:</strong> The crown will be placed securely on
            the tooth with a dental cement
          </li>
        </ol>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={processImageRef}
        titleRef={processParallaxRef}
        isImageVisible={isProcessImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Crown Benefits"
        title={
          <>
            Benefits of <br /> <span className="font-bold">Dental Crowns</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={processParallaxOffset}
        scrollFactor={1}
      >
        <ul className="space-y-4 text-dental-accent1">
          <li>⭐ Protects and strengthens damaged teeth</li>
          <li>⭐ Restores natural appearance</li>
          <li>⭐ Improves tooth function</li>
          <li>⭐ Prolongs tooth life</li>
          <li>⭐ Allows confident eating and smiling</li>
        </ul>
      </AnimatedImageTextSection>
    </div>
  );
};

export default Crowns;
