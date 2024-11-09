"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";
import TitleSection from "@/components/ui/title-section";
const DentalImplants = () => {
  const [isImplantJourneyImageVisible, setIsImplantJourneyImageVisible] =
    useState(false);
  const [isBenefitsImageVisible, setIsBenefitsImageVisible] = useState(false);
  const [implantJourneyParallaxOffset, setImplantJourneyParallaxOffset] =
    useState(0);
  const [benefitsParallaxOffset, setBenefitsParallaxOffset] = useState(0);

  const implantJourneyImageRef = useRef(null);
  const benefitsImageRef = useRef(null);
  const implantJourneyParallaxRef = useRef(null);
  const benefitsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: implantJourneyImageRef,
        onIntersect: () => setIsImplantJourneyImageVisible(true),
      },
      {
        ref: benefitsImageRef,
        onIntersect: () => setIsBenefitsImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: implantJourneyParallaxRef,
        onScroll: (offset) => setImplantJourneyParallaxOffset(offset),
      },
      {
        ref: benefitsParallaxRef,
        onScroll: (offset) => setBenefitsParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Dental Implants Section */}
      <TitleSection
        titleText="Dental Implants"
        bodyText={[
          "Dental implants are a reliable way to replace missing teeth. These small titanium screws are placed into your jawbone, acting like the root of a tooth. Once they integrate with the bone, they provide a sturdy base for a custom-made crown that looks and functions like a natural tooth. Dental implants not only enhance your smile but also help restore your ability to chew and speak comfortably, making them a great long-term solution for tooth loss.",
        ]}
      />

      <AnimatedImageTextSection
        imageRef={implantJourneyImageRef}
        titleRef={implantJourneyParallaxRef}
        isImageVisible={isImplantJourneyImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Dental Implant Procedure"
        titleLineOne="Your Dental"
        titleLineTwo="Implant Journey:"
        scrollY={implantJourneyParallaxOffset}
        scrollFactor={1}
      >
        <p className="mb-4">
          I collaborate closely with you to detail every step of your treatment,
          making sure you know what to expect at each stage:
        </p>
        <ol className="space-y-2 ">
          <li>
            <strong>Step 1.</strong> Assessment and treatment planning. Bespoke
            solutions tailored for you using Advanced 3D imaging technology
          </li>
          <li>
            <strong>Step 2.</strong> Placement of the Implant
          </li>
          <li>
            <strong>Step 3.</strong> Healing phase: allowing for a comfortable
            recovery
          </li>
          <li>
            <strong>Step 4.</strong> Restoration Phase: Making the custom made
            teeth for your smile
          </li>
          <li>
            <strong>Step 5.</strong> Maintenance phase: Teaching you how to care
            for your implant
          </li>
        </ol>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={benefitsImageRef}
        titleRef={benefitsParallaxRef}
        isImageVisible={isBenefitsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Dental Implant Benefits"
        titleLineOne="Amazing Benefits of"
        titleLineTwo="Dental Implants:"
        isDark
        scrollY={benefitsParallaxOffset}
        scrollFactor={1}
      >
        <ul className="space-y-4 text-dental-accent1">
          <li>⭐ Strengthens your jawbone</li>
          <li>⭐ Promotes healthy gums</li>
          <li>⭐ Restores your ability to chew and speak</li>
          <li>⭐ Boosts your confidence to smile naturally again</li>
        </ul>
      </AnimatedImageTextSection>

      {/* Implant Retained Dentures Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold mb-6 text-dental-navy text-center">
              Dental Implant Retained Dentures
            </h2>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-center">
              Dental implant retained dentures are a removeable option to
              replace missing teeth, they are dentures supported by implants
              which act like screws placed in the jawbone. They are a secure and
              comfortable way to replace missing teeth.
            </p>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mt-4">
              Instead of relying on traditional dentures that sit on your gums,
              these dentures are anchored to dental implants placed in your
              jawbone with magnetic like attachments. The implants provide
              stability, preventing the dentures from shifting or slipping while
              eating or speaking.
            </p>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mt-4">
              This solution not only enhances your confidence but also improves
              your ability to enjoy your favourite foods. With implant retained
              dentures, you can smile and live life without the worry of loose
              or uncomfortable dentures.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Implant Retained Bridges Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold mb-6 text-dental-accent1 text-center">
              Dental Implant Retained Bridges
            </h2>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              Dental implant retained bridges are a fixed option of replacing
              multiple missing teeth. Instead of using traditional bridges that
              can damage the neighbouring teeth for support, these bridges are
              anchored securely to dental implants which act like screws placed
              in your jawbone. The implants provide a strong foundation,
              allowing the bridge to stay in place while you eat and speak.
              Dental implant retained bridges can replace multiple missing teeth
              in one area of your mouth and can also replace all your missing
              teeth if you have no teeth at all.
            </p>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default DentalImplants;
