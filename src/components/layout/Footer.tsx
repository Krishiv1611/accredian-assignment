import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EnquireModal } from "@/components/ui/EnquireModal";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-bold text-3xl tracking-tight text-white">
                Accredian
              </span>
            </Link>
            <p className="text-gray-400 max-w-md mb-8">
              Empowering enterprises with next-generation expertise and driving
              strategic growth through cutting-edge learning programs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#stats" className="text-gray-400 hover:text-white transition-colors">Stats</Link></li>
              <li><Link href="#clients" className="text-gray-400 hover:text-white transition-colors">Clients</Link></li>
              <li><Link href="#accredian-edge" className="text-gray-400 hover:text-white transition-colors">Accredian Edge</Link></li>
              <li><Link href="#faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-4">
              Ready to transform your team? Reach out to us for a custom corporate training solution.
            </p>
            <EnquireModal>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full sm:w-auto">
                Enquire Now
              </Button>
            </EnquireModal>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Accredian. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
