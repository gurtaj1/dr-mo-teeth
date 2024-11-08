"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";

const Bridges = () => {
  const [isBridgesImageVisible, setIsBridgesImageVisible] = useState(false);
  const [isCareImageVisible, setIsCareImageVisible] = useState(false);
  const [bridgesParallaxOffset, setBridgesParallaxOffset] = useState(0);
  const [careParallaxOffset, setCareParallaxOffset] = useState(0);

  const bridgesImageRef = useRef(null);
  const careImageRef = useRef(null);
  const bridgesParallaxRef = useRef(null);
  const careParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: bridgesImageRef,
        onIntersect: () => setIsBridgesImageVisible(true),
      },
      {
        ref: careImageRef,
        onIntersect: () => setIsCareImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: bridgesParallaxRef,
        onScroll: (offset) => setBridgesParallaxOffset(offset),
      },
      {
        ref: careParallaxRef,
        onScroll: (offset) => setCareParallaxOffset(offset),
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
          <AnimatedElement>
            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
              >
                <Link href="#book">Get in touch</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={bridgesImageRef}
        titleRef={bridgesParallaxRef}
        isImageVisible={isBridgesImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
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

      <AnimatedImageTextSection
        imageRef={careImageRef}
        titleRef={careParallaxRef}
        isImageVisible={isCareImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Bridge Care"
        title={
          <>
            Common Questions About <br />{" "}
            <span className="font-bold">Dental Bridges</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={careParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-dental-accent1">
          <div>
            <h3 className="font-bold mb-2">
              How do bridges compare to partial dentures?
            </h3>
            <p>
              The main difference is that bridges are fixed and not removable,
              making them a healthier option for your gums and jawbone.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">
              What should I know about caring for a dental bridge?
            </h3>
            <p>
              With good care, your dental bridge can last 10 years or more. Just
              brush twice daily, floss every day, and visit your dentist
              regularly for check-ups.
            </p>
          </div>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default Bridges;
