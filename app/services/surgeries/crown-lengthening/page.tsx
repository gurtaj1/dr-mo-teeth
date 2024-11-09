"use client";

import AnimatedElement from "@/components/ui/animated-element";

const CrownLengthening = () => {
  return (
    <div className="flex-grow flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Crown Lengthening Section */}
      <section className="flex-grow py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-4xl font-bold text-center mb-81">
              Crown Lengthening
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              Crown lengthening is a dental procedure that involves removing
              some gum and sometimes a small amount of bone around the tooth to
              expose more of a tooth&apos;s structure. This is often done when a
              tooth is decayed or damaged below the gum line, making it
              difficult to place a crown or filling. By increasing the visible
              portion of the tooth, crown lengthening helps ensure a better fit
              for restorations and improves the overall appearance of your
              smile. It&apos;s a simple procedure that can make a big difference
              in both function and aesthetics.
            </p>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default CrownLengthening;
