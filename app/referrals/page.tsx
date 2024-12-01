"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedElement from "@/components/ui/animated-element";
import { linkFramerVariants } from "@/app/globals/constants";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

export default function ReferralsPage() {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen pt-24 pb-12 bg-gradient-to-r from-dental-navy to-dental-darkBlue">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6 text-white"
        >
          <h1 className="text-5xl font-bold mb-8 text-center">Referrals</h1>

          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-8 leading-relaxed text-center"
            >
              I welcome referrals for a wide range of oral surgery services,
              including dental implants, and intravenous sedation. If you have a
              patient in need of this care, please feel free to refer them to
              through the link below. I work closely with referring dentists to
              ensure seamless communication, timely updates, and the highest
              standard of care for each patient.
            </motion.p>

            <AnimatedElement>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm w-full md:w-2/3 lg:w-1/3 mb-12 mx-auto">
                <h3 className="text-xl font-bold mb-4">Referrals Accepted:</h3>
                <ul className="space-y-2">
                  <li>• Implant</li>
                  <li>• Surgical Extractions</li>
                  <li>• Intravenous Sedation</li>
                </ul>
              </div>
            </AnimatedElement>

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
                <Link
                  href="https://www.eyds.co.uk/make-a-referral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Make a Referral
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageLoadTransitionWrapper>
  );
}
