"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import TitleSection from "@/components/ui/title-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const Veneers = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Veneers Section */}
        <TitleSection
          titleText="Veneers"
          bodyText={[
            "Veneers are thin, custom-made shells that are placed over the front surface of your teeth to improve their appearance. They can help fix issues like discoloration, chips, or gaps, giving you a beautiful, natural-looking smile. Made from either porcelain or resin, veneers are designed to match the colour and shape of your existing teeth. The process typically involves a small amount of enamel being removed to ensure a proper fit, and then the veneers are securely bonded to your teeth. With proper care, veneers can last for many years, making them a popular choice for those looking to enhance their smile.",
          ]}
        />

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/veneers-1.jpg"
          imageAlt="Veneer Procedure"
          titleLineOne="The Veneer"
          titleLineTwo="Process"
        >
          <p className=" mb-4">
            The journey to your perfect smile involves several carefully planned
            steps:
          </p>
          <ol className="space-y-2">
            <li>
              <strong>Step 1.</strong> Initial consultation and smile design
              planning
            </li>
            <li>
              <strong>Step 2.</strong> Preparation of your natural teeth
            </li>
            <li>
              <strong>Step 3.</strong> Taking detailed impressions for custom
              veneers
            </li>
            <li>
              <strong>Step 4.</strong> Temporary veneers while your custom ones
              are made
            </li>
            <li>
              <strong>Step 5.</strong> Final fitting and bonding of your
              permanent veneers
            </li>
          </ol>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/veneers-2.jpg"
          imageAlt="Veneer Benefits"
          titleLineOne="Benefits of"
          titleLineTwo="Dental Veneers"
          isDark
        >
          <ul className="space-y-4 ">
            <li>
              <span className="text-dental-teal">•</span> Natural-looking
              results
            </li>
            <li>
              <span className="text-dental-teal">•</span> Stain-resistant
              surface
            </li>
            <li>
              <span className="text-dental-teal">•</span> Minimal tooth
              reduction required
            </li>
            <li>
              <span className="text-dental-teal">•</span> Long-lasting smile
              enhancement
            </li>
            <li>
              <span className="text-dental-teal">•</span> Customized to your
              desired look
            </li>
          </ul>
        </AnimatedImageTextSection>

        {/* Types of Veneers Section */}
        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/veneers-3.jpg"
          imageAlt="Porcelain Veneers"
          titleLineOne="Porcelain"
          titleLineTwo="Veneers"
        >
          <p className="mb-4">
            Porcelain veneers are the gold standard in cosmetic dentistry. They
            offer superior durability, stain resistance, and the most
            natural-looking results. These custom-crafted shells are designed to
            perfectly match your natural teeth while providing the improvements
            you desire.
          </p>
          <p>
            The porcelain material reflects light similarly to natural tooth
            enamel, ensuring your smile looks completely natural. With proper
            care, porcelain veneers can last 10-15 years or more.
          </p>
        </AnimatedImageTextSection>

        {/* Composite Veneers Section */}
        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/veneers-4.jpg"
          imageAlt="Composite Veneers"
          titleLineOne="Composite"
          titleLineTwo="Veneers"
          isDark
        >
          <p>
            Composite veneers offer a more affordable alternative to porcelain
            veneers. Made from tooth-colored resin material, they can be applied
            in a single visit and require less removal of natural tooth
            structure. While they may not last as long as porcelain veneers,
            they provide excellent results and can be easily repaired if needed.
          </p>
        </AnimatedImageTextSection>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default Veneers;
