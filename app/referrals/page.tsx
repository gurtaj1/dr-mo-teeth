"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedElement from "@/components/ui/animated-element";
import { linkFramerVariants } from "@/app/globals/constants";

export default function ReferralsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-r from-dental-navy to-dental-darkBlue">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6"
      >
        <h1 className="text-5xl font-bold mb-8 text-center">Referrals</h1>

        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg mb-8 leading-relaxed"
          >
            I welcome referrals for a wide range of oral surgery services,
            including dental implants, and intravenous sedation. If you have a
            patient in need of this care, please feel free to refer them to
            through the link below. I work closely with referring dentists to
            ensure seamless communication, timely updates, and the highest
            standard of care for each patient.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <AnimatedElement>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Surgical Services</h3>
                <ul className="space-y-2">
                  <li>• Dental Implants</li>
                  <li>• Complex Extractions</li>
                  <li>• Wisdom Teeth Removal</li>
                  <li>• Bone Grafting</li>
                </ul>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Sedation Options</h3>
                <ul className="space-y-2">
                  <li>• IV Sedation</li>
                  <li>• Anxiety Management</li>
                  <li>• Complex Case Management</li>
                  <li>• Emergency Care</li>
                </ul>
              </div>
            </AnimatedElement>
          </div>

          <motion.div
            variants={linkFramerVariants}
            initial="initial"
            whileHover="whileHover"
            whileTap="whileTap"
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-dental-secondary hover:bg-dental-accent2 text-white hover:text-black"
            >
              <Link href="https://www.eyds.co.uk/make-a-referral">
                Make a Referral
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
