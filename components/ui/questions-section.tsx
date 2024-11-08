import AnimatedElement from "@/components/ui/animated-element";

type Question = {
  icon: string;
  title: string;
  content: React.ReactNode;
};

interface QuestionsSectionProps {
  theme: "light" | "dark";
  title: React.ReactNode;
  questions: Question[];
}

const QuestionsSection = ({
  theme,
  title,
  questions,
}: QuestionsSectionProps) => {
  const isDark = theme === "dark";
  const hasOddQuestions = questions.length % 2 !== 0;

  return (
    <section className={`py-16 ${isDark ? "bg-dental-navy" : ""}`}>
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h2
            className={`text-4xl mb-4 ${
              isDark ? "text-dental-accent1" : "text-dental-navy"
            } text-center`}
          >
            {title}
          </h2>
        </AnimatedElement>
        <div
          className={`w-0.5 h-8 ${
            isDark ? "bg-white" : "bg-dental-accent1"
          } mx-auto mb-8`}
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {questions.map((question, index) => {
            const isLastQuestion = index === questions.length - 1;
            const shouldSpanFull = hasOddQuestions && isLastQuestion;

            return (
              <div
                key={index}
                className={shouldSpanFull ? "md:col-span-2" : ""}
              >
                <AnimatedElement transitionSize>
                  <div>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        isDark ? "text-dental-accent1" : "text-dental-navy"
                      } flex items-center gap-2 ${
                        shouldSpanFull ? "md:justify-center" : ""
                      }`}
                    >
                      <span
                        className={
                          isDark ? "text-white" : "text-dental-accent1"
                        }
                      >
                        {question.icon}
                      </span>
                      {question.title}
                    </h3>
                    <div
                      className={`${isDark ? "text-white" : "text-gray-600"} ${
                        shouldSpanFull ? "md:text-center" : ""
                      }`}
                    >
                      {question.content}
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
