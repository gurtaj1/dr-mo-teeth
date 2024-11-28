"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const GumTherapy = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <div className="text-5xl md:text-6xl lg:text-8xl text-center bg-dental-navy pt-8 text-white">
          <h1>Gum Therapy</h1>
        </div>
        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/gum-therapy-1.jpg"
          imageAlt="Gum Disease Overview"
          titleLineOne="Stop Your Teeth From"
          titleLineTwo="Falling Out"
          isDark
        >
          <p className=" mb-4">
            Gum disease treatment is a dental procedure aimed at improving the
            health of your gums and preventing further complications. Gum
            disease, also known as periodontal disease, occurs when bacteria
            build up in plaque and tartar, cause inflammation which in turn
            causes the gums to peel away from the teeth and the bone structure
            around the teeth to deteriorate making the teeth loose.
          </p>
          <p className=" mb-4">
            Treatment typically starts with a thorough cleaning to remove plaque
            and tartar from your teeth and below the gumline, often called
            scaling and root planing. In more advanced cases, your dentist may
            recommend additional therapies, such as antibiotics or surgical
            options.
          </p>
          <p className=" mb-6">
            The goal of gum disease treatment is to restore your gum health, and
            help maintain the supporting structures of the teeth so that they
            don&apos;t become loose and help you maintain a healthy smile for
            years to come.
          </p>
        </AnimatedImageTextSection>
        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/gum-therapy-2.jpg"
          imageAlt="Gum Disease Treatment"
          titleLineOne="Understanding"
          titleLineTwo="Gum Disease"
        >
          <p className="mb-4">
            Early detection and treatment of gum disease is crucial. Here are
            the signs to watch for:
          </p>
          <ul className="space-y-2">
            <li>• Bleeding gums during brushing or flossing</li>
            <li>• Red, swollen, or tender gums</li>
            <li>• Receding gums</li>
            <li>• Persistent bad breath</li>
            <li>• Loose teeth or changes in bite</li>
          </ul>
        </AnimatedImageTextSection>
        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/gum-therapy-3.jpg"
          imageAlt="Gum Treatment Benefits"
          titleLineOne="Benefits of"
          titleLineTwo="Gum Therapy"
          isDark
        >
          <ul className="space-y-4">
            <li>
              <span className="text-dental-teal">•</span> Prevents tooth loss
            </li>
            <li>
              <span className="text-dental-teal">•</span> Reduces inflammation
              and bleeding
            </li>
            <li>
              <span className="text-dental-teal">•</span> Eliminates bad breath
            </li>
            <li>
              <span className="text-dental-teal">•</span> Protects overall oral
              health
            </li>
            <li>
              <span className="text-dental-teal">•</span> Maintains healthy bone
              structure
            </li>
          </ul>
        </AnimatedImageTextSection>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default GumTherapy;
