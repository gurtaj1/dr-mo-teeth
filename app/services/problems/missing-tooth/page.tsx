"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/useIntersectionObservers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const MissingTooth = () => {
  const [isTreatmentsImageVisible, setIsTreatmentsImageVisible] =
    useState(false);
  const [isOptionsImageVisible, setIsOptionsImageVisible] = useState(false);
  const [isQuestionsImageVisible, setIsQuestionsImageVisible] = useState(false);
  const [treatmentsParallaxOffset, setTreatmentsParallaxOffset] = useState(0);
  const [optionsParallaxOffset, setOptionsParallaxOffset] = useState(0);
  const [questionsParallaxOffset, setQuestionsParallaxOffset] = useState(0);

  const treatmentsImageRef = useRef(null);
  const optionsImageRef = useRef(null);
  const questionsImageRef = useRef(null);
  const treatmentsParallaxRef = useRef(null);
  const optionsParallaxRef = useRef(null);
  const questionsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: treatmentsImageRef,
        onIntersect: () => setIsTreatmentsImageVisible(true),
      },
      {
        ref: optionsImageRef,
        onIntersect: () => setIsOptionsImageVisible(true),
      },
      {
        ref: questionsImageRef,
        onIntersect: () => setIsQuestionsImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: treatmentsParallaxRef,
        onScroll: (offset) => setTreatmentsParallaxOffset(offset),
      },
      {
        ref: optionsParallaxRef,
        onScroll: (offset) => setOptionsParallaxOffset(offset),
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
          <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
            Smile Again with Confidence
          </h1>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            Losing teeth can be a tough experience, affecting not just your oral
            health but also your everyday life. If you&apos;re missing teeth,
            you might find it hard to chew certain foods, which can impact your
            nutrition. Speaking clearly could become a challenge, and you might
            feel self-conscious about your smile.
          </p>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4">
            I understand how missing teeth can affect your life, which is why I
            offer effective treatment options to help you restore your smile and
            confidence. Together, we&apos;ll find the best solution for your
            unique needs.
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
        imageRef={treatmentsImageRef}
        titleRef={treatmentsParallaxRef}
        isImageVisible={isTreatmentsImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Renewing Your Smile"
        title={
          <>
            Renewing Your <br />{" "}
            <span className="font-bold">Smile&apos;s Functionality</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={treatmentsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 text-gray-600">
          <p>
            At Jackson Family Dental, we provide a range of treatments for
            missing teeth, including dental implants, dentures, and bridges. We
            know that everyone has different needs, so we take the time to
            assess your oral health and listen to your concerns to determine the
            best treatment for you.
          </p>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={optionsImageRef}
        titleRef={optionsParallaxRef}
        isImageVisible={isOptionsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Treatment Options"
        title={
          <>
            Your Treatment <br /> <span className="font-bold">Options</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={optionsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-dental-accent1">
          <div>
            <h3 className="text-xl font-bold mb-2">Dental Implants</h3>
            <p>
              Dental implants are a popular and effective way to replace missing
              teeth. They consist of a titanium post that is placed in your
              jawbone, where it fuses over time. This creates a strong
              foundation for a custom-made crown that looks and feels like your
              natural teeth.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Dentures</h3>
            <p>
              Dentures are removable appliances that are tailored to fit your
              mouth and replace missing teeth. They can help you regain your
              ability to eat and speak comfortably.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Bridges</h3>
            <p>
              Bridges are fixed appliances that attach to your remaining teeth
              to fill the gap left by one or more missing teeth. They restore
              the functionality of your smile and enhance its appearance.
            </p>
          </div>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={questionsImageRef}
        titleRef={questionsParallaxRef}
        isImageVisible={isQuestionsImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Common Questions"
        title={
          <>
            Common Questions About <br />{" "}
            <span className="font-bold">Missing Teeth</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={questionsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="text-xl font-bold mb-2">
              What causes missing teeth?
            </h3>
            <p>Missing teeth can result from various factors, including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Tooth decay</li>
              <li>Gum disease</li>
              <li>Trauma</li>
              <li>Ageing</li>
            </ul>
            <p className="mt-2">
              Poor dental hygiene and lifestyle habits like smoking can also
              lead to tooth loss.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              What are the consequences of missing teeth?
            </h3>
            <p>
              Missing teeth can make it difficult to chew and speak properly. It
              can also lead to bone loss in the jaw and changes in your facial
              appearance. Most importantly, it can affect your self-confidence
              and overall quality of life, which is why seeking tooth
              replacement treatment is important.
            </p>
          </div>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default MissingTooth;
