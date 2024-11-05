"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/useIntersectionObservers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const Dentures = () => {
  const [isDentureTypesImageVisible, setIsDentureTypesImageVisible] =
    useState(false);
  const [isBenefitsImageVisible, setIsBenefitsImageVisible] = useState(false);
  const [dentureTypesParallaxOffset, setDentureTypesParallaxOffset] =
    useState(0);
  const [benefitsParallaxOffset, setBenefitsParallaxOffset] = useState(0);

  const dentureTypesImageRef = useRef(null);
  const benefitsImageRef = useRef(null);
  const dentureTypesParallaxRef = useRef(null);
  const benefitsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: dentureTypesImageRef,
        onIntersect: () => setIsDentureTypesImageVisible(true),
      },
      {
        ref: benefitsImageRef,
        onIntersect: () => setIsBenefitsImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: dentureTypesParallaxRef,
        onScroll: (offset) => setDentureTypesParallaxOffset(offset),
      },
      {
        ref: benefitsParallaxRef,
        onScroll: (offset) => setBenefitsParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Dentures Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
            Dentures
          </h1>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            Dentures are removable dental appliances designed to replace missing
            teeth and restore your smile. They can be complete dentures, which
            replace all your teeth, or partial dentures, which fill in gaps when
            some natural teeth are still present. Made from materials like
            acrylic or a combination of metal and plastic, dentures are custom
            fitted to your mouth for comfort and stability.
          </p>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4">
            They not only help improve your appearance but also make it easier
            to eat and speak. With proper care, dentures can be a long-lasting
            solution for tooth loss, helping you regain your confidence and
            enjoy everyday activities.
          </p>
          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
            >
              <Link href="#book">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={dentureTypesImageRef}
        titleRef={dentureTypesParallaxRef}
        isImageVisible={isDentureTypesImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Types of Dentures"
        title={
          <>
            Types of <br /> <span className="font-bold">Dentures</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={dentureTypesParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-gray-600 mb-4">
          We offer different types of dentures to suit your specific needs:
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>
            <strong>Complete Dentures:</strong> Replace all teeth in upper or
            lower jaw
          </li>
          <li>
            <strong>Partial Dentures:</strong> Fill gaps while preserving
            natural teeth
          </li>
          <li>
            <strong>Immediate Dentures:</strong> Placed immediately after tooth
            extraction
          </li>
          <li>
            <strong>Custom-Fitted Dentures:</strong> Precisely made for your
            mouth shape
          </li>
          <li>
            <strong>Flexible Dentures:</strong> Made from comfortable, flexible
            materials
          </li>
        </ul>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={benefitsImageRef}
        titleRef={benefitsParallaxRef}
        isImageVisible={isBenefitsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Denture Benefits"
        title={
          <>
            Benefits of <br /> <span className="font-bold">Dentures</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={benefitsParallaxOffset}
        scrollFactor={1}
      >
        <ul className="space-y-4 text-dental-accent1">
          <li>⭐ Restore your natural smile</li>
          <li>⭐ Improve eating and speaking ability</li>
          <li>⭐ Support facial muscles</li>
          <li>⭐ Boost self-confidence</li>
          <li>⭐ Custom-fitted for comfort</li>
        </ul>
      </AnimatedImageTextSection>
    </div>
  );
};

export default Dentures;
