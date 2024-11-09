"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";

const CleaningsAndExams = () => {
  const [isExamImageVisible, setIsExamImageVisible] = useState(false);
  const [isCleaningImageVisible, setIsCleaningImageVisible] = useState(false);
  const [examParallaxOffset, setExamParallaxOffset] = useState(0);
  const [cleaningParallaxOffset, setCleaningParallaxOffset] = useState(0);

  const examImageRef = useRef(null);
  const cleaningImageRef = useRef(null);
  const examParallaxRef = useRef(null);
  const cleaningParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: examImageRef,
        onIntersect: () => setIsExamImageVisible(true),
      },
      {
        ref: cleaningImageRef,
        onIntersect: () => setIsCleaningImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: examParallaxRef,
        onScroll: (offset) => setExamParallaxOffset(offset),
      },
      {
        ref: cleaningParallaxRef,
        onScroll: (offset) => setCleaningParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Examination Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
              Dental Examination
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              A dental examination is a routine check-up that helps ensure your
              teeth and gums are healthy. During the exam, your dentist will
              carefully look at your mouth, teeth, and gums to check for any
              signs of cavities, gum disease, or other dental issues. They may
              also take X-rays to get a better view of what&apos;s happening
              below the surface.
            </p>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4">
              The exam is an important part of maintaining your oral health, as
              it allows your dentist to catch any problems early and provide
              recommendations for care or treatment. Regular examinations help
              you keep your smile healthy and prevent bigger issues down the
              road.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedImageTextSection
        imageRef={examImageRef}
        titleRef={examParallaxRef}
        isImageVisible={isExamImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Dental Examination Process"
        titleLineOne="What's Included in a"
        titleLineTwo="Dental Exam"
        scrollY={examParallaxOffset}
        scrollFactor={1}
      >
        <ul className="space-y-2">
          <li>✓ An assessment of your dental and medical history</li>
          <li>
            ✓ An extra oral and intra oral examination including all soft and
            hard tissues
          </li>
          <li>✓ A thorough check for any cancerous signs</li>
          <li>✓ X rays and an explanation of their findings</li>
          <li>✓ Diet history and how this will affect your teeth</li>
          <li>
            ✓ A risk assessment of your mouth for tooth wear, decay, gum disease
          </li>
          <li>✓ Treatment options including advantages and disadvantages</li>
          <li>✓ A bespoke treatment plan tailored for you</li>
          <li>✓ Oral hygiene instruction and advice</li>
          <li>✓ Recommendation for future care</li>
        </ul>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={cleaningImageRef}
        titleRef={cleaningParallaxRef}
        isImageVisible={isCleaningImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Scale and Polish"
        titleLineOne="Professional"
        titleLineTwo="Scale and Polish"
        isDark
        scrollY={cleaningParallaxOffset}
        scrollFactor={1}
      >
        <div className="space-y-6 text-dental-accent1">
          <p>
            A scale and polish is a dental cleaning procedure that helps keep
            your teeth and gums healthy. During this treatment, your dentist or
            hygienist will remove plaque and tartar build up from your teeth
            using special tools. This helps prevent gum disease and cavities.
          </p>
          <p>
            After scaling, they will polish your teeth with a gritty toothpaste
            to remove stains and leave them feeling smooth and clean. A scale
            and polish is an important part of your regular dental care routine
            and can help you maintain a bright smile and fresh breath!
          </p>
        </div>
      </AnimatedImageTextSection>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-4xl mb-4 text-dental-navy text-center">
              <span className="font-bold">Answers</span>
              <br />
              To Your Oral Hygiene Questions
            </h2>
          </AnimatedElement>
          <div className="w-0.5 h-8 bg-dental-accent1 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <AnimatedElement transitionSize>
              <div>
                <h3 className="text-xl font-bold mb-2 text-dental-navy flex items-center gap-2">
                  <span className="text-dental-accent1">✦</span>
                  Is it beneficial to have your teeth cleaned?
                </h3>
                <p className="text-gray-600">
                  Definitely! Regular dental cleanings are essential for
                  removing stubborn plaque and tartar that can harbour bacteria.
                  If not addressed, these build-ups can lead to tooth decay, gum
                  disease, and other serious dental issues.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement transitionSize>
              <div>
                <h3 className="text-xl font-bold mb-2 text-dental-navy flex items-center gap-2">
                  <span className="text-dental-accent1">✦</span>
                  Is a scale and polish painful?
                </h3>
                <p className="text-gray-600">
                  If it&apos;s been some time since your last scale and polish,
                  you might experience slight bleeding from your gums. However,
                  hygienists are gentle and will proceed at a pace that suits
                  your comfort level. If you feel any soreness afterward, an
                  over-the-counter pain reliever should help.
                </p>
              </div>
            </AnimatedElement>
            <div className="md:col-span-2">
              <AnimatedElement transitionSize>
                <h3 className="text-xl font-bold mb-2 text-dental-navy flex items-center gap-2">
                  <span className="text-dental-accent1">✦</span>
                  What occurs during a scale and polish?
                </h3>
                <p className="text-gray-600">
                  During your cleaning, your dental hygienist will perform a
                  thorough assessment of your gums, looking for any signs of
                  recession or periodontal pockets. They&apos;ll gently remove
                  plaque and tartar from around your gum line and between your
                  teeth. After that, we&apos;ll polish your teeth using a
                  specialized electric brush and finish by flossing. We also
                  conduct an oral cancer screening during each visit and may
                  suggest a prescription fluoride treatment or mouthwash if
                  you&apos;re prone to cavities or have sensitive teeth.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningsAndExams;
