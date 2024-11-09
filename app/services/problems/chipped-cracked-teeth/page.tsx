"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";
import QuestionsSection from "@/components/ui/questions-section";
import HeroSection from "@/components/ui/hero-section";

const BrokenTeeth = () => {
  const [isDentalCareImageVisible, setIsDentalCareImageVisible] =
    useState(false);
  const [isHomeManagementImageVisible, setIsHomeManagementImageVisible] =
    useState(false);
  const [isTreatmentsImageVisible, setIsTreatmentsImageVisible] =
    useState(false);
  const [dentalCareParallaxOffset, setDentalCareParallaxOffset] = useState(0);
  const [homeManagementParallaxOffset, setHomeManagementParallaxOffset] =
    useState(0);
  const [treatmentsParallaxOffset, setTreatmentsParallaxOffset] = useState(0);

  const dentalCareImageRef = useRef(null);
  const homeManagementImageRef = useRef(null);
  const treatmentsImageRef = useRef(null);
  const dentalCareParallaxRef = useRef(null);
  const homeManagementParallaxRef = useRef(null);
  const treatmentsParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: dentalCareImageRef,
        onIntersect: () => setIsDentalCareImageVisible(true),
      },
      {
        ref: homeManagementImageRef,
        onIntersect: () => setIsHomeManagementImageVisible(true),
      },
      {
        ref: treatmentsImageRef,
        onIntersect: () => setIsTreatmentsImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: dentalCareParallaxRef,
        onScroll: (offset) => setDentalCareParallaxOffset(offset),
      },
      {
        ref: homeManagementParallaxRef,
        onScroll: (offset) => setHomeManagementParallaxOffset(offset),
      },
      {
        ref: treatmentsParallaxRef,
        onScroll: (offset) => setTreatmentsParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection
        title={{
          lineOne: "What Causes a",
          lineTwo: "Broken Tooth?",
          isFirstLineBold: false,
        }}
        description="A cracked, chipped, or broken tooth is a common dental issue that can be quite painful and lead to further problems like tooth decay and gum disease. Here are some common causes:"
        bulletPoints={[
          "Injury: A fall or blow to the face can easily damage a tooth.",
          "Hard Foods: Biting into hard items, such as candy or ice, can cause chips or cracks.",
          "Chewing Habits: Compulsive habits, like chewing ice or pens, can weaken teeth over time.",
          "Bruxism: Grinding or clenching your teeth excessively can lead to damage.",
          "Tooth Decay: Weakened teeth from decay are more likely to break.",
          "Health Conditions: Certain health issues and medications can weaken tooth structure.",
        ]}
      />

      <AnimatedImageTextSection
        imageRef={dentalCareImageRef}
        titleRef={dentalCareParallaxRef}
        isImageVisible={isDentalCareImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Poor Dental Care"
        titleLineOne="Does Poor Dental Care"
        titleLineTwo="Contribute to Chipped Teeth?"
        scrollY={dentalCareParallaxOffset}
        scrollFactor={1}
      >
        <p>
          While many broken teeth result from accidents, poor dental hygiene can
          make your teeth more vulnerable. Inconsistent brushing and flossing
          allow plaque and bacteria to build up, which can weaken enamel and
          lead to cavities. This makes your teeth more susceptible to damage. To
          help prevent broken teeth, maintain regular dental check-ups!
        </p>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={homeManagementImageRef}
        titleRef={homeManagementParallaxRef}
        isImageVisible={isHomeManagementImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Managing at Home"
        titleLineOne="Managing a "
        titleLineTwo="Broken Tooth at Home"
        isDark
        scrollY={homeManagementParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4">
          <p>
            If you have a broken tooth and can&apos;t see a dentist right away,
            here are some steps you can take at home to ease discomfort and
            protect your mouth:
          </p>
          <ul className="space-y-2">
            <li>⭐ Pain Relief: To help reduce pain and inflammation</li>
            <li>
              ⭐ Rinse: With mouthwash or salt water to kill bacteria and help
              prevent infection
            </li>
            <li>
              ⭐ Dental Wax: Use dental wax to cover sharp edges on the broken
              tooth to protect your mouth
            </li>
          </ul>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={treatmentsImageRef}
        titleRef={treatmentsParallaxRef}
        isImageVisible={isTreatmentsImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Treatment Process"
        titleLineOne="What's the Dentist's Process for"
        titleLineTwo="Repairing a Broken or Cracked Tooth?"
        scrollY={treatmentsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6">
          <div>
            <ol className="space-y-2">
              <li>
                1. Request Your Appointment: Get in touch to schedule a visit
              </li>
              <li>
                2. Get an Exam: We&apos;ll examine your tooth and provide a
                diagnosis, along with a custom treatment plan
              </li>
              <li>
                3. Begin Treatment: Start your treatment and learn how to
                prevent future damage
              </li>
            </ol>
            <p className="mt-4">
              Your treatment will depend on the specific diagnosis, so a
              professional assessment is essential.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Common Treatments for Broken or Cracked Teeth:
            </h3>
            <ul className="space-y-2">
              <li>⭐ Dental Implants</li>
              <li>⭐ Dental Fillings</li>
              <li>⭐ Crowns</li>
              <li>⭐ Veneers</li>
            </ul>
          </div>
        </div>
      </AnimatedImageTextSection>

      <QuestionsSection
        theme="dark"
        title={
          <>
            Common Questions About
            <br />
            <span className="font-bold">Chipped Tooth Repair</span>
          </>
        }
        questions={[
          {
            icon: "✦",
            title: "How do you know if your tooth is damaged?",
            content: (
              <>
                <p>
                  Some tooth damage is obvious, like a visible chip, but other
                  issues may not be as clear. Signs of a damaged tooth include:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Increased sensitivity to hot or cold foods</li>
                  <li>Pain while chewing</li>
                  <li>Intermittent tooth pain that comes and goes</li>
                  <li>Swollen gums around the affected tooth</li>
                </ul>
              </>
            ),
          },
          {
            icon: "✦",
            title: "How do you prevent a broken tooth in the future?",
            content: (
              <>
                <p>
                  After repairing a cracked or broken tooth, it&apos;s important
                  to take steps to avoid future damage. Here&apos;s how:
                </p>
                <ul className="list-disc pl-6">
                  <li>Maintain Good Oral Hygiene: Brush and floss regularly</li>
                  <li>
                    Schedule Regular Dental Check-Ups: Keep an eye on your tooth
                    health
                  </li>
                  <li>
                    Address Grinding or Clenching: Seek treatment for these
                    habits
                  </li>
                  <li>
                    Avoid Using Your Teeth as Tools: Don&apos;t use them to hold
                    items or open packages
                  </li>
                  <li>
                    Wear a Mouthguard: Especially when playing sports to protect
                    your teeth
                  </li>
                </ul>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default BrokenTeeth;
