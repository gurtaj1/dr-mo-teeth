"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import AboutSectionIcon from "@/app/svg-components/about-section-icon";
import ServicesSectionIcon from "@/app/svg-components/services-section-icon";
import ExaminationsIcon from "@/app/svg-components/examinations-icon";
import CrownsIcon from "@/app/svg-components/crowns-icon";
import GumTherapyIcon from "@/app/svg-components/gum-therapy-icon";
import DentalFillingsIcon from "@/app/svg-components/dental-fillings-icon";
import DenturesIcon from "@/app/svg-components/dentures-icon";
import BridgesIcon from "@/app/svg-components/bridges-icon";
import ExtractionsIcon from "@/app/svg-components/extractions-icon";
import InvisalignIcon from "@/app/svg-components/invisalign-icon";
import IVSedationIcon from "@/app/svg-components/iv-sedation-icon";
import TeethWhiteningIcon from "@/app/svg-components/teeth-whitening-icon";
import CrownLengtheningIcon from "@/app/svg-components/crown-lengthening-icon";
import ImplantsIcon from "@/app/svg-components/implants-icon";
import RootCanalIcon from "@/app/svg-components/root-canal-icon";
import BoneGraftingIcon from "@/app/svg-components/bone-grafting-icon";
import ProblemsSectionIcon from "@/app/svg-components/problems-section-icon";
import VeneersIcon from "@/app/svg-components/veneers-icon";
import SmileMakeoverIcon from "@/app/svg-components/smile-makeover-icon";
import BondingIcon from "@/app/svg-components/bonding-icon";
import { navBarHeight } from "@/app/globals/constants";

const linkVariants = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.05,
  },
  whileTap: {
    scale: 0.95, // Scale down effect on tap
  },
};

const iconVariants = {
  initial: {
    fill: "white",
    filter: "drop-shadow(0px 0px 0px rgba(229, 185, 77, 0))",
  },
  whileHover: {
    fill: ["#E5B94D", "#C4A043", "#E5B94D"],
    filter: "drop-shadow(0px 0px 2px rgba(229, 185, 77, 0.5))",
    transition: {
      fill: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
      },
      filter: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },
  whileTap: {
    fill: ["#E5B94D", "#C4A043", "#E5B94D"],
    filter: "drop-shadow(0px 0px 5px rgba(229, 185, 77, 0.7))",
    transition: {
      fill: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
      },
      filter: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  },
};

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenus, setMobileSubMenus] = useState<{
    [key: string]: boolean;
  }>({
    general: false,
    surgical: false,
    cosmetic: false,
    transformation: false,
    problems: false, // Parent menu
  });

  // Add this effect to reset menu state on route changes
  useEffect(() => {
    setMobileSubMenus({
      general: false,
      surgical: false,
      cosmetic: false,
      transformation: false,
      problems: false,
    });
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = (menu: string) => {
    setMobileSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dental-dirtyGold bg-opacity-95 shadow-m font-newsreader">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <motion.div
            variants={linkVariants}
            initial="initial"
            whileHover="whileHover"
          >
            <Link href="/" className="text-2xl font-bold text-white">
              <Image
                src="/logo-mark-white.png"
                alt="Dr Mo Smiles"
                width={180}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </motion.div>
          <motion.div
            variants={linkVariants}
            initial="initial"
            whileHover="whileHover"
          >
            <Link href="/" className="text-2xl font-bold text-white">
              <Image
                src="/logo-type-white.png"
                alt="Dr Mo Smiles"
                width={180}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </motion.div>
          {/* Desktop Navigation - hide on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="w-5"></div>
            <motion.div
              initial="initial"
              whileHover="whileHover"
              whileTap="WhileTap"
            >
              <motion.div variants={linkVariants}>
                <Link
                  href="/#about"
                  className="text-2xl text-white flex items-center gap-2"
                  onClick={(e) => {
                    // Only handle the scroll behavior if we're already on the home page
                    if (pathname === "/") {
                      e.preventDefault();
                      const element = document.getElementById("about");
                      const elementPosition =
                        element?.getBoundingClientRect().top ?? 0;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - navBarHeight;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                    // If we're not on the home page, let the default navigation happen
                  }}
                >
                  <AboutSectionIcon
                    className="w-8 h-8"
                    variants={iconVariants}
                  />
                  About
                </Link>
              </motion.div>
            </motion.div>
            <div className="relative group">
              <motion.button
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
                variants={linkVariants}
                className="text-2xl text-white  flex items-center gap-2"
              >
                <ServicesSectionIcon
                  className="w-8 h-8"
                  variants={iconVariants}
                />
                Services
              </motion.button>

              {/* Add bridge for main menu */}
              <div className="absolute -bottom-2 left-0 w-full h-2" />
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible w-64 bg-dental-dirtyGold mt-2 py-2 rounded-md shadow-lg transition-all duration-200 ease-in-out">
                <div className="relative group/sub">
                  <motion.button
                    variants={linkVariants}
                    initial="initial"
                    whileHover="whileHover"
                    className="w-full text-left px-4 py-2 text-white hover:bg-dental-gray flex items-center justify-between"
                  >
                    General
                    <span className="ml-2">›</span>
                  </motion.button>
                  {/* Make the bridge wider and taller */}
                  <div className="absolute -left-8 top-0 w-8 h-full" />
                  {/* Add peer class to detect hover */}
                  <div
                    className="peer absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible w-64 bg-dental-dirtyGold py-2 rounded-md shadow-lg transition-all duration-200 ease-in-out
                    [&:has(+.submenu-right)]:left-full [&:has(+.submenu-right)]:right-auto"
                  >
                    {/* Add a hidden element to detect if menu should flip */}
                    <div className="submenu-right absolute invisible w-1 h-1 -left-1" />
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/general/cleanings-and-exams"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <ExaminationsIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Examinations and Hygiene
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/general/crowns"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <CrownsIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Crowns
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/general/gum-therapy"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <GumTherapyIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Gum Therapy
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/general/dental-fillings"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <DentalFillingsIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Dental Fillings
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/general/dentures"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <DenturesIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Dentures
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/general/bridges"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <BridgesIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Bridges
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/general/root-canal"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <RootCanalIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Root Canal Therapy
                      </Link>
                    </motion.div>
                  </div>
                </div>
                <div className="relative group/sub">
                  <motion.button
                    variants={linkVariants}
                    initial="initial"
                    whileHover="whileHover"
                    className="w-full text-left px-4 py-2 text-white  hover:bg-dental-gray flex items-center justify-between"
                  >
                    Surgical
                    <span className="ml-2">›</span>
                  </motion.button>
                  {/* Make the bridge wider and taller */}
                  <div className="absolute -left-8 top-0 w-8 h-full" />
                  {/* Add peer class to detect hover */}
                  <div
                    className="peer absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible w-64 bg-dental-dirtyGold py-2 rounded-md shadow-lg transition-all duration-200 ease-in-out
                    [&:has(+.submenu-right)]:left-full [&:has(+.submenu-right)]:right-auto"
                  >
                    {/* Add a hidden element to detect if menu should flip */}
                    <div className="submenu-right absolute invisible w-1 h-1 -left-1" />
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/surgeries/implants"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <ImplantsIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Implants
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/surgeries/iv-sedation"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <IVSedationIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        IV Sedation
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/surgeries/extractions"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <ExtractionsIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Extractions
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/surgeries/bone-grafts"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <BoneGraftingIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Bone Grafts
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/surgeries/crown-lengthening"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <CrownLengtheningIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Crown Lengthening
                      </Link>
                    </motion.div>
                  </div>
                </div>
                <div className="relative group/sub">
                  <motion.button
                    className="w-full text-left px-4 py-2 text-white  hover:bg-dental-gray flex items-center justify-between"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="whileHover"
                  >
                    Cosmetic
                    <span className="ml-2">›</span>
                  </motion.button>
                  {/* Make the bridge wider and taller */}
                  <div className="absolute -left-8 top-0 w-8 h-full" />
                  {/* Add peer class to detect hover */}
                  <div
                    className="peer absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible w-64 bg-dental-dirtyGold py-2 rounded-md shadow-lg transition-all duration-200 ease-in-out
                    [&:has(+.submenu-right)]:left-full [&:has(+.submenu-right)]:right-auto"
                  >
                    {/* Add a hidden element to detect if menu should flip */}
                    <div className="submenu-right absolute invisible w-1 h-1 -left-1" />
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/cosmetic/invisalign"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <InvisalignIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Invisalign
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/cosmetic/teeth-whitening"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <TeethWhiteningIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Teeth Whitening
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/cosmetic/bonding"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <BondingIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Bonding
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/cosmetic/veneers"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <VeneersIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Veneers
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <Link
                        href="/services/cosmetic/smile-makeover"
                        className="block px-4 py-2 text-white  hover:bg-dental-gray flex items-center gap-2"
                      >
                        <SmileMakeoverIcon
                          className="w-6 h-6"
                          variants={iconVariants}
                        />
                        Smile Makeover
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <motion.button
                variants={linkVariants}
                initial="initial"
                whileHover="whileHover"
                className="text-2xl text-white  flex items-center gap-2"
              >
                <ProblemsSectionIcon
                  className="w-8 h-8"
                  variants={iconVariants}
                />
                Problems I Treat
              </motion.button>
              {/* Add bridge for main menu */}
              <div className="absolute -bottom-2 left-0 w-full h-2" />
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible w-64 bg-dental-dirtyGold mt-2 py-2 rounded-md shadow-lg transition-all duration-200 ease-in-out">
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Link
                    href="/services/problems/chipped-cracked-teeth"
                    className="block px-4 py-2 text-white  hover:bg-dental-gray"
                  >
                    Chipped or Cracked Teeth
                  </Link>
                </motion.div>
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Link
                    href="/services/problems/wisdom-tooth-pain"
                    className="block px-4 py-2 text-white  hover:bg-dental-gray"
                  >
                    Wisdom Tooth Pain
                  </Link>
                </motion.div>
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Link
                    href="/services/problems/missing-teeth"
                    className="block px-4 py-2 text-white  hover:bg-dental-gray"
                  >
                    Missing Teeth
                  </Link>
                </motion.div>
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Link
                    href="/services/problems/toothache"
                    className="block px-4 py-2 text-white  hover:bg-dental-gray"
                  >
                    Toothache
                  </Link>
                </motion.div>
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Link
                    href="/services/problems/teeth-grinding"
                    className="block px-4 py-2 text-white  hover:bg-dental-gray"
                  >
                    Teeth Grinding
                  </Link>
                </motion.div>
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Link
                    href="/services/cosmetic/teeth-whitening"
                    className="block px-4 py-2 text-white  hover:bg-dental-gray"
                  >
                    Stained Teeth
                  </Link>
                </motion.div>
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Link
                    href="/services/problems/crooked-teeth"
                    className="block px-4 py-2 text-white  hover:bg-dental-gray"
                  >
                    Crooked Teeth
                  </Link>
                </motion.div>
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Link
                    href="/services/problems/bleeding-gums"
                    className="block px-4 py-2 text-white  hover:bg-dental-gray"
                  >
                    Bleeding Gums
                  </Link>
                </motion.div>
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Link
                    href="/services/problems/bad-breath"
                    className="block px-4 py-2 text-white  hover:bg-dental-gray"
                  >
                    Bad Breath
                  </Link>
                </motion.div>
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Link
                    href="/services/problems/dental-anxiety"
                    className="block px-4 py-2 text-white  hover:bg-dental-gray"
                  >
                    Dental Anxiety
                  </Link>
                </motion.div>
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Link
                    href="/services/problems/sensitive-teeth"
                    className="block px-4 py-2 text-white  hover:bg-dental-gray"
                  >
                    Sensitive Teeth
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Button - Show on desktop only */}
        <div className="hidden md:block">
          <motion.div
            variants={linkVariants}
            initial="initial"
            whileHover="whileHover"
          >
            <Button
              asChild
              className="bg-white hover:bg-dental-primary text-black"
            >
              <Link href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com">
                Get in touch
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <motion.div
              initial={{ translateY: "100%" }} // Start off-screen
              animate={{ translateY: isMobileMenuOpen ? "0%" : "100%" }} // Animate to/from off-screen
              transition={{ type: "spring", stiffness: 300 }} // Customize the transition
            >
              <div className="flex flex-col h-full overflow-y-auto bg-dental-dirtyGold rounded-lg shadow-lg">
                <SheetContent
                  side="bottom"
                  className="w-full h-[90vh] bg-dental-dirtyGold p-0"
                >
                  <div className="flex flex-col h-full overflow-y-auto">
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="whileHover"
                      whileTap="whileTap"
                      className="px-6 py-4 text-white"
                    >
                      <Link href="#about" className="flex items-center gap-2">
                        <AboutSectionIcon
                          className="w-8 h-8"
                          variants={iconVariants}
                        />
                        About
                      </Link>
                    </motion.div>

                    {/* Services Section */}
                    <div className="border-t border-dental-black-light">
                      <motion.div
                        variants={linkVariants}
                        initial="initial"
                        whileHover="whileHover"
                        whileTap="whileTap"
                      >
                        <button
                          onClick={() => toggleMobileMenu("services")}
                          className="w-full px-6 py-4 text-white flex items-center justify-between"
                        >
                          <span className="flex items-center gap-2">
                            <ServicesSectionIcon
                              className="w-8 h-8"
                              variants={iconVariants}
                            />
                            Services
                          </span>
                          <span className="ml-2">
                            {mobileSubMenus.services ? "−" : "+"}
                          </span>
                        </button>
                      </motion.div>
                      <div
                        className={`pl-4 ${
                          mobileSubMenus.services ? "block" : "hidden"
                        }`}
                      >
                        {/* General Services */}
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <button
                            onClick={() => toggleMobileMenu("general")}
                            className="w-full px-6 py-2 text-sm text-white flex items-center justify-between"
                          >
                            General
                            <span className="ml-2">
                              {mobileSubMenus.general ? "−" : "+"}
                            </span>
                          </button>
                        </motion.div>
                        <div
                          className={`pl-4 ${
                            mobileSubMenus.general ? "block" : "hidden"
                          }`}
                        >
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/general/cleanings-and-exams"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <ExaminationsIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Examinations and Hygiene
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/general/crowns"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <CrownsIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Crowns
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/general/gum-therapy"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <GumTherapyIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Gum Therapy
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/general/dental-fillings"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <DentalFillingsIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Dental Fillings
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/general/dentures"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <DenturesIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Dentures
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/general/bridges"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <BridgesIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Bridges
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/general/root-canal"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <RootCanalIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Root Canal Therapy
                            </Link>
                          </motion.div>
                        </div>

                        {/* Surgical Services */}
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <button
                            onClick={() => toggleMobileMenu("surgical")}
                            className="w-full px-6 py-2 text-sm text-white flex items-center justify-between"
                          >
                            Surgical
                            <span className="ml-2">
                              {mobileSubMenus.surgical ? "−" : "+"}
                            </span>
                          </button>
                        </motion.div>
                        <div
                          className={`pl-4 ${
                            mobileSubMenus.surgical ? "block" : "hidden"
                          }`}
                        >
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/surgeries/implants"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <ImplantsIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Implants
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/surgeries/iv-sedation"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <IVSedationIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              IV Sedation
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/surgeries/extractions"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <ExtractionsIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Extractions
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/surgeries/bone-grafts"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <BoneGraftingIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Bone Grafts
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/surgeries/crown-lengthening"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <CrownLengtheningIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Crown Lengthening
                            </Link>
                          </motion.div>
                        </div>

                        {/* Cosmetic Services */}
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <button
                            onClick={() => toggleMobileMenu("cosmetic")}
                            className="w-full px-6 py-2 text-sm text-white flex items-center justify-between"
                          >
                            Cosmetic
                            <span className="ml-2">
                              {mobileSubMenus.cosmetic ? "−" : "+"}
                            </span>
                          </button>
                        </motion.div>
                        <div
                          className={`pl-4 ${
                            mobileSubMenus.cosmetic ? "block" : "hidden"
                          }`}
                        >
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/cosmetic/invisalign"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <InvisalignIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Invisalign
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/cosmetic/teeth-whitening"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <TeethWhiteningIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Teeth Whitening
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/cosmetic/bonding"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <BondingIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Bonding
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/cosmetic/veneers"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <VeneersIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Veneers
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={linkVariants}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <Link
                              href="/services/cosmetic/smile-makeover"
                              className="block px-6 py-2 text-sm text-white flex items-center gap-2"
                            >
                              <SmileMakeoverIcon
                                className="w-6 h-6"
                                variants={iconVariants}
                              />
                              Smile Makeover
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Problems I Treat Section */}
                    <div className="border-t border-dental-black-light">
                      <motion.div
                        variants={linkVariants}
                        initial="initial"
                        whileHover="whileHover"
                        whileTap="whileTap"
                      >
                        <button
                          onClick={() => toggleMobileMenu("problems")}
                          className="w-full px-6 py-4 text-white flex items-center justify-between"
                        >
                          <span className="flex items-center gap-2">
                            <ProblemsSectionIcon
                              className="w-8 h-8"
                              variants={iconVariants}
                            />
                            Problems I Treat
                          </span>
                          <span className="ml-2">
                            {mobileSubMenus.problems ? "−" : "+"}
                          </span>
                        </button>
                      </motion.div>
                      <div
                        className={`pl-4 ${
                          mobileSubMenus.problems ? "block" : "hidden"
                        }`}
                      >
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Link
                            href="/services/problems/chipped-cracked-teeth"
                            className="block px-6 py-2 text-sm text-white hover:text-dental-accent2"
                          >
                            Chipped or Cracked Teeth
                          </Link>
                        </motion.div>
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Link
                            href="/services/problems/toothache"
                            className="block px-6 py-2 text-sm text-white hover:text-dental-accent2"
                          >
                            Toothache
                          </Link>
                        </motion.div>
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Link
                            href="/services/problems/teeth-grinding"
                            className="block px-6 py-2 text-sm text-white hover:text-dental-accent2"
                          >
                            Teeth Grinding
                          </Link>
                        </motion.div>
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Link
                            href="/services/cosmetic/teeth-whitening"
                            className="block px-6 py-2 text-sm text-white hover:text-dental-accent2"
                          >
                            Stained Teeth
                          </Link>
                        </motion.div>
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Link
                            href="/services/problems/crooked-teeth"
                            className="block px-6 py-2 text-sm text-white hover:text-dental-accent2"
                          >
                            Crooked Teeth
                          </Link>
                        </motion.div>
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Link
                            href="/services/problems/bleeding-gums"
                            className="block px-6 py-2 text-sm text-white hover:text-dental-accent2"
                          >
                            Bleeding Gums
                          </Link>
                        </motion.div>
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Link
                            href="/services/problems/bad-breath"
                            className="block px-6 py-2 text-sm text-white hover:text-dental-accent2"
                          >
                            Bad Breath
                          </Link>
                        </motion.div>
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Link
                            href="/services/problems/dental-anxiety"
                            className="block px-6 py-2 text-sm text-white hover:text-dental-accent2"
                          >
                            Dental Anxiety
                          </Link>
                        </motion.div>
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Link
                            href="/services/problems/sensitive-teeth"
                            className="block px-6 py-2 text-sm text-white hover:text-dental-accent2"
                          >
                            Sensitive Teeth
                          </Link>
                        </motion.div>
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Link
                            href="/services/problems/missing-teeth"
                            className="block px-6 py-2 text-sm text-white hover:text-dental-accent2"
                          >
                            Missing Teeth
                          </Link>
                        </motion.div>
                      </div>
                    </div>

                    {/* Schedule Button */}
                    <div className="mt-auto p-6">
                      <motion.div
                        variants={linkVariants}
                        initial="initial"
                        whileHover="whileHover"
                        whileTap="whileTap"
                      >
                        <Button
                          asChild
                          className="w-full bg-white hover:bg-dental-primary text-black"
                        >
                          <Link href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com">
                            Get in touch
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </SheetContent>
              </div>
            </motion.div>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
