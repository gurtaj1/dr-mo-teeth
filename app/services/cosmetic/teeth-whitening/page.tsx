"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import TitleSection from "../../../../components/ui/title-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const TeethWhitening = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Teeth Whitening Section */}
        <TitleSection
          titleText="Teeth Whitening"
          bodyText={[
            "Teeth whitening is a popular dental treatment that brightens your smile. It works by using safe bleaching agents that lighten the enamel, helping to restore your teeth to a more radiant shade. There are different options for teeth whitening, including in-surgery treatments done by your dentist for quick results, or take-home kits that allow you to whiten at your own pace. Whether you want to enhance your smile for a special occasion or simply boost your confidence, teeth whitening can give you a brighter, whiter smile.",
          ]}
        />

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/teeth-whitening-1.jpg"
          imageAlt="Teeth Whitening Results"
          titleLineOne="Lighten Your Smile"
          titleLineTwo="by Two Shades or More"
          isTitleLineOneBold
        >
          <p>
            Maintaining the whiteness of your teeth can be challenging. Daily
            culprits like coffee, and certain foods can stain your teeth, making
            it tough to keep them looking their best, even with good dental
            care. Professional teeth whitening offers a fantastic solution to
            rejuvenate the natural colour of your teeth or even achieve a shade
            lighter than your original colour if that&apos;s what you desire.
          </p>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/teeth-whitening-2.jpg"
          imageAlt="Teeth Whitening Facts"
          titleLineOne="Facts About"
          titleLineTwo="Teeth Whitening"
          isDark
        >
          <div className="space-y-6 ">
            <div>
              <h3 className="font-bold mb-2">What Causes Stained Teeth?</h3>
              <ul className="space-y-1">
                <li>
                  <span className="text-dental-teal">•</span> Coffee and tea
                </li>
                <li>
                  <span className="text-dental-teal">•</span> Foods with dark
                  pigments
                </li>
                <li>
                  <span className="text-dental-teal">•</span> Smoking and
                  tobacco use
                </li>
                <li>
                  <span className="text-dental-teal">•</span> Natural ageing
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                Who Can Benefit from Teeth Whitening?
              </h3>
              <p>
                Most people can enjoy the advantages of teeth whitening, though
                individual results may vary based on personal circumstances. We
                generally advise against teeth whitening for pregnant or
                lactating women, children under 18, or anyone with known
                allergies to whitening agents. We&apos;ll help determine if
                you&apos;re a suitable candidate for treatment.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                Is Teeth Whitening Safe for Sensitive Teeth?
              </h3>
              <p>
                If you have sensitive teeth, it&apos;s best to steer clear of
                over-the-counter whitening products. Your dentist can recommend
                professional treatments, designed to minimise irritation while
                ensuring a comfortable and effective experience.
              </p>
            </div>
          </div>
        </AnimatedImageTextSection>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default TeethWhitening;
