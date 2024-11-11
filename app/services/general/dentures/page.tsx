"use client";

import { useRef, useState } from "react";

import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import TitleSection from "@/components/ui/title-section";

const Dentures = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Dentures Section */}
      <TitleSection
        titleText="Dentures"
        bodyText={[
          "Dentures are removable dental appliances designed to replace missing teeth and restore your smile. They can be complete dentures, which replace all your teeth, or partial dentures, which fill in gaps when some natural teeth are still present. Made from materials like acrylic or a combination of metal and plastic, dentures are custom fitted to your mouth for comfort and stability.",
          "They not only help improve your appearance but also make it easier to eat and speak. With proper care, dentures can be a long-lasting solution for tooth loss, helping you regain your confidence and enjoy everyday activities.",
        ]}
      />

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/dentures-1.jpg"
        imageAlt="Types of Dentures"
        titleLineOne="Types of"
        titleLineTwo="Dentures"
        scrollFactor={1}
      >
        <p className="mb-4">
          We offer different types of dentures to suit your specific needs:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Complete Dentures:</strong> Replace all teeth in upper or
            lower jaw
          </li>
          <li>
            <strong>Partial Dentures:</strong> Fill gaps while preserving
            natural teeth
          </li>
          <li>
            <strong>Immediate Dentures:</strong> Placed immediately after tooth
            extraction
          </li>
          <li>
            <strong>Flexible Dentures:</strong> Made from comfortable, flexible
            materials
          </li>
        </ul>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="right"
        imageSrc="/dentures-2.jpg"
        imageAlt="Denture Benefits"
        titleLineOne="Benefits of"
        titleLineTwo="Dentures"
        isDark
        scrollFactor={1}
      >
        <ul className="space-y-4 ">
          <li>⭐ Restore your natural smile</li>
          <li>⭐ Improve eating and speaking ability</li>
          <li>⭐ Support facial muscles</li>
          <li>⭐ Boost self-confidence</li>
          <li>⭐ Custom-fitted for comfort</li>
        </ul>
      </AnimatedImageTextSection>
    </div>
  );
};

export default Dentures;
