import AnimatedElement from "@/components/ui/animated-element";

interface TitleSectionProps {
  titleText: string;
  bodyText: string[];
  isFullPageHeight?: boolean;
}

const TitleSection = ({
  titleText,
  bodyText,
  isFullPageHeight,
}: TitleSectionProps) => {
  return (
    <section
      className={`py-16 bg-dental-navy ${isFullPageHeight ? "flex-grow" : ""}`}
    >
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-8">
            {titleText}
          </h1>
        </AnimatedElement>
        <div
          className={"w-1/4 mx-auto border-b-2 border-dental-teal mb-6"}
        ></div>
        {bodyText.map((text, index) => (
          <AnimatedElement key={index}>
            <p
              className={`text-dental-accent1 max-w-3xl mx-auto text-center ${
                index > 0 ? "mt-4" : ""
              }`}
            >
              {text}
            </p>
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
};

export default TitleSection;
