"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/useIntersectionObservers";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const BrokenTeeth = () => {
  const [isDentalCareImageVisible, setIsDentalCareImageVisible] =
    useState(false);
  const [isHomeManagementImageVisible, setIsHomeManagementImageVisible] =
    useState(false);
  const [isTreatmentsImageVisible, setIsTreatmentsImageVisible] =
    useState(false);
  const [isQuestionsImageVisible, setIsQuestionsImageVisible] = useState(false);
  const [dentalCareParallaxOffset, setDentalCareParallaxOffset] = useState(0);
  const [homeManagementParallaxOffset, setHomeManagementParallaxOffset] =
    useState(0);
  const [treatmentsParallaxOffset, setTreatmentsParallaxOffset] = useState(0);
  const [questionsParallaxOffset, setQuestionsParallaxOffset] = useState(0);

  const dentalCareImageRef = useRef(null);
  const homeManagementImageRef = useRef(null);
  const treatmentsImageRef = useRef(null);
  const questionsImageRef = useRef(null);
  const dentalCareParallaxRef = useRef(null);
  const homeManagementParallaxRef = useRef(null);
  const treatmentsParallaxRef = useRef(null);
  const questionsParallaxRef = useRef(null);

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
      {
        ref: questionsImageRef,
        onIntersect: () => setIsQuestionsImageVisible(true),
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
          <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
            What Causes a Broken Tooth?
          </h1>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            A cracked, chipped, or broken tooth is a common dental issue that
            can be quite painful and lead to further problems like tooth decay
            and gum disease. Here are some common causes:
          </p>
          <ul className="text-dental-accent1 max-w-3xl mx-auto mt-4 space-y-2">
            <li>
              - Injury: A fall or blow to the face can easily damage a tooth.
            </li>
            <li>
              - Hard Foods: Biting into hard items, such as candy or ice, can
              cause chips or cracks.
            </li>
            <li>
              - Chewing Habits: Compulsive habits, like chewing ice or pens, can
              weaken teeth over time.
            </li>
            <li>
              - Bruxism: Grinding or clenching your teeth excessively can lead
              to damage.
            </li>
            <li>
              - Tooth Decay: Weakened teeth from decay are more likely to break.
            </li>
            <li>
              - Health Conditions: Certain health issues and medications can
              weaken tooth structure.
            </li>
          </ul>
          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
            >
              <Link href="#book">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={dentalCareImageRef}
        titleRef={dentalCareParallaxRef}
        isImageVisible={isDentalCareImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Poor Dental Care"
        title={
          <>
            Does Poor Dental Care <br />{" "}
            <span className="font-bold">Contribute to Chipped Teeth?</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={dentalCareParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-gray-600">
          While many broken teeth result from accidents, poor dental hygiene can
          make your teeth more vulnerable. Inconsistent brushing and flossing
          allow plaque and bacteria to build up, which can weaken enamel and
          lead to cavities. This makes your teeth more susceptible to damage. To
          help prevent broken teeth, maintain regular dental cleanings!
        </p>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={homeManagementImageRef}
        titleRef={homeManagementParallaxRef}
        isImageVisible={isHomeManagementImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Managing at Home"
        title={
          <>
            Managing a <br />{" "}
            <span className="font-bold">Broken Tooth at Home</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={homeManagementParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-4 text-dental-accent1">
          <p>
            If you have a broken tooth and can&apos;t see a dentist right away,
            here are some steps you can take at home to ease discomfort and
            protect your mouth:
          </p>
          <ul className="space-y-2">
            <li>
              ⭐ Pain Relief: Take ibuprofen to help reduce pain and
              inflammation
            </li>
            <li>
              ⭐ Ice Pack: Apply an ice pack to the outside of your face to
              reduce swelling
            </li>
            <li>
              ⭐ Rinse: Gargle with mouthwash or salt water to kill bacteria and
              help prevent infection
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
        imageSrc="/placeholder.svg"
        imageAlt="Treatment Process"
        title={
          <>
            What&apos;s the Dentist&apos;s Process for <br />
            <span className="font-bold">
              Repairing a Broken or Cracked Tooth?
            </span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={treatmentsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-gray-600">
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

      <AnimatedImageTextSection
        imageRef={questionsImageRef}
        titleRef={questionsParallaxRef}
        isImageVisible={isQuestionsImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Common Questions"
        title={
          <>
            Common Questions About <br />{" "}
            <span className="font-bold">Chipped Tooth Repair</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={questionsParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-dental-accent1">
          <div>
            <h3 className="text-xl font-bold mb-2">
              How do you know if your tooth is damaged?
            </h3>
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
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How do you prevent a broken tooth in the future?
            </h3>
            <p>
              After repairing a cracked or broken tooth, it&apos;s important to
              take steps to avoid future damage. Here&apos;s how:
            </p>
            <ul className="list-disc pl-6">
              <li>Maintain Good Oral Hygiene: Brush and floss regularly</li>
              <li>
                Schedule Regular Dental Check-Ups: Keep an eye on your tooth
                health
              </li>
              <li>
                Address Grinding or Clenching: Seek treatment for these habits
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
          </div>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default BrokenTeeth;
