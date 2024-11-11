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
        imageSrc="/placeholder.jpg"
        imageAlt="Understanding Tooth Sensitivity"
        titleLineOne="The Science of"
        titleLineTwo="Comfort"
        scrollFactor={1}
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
        imageSrc="/placeholder.jpg"
        imageAlt="Sensitivity Treatments"
        titleLineOne="Causes Of"
        titleLineTwo="Sensitive Teeth"
        isDark
        scrollFactor={1}
      >
        <div className="space-y-4 ">
          <div>
            <h3 className="text-xl font-bold mb-2">Overzealous brushing</h3>
            <p>
              You can have too much of a good thing. Brushing your teeth with
              too much force, or with a hard-bristle toothbrush, may wear down
              tooth enamel, expose the cementum or dentin and cause tooth
              sensitivity.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Tooth grinding</h3>
            <p>
              Grinding your teeth can cause the enamel to wear away and leave
              the dentin exposed.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Dental cleanings or treatments
            </h3>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Temporary tooth sensitivity
            </h3>
            <p>
              Which can occur after a professional teeth-whitening treatment,
              but usually goes away shortly after the procedure ends.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Gum disease</h3>
            <p>
              Inflamed gum tissue pulls away from the tooth, leaving vulnerable
              areas exposed.
            </p>
          </div>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/placeholder.jpg"
        imageAlt="Understanding Tooth Sensitivity"
        titleLineOne="Steps To Prevent"
        titleLineTwo="Sensitive Teeth"
        scrollFactor={1}
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
