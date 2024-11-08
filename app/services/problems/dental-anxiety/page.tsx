"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";

const DentalAnxiety = () => {
  const [isReasonsImageVisible, setIsReasonsImageVisible] = useState(false);
  const [isEffectsImageVisible, setIsEffectsImageVisible] = useState(false);
  const [isManagementImageVisible, setIsManagementImageVisible] =
    useState(false);
  const [isQuestionsImageVisible, setIsQuestionsImageVisible] = useState(false);
  const [reasonsParallaxOffset, setReasonsParallaxOffset] = useState(0);
  const [effectsParallaxOffset, setEffectsParallaxOffset] = useState(0);
  const [managementParallaxOffset, setManagementParallaxOffset] = useState(0);
  const [questionsParallaxOffset, setQuestionsParallaxOffset] = useState(0);

  const reasonsImageRef = useRef(null);
  const effectsImageRef = useRef(null);
  const managementImageRef = useRef(null);
  const questionsImageRef = useRef(null);
  const reasonsParallaxRef = useRef(null);
  const effectsParallaxRef = useRef(null);
  const managementParallaxRef = useRef(null);
  const questionsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: reasonsImageRef,
        onIntersect: () => setIsReasonsImageVisible(true),
      },
      {
        ref: effectsImageRef,
        onIntersect: () => setIsEffectsImageVisible(true),
      },
      {
        ref: managementImageRef,
        onIntersect: () => setIsManagementImageVisible(true),
      },
      {
        ref: questionsImageRef,
        onIntersect: () => setIsQuestionsImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: reasonsParallaxRef,
        onScroll: (offset) => setReasonsParallaxOffset(offset),
      },
      {
        ref: effectsParallaxRef,
        onScroll: (offset) => setEffectsParallaxOffset(offset),
      },
      {
        ref: managementParallaxRef,
        onScroll: (offset) => setManagementParallaxOffset(offset),
      },
      {
        ref: questionsParallaxRef,
        onScroll: (offset) => setQuestionsParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Dental Anxiety Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
              Don&apos;t Suffer Through Dental Anxiety
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              Feeling nervous before a dentist appointment? You&apos;re not
              alone—dental anxiety is very common among people of all ages. No
              matter what&apos;s causing your anxiety, I&apos;m here to help you
              feel at ease. My goal is to ensure you can receive the treatment
              you need with confidence.
            </p>
          </AnimatedElement>
          <AnimatedElement>
            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
              >
                <Link href="#book">Let&apos;s Talk About Your Concerns</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={reasonsImageRef}
        titleRef={reasonsParallaxRef}
        isImageVisible={isReasonsImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Common Reasons for Dental Anxiety"
        title={
          <>
            Common Reasons for <br />{" "}
            <span className="font-bold">Dental Anxiety</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={reasonsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 text-gray-600">
          <ul className="space-y-2">
            <li>
              ✓ Previous Negative Experiences: Past visits that didn&apos;t go
              well can create fear
            </li>
            <li>✓ Anticipation of Pain: Worrying that treatment will hurt</li>
            <li>
              ✓ Fear of Judgment: Concern about how the dentist will perceive
              your dental habits
            </li>
          </ul>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={effectsImageRef}
        titleRef={effectsParallaxRef}
        isImageVisible={isEffectsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Effects of Dental Anxiety"
        title={
          <>
            How Does Dental Anxiety <br />{" "}
            <span className="font-bold">Affect Oral Health?</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={effectsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 text-dental-accent1">
          <p>
            While dental anxiety itself won&apos;t cause cavities, it can lead
            to missed appointments and untreated issues. Many patients avoid
            routine check-ups or necessary treatments because of their anxiety,
            which can cause dental problems to worsen and require more extensive
            care later on.
          </p>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={managementImageRef}
        titleRef={managementParallaxRef}
        isImageVisible={isManagementImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Managing Dental Anxiety"
        title={
          <>
            Managing <br /> <span className="font-bold">Dental Anxiety</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={managementParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 text-gray-600">
          <p>
            If you&apos;re feeling anxious about your dental visit, please let
            the team know before your appointment or when you arrive. I have
            experience working with patients who have dental anxiety, and
            I&apos;m dedicated to making you feel as comfortable as possible.
          </p>
          <p>
            Not ready to schedule an appointment yet? That&apos;s okay, I
            understand it can be a big step, especially if it&apos;s been a
            while since your last visit. Reach out so I can answer your
            questions and help ease your concerns.
          </p>
        </div>
      </AnimatedImageTextSection>

      {/* How I Help Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold mb-6 text-dental-accent1 text-center">
              How I Help You Through Dental Anxiety
            </h2>
          </AnimatedElement>
          <AnimatedElement>
            <ul className="text-dental-accent1 max-w-3xl mx-auto space-y-2">
              <li>
                • No-Judgment Appointments: Feel free to discuss your concerns
                openly
              </li>
              <li>
                • Thorough Answers: addressing all your questions and fears
              </li>
              <li>
                • Numbing Options: use anaesthetics to minimize discomfort
              </li>
              <li>
                • Comfortable Environment: the surgery is designed to feel
                soothing and welcoming
              </li>
              <li>
                • Flexible Payment Options: providing various ways to manage
                costs
              </li>
            </ul>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={questionsImageRef}
        titleRef={questionsParallaxRef}
        isImageVisible={isQuestionsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Common Questions About Dental Anxiety"
        title={
          <>
            Common Questions About <br />{" "}
            <span className="font-bold">Dental Anxiety</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={questionsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="font-bold mb-2">
              What can I do to lessen my dental anxiety?
            </h3>
            <p>
              You don&apos;t have to face this alone! Here are some strategies
              that may help:
            </p>
            <ul className="space-y-2 mt-2">
              <li>• Talk to your hygienist or dentist about your fears</li>
              <li>• Let us know if you need a break during your appointment</li>
              <li>• Use breathing and mindfulness techniques to stay calm</li>
              <li>
                • Bring a supportive friend or family member to your visit
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">
              What are the symptoms of dental anxiety?
            </h3>
            <p>
              Everyone experiences dental anxiety differently, but some common
              symptoms include:
            </p>
            <ul className="space-y-2 mt-2">
              <li>• Low blood pressure</li>
              <li>• Panic attacks during or before appointments</li>
              <li>• Dizziness or faintness</li>
              <li>• Heart palpitations</li>
            </ul>
          </div>
        </div>
      </AnimatedImageTextSection>

      {/* Dangers Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold mb-6 text-dental-accent1 text-center">
              What are the dangers of dental anxiety?
            </h2>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              The main risk is neglecting your oral health due to missed
              appointments, which can lead to:
            </p>
          </AnimatedElement>
          <AnimatedElement>
            <ul className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4 space-y-2">
              <li>• Tooth loss</li>
              <li>• Cavities</li>
              <li>• Gum disease</li>
              <li>• Bone loss</li>
            </ul>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-6">
              Your oral health matters, and I&apos;m here to help you manage any
              anxiety you may have so you can get the care you need!
            </p>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default DentalAnxiety;
