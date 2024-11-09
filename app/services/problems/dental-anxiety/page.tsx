"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";
import QuestionsSection from "@/components/ui/questions-section";
const DentalAnxiety = () => {
  const [isReasonsImageVisible, setIsReasonsImageVisible] = useState(false);
  const [isEffectsImageVisible, setIsEffectsImageVisible] = useState(false);
  const [isManagementImageVisible, setIsManagementImageVisible] =
    useState(false);
  const [reasonsParallaxOffset, setReasonsParallaxOffset] = useState(0);
  const [effectsParallaxOffset, setEffectsParallaxOffset] = useState(0);
  const [managementParallaxOffset, setManagementParallaxOffset] = useState(0);

  const reasonsImageRef = useRef(null);
  const effectsImageRef = useRef(null);
  const managementImageRef = useRef(null);
  const reasonsParallaxRef = useRef(null);
  const effectsParallaxRef = useRef(null);
  const managementParallaxRef = useRef(null);

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
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Dental Anxiety Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-4xl mb-8 text-dental-accent1">
              Don&apos;t Suffer Through <br />
              <span className="font-bold">Dental Anxiety</span>
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 mx-auto">
              Feeling nervous before a dentist appointment? You&apos;re not
              alone. Dental anxiety is very common among people of all ages. No
              matter what&apos;s causing your anxiety, I&apos;m here to help you
              feel at ease. My goal is to ensure you can receive the treatment
              you need with confidence.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={reasonsImageRef}
        titleRef={reasonsParallaxRef}
        isImageVisible={isReasonsImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Common Reasons for Dental Anxiety"
        titleLineOne="Common Reasons for"
        titleLineTwo="Dental Anxiety"
        scrollY={reasonsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">✓</span>
              <span>
                Previous Negative Experiences: Past visits that didn&apos;t go
                well can create fear
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">✓</span>
              <span>
                Anticipation of Pain: Worrying that treatment will hurt
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">✓</span>
              <span>
                Fear of Judgment: Concern about how the dentist will perceive
                your dental habits
              </span>
            </li>
          </ul>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={effectsImageRef}
        titleRef={effectsParallaxRef}
        isImageVisible={isEffectsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Effects of Dental Anxiety"
        titleLineOne="How Does Dental Anxiety"
        titleLineTwo="Affect Oral Health?"
        isDark
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
        imageSrc="/placeholder.jpg"
        imageAlt="Managing Dental Anxiety"
        titleLineOne="Managing"
        titleLineTwo="Dental Anxiety"
        scrollY={managementParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4">
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
            <ul className="text-dental-accent1 max-w-3xl mx-auto space-y-2 text-center">
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

      {/* Common Questions Section */}
      <QuestionsSection
        theme="light"
        title={
          <>
            Dr. Mo Addresses Your
            <br />
            <span className="font-bold">
              Top Questions About Dental Anxiety
            </span>
          </>
        }
        questions={[
          {
            icon: "✦",
            title: "What can I do to lessen my dental anxiety?",
            content: (
              <>
                <p className="text-gray-600">
                  You don&apos;t have to face this alone! Here are some
                  strategies that may help:
                </p>
                <ul className="list-none mt-2">
                  <li>- Talk to your hygienist or dentist about your fears</li>
                  <li>
                    - Let us know if you need a break during your appointment
                  </li>
                  <li>
                    - Use breathing and mindfulness techniques to stay calm
                  </li>
                  <li>
                    - Bring a supportive friend or family member to your visit
                  </li>
                </ul>
              </>
            ),
          },
          {
            icon: "✦",
            title: "What are the symptoms of dental anxiety?",
            content: (
              <>
                <p>
                  Everyone experiences dental anxiety differently, but some
                  common symptoms include:
                </p>
                <ul className="list-none mt-2">
                  <li>- Low blood pressure</li>
                  <li>- Panic attacks during or before appointments</li>
                  <li>- Dizziness or faintness</li>
                  <li>- Heart palpitations</li>
                </ul>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default DentalAnxiety;
