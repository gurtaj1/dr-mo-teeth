"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";

const TeethWhitening = () => {
  const [isLightenImageVisible, setIsLightenImageVisible] = useState(false);
  const [isFactsImageVisible, setIsFactsImageVisible] = useState(false);
  const [lightenParallaxOffset, setLightenParallaxOffset] = useState(0);
  const [factsParallaxOffset, setFactsParallaxOffset] = useState(0);

  const lightenImageRef = useRef(null);
  const factsImageRef = useRef(null);
  const lightenParallaxRef = useRef(null);
  const factsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: lightenImageRef,
        onIntersect: () => setIsLightenImageVisible(true),
      },
      {
        ref: factsImageRef,
        onIntersect: () => setIsFactsImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: lightenParallaxRef,
        onScroll: (offset) => setLightenParallaxOffset(offset),
      },
      {
        ref: factsParallaxRef,
        onScroll: (offset) => setFactsParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Teeth Whitening Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
              Teeth Whitening
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              Teeth whitening is a popular dental treatment that brightens your
              smile. It works by using safe bleaching agents that lighten the
              enamel, helping to restore your teeth to a more radiant shade.
              There are different options for teeth whitening, including
              in-surgery treatments done by your dentist for quick results, or
              take-home kits that allow you to whiten at your own pace. Whether
              you want to enhance your smile for a special occasion or simply
              boost your confidence, teeth whitening can give you a brighter,
              whiter smile.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={lightenImageRef}
        titleRef={lightenParallaxRef}
        isImageVisible={isLightenImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Teeth Whitening Results"
        title={
          <>
            <span className="font-bold">Lighten Your Smile</span>
            <br />
            by Two Shades or More
          </>
        }
        titleColor="text-dental-navy"
        scrollY={lightenParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-gray-600">
          Maintaining the whiteness of your teeth can be challenging. Daily
          culprits like coffee, and certain foods can stain your teeth, making
          it tough to keep them looking their best, even with good dental care.
          Professional teeth whitening offers a fantastic solution to rejuvenate
          the natural colour of your teeth or even achieve a shade lighter than
          your original colour if that&apos;s what you desire.
        </p>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={factsImageRef}
        titleRef={factsParallaxRef}
        isImageVisible={isFactsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Teeth Whitening Facts"
        title={
          <>
            Facts About <br />{" "}
            <span className="font-bold">Teeth Whitening</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={factsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-dental-accent1">
          <div>
            <h3 className="font-bold mb-2">What Causes Stained Teeth?</h3>
            <ul className="space-y-1">
              <li>⭐ Coffee and tea</li>
              <li>⭐ Foods with dark pigments</li>
              <li>⭐ Smoking and tobacco use</li>
              <li>⭐ Natural ageing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">
              Who Can Benefit from Teeth Whitening?
            </h3>
            <p>
              Most people can enjoy the advantages of teeth whitening, though
              individual results may vary based on personal circumstances. We
              generally advise against teeth whitening for pregnant or lactating
              women, children under 18, or anyone with known allergies to
              whitening agents. We&apos;ll help determine if you&apos;re a
              suitable candidate for treatment.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">
              Is Teeth Whitening Safe for Sensitive Teeth?
            </h3>
            <p>
              If you have sensitive teeth, it&apos;s best to steer clear of
              over-the-counter whitening products. Your dentist can recommend
              professional treatments, designed to minimise irritation while
              ensuring a comfortable and effective experience.
            </p>
          </div>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default TeethWhitening;
