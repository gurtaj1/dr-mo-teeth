"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import TitleSection from "../../../../components/ui/title-section";

const Bonding = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Composite Bonding Section */}
      <TitleSection
        titleText="Composite Bonding"
        bodyText={[
          "Composite bonding is a dental procedure used to improve the appearance of your teeth by applying a tooth-coloured resin material. This process can help fix chips, gaps, or discoloration, giving you a more even and natural-looking smile. During the procedure, your dentist will match the resin to the colour of your teeth, then apply it and shape it to achieve the desired look. The material is then hardened using a special light. Composite bonding is a quick, effective, and often painless way to enhance your smile, and it can usually be completed in just one visit.",
        ]}
      />

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/bonding-1.jpg"
        imageAlt="Bonding Process"
        titleLineOne="The Bonding"
        titleLineTwo="Process"
      >
        <ol className="space-y-2">
          <li>
            <strong>Step 1.</strong> Consultation and shade matching to ensure
            natural results
          </li>
          <li>
            <strong>Step 2.</strong> Gentle preparation of the tooth surface
          </li>
          <li>
            <strong>Step 3.</strong> Application of the composite resin material
          </li>
          <li>
            <strong>Step 4.</strong> Shaping and sculpting to achieve desired
            appearance
          </li>
          <li>
            <strong>Step 5.</strong> Hardening with special light and final
            polishing
          </li>
        </ol>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="right"
        imageSrc="/bonding-2.jpg"
        imageAlt="Bonding Benefits"
        titleLineOne="Benefits of"
        titleLineTwo="Composite Bonding"
        isDark
      >
        <ul className="space-y-4">
          <li>⭐ Quick and minimally invasive procedure</li>
          <li>⭐ Natural-looking results</li>
          <li>⭐ Can fix multiple cosmetic issues</li>
          <li>⭐ Usually completed in one visit</li>
          <li>⭐ Preserves natural tooth structure</li>
        </ul>
      </AnimatedImageTextSection>
    </div>
  );
};

export default Bonding;
