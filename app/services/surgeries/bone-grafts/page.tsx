"use client";

import AnimatedElement from "@/components/ui/animated-element";

const BoneGrafts = () => {
  return (
    <div className="flex-grow flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Bone Grafts Section */}
      <section className="flex-grow py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h1 className="text-7xl font-bold text-center mb-8">Bone Grafts</h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
              Dental bone grafts are a procedure used to build up bone in your
              jaw when there isn&apos;t enough to support dental implants or
              other treatments. During the process, a small amount of bone
              material is placed in the area where more bone is needed. This can
              come from your own body, a donor, animal bone or synthetic
              materials. Over time, your body will grow new bone around the
              graft, strengthening the area. Bone grafts can help ensure that
              dental implants have a stable foundation.
            </p>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default BoneGrafts;
