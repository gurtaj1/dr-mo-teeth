'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function DentalImplants() {
  const [isImageVisible, setIsImageVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const imageRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Dental Implants Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">Dental Implants</h1>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            Dental implants are a reliable way to replace missing teeth. These small titanium screws are placed into your jawbone, acting like the root of a tooth. Once they integrate with the bone, they provide a sturdy base for a custom-made crown that looks and functions like a natural tooth. Dental implants not only enhance your smile but also help restore your ability to chew and speak comfortably, making them a great long-term solution for tooth loss.
          </p>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center mt-4">
            I am committed to delivering the best dental implant process, ensuring a seamless journey.
          </p>
          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
            >
              <Link href="#book">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Your Dental Implant Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div 
                ref={imageRef}
                className={`transition-transform duration-1000 ease-out ${
                  isImageVisible ? 'translate-x-0' : '-translate-x-full'
                }`}
              >
                <Image
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Dental Implant Procedure"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 
                ref={titleRef}
                className="text-3xl font-bold mb-6 text-dental-navy"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              >
                Your Dental Implant Journey:
              </h2>
              <p className="text-gray-600 mb-4">
                I collaborate closely with you to detail every step of your treatment, making sure you know what to expect at each stage:
              </p>
              <ol className="space-y-2 text-gray-600">
                <li>
                  <strong>Step 1.</strong> Assessment and treatment planning. Bespoke solutions tailored for you using Advanced 3D imaging technology
                </li>
                <li>
                  <strong>Step 2.</strong> Placement of the Implant
                </li>
                <li>
                  <strong>Step 3.</strong> Healing phase: allowing for a comfortable recovery
                </li>
                <li>
                  <strong>Step 4.</strong> Restoration Phase: Making the custom made teeth for your smile
                </li>
                <li>
                  <strong>Step 5.</strong> Maintenance phase: Teaching you how to care for your implant
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-dental-accent1">Ready to Transform Your Smile?</h2>
          <p className="text-dental-accent1 mb-8 max-w-2xl mx-auto">
            Take the first step towards a confident, healthy smile with our dental implant solutions. Schedule your consultation today and let's discuss how we can help you achieve the smile you've always wanted.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
          >
            <Link href="#book">Book Your Consultation Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}