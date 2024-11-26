"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import QuestionsSection from "@/components/ui/questions-section";
import TitleSection from "@/components/ui/title-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const Extractions = () => {
  const questions = [
    {
      icon: "✦",
      title: "Do you remove wisdom teeth?",
      content:
        "Absolutely! I treat patients of all ages who need wisdom tooth extractions. Not everyone requires this procedure, and I shall help you determine if removing your wisdom teeth are necessary for your long-term health.",
    },
    {
      icon: "✦",
      title: "Does a tooth extraction hurt?",
      content:
        "I make sure you're completely numb and comfortable during the procedure. Afterward, I may prescribe pain medication to help manage any discomfort. An ice pack can also be used in the days following the extraction to reduce swelling.",
    },
    {
      icon: "✦",
      title: "Can I eat and drink immediately after the extraction?",
      content: (
        <>
          <p>
            I recommend sticking to soft foods for a few days following your
            surgery. Some good options include:
          </p>
          <ul className="list-none mt-2">
            <li>- Pudding</li>
            <li>- Yogurt</li>
            <li>- Soft vegetables</li>
            <li>- Ice cream</li>
            <li>- Thin soups</li>
          </ul>
          <p className="mt-4">
            When drinking, avoid using a straw, as the suction can dislodge your
            sutures and impede the healing process. The same caution applies to
            smoking and vaping.
          </p>
        </>
      ),
    },
  ];

  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-white">
        {/* Extractions Section */}
        <TitleSection
          titleText="Extractions"
          bodyText={[
            "Tooth extractions are performed in a manner to ensure your comfort and safety. First, the area around the tooth is numbed with local anaesthesia so you won't feel any pain during the procedure. Next, carefully loosening the tooth using special tools to gently remove it from its position. If the tooth is impacted or difficult to reach, the dentist may need to break it into smaller pieces and carefully remove some bone around the roots of the tooth for easier removal. After the extraction, the area is cleaned, and you are provided with care instructions to help you heal.",
          ]}
        />

        {/* Emergency Pain Section */}
        <AnimatedImageTextSection
          imagePosition="right"
          imageSrc="/extractions-1.jpg"
          imageAlt="Emergency Pain Hero"
          titleLineOne="Are You in Pain?"
          titleLineTwo="Get Help ASAP"
        >
          <div className="space-y-6">
            <p>
              If you&apos;re experiencing pain and need a tooth extraction
              urgently, I&apos;ll prioritize your appointment and ensure you
              have a positive and efficient experience.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
            >
              <Link href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com">
                Book an Emergency Appointment
              </Link>
            </Button>
          </div>
        </AnimatedImageTextSection>

        {/* Reasons for Extraction Section */}
        <section
          className="py-16 bg-dental-navy relative"
          style={{
            backgroundImage: `url('/extractions-2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70" />
          <div className="container mx-auto px-6 relative">
            <h2 className="text-3xl mb-12  text-center">
              <strong>Reasons for a Tooth Extraction </strong>
              <br />
              May Include:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className=" text-4xl mb-4">
                  <i className="fas fa-virus"></i>
                </div>
                <p className="">Infected or abscessed tooth</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className=" text-4xl mb-4">
                  <i className="fas fa-tooth"></i>
                </div>
                <p className="">Broken or severely damaged teeth</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className=" text-4xl mb-4">
                  <i className="fas fa-teeth"></i>
                </div>
                <p className="">Problems caused by wisdom teeth</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className=" text-4xl mb-4">
                  <i className="fas fa-arrows-alt-h"></i>
                </div>
                <p className="">Overcrowding in the mouth</p>
              </div>
            </div>
          </div>
        </section>

        <QuestionsSection
          theme="light"
          title={
            <>
              Dr. Mo Addresses Your
              <br />
              <span className="font-bold">
                Top Questions About Tooth Extractions
              </span>
            </>
          }
          questions={questions}
        />
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default Extractions;
