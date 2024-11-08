"use client";

import { useState, useRef } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedElement from "@/components/ui/animated-element";
import AnimatedImageTextSection from "@/components/ui/animated-image-text-section";
import Link from "next/link";

export default function IVSedationPage() {
  const [isIVSedationImageVisible, setIsIVSedationImageVisible] =
    useState(false);
  const [ivSedationParallaxOffset, setIvSedationParallaxOffset] = useState(0);

  const ivSedationImageRef = useRef(null);
  const ivSedationParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: ivSedationImageRef,
        onIntersect: () => setIsIVSedationImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: ivSedationParallaxRef,
        onScroll: (offset) => setIvSedationParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white">
      {/* IV Sedation Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold mb-6 text-dental-accent1 text-center">
              Intravenous (IV) Sedation
            </h2>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              IV sedation is a highly effective option for patients experiencing
              dental anxiety, allowing them to receive the necessary treatments
              in a relaxed and comfortable state. It involves administering
              sedative medication directly into the bloodstream, which helps
              patients feel calm and at ease during their dental procedures.
              Unlike general anaesthesia, IV sedation keeps patients conscious
              but deeply relaxed, enabling them to respond to questions and
              instructions while remaining unaware of the procedure itself. This
              can significantly reduce anxiety and fear associated with dental
              visits, making it an ideal solution for those who have difficulty
              coping with traditional dental treatments.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Who Needs IV Sedation Section */}
      <AnimatedImageTextSection
        imageRef={ivSedationImageRef}
        titleRef={ivSedationParallaxRef}
        isImageVisible={isIVSedationImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
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
          <AnimatedElement>
            <h2 className="text-3xl mb-12 text-dental-accent1 text-center">
              <strong>
                What Happens Before, During and After IV Sedation?
              </strong>
            </h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <AnimatedElement>
                <h3 className="text-dental-accent1 text-2xl mb-4 text-center">
                  Before
                </h3>
                <ul className="text-dental-accent1 space-y-3">
                  <li>
                    • Checks will be done (e.g medical history), and
                    measurements (e.g blood pressure) to make sure its safe to
                    do the sedation
                  </li>
                  <li>
                    • The procedure will be explained to you and any questions
                    you have will be answered
                  </li>
                  <li>
                    • Your dentist will inform you of the Do&apos;s and
                    Dont&apos;s in preparation for the sedation and give you and
                    your escort written information
                  </li>
                </ul>
              </AnimatedElement>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <AnimatedElement>
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
                    • Local anesthesia will be given and treatment completed
                    while sedated
                  </li>
                  <li>
                    • The dental team will monitor you closely throughout the
                    procedure
                  </li>
                </ul>
              </AnimatedElement>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <AnimatedElement>
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
              </AnimatedElement>
            </div>
          </div>
          <AnimatedElement>
            <p className="text-dental-accent1 text-center mt-8">
              If your anxious about dental treatment,{" "}
              <Link
                href="#book"
                className="underline hover:text-dental-accent2"
              >
                book an appointment
              </Link>{" "}
              to see how I can help with IV Sedation.
            </p>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}
