"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/useIntersectionObservers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const DentalFillings = () => {
  const [isTypesImageVisible, setIsTypesImageVisible] = useState(false);
  const [isProcessImageVisible, setIsProcessImageVisible] = useState(false);
  const [typesParallaxOffset, setTypesParallaxOffset] = useState(0);
  const [processParallaxOffset, setProcessParallaxOffset] = useState(0);

  const typesImageRef = useRef(null);
  const processImageRef = useRef(null);
  const typesParallaxRef = useRef(null);
  const processParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: typesImageRef,
        onIntersect: () => setIsTypesImageVisible(true),
      },
      {
        ref: processImageRef,
        onIntersect: () => setIsProcessImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: typesParallaxRef,
        onScroll: (offset) => setTypesParallaxOffset(offset),
      },
      {
        ref: processParallaxRef,
        onScroll: (offset) => setProcessParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Dental Fillings Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
            Fill your tooth
          </h1>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            Before it fails
          </p>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4">
            A dental filling is a treatment used to restore a tooth that has
            been damaged by decay or injury. There are two common types of
            fillings: amalgam and composite. Amalgam fillings are made from a
            mixture of metals, including silver. Composite fillings, on the
            other hand, are made from a tooth-coloured resin, which allows them
            to blend in with your natural teeth. During the filling process,
            your dentist will remove the decay, clean the area, and then place
            the filling to restore the tooth&apos;s shape and function, helping
            you maintain a healthy smile.
          </p>
          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
            >
              <Link href="#book">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={typesImageRef}
        titleRef={typesParallaxRef}
        isImageVisible={isTypesImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Types of Dental Fillings"
        title={
          <>
            Types of <br /> <span className="font-bold">Dental Fillings</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={typesParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-bold mb-2">Amalgam Fillings:</h3>
            <ul className="space-y-2">
              <li>✓ Made from a mixture of metals</li>
              <li>✓ Very durable and long-lasting</li>
              <li>✓ Cost-effective option</li>
              <li>✓ Ideal for back teeth where strength is important</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Composite Fillings:</h3>
            <ul className="space-y-2">
              <li>✓ Tooth-colored resin material</li>
              <li>✓ Blends naturally with your teeth</li>
              <li>✓ Bonds directly to tooth structure</li>
              <li>✓ Perfect for visible front teeth</li>
            </ul>
          </div>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={processImageRef}
        titleRef={processParallaxRef}
        isImageVisible={isProcessImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Filling Process"
        title={
          <>
            The Filling <br /> <span className="font-bold">Process</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={processParallaxOffset}
        scrollFactor={1}
      >
        <ol className="space-y-4 text-dental-accent1">
          <li>1. Examination and x-rays to assess decay</li>
          <li>2. Local anesthetic to ensure comfort</li>
          <li>3. Removal of decay and cleaning of the cavity</li>
          <li>4. Placement and shaping of filling material</li>
          <li>5. Final adjustments for proper bite</li>
        </ol>
      </AnimatedImageTextSection>
    </div>
  );
};

export default DentalFillings;
