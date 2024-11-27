"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const WisdomToothPain = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/wisdom-tooth-pain-1.jpg"
          imageAlt="Wisdom Tooth Pain"
          titleLineOne="Its Wise To"
          titleLineTwo="Remove Them"
          isDark
        >
          <h3 className=" font-bold mb-2">What Causes Wisdom Tooth Pain?</h3>
          <p className=" mb-4">
            Wisdom tooth pain is a common issue for many people. While some can
            accommodate their new molars without problems, most don&apos;t have
            enough space for them, leading to impaction. Impacted wisdom teeth
            can cause significant pain and health risks, even if they don&apos;t
            cause immediate issues.
          </p>
          <p className=" mb-4">
            When wisdom teeth are impacted, they can become inflamed and may
            lead to infection and swelling. Because these teeth are located near
            facial muscles, you might experience jaw pain and discomfort in your
            gums as well.
          </p>
          <p className="">
            I can determine if your wisdom teeth are the source of your
            discomfort and help create a treatment plan to restore your oral
            health.
          </p>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/wisdom-tooth-pain-2.jpg"
          imageAlt="Benefits of Wisdom Tooth Removal"
          titleLineOne="Benefits of"
          titleLineTwo="Wisdom Tooth Removal"
        >
          <h3 className="font-bold mb-2">No More Pain</h3>
          <p className=" mb-4">
            If you&apos;re dealing with wisdom tooth pain, having them removed
            can relieve your symptoms, making chewing and talking more
            comfortable.
          </p>

          <h3 className=" font-bold mb-2">Improved Oral Health</h3>
          <p className=" mb-4">
            Wisdom teeth are located far back in the mouth, making them hard to
            clean properly. This can lead to plaque build up, increasing your
            risk for gum disease and other oral health issues.
          </p>

          <h3 className=" font-bold mb-2">Better Breath</h3>
          <p>
            Impacted wisdom teeth can contribute to bad breath. When the
            surrounding gum tissue is compromised, bacteria can become trapped,
            leading to unpleasant odours and potential health risks.
          </p>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/wisdom-tooth-pain-3.jpg"
          imageAlt="Wisdom Teeth Removal Process"
          titleLineOne="How Are"
          titleLineTwo="Wisdom Teeth Removed?"
          isDark
        >
          <p className=" mb-4">
            The extraction process typically involves the following steps:
          </p>
          <ol className="space-y-2 ">
            <li>
              <span className="font-bold">Step 1.</span> Local Anaesthetic:
              We&apos;ll administer a local anaesthetic to ensure you don&apos;t
              feel any pain during the procedure.
            </li>
            <li>
              <span className="font-bold">Step 2.</span> Removing Gum Tissue:
              Any gum tissue covering your wisdom teeth will be carefully
              removed.
            </li>
            <li>
              <span className="font-bold">Step 3.</span> Extracting the Teeth:
              They are extracted using gentle pressure and techniques to remove
              the tooth from the bone.
            </li>
            <li>
              <span className="font-bold">Step 4.</span> Stitching the Gums:
              After the extraction, I will stitch up your gums although this is
              not always needed.
            </li>
            <li>
              <span className="font-bold">Step 5.</span> Recovery Plan: I will
              provide you with detailed instructions for your recovery to ensure
              a smooth healing process.
            </li>
          </ol>
          <p className=" mt-4">
            With this approach, I aim to make your experience as comfortable as
            possible while ensuring your oral health is restored.
          </p>
        </AnimatedImageTextSection>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default WisdomToothPain;
