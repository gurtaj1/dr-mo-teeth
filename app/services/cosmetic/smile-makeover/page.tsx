"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

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
      <div className="text-5xl text-center text-dental-accent1 bg-dental-navy pt-8">
        <h1>Smile Makeover</h1>
      </div>
      <AnimatedImageTextSection
        imageRef={heroImageRef}
        titleRef={heroParallaxRef}
        isImageVisible={isHeroImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Smile Makeover Hero"
        title={
          <>
            <span className="font-bold">Enhance</span> <br /> Your Current Smile
          </>
        }
        isDark
        scrollY={heroParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6">
          <p>
            A radiant, confident smile is one of the first things people notice.
            If you&apos;re unhappy with the appearance of your teeth, a Smile
            Makeover can provide the transformation you&apos;ve been dreaming
            of. Whether you&apos;re dealing with crooked, stained, chipped, or
            missing teeth, we offer customised solutions to help you achieve the
            beautiful smile you deserve. What is a Smile Makeover? A Smile
            Makeover is a comprehensive approach to improving the aesthetics of
            your smile. It combines various cosmetic dental treatments, tailored
            to your unique needs and goals. From teeth whitening to veneers,
            dental crowns, and orthodontics, a Smile Makeover can address a wide
            range of dental concerns, giving you a refreshed and youthful
            appearance.
          </p>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={processImageRef}
        titleRef={processParallaxRef}
        isImageVisible={isProcessImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Smile Makeover Process"
        title={
          <>
            Common Treatments in a <br />
            <span className="font-bold">Smile Makeover</span>
          </>
        }
        scrollY={processParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6">
          <p>
            Depending on your needs, a Smile Makeover may include one or more of
            the following procedures:
          </p>
          <ol className="space-y-2">
            <li>1. Teeth Whitening</li>
            <li>2. Porcelain Veneers</li>
            <li>3. Dental Crowns</li>
            <li>4. Clear Aligners</li>
            <li>5. Bonding</li>
            <li>6. Gum Contouring / Crown Lengthening</li>
            <li>7. Implants or Bridges</li>
          </ol>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={benefitsImageRef}
        titleRef={benefitsParallaxRef}
        isImageVisible={isBenefitsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Smile Makeover Journey"
        title={
          <>
            Your Smile Makeover Journey
            <br />
            <span className="font-bold">The Process</span>
          </>
        }
        isDark
        scrollY={benefitsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 text-dental-accent1">
          <ol className="space-y-4">
            <li>
              <strong>1. Initial Consultation</strong>
              <p>
                Every Smile Makeover begins with a thorough consultation. During
                this visit, we&apos;ll discuss your aesthetic goals, examine
                your teeth and gums, and determine which treatments are right
                for you.
              </p>
            </li>
            <li>
              <strong>2. Customized Treatment Plan</strong>
              <p>
                Once we have a clear understanding of your needs, we will create
                a customized treatment plan to achieve your desired results.
                This may involve a combination of services, and we will ensure
                that each procedure is designed to complement your overall
                goals.
              </p>
            </li>
            <li>
              <strong>3. The Makeover</strong>
              <p>
                With your treatment plan in place, we will begin the makeover
                process. Depending on the procedures involved, your smile
                makeover may be completed over multiple visits. Our team will
                keep you comfortable and informed every step of the way.
              </p>
            </li>
            <li>
              <strong>4. Post-Treatment Care</strong>
              <p>
                After your Smile Makeover, we&apos;ll provide detailed aftercare
                instructions to ensure that your new smile lasts. Regular
                check-ups will help maintain the beauty and function of your
                smile.
              </p>
            </li>
          </ol>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default SmileMakeover;
