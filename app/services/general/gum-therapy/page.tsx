"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const GumTherapy = () => {
  const [isGumTherapyImageVisible, setIsGumTherapyImageVisible] =
    useState(false);
  const [isTreatmentImageVisible, setIsTreatmentImageVisible] = useState(false);
  const [isIntroImageVisible, setIsIntroImageVisible] = useState(false);
  const [gumTherapyParallaxOffset, setGumTherapyParallaxOffset] = useState(0);
  const [treatmentParallaxOffset, setTreatmentParallaxOffset] = useState(0);
  const [introParallaxOffset, setIntroParallaxOffset] = useState(0);

  const gumTherapyImageRef = useRef(null);
  const treatmentImageRef = useRef(null);
  const introImageRef = useRef(null);
  const gumTherapyParallaxRef = useRef(null);
  const treatmentParallaxRef = useRef(null);
  const introParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: gumTherapyImageRef,
        onIntersect: () => setIsGumTherapyImageVisible(true),
      },
      {
        ref: treatmentImageRef,
        onIntersect: () => setIsTreatmentImageVisible(true),
      },
      {
        ref: introImageRef,
        onIntersect: () => setIsIntroImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: gumTherapyParallaxRef,
        onScroll: (offset) => setGumTherapyParallaxOffset(offset),
      },
      {
        ref: treatmentParallaxRef,
        onScroll: (offset) => setTreatmentParallaxOffset(offset),
      },
      {
        ref: introParallaxRef,
        onScroll: (offset) => setIntroParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="text-5xl text-center text-dental-accent1 bg-dental-navy pt-8">
        <h1>Gum Therapy</h1>
      </div>
      <AnimatedImageTextSection
        imageRef={introImageRef}
        titleRef={introParallaxRef}
        isImageVisible={isIntroImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Gum Disease Overview"
        title={
          <>
            Stop Your Teeth From
            <br /> <span className="font-bold">Falling Out</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={introParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-dental-accent1 mb-4">
          Gum disease treatment is a dental procedure aimed at improving the
          health of your gums and preventing further complications. Gum disease,
          also known as periodontal disease, occurs when bacteria build up in
          plaque and tartar, cause inflammation which in turn causes the gums to
          peel away from the teeth and the bone structure around the teeth to
          deteriorate making the teeth loose.
        </p>
        <p className="text-dental-accent1 mb-4">
          Treatment typically starts with a thorough cleaning to remove plaque
          and tartar from your teeth and below the gumline, often called scaling
          and root planing. In more advanced cases, your dentist may recommend
          additional therapies, such as antibiotics or surgical options.
        </p>
        <p className="text-dental-accent1 mb-6">
          The goal of gum disease treatment is to restore your gum health, and
          help maintain the supporting structures of the teeth so that they
          don&apos;t become loose and help you maintain a healthy smile for
          years to come.
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
        imageRef={gumTherapyImageRef}
        titleRef={gumTherapyParallaxRef}
        isImageVisible={isGumTherapyImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Gum Disease Treatment"
        title={
          <>
            Understanding <br /> <span className="font-bold">Gum Disease</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={gumTherapyParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-gray-600 mb-4">
          Early detection and treatment of gum disease is crucial. Here are the
          signs to watch for:
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>• Bleeding gums during brushing or flossing</li>
          <li>• Red, swollen, or tender gums</li>
          <li>• Receding gums</li>
          <li>• Persistent bad breath</li>
          <li>• Loose teeth or changes in bite</li>
        </ul>
      </AnimatedImageTextSection>
      <AnimatedImageTextSection
        imageRef={treatmentImageRef}
        titleRef={treatmentParallaxRef}
        isImageVisible={isTreatmentImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Gum Treatment Benefits"
        title={
          <>
            Benefits of <br /> <span className="font-bold">Gum Therapy</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={treatmentParallaxOffset}
        scrollFactor={1}
      >
        <ul className="space-y-4 text-dental-accent1">
          <li>⭐ Prevents tooth loss</li>
          <li>⭐ Reduces inflammation and bleeding</li>
          <li>⭐ Eliminates bad breath</li>
          <li>⭐ Protects overall oral health</li>
          <li>⭐ Maintains healthy bone structure</li>
        </ul>
      </AnimatedImageTextSection>
    </div>
  );
};

export default GumTherapy;
