"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import TitleSection from "../../../../components/ui/title-section";
import QuestionsSection from "@/components/ui/questions-section";

const Bridges = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Dental Bridges Section */}
      <TitleSection
        titleText="Dental Bridges"
        bodyText={[
          "Have you lost one or more teeth? A dental bridge might be the perfect solution for you. Made from high-quality porcelain, a well-crafted bridge mimics the appearance of your natural teeth and restores your smile's health and function.",
          'As the name implies, this treatment "bridges" the gap left by a missing tooth, anchored securely by the healthy teeth on either side.',
        ]}
      />

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/bridges-1.jpg"
        imageAlt="Dental Bridge"
        titleLineOne="A Great Solution for"
        titleLineTwo="Missing Teeth"
        scrollFactor={1}
      >
        <p className="mb-4">
          Unlike removable partial dentures, dental bridges are fixed in place,
          making them a preferred choice for many patients. We&apos;ll help you
          determine if this option is right for you.
        </p>
      </AnimatedImageTextSection>

      <QuestionsSection
        theme="dark"
        title={
          <>
            Common Questions About
            <br />
            <span className="font-bold">Dental Bridges</span>
          </>
        }
        questions={[
          {
            icon: "✦",
            title: "How do bridges compare to partial dentures?",
            content:
              "The main difference is that bridges are fixed and not removable, making them a healthier option for your gums and jawbone.",
          },
          {
            icon: "✦",
            title: "What should I know about caring for a dental bridge?",
            content:
              "With good care, your dental bridge can last 10 years or more. Just brush twice daily, floss every day, and visit your dentist regularly for check-ups.",
          },
        ]}
      />
    </div>
  );
};

export default Bridges;
