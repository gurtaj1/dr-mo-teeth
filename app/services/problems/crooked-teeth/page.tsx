"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import HeroSection from "@/components/ui/hero-section";

const CrookedTeeth = () => {
  const [isCausesImageVisible, setIsCausesImageVisible] = useState(false);
  const [isDentalCareImageVisible, setIsDentalCareImageVisible] =
    useState(false);
  const [isTreatmentsImageVisible, setIsTreatmentsImageVisible] =
    useState(false);
  const [causesParallaxOffset, setCausesParallaxOffset] = useState(0);
  const [dentalCareParallaxOffset, setDentalCareParallaxOffset] = useState(0);
  const [treatmentsParallaxOffset, setTreatmentsParallaxOffset] = useState(0);

  const causesImageRef = useRef(null);
  const dentalCareImageRef = useRef(null);
  const treatmentsImageRef = useRef(null);
  const causesParallaxRef = useRef(null);
  const dentalCareParallaxRef = useRef(null);
  const treatmentsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: causesImageRef,
        onIntersect: () => setIsCausesImageVisible(true),
      },
      {
        ref: dentalCareImageRef,
        onIntersect: () => setIsDentalCareImageVisible(true),
      },
      {
        ref: treatmentsImageRef,
        onIntersect: () => setIsTreatmentsImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: causesParallaxRef,
        onScroll: (offset) => setCausesParallaxOffset(offset),
      },
      {
        ref: dentalCareParallaxRef,
        onScroll: (offset) => setDentalCareParallaxOffset(offset),
      },
      {
        ref: treatmentsParallaxRef,
        onScroll: (offset) => setTreatmentsParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection
        title={{
          lineOne: "What Causes a",
          lineTwo: "Crooked Smile?",
          isFirstLineBold: false,
        }}
        description="Crooked teeth refer to any misalignment in your smile, which can manifest as overcrowding, gaps from lost teeth, or other irregularities. While having crooked teeth isn't necessarily a problem in itself, it can lead to various health issues."
        bulletPoints={[
          "Chewing Problems: Misaligned teeth can affect your ability to chew properly, causing pain during meals and digestive issues.",
          "Oral Health Risks: Hard-to-clean areas increase risk of periodontal disease, damaging gums and bone structure.",
          "Speech Impact: Crooked teeth can affect speech clarity and pronunciation.",
          "Self-Esteem: Many people feel self-conscious about their misaligned smile.",
          "Treatment Options: We provide personalized treatments to help achieve a healthy, confident smile.",
        ]}
      />

      <AnimatedImageTextSection
        imageRef={causesImageRef}
        titleRef={causesParallaxRef}
        isImageVisible={isCausesImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Causes of Crooked Teeth"
        titleLineOne="What Causes"
        titleLineTwo="Crooked Teeth?"
        scrollY={causesParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 ">
          <p>
            Perfectly aligned teeth are rare, and many factors contribute to
            crookedness. Some common causes include:
          </p>
          <ul className="space-y-2">
            <li>
              • Genetics: Family history can play a significant role in tooth
              alignment.
            </li>
            <li>
              • Birth Defects: Certain conditions can affect the growth of
              teeth.
            </li>
            <li>
              • Thumb Sucking: This habit, especially in childhood, can lead to
              misalignment.
            </li>
            <li>
              • Poor Dental Care: Neglecting oral hygiene can lead to issues
              that affect alignment.
            </li>
            <li>
              • Facial Injury: Trauma to the face can shift teeth out of place.
            </li>
          </ul>
          <p>
            Understanding the underlying causes of your crooked teeth can help
            in finding effective solutions.
          </p>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={dentalCareImageRef}
        titleRef={dentalCareParallaxRef}
        isImageVisible={isDentalCareImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="When to See a Dentist"
        titleLineOne="When to See a Dentist"
        titleLineTwo="About Crooked Teeth"
        isDark
        scrollY={dentalCareParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 text-dental-accent1">
          <p>
            Crooked teeth may not be a serious issue on their own, but if you
            experience any of the following symptoms, it might be time to
            consult a dentist:
          </p>
          <ul className="space-y-2">
            <li>⭐ Difficulty chewing or oral pain during meals</li>
            <li>⭐ Cavities in hard-to-reach areas</li>
            <li>⭐ Speech difficulties</li>
            <li>⭐ Lower self-esteem or a tendency to hide your smile</li>
          </ul>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={treatmentsImageRef}
        titleRef={treatmentsParallaxRef}
        isImageVisible={isTreatmentsImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Treatment Process"
        titleLineOne="The Process for"
        titleLineTwo="Correcting Crooked Teeth"
        scrollY={treatmentsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6">
          <div>
            <ol className="space-y-2">
              <li>1. Request Your Appointment</li>
              <li>2. Get an Exam and Custom Treatment Plan</li>
              <li>3. Begin Treatment and Learn to Correct Related Habits</li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Treatment options for crooked teeth vary based on severity and may
              include:
            </h3>
            <ul className="space-y-2">
              <li>
                ⭐ Invisalign: Clear aligners that gradually straighten teeth
              </li>
              <li>⭐ Bonding: Reshape teeth for better alignment</li>
              <li>
                ⭐ Veneers: Thin shells that cover the front of teeth for a more
                uniform appearance
              </li>
            </ul>
          </div>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default CrookedTeeth;
