"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedElement from "@/components/ui/animated-element";
import SmartCarousel from "@/components/ui/smart-carousel";
import AnimatedImageTextSection from "@/components/ui/animated-image-text-section";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const imageSlides = [
  "/invisalign-slide-1.png",
  "/invisalign-slide-2.png",
  "/invisalign-slide-3.png",
  "/invisalign-slide-4.png",
  "/invisalign-slide-5.png",
  "/invisalign-slide-6.png",
  "/invisalign-slide-7.png",
  "/invisalign-slide-8.png",
];

const Invisalign = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="flex-grow flex flex-col bg-white overflow-x-hidden">
        {/* Invisalign Section */}
        <section className="flex-grow py-16 bg-dental-navy">
          <AnimatedElement>
            <AnimatedImageTextSection
              imagePosition="left"
              imageSrc="/invisalign-1.jpg"
              imageAlt="Invisalign Clear Aligners"
              titleLineOne="Invisalign"
              titleLineTwo="Clear Aligners"
              isTitleLineOneBold={false}
              isDark
            >
              <p>
                Clear aligner therapy is a modern way to straighten teeth using
                a series of custom-made, transparent trays. These aligners
                gently shift your teeth into the desired position over time,
                making it a more discreet and comfortable alternative to
                traditional metal braces.
              </p>
              <p className="mt-4">
                You wear each set of aligners for about one to two weeks, and
                then switch to the next set in the series. The best part is that
                you can easily remove them for eating, brushing, and flossing,
                which makes maintaining your oral hygiene simple. Clear aligner
                therapy helps you achieve a straighter smile without the hassle
                of fixed metal braces.
              </p>
            </AnimatedImageTextSection>
          </AnimatedElement>
        </section>

        <section className="container mx-auto px-6">
          <div className="mt-8">
            <AnimatedElement transitionSize>
              <div className="w-full max-w-[98vw] md:max-w-3xl mx-auto">
                <SmartCarousel
                  items={imageSlides}
                  slidesToShow={1}
                  autoplay={true}
                  boxShadowColor="dental-primary"
                  hideSideButtons
                  autoplayInterval={8000}
                  className="px-0 sm:px-12"
                />
              </div>
            </AnimatedElement>
          </div>

          <div className="text-center mt-8 mb-8">
            <AnimatedElement>
              <p className="mb-4 text-black">
                Check out my presentation on clear aligners on my{" "}
                <Link
                  href="https://instagram.com/drmosmiles"
                  target="_blank"
                  className="underline hover:text-dental-accent2"
                >
                  Instagram
                </Link>{" "}
                for more information.
              </p>
            </AnimatedElement>
            <AnimatedElement>
              <Button
                asChild
                size="lg"
                className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
              >
                <Link href="#book">Get in touch</Link>
              </Button>
            </AnimatedElement>
          </div>
        </section>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default Invisalign;
