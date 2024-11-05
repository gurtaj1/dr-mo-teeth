"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dental-black bg-opacity-95 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-dental-accent1">
            <Image
              src="/logo-type-white.png"
              alt="Dr Mo Smiles"
              width={180}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>
          {/* Desktop Navigation - hide on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-5"></div>
            <Link
              href="#about"
              className="text-dental-accent1 hover:text-dental-accent2"
            >
              About
            </Link>
            <div className="relative group">
              <button className="text-dental-accent1 hover:text-dental-accent2 flex items-center">
                Services
              </button>
              {/* Add bridge for main menu */}
              <div className="absolute -bottom-2 left-0 w-full h-2" />
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible w-64 bg-dental-black mt-2 py-2 rounded-md shadow-lg transition-all duration-200 ease-in-out">
                <div className="relative group/sub">
                  <button className="w-full text-left px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light flex items-center justify-between">
                    General
                    <span className="ml-2">›</span>
                  </button>
                  {/* Make the bridge wider and taller */}
                  <div className="absolute -left-8 top-0 w-8 h-full" />
                  {/* Add peer class to detect hover */}
                  <div
                    className="peer absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible w-64 bg-dental-black py-2 rounded-md shadow-lg transition-all duration-200 ease-in-out
                    [&:has(+.submenu-right)]:left-full [&:has(+.submenu-right)]:right-auto"
                  >
                    {/* Add a hidden element to detect if menu should flip */}
                    <div className="submenu-right absolute invisible w-1 h-1 -left-1" />
                    <Link
                      href="/services/general/cleanings-and-exams"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Cleanings & Exams
                    </Link>
                    <Link
                      href="/services/general/crowns"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Crowns
                    </Link>
                    <Link
                      href="/services/general/gum-therapy"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Gum Therapy
                    </Link>
                    <Link
                      href="/services/general/dental-fillings"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Dental Fillings
                    </Link>
                    <Link
                      href="/services/general/dentures"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Dentures
                    </Link>
                    <Link
                      href="/services/general/bridges"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Bridges
                    </Link>
                    <Link
                      href="/services/general/root-canal"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Root Canal
                    </Link>
                  </div>
                </div>
                <div className="relative group/sub">
                  <button className="w-full text-left px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light flex items-center justify-between">
                    Surgical
                    <span className="ml-2">›</span>
                  </button>
                  {/* Make the bridge wider and taller */}
                  <div className="absolute -left-8 top-0 w-8 h-full" />
                  {/* Add peer class to detect hover */}
                  <div
                    className="peer absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible w-64 bg-dental-black py-2 rounded-md shadow-lg transition-all duration-200 ease-in-out
                    [&:has(+.submenu-right)]:left-full [&:has(+.submenu-right)]:right-auto"
                  >
                    {/* Add a hidden element to detect if menu should flip */}
                    <div className="submenu-right absolute invisible w-1 h-1 -left-1" />
                    <Link
                      href="/services/surgeries/implants"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Implants
                    </Link>
                    <Link
                      href="/services/surgeries/extractions"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Extractions
                    </Link>
                    <Link
                      href="/services/surgeries/bone-grafts"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Bone Grafts
                    </Link>
                    <Link
                      href="/services/surgeries/implant-supported-dentures"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Implant-Supported Dentures
                    </Link>
                  </div>
                </div>
                <div className="relative group/sub">
                  <button className="w-full text-left px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light flex items-center justify-between">
                    Cosmetic
                    <span className="ml-2">›</span>
                  </button>
                  {/* Make the bridge wider and taller */}
                  <div className="absolute -left-8 top-0 w-8 h-full" />
                  {/* Add peer class to detect hover */}
                  <div
                    className="peer absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible w-64 bg-dental-black py-2 rounded-md shadow-lg transition-all duration-200 ease-in-out
                    [&:has(+.submenu-right)]:left-full [&:has(+.submenu-right)]:right-auto"
                  >
                    {/* Add a hidden element to detect if menu should flip */}
                    <div className="submenu-right absolute invisible w-1 h-1 -left-1" />
                    <Link
                      href="/services/cosmetic/invisalign"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Invisalign
                    </Link>
                    <Link
                      href="/services/cosmetic/teeth-whitening"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Teeth Whitening
                    </Link>
                    <Link
                      href="/services/cosmetic/bonding"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Bonding
                    </Link>
                    <Link
                      href="/services/cosmetic/veneers"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Veneers
                    </Link>
                    <Link
                      href="/services/cosmetic/smile-makeover"
                      className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                    >
                      Smile Makeover
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-dental-accent1 hover:text-dental-accent2 flex items-center">
                Problems I Treat
              </button>
              {/* Add bridge for main menu */}
              <div className="absolute -bottom-2 left-0 w-full h-2" />
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible w-64 bg-dental-black mt-2 py-2 rounded-md shadow-lg transition-all duration-200 ease-in-out">
                <Link
                  href="/services/problems/chipped-cracked-teeth"
                  className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  Chipped or Cracked Teeth
                </Link>
                <Link
                  href="/services/problems/wisdom-tooth-pain"
                  className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  Wisdom Tooth Pain
                </Link>
                <Link
                  href="/services/problems/missing-tooth"
                  className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  Missing Tooth
                </Link>
                <Link
                  href="/services/problems/toothache"
                  className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  Toothache
                </Link>
                <Link
                  href="/services/problems/teeth-grinding"
                  className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  Teeth Grinding
                </Link>
                <Link
                  href="/services/cosmetic/teeth-whitening"
                  className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  Stained Teeth
                </Link>
                <Link
                  href="/services/problems/crooked-teeth"
                  className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  Crooked Teeth
                </Link>
                <Link
                  href="/services/problems/bleeding-gums"
                  className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  Bleeding Gums
                </Link>
                <Link
                  href="/services/problems/bad-breath"
                  className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  Bad Breath
                </Link>
                <Link
                  href="/services/problems/dental-anxiety"
                  className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  Dental Anxiety
                </Link>
                <Link
                  href="/services/problems/sensitive-teeth"
                  className="block px-4 py-2 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  Sensitive Teeth
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Button - Show on desktop only */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-dental-primary hover:bg-dental-secondary text-white"
          >
            <Link href="#book">Schedule Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-dental-accent1"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="w-full h-[90vh] bg-dental-black p-0"
            >
              <div className="flex flex-col h-full overflow-y-auto">
                <Link
                  href="#about"
                  className="px-6 py-4 text-dental-accent1 hover:text-dental-accent2 hover:bg-dental-black-light"
                >
                  About
                </Link>

                {/* Services Section */}
                <div className="border-t border-dental-black-light">
                  <div className="w-full px-6 py-4 text-dental-accent1 flex items-center justify-between">
                    Services
                  </div>
                  <div className="pl-4">
                    {/* General Services */}
                    <button
                      onClick={() => toggleMobileMenu("general")}
                      className="w-full px-6 py-2 text-sm text-dental-accent1 flex items-center justify-between"
                    >
                      General
                      <span className="ml-2">
                        {mobileSubMenus.general ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`pl-4 ${
                        mobileSubMenus.general ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        href="/services/general/cleanings-and-exams"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Cleanings & Exams
                      </Link>
                      <Link
                        href="/services/general/crowns"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Crowns
                      </Link>
                      <Link
                        href="/services/general/gum-therapy"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Gum Therapy
                      </Link>
                      <Link
                        href="/services/general/dental-fillings"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Dental Fillings
                      </Link>
                      <Link
                        href="/services/general/dentures"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Dentures
                      </Link>
                      <Link
                        href="/services/general/bridges"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Bridges
                      </Link>
                      <Link
                        href="/services/general/root-canal"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Root Canal
                      </Link>
                    </div>

                    {/* Surgical Services */}
                    <button
                      onClick={() => toggleMobileMenu("surgical")}
                      className="w-full px-6 py-2 text-sm text-dental-accent1 flex items-center justify-between"
                    >
                      Surgical
                      <span className="ml-2">
                        {mobileSubMenus.surgical ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`pl-4 ${
                        mobileSubMenus.surgical ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        href="/services/surgeries/implants"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Implants
                      </Link>
                      <Link
                        href="/services/surgeries/extractions"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Extractions
                      </Link>
                      <Link
                        href="/services/surgeries/bone-grafts"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Bone Grafts
                      </Link>
                    </div>

                    {/* Cosmetic Services */}
                    <button
                      onClick={() => toggleMobileMenu("cosmetic")}
                      className="w-full px-6 py-2 text-sm text-dental-accent1 flex items-center justify-between"
                    >
                      Cosmetic
                      <span className="ml-2">
                        {mobileSubMenus.cosmetic ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`pl-4 ${
                        mobileSubMenus.cosmetic ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        href="/services/cosmetic/invisalign"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Invisalign
                      </Link>
                      <Link
                        href="/services/cosmetic/teeth-whitening"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Teeth Whitening
                      </Link>
                      <Link
                        href="/services/cosmetic/bonding"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Bonding
                      </Link>
                      <Link
                        href="/services/cosmetic/veneers"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Veneers
                      </Link>
                      <Link
                        href="/services/cosmetic/smile-makeover"
                        className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                      >
                        Smile Makeover
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Problems I Treat Section */}
                <div className="border-t border-dental-black-light">
                  <button
                    onClick={() => toggleMobileMenu("problems")}
                    className="w-full px-6 py-4 text-dental-accent1 flex items-center justify-between"
                  >
                    Problems I Treat
                    <span className="ml-2">
                      {mobileSubMenus.problems ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`pl-4 ${
                      mobileSubMenus.problems ? "block" : "hidden"
                    }`}
                  >
                    <Link
                      href="/services/problems/chipped-cracked-teeth"
                      className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                    >
                      Chipped or Cracked Teeth
                    </Link>
                    <Link
                      href="/services/problems/toothache"
                      className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                    >
                      Toothache
                    </Link>
                    <Link
                      href="/services/problems/teeth-grinding"
                      className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                    >
                      Teeth Grinding
                    </Link>
                    <Link
                      href="/services/cosmetic/teeth-whitening"
                      className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                    >
                      Stained Teeth
                    </Link>
                    <Link
                      href="/services/problems/crooked-teeth"
                      className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                    >
                      Crooked Teeth
                    </Link>
                    <Link
                      href="/services/problems/bleeding-gums"
                      className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                    >
                      Bleeding Gums
                    </Link>
                    <Link
                      href="/services/problems/bad-breath"
                      className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                    >
                      Bad Breath
                    </Link>
                    <Link
                      href="/services/problems/dental-anxiety"
                      className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                    >
                      Dental Anxiety
                    </Link>
                    <Link
                      href="/services/problems/sensitive-teeth"
                      className="block px-6 py-2 text-sm text-dental-accent1 hover:text-dental-accent2"
                    >
                      Sensitive Teeth
                    </Link>
                  </div>
                </div>

                {/* Schedule Button */}
                <div className="mt-auto p-6">
                  <Button
                    asChild
                    className="w-full bg-dental-primary hover:bg-dental-secondary text-white"
                  >
                    <Link href="#book">Schedule Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
