"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const DentalFillings = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <div className="text-8xl text-center  bg-dental-navy pt-8">
          <h1>Dental Fillings</h1>
        </div>

        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/fillings-1.jpg"
          imageAlt="Dental Filling Treatment"
          titleLineOne="Fill your tooth"
          titleLineTwo="Before it fails"
          isDark
        >
          <p className=" mb-8">
            A dental filling is a treatment used to restore a tooth that has
            been damaged by decay or injury. There are two common types of
            fillings: amalgam and composite. Amalgam fillings are made from a
            mixture of metals, including silver. Composite fillings, on the
            other hand, are made from a tooth-coloured resin, which allows them
            to blend in with your natural teeth. During the filling process,
            your dentist will remove the decay, clean the area, and then place
            the filling to restore the tooth&apos;s shape and function, helping
            you maintain a healthy smile.
          </p>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/fillings-2.jpg"
          imageAlt="Types of Dental Fillings"
          titleLineOne="Types of"
          titleLineTwo="Dental Fillings"
        >
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Amalgam Fillings:</h3>
              <ul className="space-y-2">
                <li>✓ Made from a mixture of metals</li>
                <li>✓ Very durable and long-lasting</li>
                <li>✓ Cost-effective option</li>
                <li>✓ Ideal for back teeth where strength is important</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Composite Fillings:</h3>
              <ul className="space-y-2">
                <li>✓ Tooth-colored resin material</li>
                <li>✓ Blends naturally with your teeth</li>
                <li>✓ Bonds directly to tooth structure</li>
                <li>✓ Perfect for visible front teeth</li>
              </ul>
            </div>
          </div>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/fillings-3.jpg"
          imageAlt="Filling Process"
          titleLineOne="The Filling"
          titleLineTwo="Process"
          isDark
        >
          <ol className="space-y-4 ">
            <ol className="space-y-4 ">
              <li>
                <strong>Step 1.</strong> Examination and x-rays to assess decay
              </li>
              <li>
                <strong>Step 2.</strong> Local anesthetic to ensure comfort
              </li>
              <li>
                <strong>Step 3.</strong> Removal of decay and cleaning of the
                cavity
              </li>
              <li>
                <strong>Step 4.</strong> Placement and shaping of filling
                material
              </li>
              <li>
                <strong>Step 5.</strong> Final adjustments for proper bite
              </li>
            </ol>
          </ol>
        </AnimatedImageTextSection>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default DentalFillings;
