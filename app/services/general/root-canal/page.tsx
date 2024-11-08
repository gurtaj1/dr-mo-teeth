"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const RootCanal = () => {
  const [isSignsImageVisible, setIsSignsImageVisible] = useState(false);
  const [isTreatmentImageVisible, setIsTreatmentImageVisible] = useState(false);
  const [isHeroImageVisible, setIsHeroImageVisible] = useState(false);
  const [signsParallaxOffset, setSignsParallaxOffset] = useState(0);
  const [treatmentParallaxOffset, setTreatmentParallaxOffset] = useState(0);
  const [heroParallaxOffset, setHeroParallaxOffset] = useState(0);

  const signsImageRef = useRef(null);
  const treatmentImageRef = useRef(null);
  const heroImageRef = useRef(null);
  const signsParallaxRef = useRef(null);
  const treatmentParallaxRef = useRef(null);
  const heroParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: signsImageRef,
        onIntersect: () => setIsSignsImageVisible(true),
      },
      {
        ref: treatmentImageRef,
        onIntersect: () => setIsTreatmentImageVisible(true),
      },
      {
        ref: heroImageRef,
        onIntersect: () => setIsHeroImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: signsParallaxRef,
        onScroll: (offset) => setSignsParallaxOffset(offset),
      },
      {
        ref: treatmentParallaxRef,
        onScroll: (offset) => setTreatmentParallaxOffset(offset),
      },
      {
        ref: heroParallaxRef,
        onScroll: (offset) => setHeroParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="text-5xl text-center text-dental-accent1 bg-dental-navy pt-8">
        <h1>Root Canal Therapy</h1>
      </div>
      {/* Root Canal Section */}
      <AnimatedImageTextSection
        imageRef={heroImageRef}
        titleRef={heroParallaxRef}
        isImageVisible={isHeroImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Root Canal Treatment Hero"
        title={
          <>
            Stop the Pain and <br />{" "}
            <span className="font-bold">Save the Tooth</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={heroParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-dental-accent1 mb-8">
          Root canals often get a bad reputation, but they&apos;re one of the
          most misunderstood procedures in dentistry. While many people find
          them intimidating, a root canal is actually a highly effective
          treatment designed to alleviate pain and save your tooth.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
        >
          <Link href="#book">Get in touch</Link>
        </Button>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={treatmentImageRef}
        titleRef={treatmentParallaxRef}
        isImageVisible={isTreatmentImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Root Canal Treatment"
        title={
          <>
            Understanding <br />{" "}
            <span className="font-bold">Root Canal Treatment</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={treatmentParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-gray-600 mb-4">
          Root canal treatment is a dental procedure designed to save a tooth
          that is infected or severely damaged. During the treatment, your
          dentist will remove the infected nerve from inside the tooth, clean
          and disinfect the space, and then fill it with a special material to
          seal it.
        </p>
        <p className="text-gray-600">
          This helps prevent further infection and preserves the natural tooth,
          allowing you to continue using it for biting and chewing. While many
          people worry about root canals, they are often no more painful than
          getting a filling, and the procedure can relieve discomfort and help
          maintain your smile.
        </p>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={signsImageRef}
        titleRef={signsParallaxRef}
        isImageVisible={isSignsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Root Canal Signs and Symptoms"
        title={
          <>
            Common Questions About <br />{" "}
            <span className="font-bold">Root Canal Treatment</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={signsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-dental-accent1">
          <div>
            <h3 className="text-xl font-bold mb-2">
              How Long Does a Root Canal Take?
            </h3>
            <p>
              A root canal generally lasts between 60 to 90 minutes. In some
              cases, your treatment may be spread over two appointments.
              We&apos;ll ensure you know what to expect throughout the process.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              What Are the Signs of an Infected Tooth?
            </h3>
            <p className="mb-2">
              While only your dentist can accurately diagnose an infected tooth,
              here are some symptoms to watch for:
            </p>
            <ul className="space-y-2">
              <li>⭐ Persistent toothache</li>
              <li>⭐ Ongoing sensitivity to temperature changes</li>
              <li>⭐ Tenderness in the jawbone</li>
              <li>
                ⭐ Chips or fractures in your tooth (even minor breaks can lead
                to significant decay and infection)
              </li>
            </ul>
          </div>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default RootCanal;
