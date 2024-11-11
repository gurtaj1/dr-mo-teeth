"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const DentalFillings = () => {
  return (
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
        scrollFactor={1}
      >
        <p className=" mb-8">
          A dental filling is a treatment used to restore a tooth that has been
          damaged by decay or injury. There are two common types of fillings:
          amalgam and composite. Amalgam fillings are made from a mixture of
          metals, including silver. Composite fillings, on the other hand, are
          made from a tooth-coloured resin, which allows them to blend in with
          your natural teeth. During the filling process, your dentist will
          remove the decay, clean the area, and then place the filling to
          restore the tooth&apos;s shape and function, helping you maintain a
          healthy smile.
        </p>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/fillings-2.jpg"
        imageAlt="Types of Dental Fillings"
        titleLineOne="Types of"
        titleLineTwo="Dental Fillings"
        scrollFactor={1}
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
        scrollFactor={1}
      >
        <ol className="space-y-4 ">
          <li>1. Examination and x-rays to assess decay</li>
          <li>2. Local anesthetic to ensure comfort</li>
          <li>3. Removal of decay and cleaning of the cavity</li>
          <li>4. Placement and shaping of filling material</li>
          <li>5. Final adjustments for proper bite</li>
        </ol>
      </AnimatedImageTextSection>
    </div>
  );
};

export default DentalFillings;
