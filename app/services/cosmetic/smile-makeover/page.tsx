"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const SmileMakeover = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="text-8xl text-center  bg-dental-navy pt-8">
        <h1>Smile Makeover</h1>
      </div>
      <AnimatedImageTextSection
        imagePosition="right"
        imageSrc="/smile-makeover-1.jpg"
        imageAlt="Smile Makeover Hero"
        titleLineOne="Enhance"
        titleLineTwo="Your Current Smile"
        isTitleLineOneBold
        isDark
        scrollFactor={1}
      >
        <div className="space-y-6">
          <p>
            A radiant, confident smile is one of the first things people notice.
            If you&apos;re unhappy with the appearance of your teeth, a Smile
            Makeover can provide the transformation you&apos;ve been dreaming
            of. Whether you&apos;re dealing with crooked, stained, chipped, or
            missing teeth, we offer customised solutions to help you achieve the
            beautiful smile you deserve. What is a Smile Makeover? A Smile
            Makeover is a comprehensive approach to improving the aesthetics of
            your smile. It combines various cosmetic dental treatments, tailored
            to your unique needs and goals. From teeth whitening to veneers,
            dental crowns, and orthodontics, a Smile Makeover can address a wide
            range of dental concerns, giving you a refreshed and youthful
            appearance.
          </p>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/smile-makeover-2.jpg"
        imageAlt="Smile Makeover Process"
        titleLineOne="Common Treatments in a"
        titleLineTwo="Smile Makeover"
        scrollFactor={1}
      >
        <div className="space-y-6">
          <p>
            Depending on your needs, a Smile Makeover may include one or more of
            the following procedures:
          </p>
          <ol className="space-y-2">
            <li>1. Teeth Whitening</li>
            <li>2. Porcelain Veneers</li>
            <li>3. Dental Crowns</li>
            <li>4. Clear Aligners</li>
            <li>5. Bonding</li>
            <li>6. Gum Contouring / Crown Lengthening</li>
            <li>7. Implants or Bridges</li>
          </ol>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="right"
        imageSrc="/smile-makeover-3.jpg"
        imageAlt="Smile Makeover Journey"
        titleLineOne="Your Smile Makeover Journey"
        titleLineTwo="The Process"
        isDark
        scrollFactor={1}
      >
        <div className="space-y-4 ">
          <ol className="space-y-4">
            <li>
              <strong>1. Initial Consultation</strong>
              <p>
                Every Smile Makeover begins with a thorough consultation. During
                this visit, we&apos;ll discuss your aesthetic goals, examine
                your teeth and gums, and determine which treatments are right
                for you.
              </p>
            </li>
            <li>
              <strong>2. Customized Treatment Plan</strong>
              <p>
                Once we have a clear understanding of your needs, we will create
                a customized treatment plan to achieve your desired results.
                This may involve a combination of services, and we will ensure
                that each procedure is designed to complement your overall
                goals.
              </p>
            </li>
            <li>
              <strong>3. The Makeover</strong>
              <p>
                With your treatment plan in place, we will begin the makeover
                process. Depending on the procedures involved, your smile
                makeover may be completed over multiple visits. Our team will
                keep you comfortable and informed every step of the way.
              </p>
            </li>
            <li>
              <strong>4. Post-Treatment Care</strong>
              <p>
                After your Smile Makeover, we&apos;ll provide detailed aftercare
                instructions to ensure that your new smile lasts. Regular
                check-ups will help maintain the beauty and function of your
                smile.
              </p>
            </li>
          </ol>
        </div>
      </AnimatedImageTextSection>
    </div>
  );
};

export default SmileMakeover;
