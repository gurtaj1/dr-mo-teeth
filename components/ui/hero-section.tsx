import AnimatedElement from "./animated-element";
interface HeroSectionProps {
  title: {
    lineOne: string;
    lineTwo: string;
    isFirstLineBold: boolean; // true for first line bold, false for second line
  };
  description: string;
  bulletPoints?: string[];
  className?: string;
}

const HeroSection = ({
  title,
  description,
  bulletPoints,
  className = "",
}: HeroSectionProps) => {
  return (
    <section className={`py-16 bg-dental-navy ${className}`}>
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h1 className="text-7xl mb-8 text-white">
            <span className={title.isFirstLineBold ? "font-bold" : ""}>
              {title.lineOne}
            </span>
            <br />
            <span className={!title.isFirstLineBold ? "font-bold" : ""}>
              {title.lineTwo}
            </span>
          </h1>
        </AnimatedElement>
        <div className={"w-1/4 border-b-2 border-dental-teal mb-6"}></div>
        <AnimatedElement>
          <p className="text-dental-accent1 mx-auto">{description}</p>
        </AnimatedElement>
        {bulletPoints && (
          <AnimatedElement>
            <ul className="text-dental-accent1 mx-auto mt-4 space-y-2">
              {bulletPoints.map((point, index) => (
                <li key={index}>- {point}</li>
              ))}
            </ul>
          </AnimatedElement>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
