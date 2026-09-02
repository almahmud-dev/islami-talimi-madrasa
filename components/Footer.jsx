import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { footerLinks, contactInfo } from "@/helper/data";

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-white">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo + about */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://placehold.co/44x44/ffffff/166534?text=IT"
              alt="ইশলাহুত তালিম ক্যাডেট মাদ্রাসা লোগো"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-sm font-bold">
              ইশলাহুত তালিম ক্যাডেট মাদ্রাসা
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            দ্বীনি ও দুনিয়াবি শিক্ষার সমন্বয়ে শিক্ষার্থীদের আখিরাতমুখী জীবন
            গঠনে আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="ফেসবুক"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              aria-label="ইউটিউব"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaYoutube size={14} />
            </a>
            <a
              href="#"
              aria-label="হোয়াটসঅ্যাপ"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaWhatsapp size={14} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-bold">প্রয়োজনীয় লিংক</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-sm font-bold">বিভাগসমূহ</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.departments.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold">যোগাযোগ</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 shrink-0" size={16} />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone size={16} />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail size={16} />
              <span>{contactInfo.email}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/70">
          © {new Date().getFullYear()} ইশলাহুত তালিম ক্যাডেট মাদ্রাসা বাংলাদেশ। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
}
