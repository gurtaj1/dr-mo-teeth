"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";
const Veneers = () => {
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
      {/* Veneers Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-7xl font-bold text-center mb-8 text-dental-accent1">
              Veneers
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              Veneers are thin, custom-made shells that are placed over the
              front surface of your teeth to improve their appearance. They can
              help fix issues like discoloration, chips, or gaps, giving you a
              beautiful, natural-looking smile. Made from either porcelain or
              resin, veneers are designed to match the colour and shape of your
              existing teeth. The process typically involves a small amount of
              enamel being removed to ensure a proper fit, and then the veneers
              are securely bonded to your teeth. With proper care, veneers can
              last for many years, making them a popular choice for those
              looking to enhance their smile.
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
        imageAlt="Veneer Procedure"
        titleLineOne="The Veneer"
        titleLineTwo="Process"
        scrollY={processParallaxOffset}
        scrollFactor={1}
      >
        <p className=" mb-4">
          The journey to your perfect smile involves several carefully planned
          steps:
        </p>
        <ol className="space-y-2">
          <li>
            <strong>Step 1.</strong> Initial consultation and smile design
            planning
          </li>
          <li>
            <strong>Step 2.</strong> Preparation of your natural teeth
          </li>
          <li>
            <strong>Step 3.</strong> Taking detailed impressions for custom
            veneers
          </li>
          <li>
            <strong>Step 4.</strong> Temporary veneers while your custom ones
            are made
          </li>
          <li>
            <strong>Step 5.</strong> Final fitting and bonding of your permanent
            veneers
          </li>
        </ol>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={benefitsImageRef}
        titleRef={benefitsParallaxRef}
        isImageVisible={isBenefitsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Veneer Benefits"
        titleLineOne="Benefits of"
        titleLineTwo="Dental Veneers"
        isDark
        scrollY={benefitsParallaxOffset}
        scrollFactor={1}
      >
        <ul className="space-y-4 text-dental-accent1">
          <li>⭐ Natural-looking results</li>
          <li>⭐ Stain-resistant surface</li>
          <li>⭐ Minimal tooth reduction required</li>
          <li>⭐ Long-lasting smile enhancement</li>
          <li>⭐ Customized to your desired look</li>
        </ul>
      </AnimatedImageTextSection>

      {/* Types of Veneers Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold mb-6 text-dental-navy text-center">
              Porcelain Veneers
            </h2>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-center">
              Porcelain veneers are the gold standard in cosmetic dentistry.
              They offer superior durability, stain resistance, and the most
              natural-looking results. These custom-crafted shells are designed
              to perfectly match your natural teeth while providing the
              improvements you desire.
            </p>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mt-4">
              The porcelain material reflects light similarly to natural tooth
              enamel, ensuring your smile looks completely natural. With proper
              care, porcelain veneers can last 10-15 years or more.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Composite Veneers Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold mb-6 text-dental-accent1 text-center">
              Composite Veneers
            </h2>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              Composite veneers offer a more affordable alternative to porcelain
              veneers. Made from tooth-colored resin material, they can be
              applied in a single visit and require less removal of natural
              tooth structure. While they may not last as long as porcelain
              veneers, they provide excellent results and can be easily repaired
              if needed.
            </p>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default Veneers;
