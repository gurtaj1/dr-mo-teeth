"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedElement from "@/components/ui/animated-element";
import QuestionsSection from "@/components/ui/questions-section";
import TitleSection from "@/components/ui/title-section";
const Extractions = () => {
  const [emergencyPainParallaxOffset, setEmergencyPainParallaxOffset] =
    useState(0);
  const emergencyPainParallaxRef = useRef(null);

  useIntersectionObservers({
    parallaxTargets: [
      {
        ref: emergencyPainParallaxRef,
        onScroll: (offset) => setEmergencyPainParallaxOffset(offset),
      },
    ],
  });

  const questions = [
    {
      icon: "✦",
      title: "Do you remove wisdom teeth?",
      content:
        "Absolutely! I treat patients of all ages who need wisdom tooth extractions. Not everyone requires this procedure, and I shall help you determine if removing your wisdom teeth are necessary for your long-term health.",
    },
    {
      icon: "✦",
      title: "Does a tooth extraction hurt?",
      content:
        "I make sure you're completely numb and comfortable during the procedure. Afterward, I may prescribe pain medication to help manage any discomfort. An ice pack can also be used in the days following the extraction to reduce swelling.",
    },
    {
      icon: "✦",
      title: "Can I eat and drink immediately after the extraction?",
      content: (
        <>
          <p>
            I recommend sticking to soft foods for a few days following your
            surgery. Some good options include:
          </p>
          <ul className="list-none mt-2">
            <li>- Pudding</li>
            <li>- Yogurt</li>
            <li>- Soft vegetables</li>
            <li>- Ice cream</li>
            <li>- Thin soups</li>
          </ul>
          <p className="mt-4">
            When drinking, avoid using a straw, as the suction can dislodge your
            sutures and impede the healing process. The same caution applies to
            smoking and vaping.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Extractions Section */}
      <TitleSection
        titleText="Extractions"
        bodyText={[
          "Tooth extractions are performed in a manner to ensure your comfort and safety. First, the area around the tooth is numbed with local anaesthesia so you won't feel any pain during the procedure. Next, carefully loosening the tooth using special tools to gently remove it from its position. If the tooth is impacted or difficult to reach, the dentist may need to break it into smaller pieces and carefully remove some bone around the roots of the tooth for easier removal. After the extraction, the area is cleaned, and you are provided with care instructions to help you heal.",
        ]}
      />

      {/* Emergency Pain Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col">
            <div className="w-full">
              <h2
                ref={emergencyPainParallaxRef}
                className="text-3xl mb-6 text-dental-navy"
                style={{
                  transform: `translateY(${emergencyPainParallaxOffset}px)`,
                }}
              >
                Are You in Pain? <br />{" "}
                <span className="font-bold">Get Help ASAP</span>
              </h2>
              <p className="text-gray-600 mb-8">
                If you&apos;re experiencing pain and need a tooth extraction
                urgently, I&apos;ll prioritize your appointment and ensure you
                have a positive and efficient experience.
              </p>
              <AnimatedElement transitionSize>
                <Button
                  asChild
                  size="lg"
                  className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
                >
                  <Link href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com">
                    Book an Emergency Appointment
                  </Link>
                </Button>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons for Extraction Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl mb-12 text-dental-accent1 text-center">
            <strong>Reasons for a Tooth Extraction </strong>
            <br />
            May Include:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-dental-accent1 text-4xl mb-4">
                <i className="fas fa-virus"></i>
              </div>
              <p className="text-dental-accent1">Infected or abscessed tooth</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-dental-accent1 text-4xl mb-4">
                <i className="fas fa-tooth"></i>
              </div>
              <p className="text-dental-accent1">
                Broken or severely damaged teeth
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-dental-accent1 text-4xl mb-4">
                <i className="fas fa-teeth"></i>
              </div>
              <p className="text-dental-accent1">
                Problems caused by wisdom teeth
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-dental-accent1 text-4xl mb-4">
                <i className="fas fa-arrows-alt-h"></i>
              </div>
              <p className="text-dental-accent1">Overcrowding in the mouth</p>
            </div>
          </div>
        </div>
      </section>

      <QuestionsSection
        theme="light"
        title={
          <>
            Dr. Mo Addresses Your
            <br />
            <span className="font-bold">
              Top Questions About Tooth Extractions
            </span>
          </>
        }
        questions={questions}
      />
    </div>
  );
};

export default Extractions;
