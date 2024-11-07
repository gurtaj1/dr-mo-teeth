"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/useIntersectionObservers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";

const TeethGrinding = () => {
  const [isTreatmentsImageVisible, setIsTreatmentsImageVisible] =
    useState(false);
  const [isShieldImageVisible, setIsShieldImageVisible] = useState(false);
  const [isQuestionsImageVisible, setIsQuestionsImageVisible] = useState(false);
  const [treatmentsParallaxOffset, setTreatmentsParallaxOffset] = useState(0);
  const [shieldParallaxOffset, setShieldParallaxOffset] = useState(0);
  const [questionsParallaxOffset, setQuestionsParallaxOffset] = useState(0);

  const treatmentsImageRef = useRef(null);
  const shieldImageRef = useRef(null);
  const questionsImageRef = useRef(null);
  const treatmentsParallaxRef = useRef(null);
  const shieldParallaxRef = useRef(null);
  const questionsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: treatmentsImageRef,
        onIntersect: () => setIsTreatmentsImageVisible(true),
      },
      {
        ref: shieldImageRef,
        onIntersect: () => setIsShieldImageVisible(true),
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
        ref: shieldParallaxRef,
        onScroll: (offset) => setShieldParallaxOffset(offset),
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
              Wake Up Refreshed—Say Goodbye to Bruxism!
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              Are you tired of waking up with a sore jaw and worn teeth? I know
              how challenging it can be to deal with the effects of teeth
              grinding, such as worn enamel, jaw pain, headaches, and even
              cracked teeth. But don&apos;t worry—I&apos;m here to help!
            </p>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4">
              By focusing on the root causes of bruxism, I can provide lasting
              relief and prevent further damage to your teeth and overall oral
              health. My goal is to restore your smile, improve your quality of
              sleep, and enhance your well-being.
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
        imageRef={shieldImageRef}
        titleRef={shieldParallaxRef}
        isImageVisible={isShieldImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Shield Against Teeth Grinding"
        title={
          <>
            Your Shield Against <br />{" "}
            <span className="font-bold">Teeth Grinding</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={shieldParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 text-gray-600">
          <p>
            I offer a range of treatments designed to tackle teeth grinding from
            different angles, ensuring effective solutions tailored to your
            needs:
          </p>
          <ul className="space-y-2">
            <li>
              ⭐ <strong>Botox:</strong> This treatment relaxes the muscles that
              cause jaw clenching and grinding, helping to relieve tension and
              reduce the frequency and intensity of grinding episodes.
            </li>
            <li>
              ⭐ <strong>Splints:</strong> These custom-made oral appliances are
              worn during sleep to reposition your lower jaw, open up the
              airway, and decrease the chances of grinding, leading to better
              sleep quality.
            </li>
            <li>
              ⭐ <strong>Full Mouth Rehab:</strong> If you experience severe
              teeth grinding and significant dental damage, a full mouth
              reconstruction may be necessary. This comprehensive approach
              includes restorative treatments like dental implants, crowns, and
              bridges to restore your smile.
            </li>
          </ul>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={treatmentsImageRef}
        titleRef={treatmentsParallaxRef}
        isImageVisible={isTreatmentsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Dream Without Grinding"
        title={
          <>
            We&apos;ll Help You <br />{" "}
            <span className="font-bold">Dream Without Grinding</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={treatmentsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 text-dental-accent1">
          <p>
            I understand how important a good night&apos;s sleep is and how
            teeth grinding can disrupt your daily life. That&apos;s why I&apos;m
            dedicated to helping you sleep peacefully.
          </p>
          <p>
            With my expertise and personalized approach, I&apos;ll work closely
            with you to identify the underlying causes of your bruxism and
            provide effective, tailored treatments.
          </p>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={questionsImageRef}
        titleRef={questionsParallaxRef}
        isImageVisible={isQuestionsImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Common Questions About Teeth Grinding"
        title={
          <>
            Common Questions About <br />{" "}
            <span className="font-bold">Teeth Grinding</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={questionsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="text-xl font-bold mb-2">
              What are the signs and symptoms of teeth grinding?
            </h3>
            <p className="mb-2">
              Teeth grinding can show up in several ways, including:
            </p>
            <ul className="space-y-2">
              <li>⭐ Worn enamel</li>
              <li>⭐ Jaw pain</li>
              <li>⭐ Headaches</li>
              <li>⭐ Tooth sensitivity</li>
            </ul>
            <p className="mt-2">
              If you notice any of these symptoms, it&apos;s important to
              schedule an appointment with us.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Can teeth grinding cause permanent damage?
            </h3>
            <p>
              Yes, if untreated, teeth grinding can lead to cracked teeth,
              receding gums, and even tooth loss. Early intervention and
              appropriate treatment are vital to prevent long-term issues.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is teeth grinding preventable?
            </h3>
            <p>
              In some cases, teeth grinding can be prevented or minimized. By
              identifying and addressing the underlying causes, using stress
              management techniques, and employing protective appliances, we can
              help reduce its occurrence.
            </p>
          </div>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default TeethGrinding;
