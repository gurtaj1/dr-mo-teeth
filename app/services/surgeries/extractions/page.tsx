"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const DentalImplants = () => {
  const [isAnswer1Visible, setIsAnswer1Visible] = useState(false);
  const [isAnswer2Visible, setIsAnswer2Visible] = useState(false);
  const [isAnswer3Visible, setIsAnswer3Visible] = useState(false);
  const [isIVSedationImageVisible, setIsIVSedationImageVisible] =
    useState(false);
  const [ivSedationParallaxOffset, setIvSedationParallaxOffset] = useState(0);
  const [emergencyPainParallaxOffset, setEmergencyPainParallaxOffset] =
    useState(0);

  const answer1Ref = useRef(null);
  const answer2Ref = useRef(null);
  const answer3Ref = useRef(null);
  const ivSedationImageRef = useRef(null);
  const ivSedationParallaxRef = useRef(null);
  const emergencyPainParallaxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Determine which element is intersecting and update its visibility independently
          if (entry.target === answer1Ref.current && entry.isIntersecting) {
            setIsAnswer1Visible(true); // Transition the first element independently
            observer.unobserve(entry.target); // Stop observing to avoid repeated triggers
          } else if (
            entry.target === answer2Ref.current &&
            entry.isIntersecting
          ) {
            setIsAnswer2Visible(true); // Transition the second element independently
            observer.unobserve(entry.target); // Stop observing to avoid repeated triggers
          } else if (
            entry.target === answer3Ref.current &&
            entry.isIntersecting
          ) {
            setIsAnswer3Visible(true); // Transition the third element independently
            observer.unobserve(entry.target); // Stop observing to avoid repeated triggers
          } else if (
            entry.target === ivSedationImageRef.current &&
            entry.isIntersecting
          ) {
            setIsIVSedationImageVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Start observing when 10% of each element is visible
    );

    // Observe each individual element
    if (answer1Ref.current) observer.observe(answer1Ref.current);
    if (answer2Ref.current) observer.observe(answer2Ref.current);
    if (answer3Ref.current) observer.observe(answer3Ref.current);
    if (ivSedationImageRef.current)
      observer.observe(ivSedationImageRef.current);

    const parallaxObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const calculateOffset = () => {
              const rect = entry.target.getBoundingClientRect();
              const scrolled = rect.top;
              if (entry.target === ivSedationParallaxRef.current) {
                setIvSedationParallaxOffset(scrolled * 0.05);
              } else if (entry.target === emergencyPainParallaxRef.current) {
                setEmergencyPainParallaxOffset(scrolled * 0.05);
              }
            };

            window.addEventListener("scroll", calculateOffset);
            calculateOffset(); // Initial calculation

            return () => window.removeEventListener("scroll", calculateOffset);
          }
        });
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );

    if (ivSedationParallaxRef.current) {
      parallaxObserver.observe(ivSedationParallaxRef.current);
    }
    if (emergencyPainParallaxRef.current) {
      parallaxObserver.observe(emergencyPainParallaxRef.current);
    }

    return () => {
      if (answer1Ref.current) observer.unobserve(answer1Ref.current);
      if (answer2Ref.current) observer.unobserve(answer2Ref.current);
      if (answer3Ref.current) observer.unobserve(answer3Ref.current);
      if (ivSedationImageRef.current)
        observer.unobserve(ivSedationImageRef.current);
      if (ivSedationParallaxRef.current) {
        parallaxObserver.unobserve(ivSedationParallaxRef.current);
      }
      if (emergencyPainParallaxRef.current) {
        parallaxObserver.unobserve(emergencyPainParallaxRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Extractions Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
            Extractions
          </h1>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            Tooth extractions are performed in a manner to ensure your comfort
            and safety. First, the area around the tooth is numbed with local
            anaesthesia so you won&apos;t feel any pain during the procedure.
            Next, carefully loosening the tooth using special tools to gently
            remove it from its position. If the tooth is impacted or difficult
            to reach, the dentist may need to break it into smaller pieces and
            carefully remove some bone around the roots of the tooth for easier
            removal. After the extraction, the area is cleaned, and you are
            provided with care instructions to help you heal.
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
              <p className="text-gray-600">
                If you&apos;re experiencing pain and need a tooth extraction
                urgently, I&apos;ll prioritize your appointment and ensure you
                have a positive and efficient experience.
              </p>
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

      {/* Top Questions Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-dental-navy text-center">
            Dr. Mo addresses your top questions about tooth extractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div
              className="text-gray-600 text-center"
              ref={answer1Ref}
              style={{
                transform: isAnswer1Visible
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: isAnswer1Visible ? 1 : 0,
                transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
              }}
            >
              <strong>Do you remove wisdom teeth?</strong>
              <br />
              Absolutely! I treat patients of all ages who need wisdom tooth
              extractions. Not everyone requires this procedure, and I shall
              help you determine if removing your wisdom teeth are necessary for
              your long-term health.
            </div>
            <div
              className="text-gray-600 text-center"
              ref={answer2Ref}
              style={{
                transform: isAnswer2Visible
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: isAnswer2Visible ? 1 : 0,
                transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
              }}
            >
              <strong>Does a tooth extraction hurt?</strong>
              <br />I make sure you&apos;re completely numb and comfortable
              during the procedure. Afterward, I may prescribe pain medication
              to help manage any discomfort. An ice pack can also be used in the
              days following the extraction to reduce swelling.
            </div>
          </div>
          <div
            className="text-gray-600 max-w-3xl mx-auto text-center mt-8"
            ref={answer3Ref}
            style={{
              transform: isAnswer3Visible
                ? "translateY(0)"
                : "translateY(20px)",
              opacity: isAnswer3Visible ? 1 : 0,
              transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
            }}
          >
            <strong>
              Can I eat and drink immediately after the extraction?
            </strong>
            <br />I recommend sticking to soft foods for a few days following
            your surgery. Some good options include:
            <ul className="list-none mt-2">
              <li>- Pudding</li>
              <li>- Yogurt</li>
              <li>- Mashed potatoes and soft vegetables</li>
              <li>- Ice cream</li>
              <li>- Thin soups</li>
            </ul>
            <p className="mt-4">
              When drinking, avoid using a straw, as the suction can dislodge
              your sutures and impede the healing process. The same caution
              applies to smoking and vaping.
            </p>
          </div>
        </div>
      </section>

      {/* IV Sedation Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-dental-accent1 text-center">
            Intravenous (IV) Sedation
          </h2>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            IV sedation is a highly effective option for patients experiencing
            dental anxiety, allowing them to receive the necessary treatments in
            a relaxed and comfortable state. It involves administering sedative
            medication directly into the bloodstream, which helps patients feel
            calm and at ease during their dental procedures. Unlike general
            anaesthesia, IV sedation keeps patients conscious but deeply
            relaxed, enabling them to respond to questions and instructions
            while remaining unaware of the procedure itself. This can
            significantly reduce anxiety and fear associated with dental visits,
            making it an ideal solution for those who have difficulty coping
            with traditional dental treatments.
          </p>
        </div>
      </section>

      {/* Who Needs IV Sedation Section */}
      <AnimatedImageTextSection
        imageRef={ivSedationImageRef}
        titleRef={ivSedationParallaxRef}
        isImageVisible={isIVSedationImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="IV Sedation Patient"
        title={
          <>
            Who Needs <br /> <span className="font-bold">IV Sedation?</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={ivSedationParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-gray-600 mb-4">
          Intravenous Sedation can benefit people with:
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>• Dental anxiety</li>
          <li>• Fear of visiting the dentist</li>
          <li>• Overly sensitive gag reflex</li>
          <li>• Fear of needles</li>
          <li>• Extreme teeth sensitivity</li>
          <li>• Claustrophobia in the dental chair</li>
          <li>• Decreased sensitivity to local anaesthesia</li>
          <li>• Difficulty controlling movements</li>
          <li>• Special needs (physical, cognitive, or behavioural)</li>
        </ul>
      </AnimatedImageTextSection>

      {/* IV Sedation Process Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl mb-12 text-dental-accent1 text-center">
            <strong>What Happens Before, During and After IV Sedation?</strong>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-dental-accent1 text-2xl mb-4 text-center">
                Before
              </h3>
              <ul className="text-dental-accent1 space-y-3">
                <li>
                  • Checks will be done (e.g medical history), and measurements
                  (e.g blood pressure) to make sure its safe to do the sedation
                </li>
                <li>
                  • The procedure will be explained to you and any questions you
                  have will be answered
                </li>
                <li>
                  • Your dentist will inform you of the Do&apos;s and
                  Dont&apos;s in preparation for the sedation and give you and
                  your escort written information
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-dental-accent1 text-2xl mb-4 text-center">
                During
              </h3>
              <ul className="text-dental-accent1 space-y-3">
                <li>
                  • The dentist will explain the planned treatment and confirm
                  your understanding
                </li>
                <li>
                  • The dentist will again check your medical history, take
                  measurements and place monitoring equipment
                </li>
                <li>
                  • A small tube (cannula) is placed in your arm or hand for
                  sedative medication delivery
                </li>
                <li>
                  • Local anesthesia will be given and treatment completed while
                  sedated
                </li>
                <li>
                  • The dental team will monitor you closely throughout the
                  procedure
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-dental-accent1 text-2xl mb-4 text-center">
                After
              </h3>
              <ul className="text-dental-accent1 space-y-3">
                <li>
                  • You&apos;ll be taken to a recovery area where your escort
                  will wait
                </li>
                <li>• Most people spend about 30 minutes in recovery</li>
                <li>
                  • The cannula stays in place until you&apos;re fit to leave
                </li>
                <li>
                  • Once ready, you will be accompanied by your escort, driven
                  home and looked after
                </li>
                <li>
                  • Expect to feel sleepy and a bit clumsy; you won&apos;t be
                  able to leave until checked by the dentist
                </li>
              </ul>
            </div>
          </div>
          <p className="text-dental-accent1 text-center mt-8">
            If your anxious about dental treatment,{" "}
            <Link href="#book" className="underline hover:text-dental-accent2">
              book an appointment
            </Link>{" "}
            to see how I can help with IV Sedation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DentalImplants;
