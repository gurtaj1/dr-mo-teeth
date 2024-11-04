"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const DentalImplants = () => {
  const [isImplantJourneyImageVisible, setIsImplantJourneyImageVisible] =
    useState(false);
  const [isBenefitsImageVisible, setIsBenefitsImageVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const implantJourneyImageRef = useRef(null);
  const benefitsImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Determine which element is intersecting and update its visibility independently
          if (
            entry.target === implantJourneyImageRef.current &&
            entry.isIntersecting
          ) {
            setIsImplantJourneyImageVisible(true); // Transition the first element independently
            observer.unobserve(entry.target); // Stop observing to avoid repeated triggers
          } else if (
            entry.target === benefitsImageRef.current &&
            entry.isIntersecting
          ) {
            setIsBenefitsImageVisible(true); // Transition the second element independently
            observer.unobserve(entry.target); // Stop observing to avoid repeated triggers
          }
        });
      },
      { threshold: 0.1 } // Start observing when 10% of each element is visible
    );

    // Observe each individual element
    if (implantJourneyImageRef.current)
      observer.observe(implantJourneyImageRef.current);
    if (benefitsImageRef.current) observer.observe(benefitsImageRef.current);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (implantJourneyImageRef.current)
        observer.unobserve(implantJourneyImageRef.current);
      if (benefitsImageRef.current)
        observer.unobserve(benefitsImageRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Dental Implants Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
            Dental Implants
          </h1>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            Dental implants are a reliable way to replace missing teeth. These
            small titanium screws are placed into your jawbone, acting like the
            root of a tooth. Once they integrate with the bone, they provide a
            sturdy base for a custom-made crown that looks and functions like a
            natural tooth. Dental implants not only enhance your smile but also
            help restore your ability to chew and speak comfortably, making them
            a great long-term solution for tooth loss.
          </p>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4">
            I am committed to delivering the best dental implant process,
            ensuring a seamless journey.
          </p>
          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
            >
              <Link href="#book">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={implantJourneyImageRef}
        isImageVisible={isImplantJourneyImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Dental Implant Procedure"
        title={
          <>
            Your Dental <br />{" "}
            <span className="font-bold">Implant Journey</span>:
          </>
        }
        titleColor="text-dental-navy"
        scrollY={scrollY}
        scrollFactor={-0.05}
      >
        <p className="text-gray-600 mb-4">
          I collaborate closely with you to detail every step of your treatment,
          making sure you know what to expect at each stage:
        </p>
        <ol className="space-y-2 text-gray-600">
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
        isImageVisible={isBenefitsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Dental Implant Benefits"
        title={
          <>
            Amazing Benefits of <br />{" "}
            <span className="font-bold">Dental Implants</span>:
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={scrollY}
        scrollFactor={-0.025}
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
          <h2 className="text-3xl font-bold mb-6 text-dental-navy text-center">
            Dental Implant Retained Dentures
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Dental implant retained dentures are a removeable option to replace
            missing teeth, they are dentures supported by implants which act
            like screws placed in the jawbone. They are a secure and comfortable
            way to replace missing teeth.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mt-4">
            Instead of relying on traditional dentures that sit on your gums,
            these dentures are anchored to dental implants placed in your
            jawbone with magnetic like attachments. The implants provide
            stability, preventing the dentures from shifting or slipping while
            eating or speaking.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mt-4">
            This solution not only enhances your confidence but also improves
            your ability to enjoy your favourite foods. With implant retained
            dentures, you can smile and live life without the worry of loose or
            uncomfortable dentures.
          </p>
        </div>
      </section>

      {/* Implant Retained Bridges Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-dental-accent1 text-center">
            Dental Implant Retained Bridges
          </h2>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            Dental implant retained bridges are a fixed option of replacing
            multiple missing teeth. Instead of using traditional bridges that
            can damage the neighbouring teeth for support, these bridges are
            anchored securely to dental implants which act like screws placed in
            your jawbone. The implants provide a strong foundation, allowing the
            bridge to stay in place while you eat and speak. Dental implant
            retained bridges can replace multiple missing teeth in one area of
            your mouth and can also replace all your missing teeth if you have
            no teeth at all.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DentalImplants;
