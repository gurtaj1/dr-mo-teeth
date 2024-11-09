"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";
import QuestionsSection from "@/components/ui/questions-section";

const TeethGrinding = () => {
  const [isTreatmentsImageVisible, setIsTreatmentsImageVisible] =
    useState(false);
  const [isShieldImageVisible, setIsShieldImageVisible] = useState(false);
  const [treatmentsParallaxOffset, setTreatmentsParallaxOffset] = useState(0);
  const [shieldParallaxOffset, setShieldParallaxOffset] = useState(0);

  const treatmentsImageRef = useRef(null);
  const shieldImageRef = useRef(null);
  const treatmentsParallaxRef = useRef(null);
  const shieldParallaxRef = useRef(null);

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
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-4xl mb-8">
              Stop Wearing your
              <br /> <span className="font-bold">Teeth Away</span>
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1">
              Bruxism is the grinding or clenching of teeth. The effects of
              teeth grinding, such as worn enamel, jaw pain, headaches, and even
              cracked teeth can be difficult to deal with. But don&apos;t worry,
              I&apos;m here to help.
            </p>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 mt-4">
              By focusing on the root causes of bruxism, I can provide lasting
              relief and prevent further damage to your teeth and overall oral
              health. My goal is to restore your smile, improve your quality of
              sleep, and enhance your well-being.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={shieldImageRef}
        titleRef={shieldParallaxRef}
        isImageVisible={isShieldImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Shield Against Teeth Grinding"
        titleLineOne="Your Shield Against"
        titleLineTwo="Teeth Grinding"
        scrollY={shieldParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 ">
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
        imageSrc="/placeholder.jpg"
        imageAlt="Dream Without Grinding"
        titleLineOne="We'll Help You"
        titleLineTwo="Dream Without Grinding"
        isDark
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

      <QuestionsSection
        theme="light"
        title={
          <>
            Common Questions About <br />{" "}
            <span className="font-bold">Teeth Grinding</span>
          </>
        }
        questions={[
          {
            icon: "✦",
            title: "What are the signs and symptoms of teeth grinding?",
            content: (
              <>
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
              </>
            ),
          },
          {
            icon: "✦",
            title: "Can teeth grinding cause permanent damage?",
            content:
              "Yes, if untreated, teeth grinding can lead to cracked teeth, receding gums, and even tooth loss. Early intervention and appropriate treatment are vital to prevent long-term issues.",
          },
          {
            icon: "✦",
            title: "Is teeth grinding preventable?",
            content:
              "In some cases, teeth grinding can be prevented or minimized. By identifying and addressing the underlying causes, using stress management techniques, and employing protective appliances, we can help reduce its occurrence.",
          },
        ]}
      />
    </div>
  );
};

export default TeethGrinding;
