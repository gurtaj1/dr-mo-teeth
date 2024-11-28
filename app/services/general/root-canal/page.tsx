"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import QuestionsSection from "@/components/ui/questions-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const RootCanal = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <div className="text-5xl md:text-6xl lg:text-8xl text-center bg-dental-navy pt-8 text-white">
          <h1>Root Canal Therapy</h1>
        </div>
        {/* Root Canal Section */}
        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/root-canal-1.jpg"
          imageAlt="Root Canal Treatment Hero"
          titleLineOne="Stop the Pain and"
          titleLineTwo="Save the Tooth"
          isDark
        >
          <p className=" mb-8">
            Root canals often get a bad reputation, but they&apos;re one of the
            most misunderstood procedures in dentistry. While many people find
            them intimidating, a root canal is actually a highly effective
            treatment designed to alleviate pain and save your tooth.
          </p>
        </AnimatedImageTextSection>

        <AnimatedImageTextSection
          imagePosition="left"
          imageSrc="/root-canal-2.jpg"
          imageAlt="Root Canal Treatment"
          titleLineOne="Understanding"
          titleLineTwo="Root Canal Treatment"
        >
          <p className="mb-4">
            Root canal treatment is a dental procedure designed to save a tooth
            that is infected or severely damaged. During the treatment, your
            dentist will remove the infected nerve from inside the tooth, clean
            and disinfect the space, and then fill it with a special material to
            seal it.
          </p>
          <p>
            This helps prevent further infection and preserves the natural
            tooth, allowing you to continue using it for biting and chewing.
            While many people worry about root canals, they are often no more
            painful than getting a filling, and the procedure can relieve
            discomfort and help maintain your smile.
          </p>
        </AnimatedImageTextSection>

        <QuestionsSection
          theme="dark"
          title={
            <>
              Common Questions About <br />{" "}
              <span className="font-bold">Root Canal Treatment</span>
            </>
          }
          questions={[
            {
              icon: "✦",
              title: "How Long Does a Root Canal Take?",
              content:
                "A root canal generally lasts between 60 to 90 minutes. In some cases, your treatment may be spread over two appointments. We'll ensure you know what to expect throughout the process.",
            },
            {
              icon: "✦",
              title: "What Are the Signs of an Infected Tooth?",
              content: (
                <>
                  <p className="mb-2">
                    While only your dentist can accurately diagnose an infected
                    tooth, here are some symptoms to watch for:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <span className="text-dental-teal">•</span> Persistent
                      toothache
                    </li>
                    <li>
                      <span className="text-dental-teal">•</span> Ongoing
                      sensitivity to temperature changes
                    </li>
                    <li>
                      <span className="text-dental-teal">•</span> Tenderness in
                      the jawbone
                    </li>
                    <li>
                      <span className="text-dental-teal">•</span> Chips or
                      fractures in your tooth (even minor breaks can lead to
                      significant decay and infection)
                    </li>
                  </ul>
                </>
              ),
            },
          ]}
        />
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default RootCanal;
