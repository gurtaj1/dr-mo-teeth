"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { navBarHeight } from "./globals/constants";

const HomePage = () => {
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
          <h1 className="text-9xl font-bold mb-4">Dr Mo</h1>
          <Button
            asChild
            size="lg"
            className="mb-4 bg-dental-teal hover:bg-dental-secondary"
          >
            <Link href="mailto:beverley.reception@eyds.co.uk,hedon.reception@eyds.co.uk">
              Make an Enquiry
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-dental-accent1">
            About Me
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold">Dr Mohsin Aslam</h3>
              <ul className="space-y-2">
                <li>Bachelor of Dental Surgery (BDS) – Cardiff University</li>
                <li>
                  Master in Implantology with Distinction (MSc) – University of
                  Salford
                </li>
                <li>GDC Number – 251332</li>
              </ul>
              <p className="text-dental-accent1">
                Choosing me as your dentist means opting for a blend of
                professional expertise, compassionate care, and a commitment to
                your overall dental health. With years of experience and
                continuous education, I stay at the forefront of dental
                innovations to provide the latest, most effective treatments. My
                practice prioritises patient comfort, utilising state-of-the-art
                technology to make procedures as painless and efficient as
                possible. I foster a welcoming and friendly environment where
                each patient feels valued and understood. From routine check-ups
                to complex procedures, I offer personalised care tailored to
                your unique needs, ensuring that every visit contributes
                positively to your long-term oral health and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-dental-navy">
            My Approach to Dental Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-dental-teal"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dental-navy">
                TECHNOLOGY
              </h3>
              <p className="text-gray-600">
                The latest tools for a modern experience
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-dental-teal"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dental-navy">
                QUALITY
              </h3>
              <p className="text-gray-600">
                High quality dentistry, guided by science
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-dental-teal"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dental-navy">
                PERSONAL
              </h3>
              <p className="text-gray-600">100% personalised care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-dental-accent1">
            Our Services
          </h2>
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
              <Link key={index} href={service.link} className="h-full">
                <Card className="bg-dental-primary/10 hover:bg-dental-primary/20 transition-colors border-dental-accent1/20 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <img
                      src={`/service-${index + 1}.jpg`}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
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
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-dental-navy">
            3 SIMPLE STEPS FOR ACHIEVING YOUR BEST SMILE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                text: "Schedule an exam",
                image: "/step-1.jpg",
              },
              {
                step: 2,
                text: "Speak with a dentist about your goals",
                image: "/step-2.jpg",
              },
              {
                step: 3,
                text: "Create a plan and start your smile journey",
                image: "/step-3.jpg",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
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
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-dental-accent1">
            Why Choose Me as Your Dentist
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-dental-accent1 mb-6">
              With over 15 years of experience, I am committed to providing the
              highest quality dental care in a comfortable and friendly
              environment. My team and I use the latest technology and
              techniques to ensure you receive the best possible treatment. We
              believe in personalized care, taking the time to understand your
              unique needs and concerns. Choose us for a healthier, brighter
              smile that you&apos;ll love to show off!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
            >
              <Link href="#book">Book an Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-dental-navy">
            Patient Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                text: "Dr Mo transformed my smile! I couldn't be happier with the results.",
              },
              {
                name: "Jane Smith",
                text: "The team at Dr Mo Teeth made me feel comfortable throughout my entire treatment.",
              },
              {
                name: "Mike Johnson",
                text: "I've never felt more confident about my teeth. Thank you, Dr Mo!",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
