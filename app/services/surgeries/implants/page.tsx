"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import TitleSection from "@/components/ui/title-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const DentalImplants = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Dental Implants Section */}
        <TitleSection
          titleText="Dental Implants"
          bodyText={[
            "Dental implants are a reliable way to replace missing teeth. These small titanium screws are placed into your jawbone, acting like the root of a tooth. Once they integrate with the bone, they provide a sturdy base for a custom-made crown that looks and functions like a natural tooth. Dental implants not only enhance your smile but also help restore your ability to chew and speak comfortably, making them a great long-term solution for tooth loss.",
          ]}
        />

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/dental-implants-1.jpg"
          imageAlt="Dental Implant Procedure"
          titleLineOne="Your Dental"
          titleLineTwo="Implant Journey:"
        >
          <p className="mb-4">
            I collaborate closely with you to detail every step of your
            treatment, making sure you know what to expect at each stage:
          </p>
          <ol className="space-y-2 ">
            <li>
              <strong>Step 1.</strong> Assessment and treatment planning.
              Bespoke solutions tailored for you using Advanced 3D imaging
              technology
            </li>
            <li>
              <strong>Step 2.</strong> Placement of the Implant
            </li>
            <li>
              <strong>Step 3.</strong> Healing phase: allowing for a comfortable
              recovery
            </li>
            <li>
              <strong>Step 4.</strong> Restoration Phase: Making the custom made
              teeth for your smile
            </li>
            <li>
              <strong>Step 5.</strong> Maintenance phase: Teaching you how to
              care for your implant
            </li>
          </ol>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/dental-implants-2.jpg"
          imageAlt="Dental Implant Benefits"
          titleLineOne="Amazing Benefits of"
          titleLineTwo="Dental Implants:"
          isDark
        >
          <ul className="space-y-4">
            <li>
              <span className="text-dental-teal">•</span> Strengthens your
              jawbone
            </li>
            <li>
              <span className="text-dental-teal">•</span> Promotes healthy gums
            </li>
            <li>
              <span className="text-dental-teal">•</span> Restores your ability
              to chew and speak
            </li>
            <li>
              <span className="text-dental-teal">•</span> Boosts your confidence
              to smile naturally again
            </li>
          </ul>
        </AnimatedImageTextSection>

        {/* Implant Retained Dentures Section */}
        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/dental-implants-6.jpg"
          imageAlt="Dental Implant Retained Dentures"
          titleLineOne="Dental Implant"
          titleLineTwo="Retained Dentures"
        >
          <p className="mb-4">
            Dental implant retained dentures are a removeable option to replace
            missing teeth, they are dentures supported by implants which act
            like screws placed in the jawbone. They are a secure and comfortable
            way to replace missing teeth.
          </p>
          <p className="mb-4">
            Instead of relying on traditional dentures that sit on your gums,
            these dentures are anchored to dental implants placed in your
            jawbone with magnetic like attachments. The implants provide
            stability, preventing the dentures from shifting or slipping while
            eating or speaking.
          </p>
          <p>
            This solution not only enhances your confidence but also improves
            your ability to enjoy your favourite foods. With implant retained
            dentures, you can smile and live life without the worry of loose or
            uncomfortable dentures.
          </p>
        </AnimatedImageTextSection>

        {/* Implant Retained Bridges Section */}
        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/dental-implants-4.jpg"
          imageAlt="Dental Implant Retained Bridges"
          titleLineOne="Dental Implant"
          titleLineTwo="Retained Bridges"
          isDark
        >
          <p className="mb-4">
            Dental implant retained bridges are a fixed option of replacing
            multiple missing teeth. Instead of using traditional bridges that
            can damage the neighbouring teeth for support, these bridges are
            anchored securely to dental implants which act like screws placed in
            your jawbone.
          </p>
          <p>
            The implants provide a strong foundation, allowing the bridge to
            stay in place while you eat and speak. Dental implant retained
            bridges can replace multiple missing teeth in one area of your mouth
            and can also replace all your missing teeth if you have no teeth at
            all.
          </p>
        </AnimatedImageTextSection>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default DentalImplants;
