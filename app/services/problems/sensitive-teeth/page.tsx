"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import HeroSection from "@/components/ui/hero-section";

const SensitiveTeeth = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Sensitive Teeth Section */}
      <HeroSection
        title={{
          lineOne: "What Causes",
          lineTwo: "Sensitive Teeth?",
          isFirstLineBold: false,
        }}
        description="Tooth sensitivity can make everyday activities like eating, drinking, and even breathing uncomfortable. When you have sensitive teeth, things like hot drinks, cold foods, and sweet treats can trigger sharp pain or discomfort. Understanding the cause is the first step to finding relief."
        bulletPoints={[
          "Worn Enamel: Aggressive brushing or acidic foods can wear down tooth enamel",
          "Exposed Roots: Receding gums can leave sensitive root surfaces exposed",
          "Cracked Teeth: Small cracks can expose sensitive inner layers",
          "Recent Dental Work: Temporary sensitivity after procedures is common",
          "Tooth Grinding: Clenching and grinding can wear down protective enamel",
          "Tooth Decay: Cavities and decay can cause increased sensitivity",
        ]}
      />

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/sensitive-teeth-1.jpg"
        imageAlt="Understanding Tooth Sensitivity"
        titleLineOne="The Science of"
        titleLineTwo="Comfort"
      >
        <p className="mb-4">
          I provide a variety of effective treatments to help alleviate tooth
          sensitivity and restore your oral health. After identifying the cause:
          whether it&apos;s enamel erosion, gum recession, tooth grinding, or
          other factors - I will recommend the best treatment for you.
        </p>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="right"
        imageSrc="/sensitive-teeth-2.jpg"
        imageAlt="Understanding Tooth Sensitivity"
        titleLineOne="Steps To Prevent"
        titleLineTwo="Sensitive Teeth"
        isDark
      >
        <div className="space-y-4 ">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">✓</span>
              <span>
                Use a soft-bristled toothbrush, which will help prevent gum
                loss.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">✓</span>
              <span>
                Brush with a sensitivity toothpaste, which will continue
                removing plaque to clean teeth while providing relief from
                sensitivity.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">✓</span>
              <span>
                Brush and floss your teeth twice a day to prevent gum loss.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">✓</span>
              <span>
                Be sure to clean all parts of your mouth, including between
                teeth and along the gum line.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">✓</span>
              <span>Avoid acidic foods and drinks.</span>
            </li>
          </ul>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default SensitiveTeeth;
