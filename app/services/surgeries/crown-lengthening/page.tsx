"use client";

import TitleSection from "@/components/ui/title-section";
import DoubleImage from "../../../../components/ui/double-image";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
const CrownLengthening = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="flex-grow flex flex-col min-h-screen bg-white overflow-x-hidden">
        {/* Crown Lengthening Section */}
        <TitleSection
          titleText="Crown Lengthening"
          bodyText={[
            "Crown lengthening is a dental procedure that involves removing some gum and sometimes a small amount of bone around the tooth to expose more of a tooth's structure. This is often done when a tooth is decayed or damaged below the gum line, making it difficult to place a crown or filling.",
            "By increasing the visible portion of the tooth, crown lengthening helps ensure a better fit for restorations and improves the overall appearance of your smile. It's a simple procedure that can make a big difference in both function and aesthetics.",
          ]}
          isFullPageHeight
        />

        <DoubleImage
          images={[
            {
              imageSrc: "/crown-lengthening-1.jpg",
              imageAlt: "Crown Lengthening Image 1",
            },
            {
              imageSrc: "/crown-lengthening-2.jpg",
              imageAlt: "Crown Lengthening Image 2",
            },
          ]}
        />
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default CrownLengthening;
