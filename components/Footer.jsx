import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { footerLinks, contactInfo } from "@/helper/data";
import logo from "../public/images/logo.png"; 

const paymentMethods = [
  "VISA",
  "Mastercard",
  "AMEX",
  "bKash",
  "Nagad",
  "Rocket",
  "Upay",
  "DBBL Nexus",
  "iKash",
  "Sure Cash",
  "OK Wallet",
  "Bank Q",
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] text-white">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Logo + about */}
        <div>
          <Image
            src={logo}
            alt="ইছলাহুত তালিম ক্যাডেট মাদ্রাসা লোগো"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h3 className="mt-4 text-lg font-bold text-brand-green">
            ইছলাহুত তালিম ক্যাডেট মাদ্রাসা
          </h3>
          <p className="mt-2 text-sm italic text-white/70">
            &ldquo;শিক্ষা, প্রযুক্তি, এবং নৈতিকতার সমন্বয়ে আধুনিক শিক্ষা।&rdquo;
          </p>
          <div className="mt-5 flex gap-3">
            <Link
              href="#"
              aria-label="ফেসবুক"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaFacebookF size={14} />
            </Link>

            <Link
              href="#"
              aria-label="ইনস্টাগ্রাম"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green hover:opacity-90"
            >
              <FaInstagram size={16} />
            </Link>

            <Link
              href="#"
              aria-label="ইউটিউব"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaYoutube size={14} />
            </Link>

            <Link
              href="#"
              aria-label="লিংকডইন"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaLinkedinIn size={14} />
            </Link>

            <Link
              href="#"
              aria-label="এক্স"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaXTwitter size={14} />
            </Link>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-bold">গুরুত্বপূর্ণ লিংকসমূহঃ</h3>
          <ul className="mt-5 space-y-3">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg text-white/80 hover:text-brand-green"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Internal links */}
        <div>
          <h3 className="text-sm font-bold">অভ্যন্তরীণ লিংকঃ</h3>
          <ul className="mt-5 space-y-3">
            {footerLinks.departments.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm hover:text-brand-green ${
                    i === 0 ? "text-brand-green" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold">কন্টাক্ট ইনফরমেশনঃ</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex items-center gap-3">
              <FiPhone className="shrink-0 text-brand-green" size={18} />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="shrink-0 text-brand-green" size={18} />
              <span>{contactInfo.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-0.5 shrink-0 text-brand-green" size={18} />
              <span>{contactInfo.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      {/* Payment methods */}
      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium text-white/60">Pay With</span>
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="flex h-8 items-center rounded bg-white px-2 text-[10px] font-bold text-gray-800"
            >
              {method}
            </span>
          ))}
          <span className="ml-auto text-[10px] text-white/50">
            Powered by SSLCommerz
          </span>
        </Container>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/70">
          © {new Date().getFullYear()} ইছলাহুত তালিম ক্যাডেট মাদ্রাসা বাংলাদেশ। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
}