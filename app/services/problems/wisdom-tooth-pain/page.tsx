"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/useIntersectionObservers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const WisdomToothPain = () => {
  const [isWisdomImageVisible, setIsWisdomImageVisible] = useState(false);
  const [isWisdomBenefitsImageVisible, setIsWisdomBenefitsImageVisible] =
    useState(false);
  const [isWisdomProcessImageVisible, setIsWisdomProcessImageVisible] =
    useState(false);
  const [wisdomParallaxOffset, setWisdomParallaxOffset] = useState(0);
  const [wisdomBenefitsParallaxOffset, setWisdomBenefitsParallaxOffset] =
    useState(0);
  const [wisdomProcessParallaxOffset, setWisdomProcessParallaxOffset] =
    useState(0);

  const wisdomImageRef = useRef(null);
  const wisdomBenefitsImageRef = useRef(null);
  const wisdomProcessImageRef = useRef(null);
  const wisdomParallaxRef = useRef(null);
  const wisdomBenefitsParallaxRef = useRef(null);
  const wisdomProcessParallaxRef = useRef(null);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: wisdomImageRef,
        onIntersect: () => setIsWisdomImageVisible(true),
      },
      {
        ref: wisdomBenefitsImageRef,
        onIntersect: () => setIsWisdomBenefitsImageVisible(true),
      },
      {
        ref: wisdomProcessImageRef,
        onIntersect: () => setIsWisdomProcessImageVisible(true),
      },
    ],
    parallaxTargets: [
      {
        ref: wisdomParallaxRef,
        onScroll: (offset) => setWisdomParallaxOffset(offset),
      },
      {
        ref: wisdomBenefitsParallaxRef,
        onScroll: (offset) => setWisdomBenefitsParallaxOffset(offset),
      },
      {
        ref: wisdomProcessParallaxRef,
        onScroll: (offset) => setWisdomProcessParallaxOffset(offset),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnimatedImageTextSection
        imageRef={wisdomImageRef}
        titleRef={wisdomParallaxRef}
        isImageVisible={isWisdomImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Wisdom Tooth Pain"
        title={
          <>
            Its Wise To <br /> <span className="font-bold">Remove Them</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={wisdomParallaxOffset}
        scrollFactor={1}
      >
        <h3 className="text-dental-accent1 font-bold mb-2">
          What Causes Wisdom Tooth Pain?
        </h3>
        <p className="text-dental-accent1 mb-4">
          Wisdom tooth pain is a common issue for many people. While some can
          accommodate their new molars without problems, most don&apos;t have
          enough space for them, leading to impaction. Impacted wisdom teeth can
          cause significant pain and health risks, even if they don&apos;t cause
          immediate issues.
        </p>
        <p className="text-dental-accent1 mb-4">
          When wisdom teeth are impacted, they can become inflamed and may lead
          to infection and swelling. Because these teeth are located near facial
          muscles, you might experience jaw pain and discomfort in your gums as
          well.
        </p>
        <p className="text-dental-accent1">
          I can determine if your wisdom teeth are the source of your discomfort
          and help create a treatment plan to restore your oral health.
        </p>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={wisdomBenefitsImageRef}
        titleRef={wisdomBenefitsParallaxRef}
        isImageVisible={isWisdomBenefitsImageVisible}
        imagePosition="left"
        imageSrc="/placeholder.svg"
        imageAlt="Benefits of Wisdom Tooth Removal"
        title={
          <>
            Benefits of <br />{" "}
            <span className="font-bold">Wisdom Tooth Removal</span>
          </>
        }
        titleColor="text-dental-navy"
        scrollY={wisdomBenefitsParallaxOffset}
        scrollFactor={1}
      >
        <h3 className="text-gray-600 font-bold mb-2">No More Pain</h3>
        <p className="text-gray-600 mb-4">
          If you&apos;re dealing with wisdom tooth pain, having them removed can
          relieve your symptoms, making chewing and talking more comfortable.
        </p>

        <h3 className="text-gray-600 font-bold mb-2">Improved Oral Health</h3>
        <p className="text-gray-600 mb-4">
          Wisdom teeth are located far back in the mouth, making them hard to
          clean properly. This can lead to plaque build up, increasing your risk
          for gum disease and other oral health issues.
        </p>

        <h3 className="text-gray-600 font-bold mb-2">Better Breath</h3>
        <p className="text-gray-600">
          Impacted wisdom teeth can contribute to bad breath. When the
          surrounding gum tissue is compromised, bacteria can become trapped,
          leading to unpleasant odours and potential health risks.
        </p>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imageRef={wisdomProcessImageRef}
        titleRef={wisdomProcessParallaxRef}
        isImageVisible={isWisdomProcessImageVisible}
        imagePosition="right"
        imageSrc="/placeholder.svg"
        imageAlt="Wisdom Teeth Removal Process"
        title={
          <>
            How Are <br />{" "}
            <span className="font-bold">Wisdom Teeth Removed?</span>
          </>
        }
        titleColor="text-dental-accent1"
        backgroundColor="bg-dental-navy"
        scrollY={wisdomProcessParallaxOffset}
        scrollFactor={1}
      >
        <p className="text-dental-accent1 mb-4">
          The extraction process typically involves the following steps:
        </p>
        <ol className="space-y-2 text-dental-accent1">
          <li>
            1. Local Anaesthetic: We&apos;ll administer a local anaesthetic to
            ensure you don&apos;t feel any pain during the procedure.
          </li>
          <li>
            2. Removing Gum Tissue: Any gum tissue covering your wisdom teeth
            will be carefully removed.
          </li>
          <li>
            3. Extracting the Teeth: They are extracted using gentle pressure
            and techniques to remove the tooth from the bone.
          </li>
          <li>
            4. Stitching the Gums: After the extraction, I will stitch up your
            gums although this is not always needed.
          </li>
          <li>
            5. Recovery Plan: I will provide you with detailed instructions for
            your recovery to ensure a smooth healing process.
          </li>
        </ol>
        <p className="text-dental-accent1 mt-4">
          With this approach, I aim to make your experience as comfortable as
          possible while ensuring your oral health is restored.
        </p>
      </AnimatedImageTextSection>
    </div>
  );
};

export default WisdomToothPain;
