"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useMediaQuery } from "@/hooks/use-media-query";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedElement from "@/components/ui/animated-element";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { navBarHeight } from "./globals/constants";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const slidesPerView = isMobile ? 1 : 3;

  const testimonials = [
    {
      name: "John Doe",
      text: "Dr Mo transformed my smile! I couldn't be happier with the results.",
    },
    {
      name: "Jane Smith",
      text: "The team at Dr Mo made me feel comfortable throughout my entire treatment.",
    },
    {
      name: "Mike Johnson",
      text: "I've never felt more confident about my teeth. Thank you, Dr Mo!",
    },
    {
      name: "Sarah Williams",
      text: "Professional, caring and excellent results. Highly recommend Dr Mo!",
    },
    {
      name: "David Brown",
      text: "The best dental experience I've ever had. Dr Mo is fantastic.",
    },
    {
      name: "Emma Davis",
      text: "Life-changing results! So happy I chose Dr Mo for my treatment.",
    },
  ];

  const maxIndex = Math.max(0, testimonials.length - slidesPerView);

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash === "#about") {
      // Add a small delay to ensure the page content is loaded
      setTimeout(() => {
        const element = document.getElementById("about");
        const elementPosition = element?.getBoundingClientRect().top ?? 0;
        const offsetPosition =
          elementPosition + window.pageYOffset - navBarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  }, []); // Run once when component mounts

  // const autoRotateInterval = 5000;

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setActiveIndex((current) => (current < maxIndex ? current + 1 : 0));
  //   }, autoRotateInterval);

  //   return () => clearInterval(timer);
  // }, [maxIndex, autoRotateInterval]);

  const nextTestimonial = () => {
    setActiveIndex((current) => Math.min(current + 1, maxIndex));
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 50;
    if (touchStart - touchEnd > minSwipeDistance) {
      // Swiped left
      nextTestimonial();
    }
    if (touchEnd - touchStart > minSwipeDistance) {
      // Swiped right
      prevTestimonial();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={"/mo-teeth-invideo.mp4"} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-dental-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-dental-accent1">
          <h1 className="text-9xl font-bold mb-4">DR. MO</h1>
          <Button
            asChild
            size="lg"
            className="mb-4 bg-dental-teal hover:bg-dental-secondary"
          >
            <Link href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com">
              Make an Enquiry
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-8 text-dental-accent1">
              About Me
            </h2>
          </AnimatedElement>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 text-center">
              <AnimatedElement>
                <h3 className="text-2xl font-semibold">Dr Mohsin Aslam</h3>
                <ul className="space-y-2">
                  <li>Bachelor of Dental Surgery (BDS) – Cardiff University</li>
                  <li>
                    Master in Implantology with Distinction (MSc) – University
                    of Salford
                  </li>
                  <li>GDC Number – 251332</li>
                </ul>
              </AnimatedElement>
              <AnimatedElement>
                <p className="text-dental-accent1">
                  Choosing me as your dentist means opting for a blend of
                  professional expertise, compassionate care, and a commitment
                  to your overall dental health. With years of experience and
                  continuous education, I stay at the forefront of dental
                  innovations to provide the latest, most effective treatments.
                  My practice prioritises patient comfort, utilising
                  state-of-the-art technology to make procedures as painless and
                  efficient as possible. I foster a welcoming and friendly
                  environment where each patient feels valued and understood.
                  From routine check-ups to complex procedures, I offer
                  personalised care tailored to your unique needs, ensuring that
                  every visit contributes positively to your long-term oral
                  health and well-being.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-12 text-dental-navy">
              My Approach to Dental Care
            </h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedElement transitionSize>
              <div className="text-center p-6 rounded-lg border-2 border-dental-teal/20 transition-all duration-300 hover:bg-dental-accent1/5 hover:transform hover:scale-105 hover:shadow-lg group h-64 flex flex-col justify-between">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-dental-teal transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dental-navy transition-colors duration-300 group-hover:text-dental-teal">
                  TECHNOLOGY
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-dental-navy">
                  The Latest Technology
                  <br />
                  providing Precision,
                  <br />
                  Efficiency and Comfort
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement transitionSize>
              <div className="text-center p-6 rounded-lg border-2 border-dental-teal/20 transition-all duration-300 hover:bg-dental-accent1/5 hover:transform hover:scale-105 hover:shadow-lg group h-64 flex flex-col justify-between">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-dental-teal transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dental-navy transition-colors duration-300 group-hover:text-dental-teal">
                  QUALITY
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-dental-navy">
                  High Quality Dentistry,
                  <br />
                  Guided By Science
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement transitionSize>
              <div className="text-center p-6 rounded-lg border-2 border-dental-teal/20 transition-all duration-300 hover:bg-dental-accent1/5 hover:transform hover:scale-105 hover:shadow-lg group h-64 flex flex-col justify-between">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-dental-teal transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dental-navy transition-colors duration-300 group-hover:text-dental-teal">
                  BESPOKE
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-dental-navy">
                  Personalised Care,
                  <br />
                  Tailored To You
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-8 text-dental-accent1">
              Our Services
            </h2>
          </AnimatedElement>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Teeth Whitening",
                description:
                  "Brighten your smile with our professional whitening treatment.",
                link: "services/cosmetic/teeth-whitening",
              },
              {
                title: "Dental Implants",
                description:
                  "Replace missing teeth with natural-looking implants.",
                link: "services/surgeries/implants",
              },
              {
                title: "Invisalign",
                description:
                  "Straighten your teeth discreetly with clear aligners.",
                link: "services/cosmetic/invisalign",
              },
              {
                title: "Veneers",
                description:
                  "Transform your smile with custom-made porcelain veneers.",
                link: "services/cosmetic/veneers",
              },
              {
                title: "Root Canal Therapy",
                description: "Save your natural tooth with root canal therapy.",
                link: "services/general/root-canal",
              },
              {
                title: "Dental Crowns",
                description:
                  "Restore damaged teeth with durable, natural-looking crowns.",
                link: "services/general/crowns",
              },
            ].map((service, index) => (
              <AnimatedElement transitionSize key={index}>
                <Link href={service.link} className="h-full">
                  <Card className="bg-dental-primary/10 hover:bg-dental-primary/20 transition-colors border-dental-accent1/20 h-full flex flex-col group">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="overflow-hidden rounded-lg mb-4">
                        <img
                          src={`/service-${index + 1}.jpg`}
                          alt={service.title}
                          className="w-full h-48 object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-dental-accent1">
                          {service.title}
                        </h3>
                        <p className="text-dental-accent1/80">
                          {service.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-12 text-dental-navy">
              3 SIMPLE STEPS FOR ACHIEVING YOUR BEST SMILE
            </h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                text: "Schedule an exam",
                image: "/placeholder-2.jpg",
              },
              {
                step: 2,
                text: "Speak with a dentist about your goals",
                image: "/placeholder-2.jpg",
              },
              {
                step: 3,
                text: "Create a plan and start your smile journey",
                image: "/placeholder-2.jpg",
              },
            ].map((step, index) => (
              <AnimatedElement transitionSize key={index}>
                <div className="relative">
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={`Step ${step.step}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dental-teal flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <p className="text-dental-navy text-xl font-semibold mt-8 text-center">
                    {step.text}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-8 text-dental-accent1">
              Patient Reviews
            </h2>
          </AnimatedElement>
          <AnimatedElement transitionSize>
            <div className="w-full max-w-6xl mx-auto px-4 py-8">
              <div className="relative">
                <div
                  className="overflow-hidden"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${
                        activeIndex * (100 / slidesPerView)
                      }%)`,
                    }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className={`w-full sm:w-1/3 flex-shrink-0 px-2`}
                      >
                        <Card className="h-full border-none shadow-lg">
                          <CardContent className="p-6 flex flex-col justify-between h-full">
                            <p className="text-gray-600 mb-4 text-lg italic">
                              &quot;{testimonial.text}&quot;
                            </p>
                            <p className="font-semibold text-right">
                              {testimonial.name}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full -ml-4 bg-dental-teal/20 border-dental-teal hover:bg-dental-teal/40 hover:border-dental-teal"
                    onClick={prevTestimonial}
                    disabled={activeIndex === 0}
                    aria-label="Previous testimonials"
                  >
                    <ChevronLeft className="h-4 w-4 text-dental-accent1" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full -mr-4 bg-dental-teal/20 border-dental-teal hover:bg-dental-teal/40 hover:border-dental-teal"
                    onClick={nextTestimonial}
                    disabled={activeIndex === maxIndex}
                    aria-label="Next testimonials"
                  >
                    <ChevronRight className="h-4 w-4 text-dental-accent1" />
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
