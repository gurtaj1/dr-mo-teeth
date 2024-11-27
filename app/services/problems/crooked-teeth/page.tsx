"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const CrookedTeeth = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero Section */}
        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/crooked-teeth-4.jpg"
          imageAlt="Causes of Crooked Smile"
          titleLineOne="What Causes a"
          titleLineTwo="Crooked Smile?"
          isDark
        >
          <div className="space-y-4">
            <p>
              Crooked teeth refer to any misalignment in your smile, which can
              manifest as overcrowding, gaps from lost teeth, or other
              irregularities. While having crooked teeth isn&apos;t necessarily
              a problem in itself, it can lead to various health issues.
            </p>
            <ul className="space-y-2">
              <li>
                <span className="text-dental-teal">•</span> Chewing Problems:
                Misaligned teeth can affect your ability to chew properly,
                causing pain during meals and digestive issues
              </li>
              <li>
                <span className="text-dental-teal">•</span> Oral Health Risks:
                Hard-to-clean areas increase risk of periodontal disease,
                damaging gums and bone structure
              </li>
              <li>
                <span className="text-dental-teal">•</span> Speech Impact:
                Crooked teeth can affect speech clarity and pronunciation
              </li>
              <li>
                <span className="text-dental-teal">•</span> Self-Esteem: Many
                people feel self-conscious about their misaligned smile
              </li>
              <li>
                <span className="text-dental-teal">•</span> Treatment Options:
                We provide personalized treatments to help achieve a healthy,
                confident smile
              </li>
            </ul>
          </div>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/crooked-teeth-1.jpg"
          imageAlt="Causes of Crooked Teeth"
          titleLineOne="What Causes"
          titleLineTwo="Crooked Teeth?"
        >
          <div className="space-y-4 ">
            <p>
              Perfectly aligned teeth are rare, and many factors contribute to
              crookedness. Some common causes include:
            </p>
            <ul className="space-y-2">
              <li>
                • Genetics: Family history can play a significant role in tooth
                alignment.
              </li>
              <li>
                • Birth Defects: Certain conditions can affect the growth of
                teeth.
              </li>
              <li>
                • Thumb Sucking: This habit, especially in childhood, can lead
                to misalignment.
              </li>
              <li>
                • Poor Dental Care: Neglecting oral hygiene can lead to issues
                that affect alignment.
              </li>
              <li>
                • Facial Injury: Trauma to the face can shift teeth out of
                place.
              </li>
            </ul>
            <p>
              Understanding the underlying causes of your crooked teeth can help
              in finding effective solutions.
            </p>
          </div>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/crooked-teeth-2.jpg"
          imageAlt="When to See a Dentist"
          titleLineOne="When to See a Dentist"
          titleLineTwo="About Crooked Teeth"
          isDark
        >
          <div className="space-y-4 ">
            <p>
              Crooked teeth may not be a serious issue on their own, but if you
              experience any of the following symptoms, it might be time to
              consult a dentist:
            </p>
            <ul className="space-y-2">
              <li>
                <span className="text-dental-teal">•</span> Difficulty chewing
                or oral pain during meals
              </li>
              <li>
                <span className="text-dental-teal">•</span> Cavities in
                hard-to-reach areas
              </li>
              <li>
                <span className="text-dental-teal">•</span> Speech difficulties
              </li>
              <li>
                <span className="text-dental-teal">•</span> Lower self-esteem or
                a tendency to hide your smile
              </li>
            </ul>
          </div>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/crooked-teeth-3.jpg"
          imageAlt="Treatment Process"
          titleLineOne="The Process for"
          titleLineTwo="Correcting Crooked Teeth"
        >
          <div className="space-y-6">
            <div>
              <ol className="space-y-2">
                <li>
                  <span className="font-bold">Step 1.</span> Request Your
                  Appointment
                </li>
                <li>
                  <span className="font-bold">Step 2.</span> Get an Exam and
                  Custom Treatment Plan
                </li>
                <li>
                  <span className="font-bold">Step 3.</span> Begin Treatment and
                  Learn to Correct Related Habits
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Treatment options for crooked teeth vary based on severity and
                may include:
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-dental-teal">•</span> Invisalign: Clear
                  aligners that gradually straighten teeth
                </li>
                <li>
                  <span className="text-dental-teal">•</span> Bonding: Reshape
                  teeth for better alignment
                </li>
                <li>
                  <span className="text-dental-teal">•</span> Veneers: Thin
                  shells that cover the front of teeth for a more uniform
                  appearance
                </li>
              </ul>
            </div>
          </div>
        </AnimatedImageTextSection>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default CrookedTeeth;
