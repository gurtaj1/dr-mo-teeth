"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedElement from "@/components/ui/animated-element";
import SmartCarousel from "@/components/ui/smart-carousel";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import TechnologyIcon from "@/app/svg-components/technology-icon";
import QualityIcon from "@/app/svg-components/quality-icon";
import BespokeIcon from "@/app/svg-components/bespoke-icon";

import {
  navBarHeight,
  homeIconVariants,
  homeCardVariants,
  linkFramerVariants,
} from "./globals/constants";

const HomePage = () => {
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

  const carouselItems = testimonials.map((testimonial, index) => (
    <Card key={index} className="h-full border-none shadow-lg">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <p className="text-gray-600 mb-4 text-lg italic">
          &quot;{testimonial.text}&quot;
        </p>
        <p className="font-semibold text-right">{testimonial.name}</p>
      </CardContent>
    </Card>
  ));

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className={`relative h-[100svh] flex items-center justify-center`}
        style={{ height: `calc(100svh - ${navBarHeight}px)` }}
      >
        {/* place below code back when a video has been made */}
        {/* <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={"/mo-teeth-invideo.mp4"} type="video/mp4" />
        </video> */}
        <img
          src="/home-background.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center ">
          <h1 className="font-newsreader text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 text-white">
            DR. MO
          </h1>
          <motion.div
            variants={linkFramerVariants}
            initial="initial"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <Button
              asChild
              size="lg"
              className="mb-4 bg-dental-secondary hover:bg-dental-accent2 text-white hover:text-black"
            >
              <Link href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com">
                Make an Enquiry
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="font-newsreader py-16 bg-dental-navy relative"
      >
        <ScrollMotionWrapper transitionY transitionScale transitionOpacity>
          <div className="container mx-auto px-6 relative">
            <AnimatedElement>
              <h2 className="font-castoro text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-8">
                <span className="relative inline-block">
                  About Me
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dental-teal to-transparent"
                  />
                </span>
              </h2>
            </AnimatedElement>
            <div className="mx-auto">
              <div className="space-y-4">
                <AnimatedElement className="max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl font-semibold ">Dr Mohsin Aslam</h3>
                  <ul className="space-y-2">
                    <li>
                      Bachelor of Dental Surgery (BDS) – Cardiff University
                    </li>
                    <li>
                      Master in Implantology with Distinction (MSc) – University
                      of Salford
                    </li>
                    <li>GDC Number – 251332</li>
                  </ul>
                </AnimatedElement>
                <AnimatedElement>
                  <p className="">
                    Choosing me as your dentist means opting for a blend of
                    professional expertise, compassionate care, and a commitment
                    to your overall dental health. With years of experience and
                    continuous education, I stay at the forefront of dental
                    innovations to provide the latest, most effective
                    treatments. My practice prioritises patient comfort,
                    utilising state-of-the-art technology to make procedures as
                    painless and efficient as possible. I foster a welcoming and
                    friendly environment where each patient feels valued and
                    understood. From routine check-ups to complex procedures, I
                    offer personalised care tailored to your unique needs,
                    ensuring that every visit contributes positively to your
                    long-term oral health and well-being.
                  </p>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </ScrollMotionWrapper>
      </section>

      {/* My Approach Section */}
      <section className="py-16 bg-white relative">
        <ScrollMotionWrapper transitionY transitionScale transitionOpacity>
          <div className="container mx-auto px-6 relative">
            <AnimatedElement>
              <h2 className="font-castoro text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-12 text-dental-navy">
                <span className="relative inline-block">
                  My Approach to Dental Care
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dental-teal to-transparent"
                  />
                </span>
              </h2>
            </AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedElement transitionSize>
                <motion.div
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <motion.div
                    className="text-center p-6 rounded-lg border-2 border-dental-teal/20 hover:bg-dental-accent1/5 group h-64 flex flex-col justify-between"
                    variants={homeCardVariants}
                  >
                    <div className="mb-4">
                      <TechnologyIcon
                        className="w-16 h-16 mx-auto text-dental-teal transition-transform duration-300 group-hover:scale-110"
                        variants={homeIconVariants}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-dental-navy transition-colors duration-300 group-hover:text-dental-teal">
                      TECHNOLOGY
                    </h3>
                    <p className="text-gray-600">
                      The Latest Technology
                      <br />
                      Providing Precision,
                      <br />
                      Efficiency and Comfort
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatedElement>
              <AnimatedElement transitionSize>
                <motion.div
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <motion.div
                    className="text-center p-6 rounded-lg border-2 border-dental-teal/20 hover:bg-dental-accent1/5 group h-64 flex flex-col justify-between"
                    variants={homeCardVariants}
                  >
                    <div className="mb-4">
                      <QualityIcon
                        className="w-16 h-16 mx-auto text-dental-teal transition-transform duration-300 group-hover:scale-110"
                        variants={homeIconVariants}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-dental-navy transition-colors duration-300 group-hover:text-dental-teal">
                      QUALITY
                    </h3>
                    <p className="text-gray-600">
                      High Quality Dentistry,
                      <br />
                      Guided By Science
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatedElement>
              <AnimatedElement transitionSize>
                <motion.div
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <motion.div
                    className="text-center p-6 rounded-lg border-2 border-dental-teal/20 hover:bg-dental-accent1/5 group h-64 flex flex-col justify-between"
                    variants={homeCardVariants}
                  >
                    <div className="mb-4">
                      <BespokeIcon
                        className="w-16 h-16 mx-auto text-dental-teal transition-transform duration-300 group-hover:scale-110"
                        variants={homeIconVariants}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-dental-navy transition-colors duration-300 group-hover:text-dental-teal">
                      BESPOKE
                    </h3>
                    <p className="text-gray-600">
                      Personalised Care,
                      <br />
                      Tailored To You
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatedElement>
            </div>
          </div>
        </ScrollMotionWrapper>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-dental-navy">
        <ScrollMotionWrapper transitionY transitionScale transitionOpacity>
          <div className="container mx-auto px-6">
            <AnimatedElement>
              <h2 className="font-castoro text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-8">
                <span className="relative inline-block">
                  My Services
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dental-teal to-transparent"
                  />
                </span>
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
                  description:
                    "Save your natural tooth with root canal therapy.",
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
                  <Link href={service.link} className="h-full cursor-pointer">
                    <motion.div
                      className="bg-dental-butterflyBlue/80 rounded-lg hover:bg-dental-primary/20 transition-colors border-white border h-full flex flex-col group"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                      whileTap={{
                        scale: 0.95,
                        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
                      }}
                      transition={{
                        duration: 0.2,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <CardContent className="p-6 flex flex-col flex-1">
                        <div className="overflow-hidden rounded-lg mb-4 group-hover:border group-hover:border-white">
                          <img
                            src={`/service-${index + 1}.jpg`}
                            alt={service.title}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex flex-col flex-1 text-black group-hover:text-white">
                          <h3 className="text-xl font-semibold mb-2 ">
                            {service.title}
                          </h3>
                          <motion.div
                            initial={{ scaleX: 0, originX: 0 }}
                            whileInView={{
                              scaleX: 1,
                              transition: {
                                duration: 0.7,
                                ease: "easeOut",
                                delay: 0.2,
                              },
                            }}
                            viewport={{ once: false }}
                            className="w-full h-0.5 bg-white group-hover:bg-dental-accent2 origin-left mb-4"
                          />
                          <p className="/80">{service.description}</p>
                        </div>
                      </CardContent>
                    </motion.div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </ScrollMotionWrapper>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <ScrollMotionWrapper transitionY transitionScale transitionOpacity>
          <div className="container mx-auto px-6">
            <AnimatedElement>
              <h2 className="font-castoro text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-12 text-dental-navy">
                <span className="relative inline-block">
                  3 SIMPLE STEPS FOR ACHIEVING YOUR BEST SMILE
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dental-teal to-transparent"
                  />
                </span>
              </h2>
            </AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  text: "Schedule an exam",
                  image: "/simple-step-1.jpg",
                },
                {
                  step: 2,
                  text: "Speak with a dentist about your goals",
                  image: "/simple-step-2.jpg",
                },
                {
                  step: 3,
                  text: "Create a plan and start your smile journey",
                  image: "/simple-step-3.jpg",
                },
              ].map((step, index) => (
                <AnimatedElement transitionSize key={index}>
                  <motion.div
                    className="relative"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative">
                      <motion.img
                        src={step.image}
                        alt={`Step ${step.step}`}
                        className="w-full h-64 object-cover rounded-lg"
                        whileHover={{
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                        whileTap={{
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
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
                  </motion.div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </ScrollMotionWrapper>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-dental-navy">
        <ScrollMotionWrapper transitionY transitionScale transitionOpacity>
          <div className="container mx-auto px-6">
            <AnimatedElement>
              <h2 className="font-castoro text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-8">
                <span className="relative inline-block">
                  Patient Reviews
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dental-teal to-transparent"
                  />
                </span>
              </h2>
            </AnimatedElement>
            <AnimatedElement transitionSize>
              <SmartCarousel
                items={carouselItems}
                slidesToShow={3}
                autoplay={true}
                isDark
              />
            </AnimatedElement>
          </div>
        </ScrollMotionWrapper>
      </section>
    </div>
  );
};

export default HomePage;
