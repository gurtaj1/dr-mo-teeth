"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import QuestionsSection from "@/components/ui/questions-section";
import HeroSection from "@/components/ui/hero-section";

const questions = [
  {
    icon: "✦",
    title: "What's the best way to prevent bad breath?",
    content: (
      <ul className="space-y-2">
        <li>⭐ Brush and floss every day</li>
        <li>⭐ Use a tongue scraper after you brush</li>
        <li>⭐ Avoid cigarettes and tobacco products</li>
        <li>⭐ Drink lots of water and keep your mouth moist</li>
        <li>⭐ Breathe through your nose, not your mouth</li>
        <li>⭐ Visit the dentist every 6 months for a checkup!</li>
      </ul>
    ),
  },
  {
    icon: "✦",
    title: "What's the best mouthwash for bad breath?",
    content: (
      <p>
        If you suffer from chronic bad breath, a mouthwash won&apos;t solve the
        problem. In fact, mouthwash often dries out your mouth and makes your
        breath worse! Talk to your dentist and your hygienist about whether or
        not mouthwash is the best choice for you — and if so, which one.
      </p>
    ),
  },
  {
    icon: "✦",
    title: "Will gum help my bad breath?",
    content: (
      <p>
        While a stick of gum will provide a burst of freshness, it&apos;s not a
        lasting solution. In fact, gum and mints are often filled with sugar,
        which is bad for your teeth!
      </p>
    ),
  },
];

const BadBreath = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection
        title={{
          lineOne: "Why Does My Breath",
          lineTwo: "Smell So Bad?",
          isFirstLineBold: false,
        }}
        description="It's normal to have bad breath occasionally, for example after eating strong foods or when you wake up in the morning. However, about 25% of people experience chronic bad breath, known as halitosis. This type of bad breath can't be fixed just by brushing, flossing, drinking water, or chewing gum."
      />

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Bad Breath Causes"
        titleLineOne="Bad Breath Isn't Always a"
        titleLineTwo="Dental Concern"
      >
        <div>
          <p>
            Sometimes, bad breath can indicate a health issue, such as a sinus
            infection, acid reflux, or problems with your liver or kidneys. If
            you think this might be the case, it&apos;s important to contact
            your doctor. If you&apos;re unsure what the cause is, get in touch.
          </p>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="right"
        imageSrc="/placeholder.jpg"
        imageAlt="Bad Breath Treatment"
        titleLineOne="How to Fix"
        titleLineTwo="Bad Breath"
        isTitleLineOneBold
        isDark
      >
        <div className="space-y-6 ">
          <ol className="space-y-2">
            <li>
              <strong>Step 1.</strong> Request Your Appointment
            </li>
            <li>
              <strong>Step 2.</strong> Get an Exam, Diagnosis, and Custom
              Treatment Plan
            </li>
            <li>
              <strong>Step 3.</strong> Begin Treatment and Learn How to Prevent
              Bad Breath from Coming Back
            </li>
          </ol>

          <p>
            Your treatment will depend on what we find, so it&apos;s important
            to get a professional diagnosis to find the right solution!
          </p>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Bad Breath FAQs"
        titleLineOne="Common Treatments for"
        titleLineTwo="Halitosis"
      >
        <div className="space-y-6">
          <div>
            <ul className="space-y-2">
              <li>
                ⭐ Deep Cleaning: If gum disease is the cause of your bad
                breath, we may suggest a deep cleaning or other gum treatment
              </li>
              <li>
                ⭐ Filling or Root Canal: If you have tooth decay or infection,
                a filling or root canal may be needed to restore your tooth
              </li>
              <li>
                ⭐ Oral Appliance: If you breathe through your mouth at night,
                which can cause dry mouth and bad breath, a custom night guard
                might be the solution for you
              </li>
            </ul>
          </div>
        </div>
      </AnimatedImageTextSection>

      <QuestionsSection
        theme="dark"
        title={
          <>
            Common Questions About <br />{" "}
            <span className="font-bold">Bad Breath</span>
          </>
        }
        questions={questions}
      />
    </div>
  );
};

export default BadBreath;
