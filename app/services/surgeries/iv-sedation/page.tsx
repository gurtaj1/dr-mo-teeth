"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { useIntersectionObservers } from "@/hooks/use-intersection-observers";
import AnimatedElement from "@/components/ui/animated-element";
import AnimatedImageTextSection from "@/components/ui/animated-image-text-section";
import Link from "next/link";
import TitleSection from "@/components/ui/title-section";

// Dynamically import SmartCarousel
const SmartCarousel = dynamic(() => import("@/components/ui/smart-carousel"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-gray-100 animate-pulse rounded-lg"></div>
  ),
});

const imageSlides = [
  "/iv-slide-1.png",
  "/iv-slide-2.png",
  "/iv-slide-3.png",
  "/iv-slide-4.png",
  "/iv-slide-5.png",
  "/iv-slide-6.png",
  "/iv-slide-7.png",
  "/iv-slide-8.png",
];

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

  // Move the carousel section to a separate component
  const CarouselSection = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h2 className="text-3xl mb-12 text-dental-navy text-center">
            <strong>What you Need to Know</strong>
          </h2>
        </AnimatedElement>
        <AnimatedElement transitionSize>
          <div className="max-w-3xl mx-auto">
            <SmartCarousel
              items={imageSlides}
              slidesToShow={1}
              autoplay={true}
              boxShadowColor="white"
              hideSideButtons
              autoplayInterval={8000}
            />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* IV Sedation Section */}
      <TitleSection
        titleText="Intravenous (IV) Sedation"
        bodyText={[
          "IV sedation is a highly effective option for patients experiencing dental anxiety, allowing them to receive the necessary treatments in a relaxed and comfortable state. It involves administering sedative medication directly into the bloodstream, which helps patients feel calm and at ease during their dental procedures. Unlike general anaesthesia, IV sedation keeps patients conscious but deeply relaxed, enabling them to respond to questions and instructions while remaining unaware of the procedure itself. This can significantly reduce anxiety and fear associated with dental visits, making it an ideal solution for those who have difficulty coping with traditional dental treatments.",
        ]}
      />

      {/* Who Needs IV Sedation Section */}
      <AnimatedImageTextSection
        imageRef={ivSedationImageRef}
        titleRef={ivSedationParallaxRef}
        isImageVisible={isIVSedationImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="IV Sedation Patient"
        titleLineOne="Who Needs"
        titleLineTwo="IV Sedation?"
        scrollY={ivSedationParallaxOffset}
        scrollFactor={1}
      >
        <p className="mb-4">Intravenous Sedation can benefit people with:</p>
        <ul className="space-y-2">
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
            <h2 className="text-3xl mb-12 text-center">
              <strong>
                What Happens Before, During and After IV Sedation?
              </strong>
            </h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <AnimatedElement>
                <h3 className=" text-2xl mb-4 text-center">Before</h3>
                <ul className=" space-y-3">
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
                <h3 className=" text-2xl mb-4 text-center">During</h3>
                <ul className=" space-y-3">
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
                <h3 className=" text-2xl mb-4 text-center">After</h3>
                <ul className=" space-y-3">
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
            <p className=" text-center mt-8">
              If your anxious about dental treatment,{" "}
              <Link
                href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com"
                className="underline hover:text-dental-accent2"
              >
                book an appointment
              </Link>{" "}
              to see how I can help with IV Sedation.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <CarouselSection />
    </div>
  );
}
