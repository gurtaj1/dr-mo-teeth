"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import QuestionsSection from "@/components/ui/questions-section";
import TitleSection from "@/components/ui/title-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import AnimatedElement from "@/components/ui/animated-element";
import { motion } from "framer-motion";

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
        <section className="py-16 bg-dental-navy relative">
          <div className="container mx-auto px-6 relative text-white">
            <AnimatedElement>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 text-center">
                <span className="relative inline-block">
                  <strong>Reasons for a Tooth Extraction</strong>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dental-teal to-transparent"
                  />
                </span>
                <br />
                <span className="mt-2 block">May Include:</span>
              </h2>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: "fas fa-virus",
                  text: "Infected or abscessed tooth",
                },
                {
                  icon: "fas fa-tooth",
                  text: "Broken or severely damaged teeth",
                },
                {
                  icon: "fas fa-teeth",
                  text: "Problems caused by wisdom teeth",
                },
                {
                  icon: "fas fa-arrows-alt-h",
                  text: "Overcrowding in the mouth",
                },
              ].map((item, index) => (
                <AnimatedElement key={index} transitionSize>
                  <motion.div
                    className="bg-white/10 p-6 rounded-lg text-center cursor-pointer h-full"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      duration: 0.2,
                    }}
                  >
                    <motion.div
                      className="text-4xl mb-4"
                      whileHover={{
                        scale: 1.1,
                        color: "#4dbaf9",
                      }}
                    >
                      <i className={item.icon}></i>
                    </motion.div>
                    <p>{item.text}</p>
                  </motion.div>
                </AnimatedElement>
              ))}
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
