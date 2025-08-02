import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Recruma</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Build standout resumes effortlessly with AI-powered tools and modern templates.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/create" className="hover:text-white transition">Create Resume</Link></li>
            <li><Link href="/templates" className="hover:text-white transition">Templates</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: support@recruma.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Bengaluru, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <Link href="#" className="hover:text-blue-400 transition">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-sky-400 transition">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-blue-600 transition">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="mailto:support@recruma.com" className="hover:text-rose-400 transition">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Recruma. All rights reserved.
      </div>
    </footer>
  );
}
