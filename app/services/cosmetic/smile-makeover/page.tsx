"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/useIntersectionObservers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const SmileMakeover = () => {
  const [isHeroImageVisible, setIsHeroImageVisible] = useState(false);
  const [isProcessImageVisible, setIsProcessImageVisible] = useState(false);
  const [isBenefitsImageVisible, setIsBenefitsImageVisible] = useState(false);
  const [heroParallaxOffset, setHeroParallaxOffset] = useState(0);
  const [processParallaxOffset, setProcessParallaxOffset] = useState(0);
  const [benefitsParallaxOffset, setBenefitsParallaxOffset] = useState(0);

  const heroImageRef = useRef(null);
  const processImageRef = useRef(null);
  const benefitsImageRef = useRef(null);
  const heroParallaxRef = useRef(null);
  const processParallaxRef = useRef(null);
  const benefitsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: heroImageRef,
        onIntersect: () => setIsHeroImageVisible(true),
      },
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
        ref: heroParallaxRef,
        onScroll: (offset) => setHeroParallaxOffset(offset),
      },
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
      <AnimatedImageTextSection
        imageRef={heroImageRef}
        titleRef={heroParallaxRef}
        isImageVisible={isHeroImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Smile Makeover Hero"
        title={
          <>
            <span className="font-bold">Enhance</span> <br /> Your Current Smile
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={heroParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6">
          <p className="text-dental-accent1">
            If you&apos;re looking to improve your smile, porcelain veneers
            offer a quick and impactful solution for cosmetic concerns. Veneers
            can provide a faster and simpler way to achieve a beautifully
            aligned smile without the need for braces.
          </p>
          <div>
            <Button
              asChild
              size="lg"
              className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
            >
              <Link href="#book">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={processImageRef}
        titleRef={processParallaxRef}
        isImageVisible={isProcessImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Smile Makeover Process"
        title={
          <>
            <span className="font-bold">A Fresh Smile</span> <br /> In 2
            Appointments
          </>
        }
        titleColor="text-dental-navy"
        scrollY={processParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="font-bold mb-2">Appointment 1:</h3>
            <p>
              During your first appointment, we&apos;ll prepare your teeth for
              the veneers by removing a thin layer of enamel—approximately the
              thickness of a fingernail. After that, we&apos;ll take an
              impression of your smile and send it to our local dental lab to
              create your custom veneers.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Appointment 2:</h3>
            <p>
              In about 2 weeks, I shall securely attach your porcelain veneers.
              We&apos;ll start with a gentle cleaning of your teeth, then use a
              dental cement to bond the veneers in place. The result? Your new
              veneers will look and feel just like your natural teeth, but even
              more stunning!
            </p>
          </div>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={benefitsImageRef}
        titleRef={benefitsParallaxRef}
        isImageVisible={isBenefitsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Smile Makeover Benefits"
        title={
          <>
            Benefits of a<br />{" "}
            <span className="font-bold">Smile Makeover</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={benefitsParallaxOffset}
        scrollFactor={1}
      >
        <ul className="space-y-4 text-dental-accent1">
          <li>⭐ Quick results in just 2 appointments</li>
          <li>⭐ Natural-looking enhancement</li>
          <li>⭐ Minimal tooth preparation required</li>
          <li>⭐ Alternative to lengthy orthodontic treatment</li>
          <li>⭐ Customized to your desired smile</li>
        </ul>
      </AnimatedImageTextSection>
    </div>
  );
};

export default SmileMakeover;
