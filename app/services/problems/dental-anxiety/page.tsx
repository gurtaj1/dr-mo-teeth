"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import AnimatedElement from "@/components/ui/animated-element";
import QuestionsSection from "@/components/ui/questions-section";
import HeroSection from "@/components/ui/hero-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const DentalAnxiety = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Dental Anxiety Section */}
        <HeroSection
          title={{
            lineOne: "Don't Suffer Through",
            lineTwo: "Dental Anxiety",
            isFirstLineBold: false,
          }}
          description="Feeling nervous before a dentist appointment? You're not alone. Dental anxiety is very common among people of all ages. No matter what's causing your anxiety, I'm here to help you feel at ease. My goal is to ensure you can receive the treatment you need with confidence."
        />

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/dental-anxiety-1.jpg"
          imageAlt="Common Reasons for Dental Anxiety"
          titleLineOne="Common Reasons for"
          titleLineTwo="Dental Anxiety"
        >
          <div className="space-y-4">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✓</span>
                <span>
                  Previous Negative Experiences: Past visits that didn&apos;t go
                  well can create fear
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✓</span>
                <span>
                  Anticipation of Pain: Worrying that treatment will hurt
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✓</span>
                <span>
                  Fear of Judgment: Concern about how the dentist will perceive
                  your dental habits
                </span>
              </li>
            </ul>
          </div>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/dental-anxiety-2.jpg"
          imageAlt="Effects of Dental Anxiety"
          titleLineOne="How Does Dental Anxiety"
          titleLineTwo="Affect Oral Health?"
          isDark
        >
          <div className="space-y-4 ">
            <p>
              While dental anxiety itself won&apos;t cause cavities, it can lead
              to missed appointments and untreated issues. Many patients avoid
              routine check-ups or necessary treatments because of their
              anxiety, which can cause dental problems to worsen and require
              more extensive care later on.
            </p>
          </div>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/dental-anxiety-3.jpg"
          imageAlt="Managing Dental Anxiety"
          titleLineOne="Managing"
          titleLineTwo="Dental Anxiety"
        >
          <div className="space-y-4">
            <p>
              If you&apos;re feeling anxious about your dental visit, please let
              the team know before your appointment or when you arrive. I have
              experience working with patients who have dental anxiety, and
              I&apos;m dedicated to making you feel as comfortable as possible.
            </p>
            <p>
              Not ready to schedule an appointment yet? That&apos;s okay, I
              understand it can be a big step, especially if it&apos;s been a
              while since your last visit. Reach out so I can answer your
              questions and help ease your concerns.
            </p>
          </div>
        </AnimatedImageTextSection>

        {/* How I Help Section */}
        <section className="py-16 bg-dental-navy">
          <div className="container mx-auto px-6 text-white">
            <AnimatedElement>
              <h2 className="text-3xl font-bold mb-6 text-center">
                How I Help You Through Dental Anxiety
              </h2>
            </AnimatedElement>
            <AnimatedElement>
              <ul className=" max-w-3xl mx-auto space-y-2 text-center">
                <li>
                  <span className="font-bold">• No-Judgment Appointments:</span>{" "}
                  Feel free to discuss your concerns openly
                </li>
                <li>
                  <span className="font-bold">• Thorough Answers:</span>{" "}
                  addressing all your questions and fears
                </li>
                <li>
                  <span className="font-bold">• Numbing Options:</span> use
                  anaesthetics to minimise discomfort
                </li>
                <li>
                  <span className="font-bold">• Comfortable Environment:</span>{" "}
                  the surgery is designed to feel soothing and welcoming
                </li>
                <li>
                  <span className="font-bold">• Flexible Payment Options:</span>{" "}
                  providing various ways to manage costs
                </li>
              </ul>
            </AnimatedElement>
          </div>
        </section>

        {/* Common Questions Section */}
        <QuestionsSection
          theme="light"
          title={
            <>
              Dr. Mo Addresses Your
              <br />
              <span className="font-bold">
                Top Questions About Dental Anxiety
              </span>
            </>
          }
          questions={[
            {
              icon: "✦",
              title: "What can I do to lessen my dental anxiety?",
              content: (
                <>
                  <p className="text-gray-600">
                    You don&apos;t have to face this alone! Here are some
                    strategies that may help:
                  </p>
                  <ul className="list-none mt-2">
                    <li className="flex">
                      <span className="text-dental-teal mr-2">•</span>
                      <span>
                        Talk to your hygienist or dentist about your fears
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-dental-teal mr-2">•</span>
                      <span>
                        Let us know if you need a break during your appointment
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-dental-teal mr-2">•</span>
                      <span>
                        Use breathing and mindfulness techniques to stay calm
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-dental-teal mr-2">•</span>
                      <span>
                        Bring a supportive friend or family member to your visit
                      </span>
                    </li>
                  </ul>
                </>
              ),
            },
            {
              icon: "✦",
              title: "What are the symptoms of dental anxiety?",
              content: (
                <>
                  <p>
                    Everyone experiences dental anxiety differently, but some
                    common symptoms include:
                  </p>
                  <ul className="list-none mt-2">
                    <li className="flex">
                      <span className="text-dental-teal mr-2">•</span>
                      <span>Low blood pressure</span>
                    </li>
                    <li className="flex">
                      <span className="text-dental-teal mr-2">•</span>
                      <span>Panic attacks during or before appointments</span>
                    </li>
                    <li className="flex">
                      <span className="text-dental-teal mr-2">•</span>
                      <span>Dizziness or faintness</span>
                    </li>
                    <li className="flex">
                      <span className="text-dental-teal mr-2">•</span>
                      <span>Heart palpitations</span>
                    </li>
                  </ul>
                </>
              ),
            },
          ]}
        />
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default DentalAnxiety;
