"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Container from "./ui/Container";
import { navLinks } from "@/helper/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="https://placehold.co/48x48/166534/ffffff?text=IT"
              alt="ইশলাহুত তালিম ক্যাডেট মাদ্রাসা লোগো"
              width={44}
              height={44}
              className="rounded-full"
            />
            <span className="hidden text-sm font-bold text-brand-green-dark sm:block sm:text-base">
              ইশলাহুত তালিম ক্যাডেট মাদ্রাসা
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-green"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search + CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center rounded-full border border-gray-200 px-3 py-1.5">
              <input
                type="text"
                placeholder="সার্চ করুন..."
                className="w-32 bg-transparent text-sm outline-none placeholder:text-gray-400 lg:w-40"
              />
              <FiSearch className="text-gray-400" size={16} />
            </div>
            <Link
              href="/login"
              className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
            >
              লগইন / রেজিস্ট্রেশন
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 text-gray-700 md:hidden"
            aria-label="মেনু খুলুন"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="flex flex-col gap-1 border-t border-gray-100 pb-4 pt-2 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-brand-green px-4 py-2 text-center text-sm font-semibold text-white"
            >
              লগইন / রেজিস্ট্রেশন
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}
