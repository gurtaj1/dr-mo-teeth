"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";

const BadBreath = () => {
  const [isCausesImageVisible, setIsCausesImageVisible] = useState(false);
  const [isTreatmentsImageVisible, setIsTreatmentsImageVisible] =
    useState(false);
  const [isQuestionsImageVisible, setIsQuestionsImageVisible] = useState(false);
  const [isFaqImageVisible, setIsFaqImageVisible] = useState(false);
  const [causesParallaxOffset, setCausesParallaxOffset] = useState(0);
  const [treatmentsParallaxOffset, setTreatmentsParallaxOffset] = useState(0);
  const [questionsParallaxOffset, setQuestionsParallaxOffset] = useState(0);
  const [faqParallaxOffset, setFaqParallaxOffset] = useState(0);

  const causesImageRef = useRef(null);
  const treatmentsImageRef = useRef(null);
  const questionsImageRef = useRef(null);
  const faqImageRef = useRef(null);
  const causesParallaxRef = useRef(null);
  const treatmentsParallaxRef = useRef(null);
  const questionsParallaxRef = useRef(null);
  const faqParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: causesImageRef,
        onIntersect: () => setIsCausesImageVisible(true),
      },
      {
        ref: treatmentsImageRef,
        onIntersect: () => setIsTreatmentsImageVisible(true),
      },
      {
        ref: questionsImageRef,
        onIntersect: () => setIsQuestionsImageVisible(true),
      },
      {
        ref: faqImageRef,
        onIntersect: () => setIsFaqImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: causesParallaxRef,
        onScroll: (offset) => setCausesParallaxOffset(offset),
      },
      {
        ref: treatmentsParallaxRef,
        onScroll: (offset) => setTreatmentsParallaxOffset(offset),
      },
      {
        ref: questionsParallaxRef,
        onScroll: (offset) => setQuestionsParallaxOffset(offset),
      },
      {
        ref: faqParallaxRef,
        onScroll: (offset) => setFaqParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
              Why Does My Breath <br />
              Smell So Bad?
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              It&apos;s normal to have bad breath occasionally, for example
              after eating strong foods or when you wake up in the morning.
              However, about 25% of people experience chronic bad breath, known
              as halitosis. This type of bad breath can&apos;t be fixed just by
              brushing, flossing, drinking water, or chewing gum.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={causesImageRef}
        titleRef={causesParallaxRef}
        isImageVisible={isCausesImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Bad Breath Causes"
        title={
          <>
            Bad Breath Isn&apos;t Always a<br />{" "}
            <span className="font-bold">Dental Concern</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={causesParallaxOffset}
        scrollFactor={1}
      >
        <div className="text-gray-600">
          <p>
            Sometimes, bad breath can indicate a health issue, such as a sinus
            infection, acid reflux, or problems with your liver or kidneys. If
            you think this might be the case, it&apos;s important to contact
            your doctor. If you&apos;re unsure what the cause is, get in touch.
          </p>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={treatmentsImageRef}
        titleRef={treatmentsParallaxRef}
        isImageVisible={isTreatmentsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Bad Breath Treatment"
        title={
          <>
            <span className="font-bold">How to Fix</span> <br /> Bad Breath
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={treatmentsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-dental-accent1">
          <ol className="space-y-2">
            <li>
              <strong>Step 1.</strong> Request Your Appointment
            </li>
            <li>
              <strong>Step 2.</strong> Get an Exam, Diagnosis, and Custom
              Treatment Plan
            </li>
            <li>
              <strong>Step 3.</strong> Begin Treatment and Learn How to Prevent
              Bad Breath from Coming Back
            </li>
          </ol>

          <p>
            Your treatment will depend on what we find, so it&apos;s important
            to get a professional diagnosis to find the right solution!
          </p>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={questionsImageRef}
        titleRef={questionsParallaxRef}
        isImageVisible={isQuestionsImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Bad Breath FAQs"
        title={
          <>
            Common Treatments for <br />{" "}
            <span className="font-bold">Halitosis</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={questionsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-gray-600">
          <div>
            <ul className="space-y-2">
              <li>
                ⭐ Deep Cleaning: If gum disease is the cause of your bad
                breath, we may suggest a deep cleaning or other gum treatment
              </li>
              <li>
                ⭐ Filling or Root Canal: If you have tooth decay or infection,
                a filling or root canal may be needed to restore your tooth
              </li>
              <li>
                ⭐ Oral Appliance: If you breathe through your mouth at night,
                which can cause dry mouth and bad breath, a custom night guard
                might be the solution for you
              </li>
            </ul>
          </div>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={faqImageRef}
        titleRef={faqParallaxRef}
        isImageVisible={isFaqImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="More Bad Breath FAQs"
        title={
          <>
            Common Questions About <br />{" "}
            <span className="font-bold">Bad Breath</span>
          </>
        }
        backgroundColor="bg-dental-navy"
        titleColor="text-dental-accent1"
        scrollY={faqParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-dental-accent1">
          <div>
            <h3 className="text-xl font-bold mb-2">
              What&apos;s the best way to prevent bad breath?
            </h3>
            <ul className="space-y-2">
              <li>⭐ Brush and floss every day</li>
              <li>⭐ Use a tongue scraper after you brush</li>
              <li>⭐ Avoid cigarettes and tobacco products</li>
              <li>⭐ Drink lots of water and keep your mouth moist</li>
              <li>⭐ Breathe through your nose, not your mouth</li>
              <li>⭐ Visit the dentist every 6 months for a checkup!</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              What&apos;s the best mouthwash for bad breath?
            </h3>
            <p>
              If you suffer from chronic bad breath, a mouthwash won&apos;t
              solve the problem. In fact, mouthwash often dries out your mouth
              and makes your breath worse! Talk to your dentist and your
              hygienist about whether or not mouthwash is the best choice for
              you — and if so, which one.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Will gum help my bad breath?
            </h3>
            <p>
              While a stick of gum will provide a burst of freshness, it&apos;s
              not a lasting solution. In fact, gum and mints are often filled
              with sugar, which is bad for your teeth!
            </p>
          </div>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default BadBreath;
