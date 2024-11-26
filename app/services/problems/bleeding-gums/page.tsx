"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import QuestionsSection from "@/components/ui/questions-section";
import HeroSection from "@/components/ui/hero-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
const BleedingGums = () => {
  const questions = [
    {
      icon: "✦",
      title: "Gum disease has 2 forms:",
      content: (
        <ol className="space-y-2">
          <li>
            <span className="font-bold">
              Inflammation of the gums (gingivitis):
            </span>{" "}
            This is the mildest form of gum disease and is reversible if treated
            with help from your dentist.
          </li>
          <li>
            <span className="font-bold">
              Inflammation of the ligament which holds the teeth in the bone
              (periodontitis):
            </span>{" "}
            This is a more severe form of gum disease and is irreversible.
            Without professional treatment periodontitis can result in tooth
            loss.
          </li>
        </ol>
      ),
    },
    {
      icon: "✦",
      title: "How can you prevent bleeding gums?",
      content: (
        <ul className="space-y-2">
          <li>
            <span className="">⭐</span> Brush your teeth twice a day for 2
            minutes
          </li>
          <li>
            <span className="">⭐</span> Floss once a day
          </li>
          <li>
            <span className="">⭐</span> Avoid smoking, vaping, or chewing
            tobacco
          </li>
          <li>
            <span className="">⭐</span> Visit us every 6 months for a
            professional exam and cleaning
          </li>
        </ul>
      ),
    },
  ];

  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection
          title={{
            lineOne: "My Gums",
            lineTwo: "Are Bleeding",
            isFirstLineBold: false,
          }}
          description="Bleeding gums can be caused by a variety of things such as brushing and flossing too vigorously. But if your gums won't stop bleeding, or they always look and feel swollen, it's likely a sign that you're suffering from one of the most common oral health issues which is gum disease."
        />

        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/bleeding-gums-1.jpg"
          imageAlt="Treatment Steps"
          titleLineOne="Steps to Evaluate"
          titleLineTwo="Your Gum Health"
        >
          <div className="space-y-6">
            <ol className="space-y-4">
              <li>
                <strong>Step 1.</strong> Request your appointment
              </li>
              <li>
                <strong>Step 2.</strong> Get an exam, diagnosis, and custom
                treatment plan
              </li>
              <li>
                <strong>Step 3.</strong> Begin treatment and learn how to stop
                bleeding gums
              </li>
            </ol>
            <p>
              Your treatment plan will depend on your diagnosis. It&apos;s
              important to get a professional diagnosis so you can find the
              right solution!
            </p>
          </div>
        </AnimatedImageTextSection>

        <QuestionsSection
          theme="dark"
          title={
            <>
              Common Questions About
              <br />
              <span className="font-bold">Bleeding Gums</span>
            </>
          }
          questions={questions}
        />
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default BleedingGums;
