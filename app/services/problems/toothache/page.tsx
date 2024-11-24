"use client";
import AnimatedImageTextSection from "../../../../components/ui/animated-image-text-section";

const Toothache = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Toothache Section */}
      <AnimatedImageTextSection
        imagePosition="right"
        imageSrc="/toothache-4.jpg"
        imageAlt="Common Causes of Tooth Pain"
        titleLineOne="Common Causes of"
        titleLineTwo="Tooth Pain"
        isDark
      >
        <div className="space-y-4">
          <p>
            Tooth pain is a widespread issue that can significantly affect your
            overall health and daily life. Understanding what might be causing
            your discomfort is the first step toward finding relief.
          </p>
          <ul className="space-y-2">
            <li>⭐ Tooth Decay: Cavities can cause sensitivity and pain</li>
            <li>⭐ Gum Disease: Infected gums lead to tooth and jaw pain</li>
            <li>⭐ Grinding: Excessive pressure damages teeth over time</li>
            <li>⭐ Injury: Physical trauma can cause immediate pain</li>
            <li>⭐ Infection: Abscesses cause severe, throbbing pain</li>
            <li>
              ⭐ Treatment Options: We offer solutions for all types of tooth
              pain
            </li>
          </ul>
        </div>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/toothache-1.jpg"
        imageAlt="Common Causes of Tooth Pain"
        titleLineOne="Understanding Your"
        titleLineTwo="Tooth Pain"
      >
        <p className="mb-4">Your tooth pain could be due to:</p>
        <ul className="space-y-2 ">
          <li>• Tooth decay/cavities</li>
          <li>• Gum disease</li>
          <li>• Grinding (bruxism)</li>
          <li>• Enamel erosion</li>
          <li>• Traumatic injury</li>
          <li>• Abscessed tooth (root infection)</li>
          <li>• Impacted tooth</li>
          <li>• Cracked teeth</li>
          <li>• Broken filling</li>
        </ul>
        <p className="mt-4">
          If attending for a pain appointment, I will discuss your pain&apos;s
          history and severity and perform a thorough oral exam. I may also take
          X-rays to pinpoint the cause of your discomfort. After identifying the
          issue, I&apos;ll explain your treatment options in detail.
        </p>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="right"
        imageSrc="/toothache-2.jpg"
        imageAlt="Tooth Pain Treatments"
        titleLineOne="Common Treatments for"
        titleLineTwo="Tooth Pain"
        isDark
      >
        <h3 className=" font-bold mb-2">Fillings</h3>
        <p className=" mb-4">
          Tooth pain from decay often means there&apos;s a cavity. We can clean
          out the affected area and use fillings to restore and protect your
          tooth from further pain.
        </p>

        <h3 className=" font-bold mb-2">Root Canals</h3>
        <p className=" mb-4">
          If a tooth is severely infected, root canal therapy may be necessary
          to save it and restore its function. We ensure a comfortable
          experience during this treatment to help ease any dental anxiety.
        </p>

        <h3 className=" font-bold mb-2">Extractions</h3>
        <p className="">
          While we aim to keep your natural teeth whenever possible, sometimes
          an extraction is the best option. We offer same-day appointments for
          emergency extractions, and we&apos;ll work with you to create a plan
          for replacing the tooth afterward.
        </p>
      </AnimatedImageTextSection>

      <AnimatedImageTextSection
        imagePosition="left"
        imageSrc="/toothache-3.jpg"
        imageAlt="Preventing Tooth Pain"
        titleLineOne="How to"
        titleLineTwo="Prevent Tooth Pain"
      >
        <p className="mb-4">
          Tooth pain can arise from various factors, but you can adopt some
          habits to lower your risk of developing pain and other oral health
          issues:
        </p>
        <ul className="space-y-2 ">
          <li>
            • Maintain good oral hygiene by brushing twice a day, flossing
            daily, and using a gentle mouthwash.
          </li>
          <li>• Schedule dental check-ups and cleanings every six months.</li>
          <li>• Avoid smoking and limit alcohol consumption.</li>
          <li>• Eat a balanced diet rich in nutrients.</li>
          <li>
            • Wear a mouthguard at night if you grind your teeth during sleep.
          </li>
        </ul>
      </AnimatedImageTextSection>
    </div>
  );
};

export default Toothache;
