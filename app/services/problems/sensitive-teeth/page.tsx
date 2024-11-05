"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/useIntersectionObservers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const SensitiveTeeth = () => {
  const [isComfortImageVisible, setIsComfortImageVisible] = useState(false);
  const [isTreatmentsImageVisible, setIsTreatmentsImageVisible] =
    useState(false);
  const [comfortParallaxOffset, setComfortParallaxOffset] = useState(0);
  const [treatmentsParallaxOffset, setTreatmentsParallaxOffset] = useState(0);

  const comfortImageRef = useRef(null);
  const treatmentsImageRef = useRef(null);
  const comfortParallaxRef = useRef(null);
  const treatmentsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: comfortImageRef,
        onIntersect: () => setIsComfortImageVisible(true),
      },
      {
        ref: treatmentsImageRef,
        onIntersect: () => setIsTreatmentsImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: comfortParallaxRef,
        onScroll: (offset) => setComfortParallaxOffset(offset),
      },
      {
        ref: treatmentsParallaxRef,
        onScroll: (offset) => setTreatmentsParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Sensitive Teeth Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
            Take Control of Your Oral Health
          </h1>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            Are you tired of feeling discomfort when enjoying hot drinks or your
            favourite treats? I understand how frustrating tooth sensitivity can
            be—it can really put a damper on your day.
          </p>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4">
            I take a thorough approach to identify the root cause of your tooth
            sensitivity and offer tailored solutions.
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
        imageRef={comfortImageRef}
        titleRef={comfortParallaxRef}
        isImageVisible={isComfortImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Understanding Tooth Sensitivity"
        title={
          <>
            The Science of <br /> <span className="font-bold">Comfort</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={comfortParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-gray-600 mb-4">
          I provide a variety of effective treatments to help alleviate tooth
          sensitivity and restore your oral health. After identifying the
          cause—whether it&apos;s enamel erosion, gum recession, tooth grinding,
          or other factors - I will recommend the best treatment for you.
        </p>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={treatmentsImageRef}
        titleRef={treatmentsParallaxRef}
        isImageVisible={isTreatmentsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Sensitivity Treatments"
        title={
          <>
            Treatment <br /> <span className="font-bold">Options</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={treatmentsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-dental-accent1">
          <div>
            <h3 className="text-xl font-bold mb-2">Dental Sealants</h3>
            <p>
              These protective coatings are applied to the surfaces of your
              teeth, creating a barrier against the factors that cause
              sensitivity.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Dental Bonding</h3>
            <p>
              A tooth-coloured resin is applied to sensitive areas, forming a
              protective layer that helps reduce discomfort.
            </p>
          </div>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default SensitiveTeeth;
