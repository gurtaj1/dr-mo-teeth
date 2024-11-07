"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/useIntersectionObservers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

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
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
            Why Crooked Teeth Can Be a Dental Concern
          </h1>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            Crooked teeth refer to any misalignment in your smile, which can
            manifest as overcrowding, gaps from lost teeth, or other
            irregularities. While having crooked teeth isn&apos;t necessarily a
            problem in itself, it can lead to various health issues.
          </p>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4">
            Misaligned teeth can affect your ability to chew properly,
            potentially causing pain during meals and leading to digestive
            issues. Additionally, they may create hard-to-clean areas,
            increasing the risk of periodontal disease, which can damage your
            gums and bone structure. Crooked teeth can also impact your speech
            and may lower your self-esteem, making you feel self-conscious about
            your smile.
          </p>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4">
            I provide personalised treatments to help you correct crooked teeth
            and achieve a healthy, confident smile.
          </p>
          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
            >
              <Link href="#book">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={causesImageRef}
        titleRef={causesParallaxRef}
        isImageVisible={isCausesImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Causes of Crooked Teeth"
        title={
          <>
            What Causes <br /> <span className="font-bold">Crooked Teeth?</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={causesParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 text-gray-600">
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
        imageSrc="/placeholder.svg"
        imageAlt="When to See a Dentist"
        title={
          <>
            When to See a Dentist <br />{" "}
            <span className="font-bold">About Crooked Teeth</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
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
        imageSrc="/placeholder.svg"
        imageAlt="Treatment Process"
        title={
          <>
            The Process for <br />
            <span className="font-bold">Correcting Crooked Teeth</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={treatmentsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-gray-600">
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
