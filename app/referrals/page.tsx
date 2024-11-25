"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { linkFramerVariants } from "@/app/globals/constants";

export default function ReferralsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-r from-dental-navy to-dental-accent2">
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
              className="bg-dental-accent1 text-dental-navy hover:bg-dental-accent2"
            >
              <Link href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com">
                Make a Referral
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
