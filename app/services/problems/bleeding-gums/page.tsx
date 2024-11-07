"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/useIntersectionObservers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";

const BleedingGums = () => {
  const [isCausesImageVisible, setIsCausesImageVisible] = useState(false);
  const [isTreatmentImageVisible, setIsTreatmentImageVisible] = useState(false);
  const [isQuestionsImageVisible, setIsQuestionsImageVisible] = useState(false);
  const [causesParallaxOffset, setCausesParallaxOffset] = useState(0);
  const [treatmentParallaxOffset, setTreatmentParallaxOffset] = useState(0);
  const [questionsParallaxOffset, setQuestionsParallaxOffset] = useState(0);

  const causesImageRef = useRef(null);
  const treatmentImageRef = useRef(null);
  const questionsImageRef = useRef(null);
  const causesParallaxRef = useRef(null);
  const treatmentParallaxRef = useRef(null);
  const questionsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: causesImageRef,
        onIntersect: () => setIsCausesImageVisible(true),
      },
      {
        ref: treatmentImageRef,
        onIntersect: () => setIsTreatmentImageVisible(true),
      },
      {
        ref: questionsImageRef,
        onIntersect: () => setIsQuestionsImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: causesParallaxRef,
        onScroll: (offset) => setCausesParallaxOffset(offset),
      },
      {
        ref: treatmentParallaxRef,
        onScroll: (offset) => setTreatmentParallaxOffset(offset),
      },
      {
        ref: questionsParallaxRef,
        onScroll: (offset) => setQuestionsParallaxOffset(offset),
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
              Bleeding Gums
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              Bleeding gums can be caused by a variety of things such as
              brushing and flossing too vigorously. But if your gums won&apos;t
              stop bleeding, or they always look and feel swollen, it&apos;s
              likely a sign that you&apos;re suffering from one of the most
              common (but dangerous) oral health issues — gum disease.
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
        imageRef={causesImageRef}
        titleRef={causesParallaxRef}
        isImageVisible={isCausesImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Causes of Bleeding Gums"
        title={
          <>
            Why Gum Disease Causes <br />{" "}
            <span className="font-bold">Gums to Bleed</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={causesParallaxOffset}
        scrollFactor={1}
      >
        <ol className="space-y-2 text-gray-600">
          <li>
            <strong>Step 1.</strong> Gum disease starts when plaque accumulates
          </li>
          <li>
            <strong>Step 2.</strong> Plaque eventually hardens into tartar
          </li>
          <li>
            <strong>Step 3.</strong> Tartar irritates your gums, causing
            inflammation and swelling
          </li>
          <li>
            <strong>Step 4.</strong> Swollen gums are more likely to bleed
          </li>
        </ol>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={treatmentImageRef}
        titleRef={treatmentParallaxRef}
        isImageVisible={isTreatmentImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Treatment Steps"
        title={
          <>
            Steps to Evaluate <br />{" "}
            <span className="font-bold">Your Gum Health</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={treatmentParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-dental-accent1">
          <ol className="space-y-4">
            <li>
              <strong>Step 1.</strong> Request your appointment
            </li>
            <li>
              <strong>Step 2.</strong> Get an exam, diagnosis, and custom
              treatment plan
            </li>
            <li>
              <strong>Step 3.</strong> Begin treatment and learn how to stop
              bleeding gums
            </li>
          </ol>
          <p>
            Your treatment plan will depend on your diagnosis. It&apos;s
            important to get a professional diagnosis so you can find the right
            solution!
          </p>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={questionsImageRef}
        titleRef={questionsParallaxRef}
        isImageVisible={isQuestionsImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="FAQ About Bleeding Gums"
        title={
          <>
            Common Questions About <br />{" "}
            <span className="font-bold">Bleeding Gums</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={questionsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="text-xl font-bold mb-2">
              How can you prevent bleeding gums?
            </h3>
            <ul className="space-y-2">
              <li>⭐ Brush your teeth twice a day for 2 minutes</li>
              <li>⭐ Floss once a day</li>
              <li>⭐ Avoid smoking, vaping, or chewing tobacco</li>
              <li>
                ⭐ Visit us every 6 months for a professional exam and cleaning
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Can you stop bleeding gums at home?
            </h3>
            <p className="mb-2">
              Try these home remedies until you can see your dentist:
            </p>
            <ul className="space-y-2">
              <li>⭐ Hold an ice pack against your gums</li>
              <li>⭐ Try a warm salt water rinse</li>
              <li>
                ⭐ Hold a clean, damp gauze or wet tea bag against the area
              </li>
            </ul>
          </div>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default BleedingGums;
