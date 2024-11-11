"use client";

import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";
import TitleSection from "@/components/ui/title-section";
import QuestionsSection from "@/components/ui/questions-section";

const CleaningsAndExams = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Examination Section */}
      <TitleSection
        titleText="Dental Examination"
        bodyText={[
          "A dental examination is a routine check-up that helps ensure your teeth and gums are healthy. During the exam, your dentist will carefully look at your mouth, teeth, and gums to check for any signs of cavities, gum disease, or other dental issues. They may also take X-rays to get a better view of what's happening below the surface.",
          "The exam is an important part of maintaining your oral health, as it allows your dentist to catch any problems early and provide recommendations for care or treatment. Regular examinations help you keep your smile healthy and prevent bigger issues down the road.",
        ]}
      />

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/examination-1.jpg"
        imageAlt="Dental Examination Process"
        titleLineOne="What's Included in a"
        titleLineTwo="Dental Exam"
      >
        <ul className="space-y-2">
          <li>✓ An assessment of your dental and medical history</li>
          <li>
            ✓ An extra oral and intra oral examination including all soft and
            hard tissues
          </li>
          <li>✓ A thorough check for any cancerous signs</li>
          <li>✓ X rays and an explanation of their findings</li>
          <li>✓ Diet history and how this will affect your teeth</li>
          <li>
            ✓ A risk assessment of your mouth for tooth wear, decay, gum disease
          </li>
          <li>✓ Treatment options including advantages and disadvantages</li>
          <li>✓ A bespoke treatment plan tailored for you</li>
          <li>✓ Oral hygiene instruction and advice</li>
          <li>✓ Recommendation for future care</li>
        </ul>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="right"
        imageSrc="/examination-2.jpg"
        imageAlt="Scale and Polish"
        titleLineOne="Professional"
        titleLineTwo="Scale and Polish"
        isDark
      >
        <div className="space-y-6 ">
          <p>
            A scale and polish is a dental cleaning procedure that helps keep
            your teeth and gums healthy. During this treatment, your dentist or
            hygienist will remove plaque and tartar build up from your teeth
            using special tools. This helps prevent gum disease and cavities.
          </p>
          <p>
            After scaling, they will polish your teeth with a gritty toothpaste
            to remove stains and leave them feeling smooth and clean. A scale
            and polish is an important part of your regular dental care routine
            and can help you maintain a bright smile and fresh breath!
          </p>
        </div>
      </AnimatedImageTextSection>

      {/* FAQ Section */}
      <QuestionsSection
        theme="light"
        title={
          <>
            Answers
            <br />
            <span className="font-bold">To Your Oral Hygiene Questions</span>
          </>
        }
        questions={[
          {
            icon: "✦",
            title: "Is it beneficial to have your teeth cleaned?",
            content:
              "Definitely! Regular dental cleanings are essential for removing stubborn plaque and tartar that can harbour bacteria. If not addressed, these build-ups can lead to tooth decay, gum disease, and other serious dental issues.",
          },
          {
            icon: "✦",
            title: "Is a scale and polish painful?",
            content:
              "If it's been some time since your last scale and polish, you might experience slight bleeding from your gums. However, hygienists are gentle and will proceed at a pace that suits your comfort level. If you feel any soreness afterward, an over-the-counter pain reliever should help.",
          },
          {
            icon: "✦",
            title: "What occurs during a scale and polish?",
            content:
              "During your cleaning, your dental hygienist will perform a thorough assessment of your gums, looking for any signs of recession or periodontal pockets. They'll gently remove plaque and tartar from around your gum line and between your teeth. After that, we'll polish your teeth using a specialized electric brush and finish by flossing. We also conduct an oral cancer screening during each visit and may suggest a prescription fluoride treatment or mouthwash if you're prone to cavities or have sensitive teeth.",
          },
        ]}
      />
    </div>
  );
};

export default CleaningsAndExams;
