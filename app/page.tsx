import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
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
          <source
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/mo-teeth-invideo.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-dental-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-dental-accent1">
          <h1 className="text-5xl font-bold mb-4">Dr Mo Teeth</h1>
          <Button
            asChild
            size="lg"
            className="mb-4 bg-dental-teal hover:bg-dental-secondary"
          >
            <Link href="#book">Book an Assessment</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-dental-navy">
            Happy Customers
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

      {/* About Section */}
      <section id="about" className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-dental-accent1">
            About Me
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-dental-accent1">
                Dr Mohsin Aslam
              </h3>
              <ul className="space-y-2 text-dental-accent1">
                <li>Bachelor of Dental Surgery (BDS) – Cardiff University</li>
                <li>
                  Master in Implantology with Distinction (MSc) – University of
                  Salford
                </li>
                <li>GDC Number – 251332</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-dental-navy">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Teeth Whitening",
                description:
                  "Brighten your smile with our professional whitening treatment.",
              },
              {
                title: "Dental Implants",
                description:
                  "Replace missing teeth with natural-looking implants.",
              },
              {
                title: "Invisalign",
                description:
                  "Straighten your teeth discreetly with clear aligners.",
              },
              {
                title: "Veneers",
                description:
                  "Transform your smile with custom-made porcelain veneers.",
              },
              {
                title: "Root Canal",
                description:
                  "Save your natural tooth with our gentle root canal therapy.",
              },
              {
                title: "Dental Crowns",
                description:
                  "Restore damaged teeth with durable, natural-looking crowns.",
              },
            ].map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <Card className="bg-dental-primary/10 hover:bg-dental-primary/20 transition-colors border-dental-accent1/20">
                  <CardContent className="p-6">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/service-${
                        index + 1
                      }.jpg`}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
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
    </div>
  );
};

export default HomePage;
