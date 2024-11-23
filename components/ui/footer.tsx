"use client";

import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { linkFramerVariants } from "@/app/globals/constants";
const Footer = () => {
  return (
    <footer className="bg-dental-deepBlue text-white pt-12 pb-12 border-t-2 border-dental-gold">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dental-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-dental-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-dental-gold">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-dental-gold">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-dental-gold pt-8 md:pt-0 md:pl-8">
            <h3 className="text-lg font-semibold mb-4 text-dental-gold">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/drmosmiles"
                className="hover:text-dental-gold"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              {/* Add more social media icons as needed */}
            </div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-dental-gold pt-8 md:pt-0 md:pl-8">
            <h3 className="text-lg font-semibold mb-4 text-dental-gold">
              Get In Touch
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 group">
                <Phone
                  className="mr-2 group-hover:text-dental-gold"
                  size={18}
                />
                <div className="flex space-x-2">
                  <Link
                    href="tel:01482898362"
                    className="hover:text-dental-gold"
                  >
                    01482 898362
                  </Link>
                  <span>/</span>
                  <Link
                    href="tel:01482871704"
                    className="hover:text-dental-gold"
                  >
                    01482 871704
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com"
                  className="flex items-center hover:text-dental-gold"
                >
                  <Mail className="mr-2" size={18} />
                  <span>implantclinician@outlook.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com"
                  className="flex items-center hover:text-dental-gold"
                >
                  <Mail className="mr-2" size={18} />
                  <span>drmohsinaslam@outlook.com</span>
                </Link>
              </li>
              <li className="flex items-center hover:text-dental-gold">
                <Link href="https://maps.app.goo.gl/dbgXNq8s5xRRJCPW7">
                  <MapPin className="mr-2" size={18} />
                </Link>
                <Link href="https://maps.app.goo.gl/dbgXNq8s5xRRJCPW7">
                  10 Soutter Gate, Hedon, Hull HU12 8JS
                </Link>
              </li>
              <li className="flex items-center hover:text-dental-gold">
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
                className="mt-4 w-full text-black bg-white hover:bg-dental-gold"
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
