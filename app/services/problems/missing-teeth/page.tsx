"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

import QuestionsSection from "@/components/ui/questions-section";
import HeroSection from "@/components/ui/hero-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const MissingTooth = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection
          title={{
            lineOne: "Smile Again",
            lineTwo: "With Confidence",
            isFirstLineBold: false,
          }}
          description="Losing teeth can be a tough experience, affecting not just your oral health but also your everyday life. If you're missing teeth, you might find it hard to chew certain foods, which can impact your nutrition. Speaking clearly could become a challenge, and you might feel self-conscious about your smile."
          bulletPoints={[
            "I understand how missing teeth can affect your life",
            "I offer effective treatment options to help restore your smile",
            "Together, we'll find the best solution for your unique needs",
          ]}
        />

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/missing-teeth-1.jpg"
          imageAlt="Renewing Your Smile"
          titleLineOne="Renewing Your"
          titleLineTwo="Smile's Functionality"
        >
          <div className="space-y-4 ">
            <p>
              I provide a range of treatments for missing teeth, including
              dental implants, dentures, and bridges. We know that everyone has
              different needs, so we take the time to assess your oral health
              and listen to your concerns to determine the best treatment for
              you.
            </p>
          </div>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/missing-teeth-2.jpg"
          imageAlt="Treatment Options"
          titleLineOne="Your Treatment"
          titleLineTwo="Options"
          isDark
        >
          <div className="space-y-6 ">
            <div>
              <h3 className="text-xl font-bold mb-2">Dental Implants</h3>
              <p>
                Dental implants are a popular and effective way to replace
                missing teeth. They consist of a titanium post that is placed in
                your jawbone, where it fuses over time. This creates a strong
                foundation for a custom-made crown that looks and feels like
                your natural teeth.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Dentures</h3>
              <p>
                Dentures are removable appliances that are tailored to fit your
                mouth and replace missing teeth. They can help you regain your
                ability to eat and speak comfortably.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Bridges</h3>
              <p>
                Bridges are fixed appliances that attach to your remaining teeth
                to fill the gap left by one or more missing teeth. They restore
                the functionality of your smile and enhance its appearance.
              </p>
            </div>
          </div>
        </AnimatedImageTextSection>

        <QuestionsSection
          theme="light"
          title={
            <>
              Common Questions About
              <br />
              <span className="font-bold">Missing Teeth</span>
            </>
          }
          questions={[
            {
              icon: "✦",
              title: "What causes missing teeth?",
              content: (
                <>
                  <p>
                    Missing teeth can result from various factors, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Tooth decay</li>
                    <li>Gum disease</li>
                    <li>Trauma</li>
                    <li>Ageing</li>
                  </ul>
                  <p className="mt-2">
                    Poor dental hygiene and lifestyle habits like smoking can
                    also lead to tooth loss.
                  </p>
                </>
              ),
            },
            {
              icon: "✦",
              title: "What are the consequences of missing teeth?",
              content: (
                <p>
                  Missing teeth can make it difficult to chew and speak
                  properly. It can also lead to bone loss in the jaw and changes
                  in your facial appearance. Most importantly, it can affect
                  your self-confidence and overall quality of life, which is why
                  seeking tooth replacement treatment is important.
                </p>
              ),
            },
          ]}
        />
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default MissingTooth;
