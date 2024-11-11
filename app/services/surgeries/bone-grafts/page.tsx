"use client";

import TitleSection from "../../../../components/ui/title-section";
import DoubleImage from "../../../../components/ui/double-image";

const BoneGrafts = () => {
  return (
    <div className="flex-grow flex flex-col min-h-screen bg-dental-navy overflow-x-hidden">
      {/* Bone Grafts Section */}
      <TitleSection
        titleText="Bone Grafts"
        bodyText={[
          "Dental bone grafts are a procedure used to build up bone in your jaw when there isn't enough to support dental implants or other treatments. During the process, a small amount of bone material is placed in the area where more bone is needed. This can come from your own body, a donor, animal bone or synthetic materials.",
          "Over time, your body will grow new bone around the graft, strengthening the area. Bone grafts can help ensure that dental implants have a stable foundation.",
        ]}
        isFullPageHeight
      />

      <DoubleImage
        images={[
          { imageSrc: "/bone-grafting-1.jpg", imageAlt: "Bone Grafts Image 1" },
          { imageSrc: "/bone-grafting-2.jpg", imageAlt: "Bone Grafts Image 2" },
        ]}
      />
    </div>
  );
};

export default BoneGrafts;
