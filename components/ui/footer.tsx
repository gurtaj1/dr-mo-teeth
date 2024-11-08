import { Instagram, Phone, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dental-black text-dental-accent1 pt-12 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="md:border-l md:border-dental-accent1 md:pl-8">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/drmosmiles"
                className="hover:text-gray-300"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              {/* Add more social media icons as needed */}
            </div>
          </div>
          <div className="md:border-l md:border-dental-accent1 md:pl-8">
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2" size={18} />
                <span>01482 898362 / 01482 871704</span>
              </li>
              <li>
                <Link
                  href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com"
                  className="flex items-center"
                >
                  <Mail className="mr-2" size={18} />
                  <span>implantclinician@outlook.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com"
                  className="flex items-center"
                >
                  <Mail className="mr-2" size={18} />
                  <span>drmohsinaslam@outlook.com</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="https://maps.app.goo.gl/dbgXNq8s5xRRJCPW7">
                  <MapPin className="mr-2" size={18} />
                </Link>
                <Link href="https://maps.app.goo.gl/dbgXNq8s5xRRJCPW7">
                  10 Soutter Gate, Hedon, Hull HU12 8JS
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="https://maps.app.goo.gl/5qfbALW59Bgx3VvWA">
                  <MapPin className="mr-2" size={18} />
                </Link>
                <Link href="https://maps.app.goo.gl/5qfbALW59Bgx3VvWA">
                  10 Railway St, Beverley HU17 0DX
                </Link>
              </li>
            </ul>
            <Button asChild className="mt-4 w-full text-dental-accent1">
              <Link href="mailto:implantclinician@outlook.com,drmohsinaslam@outlook.com">
                Book an Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
