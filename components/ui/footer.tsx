"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { Instagram, Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useIntersectionObservers } from "@/hooks/use-intersection-observers";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { linkFramerVariants } from "@/app/globals/constants";
const Footer = () => {
  const pathname = usePathname();
  const [animationKey, setAnimationKey] = useState(0);
  const [isTopBorderVisible, setIsTopBorderVisible] = useState(true);

  const [isFirstDividerVisible, setIsFirstDividerVisible] = useState(false);
  const [isSecondDividerVisible, setIsSecondDividerVisible] = useState(false);

  const topBorderRef = useRef(null);
  const firstDividerRef = useRef(null);
  const secondDividerRef = useRef(null);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
    setIsTopBorderVisible(false);
    setIsFirstDividerVisible(false);
    setIsSecondDividerVisible(false);
  }, [pathname]);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: topBorderRef,
        onIntersect: () => setIsTopBorderVisible(true),
      },
      {
        ref: firstDividerRef,
        onIntersect: () => setIsFirstDividerVisible(true),
      },
      {
        ref: secondDividerRef,
        onIntersect: () => setIsSecondDividerVisible(true),
      },
    ],
  });

  return (
    <footer className="bg-dental-deepBlue text-white pt-12 pb-12 relative">
      <motion.div
        key={animationKey}
        ref={topBorderRef}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: isTopBorderVisible ? 1 : 0,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-dental-accent2 origin-left"
      />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dental-accent2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-dental-accent2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-dental-accent2">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-dental-accent2">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-8 md:pt-0 md:pl-8 relative">
            <motion.div
              key={`${animationKey + 1}`}
              ref={firstDividerRef}
              initial={{
                scaleY: 0,
                scaleX: 0,
              }}
              animate={{
                scaleY: isFirstDividerVisible ? 1 : 0,
                scaleX: isFirstDividerVisible ? 1 : 0,
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute md:left-0 md:top-0 left-0 right-0 
                md:w-0.5 md:h-full w-full h-0.5 
                bg-dental-accent2 
                md:origin-top origin-left
                block
                -top-3 md:top-0
                mb-3"
            />
            <h3 className="text-lg font-semibold mb-4 text-dental-accent2">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/drmosmiles"
                className="hover:text-dental-accent2"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://uk.linkedin.com/in/mohsin-aslam-b99a9918a"
                className="hover:text-dental-accent2"
              >
                <Linkedin />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="pt-8 md:pt-0 md:pl-8 relative">
            <motion.div
              key={`${animationKey + 2}`}
              ref={secondDividerRef}
              initial={{
                scaleY: 0,
                scaleX: 0,
              }}
              animate={{
                scaleY: isSecondDividerVisible ? 1 : 0,
                scaleX: isSecondDividerVisible ? 1 : 0,
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute md:left-0 md:top-0 left-0 right-0
                md:w-0.5 md:h-full w-full h-0.5
                bg-dental-accent2 
                md:origin-top origin-left
                block
                -top-3 md:top-0
                mb-3"
            />
            <h3 className="text-lg font-semibold mb-4 text-dental-accent2">
              Get In Touch
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 group">
                <Phone
                  className="mr-2 group-hover:text-dental-accent2"
                  size={18}
                />
                <div className="flex space-x-2">
                  <Link
                    href="tel:01482898362"
                    className="hover:text-dental-accent2"
                  >
                    01482 898362
                  </Link>
                  <span>/</span>
                  <Link
                    href="tel:01482871704"
                    className="hover:text-dental-accent2"
                  >
                    01482 871704
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com"
                  className="flex items-center hover:text-dental-accent2"
                >
                  <Mail className="mr-2" size={18} />
                  <span>implantclinician@outlook.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com"
                  className="flex items-center hover:text-dental-accent2"
                >
                  <Mail className="mr-2" size={18} />
                  <span>drmohsinaslam@outlook.com</span>
                </Link>
              </li>
              <li className="flex items-center hover:text-dental-accent2">
                <Link href="https://maps.app.goo.gl/dbgXNq8s5xRRJCPW7">
                  <MapPin className="mr-2" size={18} />
                </Link>
                <Link href="https://maps.app.goo.gl/dbgXNq8s5xRRJCPW7">
                  10 Soutter Gate, Hedon, Hull HU12 8JS
                </Link>
              </li>
              <li className="flex items-center hover:text-dental-accent2">
                <Link href="https://maps.app.goo.gl/5qfbALW59Bgx3VvWA">
                  <MapPin className="mr-2" size={18} />
                </Link>
                <Link href="https://maps.app.goo.gl/5qfbALW59Bgx3VvWA">
                  10 Railway St, Beverley HU17 0DX
                </Link>
              </li>
            </ul>
            <motion.div
              variants={linkFramerVariants}
              initial="initial"
              whileHover="whileHover"
            >
              <Button
                asChild
                className="mt-4 w-full text-black bg-white hover:bg-dental-accent2"
              >
                <Link href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com">
                  Book an Appointment
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
