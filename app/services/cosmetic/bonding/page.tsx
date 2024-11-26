"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import TitleSection from "../../../../components/ui/title-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const Bonding = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Dental Bonding Section */}
        <TitleSection
          titleText="Dental Bonding"
          bodyText={[
            "Dental bonding is a cosmetic procedure where a tooth-colored resin material is applied and hardened with a special light, bonding the material to the tooth to improve its appearance. It's a quick, affordable way to repair chipped, cracked, or discolored teeth.",
            "The procedure is simple, typically completed in one visit, and can make a significant difference in your smile.",
          ]}
        />

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/bonding-1.jpg"
          imageAlt="Dental Bonding Process"
          titleLineOne="The Bonding"
          titleLineTwo="Process"
        >
          <p className="mb-4">
            The dental bonding process is straightforward and typically follows
            these steps:
          </p>
          <ol className="space-y-2">
            <li>
              <strong>1. Preparation:</strong> Little preparation is needed, and
              anesthesia is often not necessary
            </li>
            <li>
              <strong>2. Bonding:</strong> The tooth surface is roughened and
              conditioned
            </li>
            <li>
              <strong>3. Application:</strong> The resin is applied, molded, and
              smoothed
            </li>
            <li>
              <strong>4. Curing:</strong> A special light hardens the material
            </li>
            <li>
              <strong>5. Finishing:</strong> Final shaping and polishing
            </li>
          </ol>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/bonding-2.jpg"
          imageAlt="Bonding Benefits"
          titleLineOne="Benefits of"
          titleLineTwo="Dental Bonding"
          isDark
        >
          <ul className="space-y-4">
            <li>⭐ Quick and painless procedure</li>
            <li>⭐ Affordable cosmetic solution</li>
            <li>⭐ Natural-looking results</li>
            <li>⭐ Preserves tooth structure</li>
            <li>⭐ Completed in one visit</li>
          </ul>
        </AnimatedImageTextSection>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default Bonding;
