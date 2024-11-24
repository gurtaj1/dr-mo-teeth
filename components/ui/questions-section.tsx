"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className={`py-16 ${isDark ? "bg-dental-navy" : ""}`}>
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h2
            className={`text-5xl mb-4 ${
              isDark ? "text-white" : "text-dental-navy"
            } text-center`}
          >
            {title}
          </h2>
        </AnimatedElement>
        <motion.div
          ref={ref}
          initial={{ height: 0 }}
          animate={{ height: isVisible ? "2rem" : 0 }}
          transition={{ duration: 1 }}
          className={`w-0.5 ${
            isDark ? "bg-dental-teal" : "bg-dental-accent1"
          } mx-auto mb-8`}
        ></motion.div>
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
                          isDark ? "text-dental-teal" : "text-dental-accent1"
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
