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
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const HomePage = () => {
  const testimonials = [
    {
      name: "",
      text: "I recently visited The Hedon Dental Practice and was incredibly impressed. The reception staff were welcoming and efficient, making me feel comfortable immediately. The clinic is clean and calming, which helped ease my usual dental anxiety. Dr. Mo is fantastic. He listened to my concerns and explained the treatment plan clearly. The procedure was smooth and virtually painless, thanks to Dr. Mo's expertise. I appreciated the clear aftercare instructions and the follow-up call to check on my recovery. For anyone nervous about dental visits, I highly recommend The Hedon Dental Practice. Dr. Mo and his team provide exceptional care with a personal touch. I left feeling confident and well-cared for. I will definitely be returning and recommending them to friends and family.",
    },
    {
      name: "",
      text: "All round 1st class service.. Mo best dentist I've been to aided superbly by Emma.. Obviously pricier than NHS but you get what you pay for, also shout out to the superb hygienist..would recommend 👍",
    },
    {
      name: "",
      text: "Had an emergency, NHS 111 could not help for 5 days. Called Hedon Dental Practice, great advise whilst they got to see me THE NEXT DAY. God send when you are in that much pain, Id only just signed up with them the week before. Dr Moh looked after me and I can't express how during the procedure everything was explained and made me and made you feel so at ease. I have had work done in the past in London with top class Dental specialists and I would honestly say Hedon beats them for expertise and pride in their work. You can tell they have it in buckets from the front desk staff to the practitioner to the dental nurse thank you so much.",
    },
    {
      name: "",
      text: "Having not visited a dentist in over 15 years, having to do so following tooth ache in August 2023, I was a little apprehensive you could say but after 9 months and multiple treatments, my experience has been great. Dr Mo set out a clear treatment plan to rectify all my dental problems (and there was a few), talking me through every stage and every appointment, giving my mouth and me time to heal and rest between appointments, even changing the plan at the appointment depending on how I was feeling. All of the staff are welcoming and supportive, explain all the aftercare to you and go above and beyond. I would recommend Hedon Dental Surgery to anyone especially if like me you haven’t been in a long time. I certainly wont be leaving it another 15 years before visiting again! ",
    },
    {
      name: "",
      text: "Want to thank Dr mo and Emma had new dentures fitted today really happy with them once again thank you",
    },
    {
      name: "",
      text: "Visited today for 2 large composite fillings, I don’t think anyone likes going to the dentist but Mo and Arina were brilliant. Explained the procedure fully, put me at ease, and I didn’t feel a thing. Also had chilled music playing, shut my eyes and pretended I was on a beach. Thanks guys",
    },
    {
      name: "",
      text: "I was at the dentist yesterday to see mr Mohsin Aslam it’s always a pleasure to see him one of the best dentists I have ever seen and then went to see Maria see was fantastic as usual.",
    },
    {
      name: "",
      text: "Just been for a check up with Mo. Excellent service and very informative.",
    },
    {
      name: "",
      text: "I have been getting my dental treatment for a few years now at Hedon practice. It's been the best experience overall compared with other practices. This is because the reception staff and all dental staff are easygoing, polite and helpful. Doctor Mo has always spent the time explaining the dental issue in a simplified way and then has explained what will be the best solution to resolve the dental issue quickly and painlessly. Doctor Mo shows great skill and diligence in doing my dental work always going the extra mile in terms of time and effort to get the job done meticulously.i have been to ther dentists where after treatment I've found I have had further issues or they have not spent time to resolve the problem due to not giving the time and then I've had further issues. With doctor Mo you know you will get the best dental care advice and treatment. Thank you to all the team.",
    },
    {
      name: "",
      text: "Highly recommend Dr Mo Aslam, I had been worried about the pain in my back Molar and he sorted my right out! Treatment was done dillegently and pain free and managed to restore it and now my gnashers look good as new!",
    },
    {
      name: "",
      text: "Dr Mo is fabulous - I am very nervous and his lovely kind calming manner makes my worries disappear - I can’t recommend him enough 😊",
    },
    {
      name: "",
      text: "Fantastic dental practice! Mo is the first dentist I have come across that takes the time to carry out thorough checks and treatment. Not only that, he explains everything in lamens terms. This was so refreshing, as all my previous dentists overlooked issues in order to get me out of the door quickly. This guy loves his job, and it shows! Cannot recommend highly enough.",
    },
  ];

  const carouselItems = testimonials.map((testimonial, index) => (
    <Card key={index} className="h-full border-none shadow-lg">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <p className="text-gray-600 mb-4 text-lg italic line-clamp-6">
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
    <PageLoadTransitionWrapper>
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
            src="/home-hero.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 text-center bg-black/5 p-8 rounded-xl backdrop-blur-sm shadow-[0_0_40px_10px_rgba(0,0,0,0.05)]">
            <h1 className="text-8xl font-bold text-white font-newsreader pb-8">
              DR-MO
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
            <div className="text-white container mx-auto px-6 relative">
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
                        Masters in Implantology with Distinction (MSc) –
                        University of Salford
                      </li>
                      <li>GDC Number – 251332</li>
                    </ul>
                  </AnimatedElement>
                  <AnimatedElement>
                    <p className="text-justify">
                      Choosing me as your dentist means opting for a blend of
                      professional expertise, compassionate care, and a
                      commitment to your overall dental health. With years of
                      experience and continuous education, I stay at the
                      forefront of dental innovations to provide the latest,
                      most effective treatments. My practice prioritises patient
                      comfort, utilising state-of-the-art technology to make
                      procedures as painless and efficient as possible. I foster
                      a welcoming and friendly environment where each patient
                      feels valued and understood. From routine check-ups to
                      complex procedures, I offer personalised care tailored to
                      your unique needs, ensuring that every visit contributes
                      positively to your long-term oral health and well-being.
                    </p>
                  </AnimatedElement>
                </div>
              </div>
            </div>
          </ScrollMotionWrapper>
        </section>

        {/* My Approach Section */}
        <section className="py-24 bg-gradient-to-b from-white via-dental-accent1/5 to-white relative">
          <ScrollMotionWrapper transitionY transitionScale transitionOpacity>
            <div className="container mx-auto px-6 relative">
              <AnimatedElement>
                <h2 className="font-castoro text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-16 text-dental-navy">
                  <span className="relative inline-block">
                    My Approach to Dental Care
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-dental-teal to-transparent"
                    />
                  </span>
                </h2>
              </AnimatedElement>
              <div className="block md:hidden">
                <SmartCarousel
                  hideSideButtons
                  items={[
                    {
                      icon: TechnologyIcon,
                      title: "TECHNOLOGY",
                      description:
                        "The Latest Technology Providing Precision, Efficiency and Comfort",
                    },
                    {
                      icon: QualityIcon,
                      title: "QUALITY",
                      description: "High Quality Dentistry, Guided By Science",
                    },
                    {
                      icon: BespokeIcon,
                      title: "BESPOKE",
                      description: "Personalised Care, Tailored To You",
                    },
                  ].map(({ icon: Icon, title, description }) => (
                    <motion.div key={title} className="px-2">
                      <motion.div
                        className="text-center p-6 rounded-xl bg-white shadow-lg border-2 border-dental-teal/20 group min-h-[200px] flex flex-col justify-between"
                        variants={homeCardVariants}
                      >
                        <div className="mb-4">
                          <Icon
                            className="w-12 h-12 mx-auto fill-dental-navy stroke-dental-navy text-dental-navy"
                            variants={homeIconVariants}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-dental-navy">
                            {title}
                          </h3>
                          <p className="text-gray-600 text-sm">{description}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                  slidesToShow={1}
                  autoplay={true}
                />
              </div>
              <div className="hidden md:grid grid-cols-3 gap-12">
                {[
                  {
                    icon: TechnologyIcon,
                    title: "TECHNOLOGY",
                    description:
                      "The Latest Technology Providing Precision, Efficiency and Comfort",
                  },
                  {
                    icon: QualityIcon,
                    title: "QUALITY",
                    description: "High Quality Dentistry, Guided By Science",
                  },
                  {
                    icon: BespokeIcon,
                    title: "BESPOKE",
                    description: "Personalised Care, Tailored To You",
                  },
                ].map(({ icon: Icon, title, description }) => (
                  <AnimatedElement transitionSize key={title}>
                    <motion.div
                      initial="initial"
                      whileHover="whileHover"
                      whileTap="whileTap"
                      className="transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <motion.div
                        className="text-center p-6 sm:p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl border-2 border-dental-teal/20 hover:bg-dental-accent1/5 group min-h-[200px] sm:min-h-[250px] flex flex-col justify-between transition-all duration-300"
                        variants={homeCardVariants}
                      >
                        <div className="mb-4">
                          <Icon
                            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-dental-teal transition-transform duration-300 group-hover:scale-110"
                            variants={homeIconVariants}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold mb-2 text-dental-navy transition-colors duration-300 group-hover:text-dental-teal">
                            {title}
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base">
                            {description}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </AnimatedElement>
                ))}
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
                  <span className="text-white relative inline-block">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        className="bg-dental-primary rounded-lg hover:bg-dental-primary/20 transition-colors border border-white hover:border-dental-accent2 h-full flex flex-col group"
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
                          <div className="flex flex-col flex-1 text-white group-hover:text-dental-accent1">
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
                          className="w-full h-48 sm:h-64 object-cover rounded-lg"
                          whileHover={{
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          }}
                          whileTap={{
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                        <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-dental-teal flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-bold text-white">
                            {step.step}
                          </span>
                        </div>
                      </div>
                      <p className="text-dental-navy text-lg sm:text-xl font-semibold mt-6 sm:mt-8 text-center">
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
                <h2 className="text-white font-castoro text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-8">
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
    </PageLoadTransitionWrapper>
  );
};

export default HomePage;
