"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";
import QuestionsSection from "@/components/ui/questions-section";

const BleedingGums = () => {
  const [isTreatmentImageVisible, setIsTreatmentImageVisible] = useState(false);
  const [treatmentParallaxOffset, setTreatmentParallaxOffset] = useState(0);

  const treatmentImageRef = useRef(null);
  const treatmentParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: treatmentImageRef,
        onIntersect: () => setIsTreatmentImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: treatmentParallaxRef,
        onScroll: (offset) => setTreatmentParallaxOffset(offset),
      },
    ],
  });

  const questions = [
    {
      icon: "✦",
      title: "Gum disease has 2 forms:",
      content: (
        <ol className="space-y-2">
          <li>
            <span className="font-bold">
              Inflammation of the gums (gingivitis):
            </span>{" "}
            This is the mildest form of gum disease and is reversible if treated
            with help from your dentist.
          </li>
          <li>
            <span className="font-bold">
              Inflammation of the ligament which holds the teeth in the bone
              (periodontitis):
            </span>{" "}
            This is a more severe form of gum disease and is irreversible.
            Without professional treatment periodontitis can result in tooth
            loss.
          </li>
        </ol>
      ),
    },
    {
      icon: "✦",
      title: "How can you prevent bleeding gums?",
      content: (
        <ul className="space-y-2">
          <li>
            <span className="text-dental-accent1">⭐</span> Brush your teeth
            twice a day for 2 minutes
          </li>
          <li>
            <span className="text-dental-accent1">⭐</span> Floss once a day
          </li>
          <li>
            <span className="text-dental-accent1">⭐</span> Avoid smoking,
            vaping, or chewing tobacco
          </li>
          <li>
            <span className="text-dental-accent1">⭐</span> Visit us every 6
            months for a professional exam and cleaning
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-4xl mb-8">
              My Gums
              <br /> <span className="font-bold">Are Bleeding</span>
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1">
              Bleeding gums can be caused by a variety of things such as
              brushing and flossing too vigorously. But if your gums won&apos;t
              stop bleeding, or they always look and feel swollen, it&apos;s
              likely a sign that you&apos;re suffering from one of the most
              common oral health issues which is gum disease.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={treatmentImageRef}
        titleRef={treatmentParallaxRef}
        isImageVisible={isTreatmentImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Treatment Steps"
        titleLineOne="Steps to Evaluate"
        titleLineTwo="Your Gum Health"
        scrollY={treatmentParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6">
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

      <QuestionsSection
        theme="dark"
        title={
          <>
            Common Questions About
            <br />
            <span className="font-bold">Bleeding Gums</span>
          </>
        }
        questions={questions}
      />
    </div>
  );
};

export default BleedingGums;
