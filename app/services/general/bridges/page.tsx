"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";
import QuestionsSection from "@/components/ui/questions-section";

const Bridges = () => {
  const [isBridgesImageVisible, setIsBridgesImageVisible] = useState(false);
  const [bridgesParallaxOffset, setBridgesParallaxOffset] = useState(0);

  const bridgesImageRef = useRef(null);
  const bridgesParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: bridgesImageRef,
        onIntersect: () => setIsBridgesImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: bridgesParallaxRef,
        onScroll: (offset) => setBridgesParallaxOffset(offset),
      },
    ],
  });
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Dental Bridges Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
              Dental Bridges
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              Have you lost one or more teeth? A dental bridge might be the
              perfect solution for you. Made from high-quality porcelain, a
              well-crafted bridge mimics the appearance of your natural teeth
              and restores your smile&apos;s health and function.
            </p>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4">
              As the name implies, this treatment &quot;bridges&quot; the gap
              left by a missing tooth, anchored securely by the healthy teeth on
              either side.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={bridgesImageRef}
        titleRef={bridgesParallaxRef}
        isImageVisible={isBridgesImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Dental Bridge"
        title={
          <>
            A Great Solution for <br />{" "}
            <span className="font-bold">Missing Teeth</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={bridgesParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-gray-600 mb-4">
          Unlike removable partial dentures, dental bridges are fixed in place,
          making them a preferred choice for many patients. We&apos;ll help you
          determine if this option is right for you.
        </p>
      </AnimatedImageTextSection>

      <QuestionsSection
        theme="dark"
        title={
          <>
            Common Questions About
            <br />
            <span className="font-bold">Dental Bridges</span>
          </>
        }
        questions={[
          {
            icon: "✦",
            title: "How do bridges compare to partial dentures?",
            content:
              "The main difference is that bridges are fixed and not removable, making them a healthier option for your gums and jawbone.",
          },
          {
            icon: "✦",
            title: "What should I know about caring for a dental bridge?",
            content:
              "With good care, your dental bridge can last 10 years or more. Just brush twice daily, floss every day, and visit your dentist regularly for check-ups.",
          },
        ]}
      />
    </div>
  );
};

export default Bridges;
