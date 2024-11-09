"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";

const Bonding = () => {
  const [isProcessImageVisible, setIsProcessImageVisible] = useState(false);
  const [isBenefitsImageVisible, setIsBenefitsImageVisible] = useState(false);
  const [processParallaxOffset, setProcessParallaxOffset] = useState(0);
  const [benefitsParallaxOffset, setBenefitsParallaxOffset] = useState(0);

  const processImageRef = useRef(null);
  const benefitsImageRef = useRef(null);
  const processParallaxRef = useRef(null);
  const benefitsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: processImageRef,
        onIntersect: () => setIsProcessImageVisible(true),
      },
      {
        ref: benefitsImageRef,
        onIntersect: () => setIsBenefitsImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: processParallaxRef,
        onScroll: (offset) => setProcessParallaxOffset(offset),
      },
      {
        ref: benefitsParallaxRef,
        onScroll: (offset) => setBenefitsParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Composite Bonding Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-4xl font-bold text-center mb-8">
              Composite Bonding
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              Composite bonding is a dental procedure used to improve the
              appearance of your teeth by applying a tooth-coloured resin
              material. This process can help fix chips, gaps, or discoloration,
              giving you a more even and natural-looking smile. During the
              procedure, your dentist will match the resin to the colour of your
              teeth, then apply it and shape it to achieve the desired look. The
              material is then hardened using a special light. Composite bonding
              is a quick, effective, and often painless way to enhance your
              smile, and it can usually be completed in just one visit.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={processImageRef}
        titleRef={processParallaxRef}
        isImageVisible={isProcessImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Bonding Process"
        titleLineOne="The Bonding"
        titleLineTwo="Process"
        scrollY={processParallaxOffset}
        scrollFactor={1}
      >
        <ol className="space-y-2">
          <li>
            <strong>Step 1.</strong> Consultation and shade matching to ensure
            natural results
          </li>
          <li>
            <strong>Step 2.</strong> Gentle preparation of the tooth surface
          </li>
          <li>
            <strong>Step 3.</strong> Application of the composite resin material
          </li>
          <li>
            <strong>Step 4.</strong> Shaping and sculpting to achieve desired
            appearance
          </li>
          <li>
            <strong>Step 5.</strong> Hardening with special light and final
            polishing
          </li>
        </ol>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={benefitsImageRef}
        titleRef={benefitsParallaxRef}
        isImageVisible={isBenefitsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Bonding Benefits"
        titleLineOne="Benefits of"
        titleLineTwo="Composite Bonding"
        isDark
        scrollY={benefitsParallaxOffset}
        scrollFactor={1}
      >
        <ul className="space-y-4">
          <li>⭐ Quick and minimally invasive procedure</li>
          <li>⭐ Natural-looking results</li>
          <li>⭐ Can fix multiple cosmetic issues</li>
          <li>⭐ Usually completed in one visit</li>
          <li>⭐ Preserves natural tooth structure</li>
        </ul>
      </AnimatedImageTextSection>
    </div>
  );
};

export default Bonding;
