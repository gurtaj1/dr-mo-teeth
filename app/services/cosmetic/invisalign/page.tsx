import { Button } from "@/components/ui/button";
import Link from "next/link";

const Invisalign = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Invisalign Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
            Invisalign / Clear Aligners
          </h1>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            Clear aligner therapy is a modern way to straighten teeth using a
            series of custom-made, transparent trays. These aligners gently
            shift your teeth into the desired position over time, making it a
            more discreet and comfortable alternative to traditional metal
            braces. You wear each set of aligners for about one to two weeks,
            and then switch to the next set in the series. The best part is that
            you can easily remove them for eating, brushing, and flossing, which
            makes maintaining your oral hygiene simple. Clear aligner therapy
            helps you achieve a straighter smile without the hassle of fixed
            metal braces.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-4 text-dental-accent1">
              Advantages of Clear Aligners and Fixed Braces:
            </h2>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                alt="Clear aligners and braces comparison"
                className="max-w-2xl w-full rounded-lg"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-dental-accent1 mb-4">
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
            <Button
              asChild
              size="lg"
              className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
            >
              <Link href="#book">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invisalign;
