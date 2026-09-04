"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Container from "./ui/Container";
import { navLinks } from "@/helper/data";
import logo from "@/public/images/logo.png";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // যখন এলিমেন্টটি top-0 তে গিয়ে স্টিকি হওয়া শুরু করবে
        setIsSticky(entry.boundingClientRect.top <= 0);
      },
      {
        threshold: [1],
        rootMargin: "-1px 0px 0px 0px",
      }
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        observer.unobserve(navRef.current);
      }
    };
  }, []);

  return (
    <div ref={navRef} className="border-t border-gray-100 bg-white/95 backdrop-blur shadow-xs">
      <Container>
        {/* Main Bar */}
        <div className="flex items-center justify-between lg:justify-center lg:gap-10 py-2.5">
          
          {/* Mobile Left Side: Mini Logo + Brand Name (Only visible when sticky) */}
          <Link 
            href="/" 
            className={`flex items-center gap-2.5 lg:hidden transition-all duration-300 overflow-hidden ${
              isSticky ? "opacity-100 translate-x-0 max-w-[250px]" : "opacity-0 -translate-x-3 max-w-0 pointer-events-none"
            }`}
          >
            <Image
              src={logo}
              alt="লোগো"
              width={35}
              height={35}
              className="w-8 h-8 rounded-full object-cover border border-gray-200 shrink-0"
            />
            <span className="text-xs font-bold text-brand-green tracking-tight truncate max-w-[170px] xs:max-w-[200px]">
              ইছলাহুত তালিম ক্যাডেট মাদ্রাসা
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl font-medium text-gray-700 transition-colors hover:text-brand-green"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search + CTA (Desktop) */}
          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center rounded border border-gray-200 px-3 py-1.5">
              <input
                type="text"
                placeholder="সার্চ করুন..."
                className="w-32 bg-transparent text-sm outline-none placeholder:text-gray-400 lg:w-40"
              />
              <FiSearch className="text-gray-400" size={16} />
            </div>
            <Link
              href="/login"
              className="rounded bg-brand-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
            >
              লগইন / রেজিস্ট্রেশন
            </Link>
          </div>

          {/* Mobile toggle button (ml-auto adds auto margin to push right when logo is hidden) */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`p-1.5 text-gray-700 lg:hidden rounded-lg hover:bg-gray-100 transition-colors ${!isSticky ? "ml-auto" : ""}`}
            aria-label="মেনু খুলুন"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {isOpen && (
          <nav className="flex flex-col gap-1 border-t border-gray-100 pb-4 pt-3 lg:hidden">
            {/* Mobile Search Box inside menu */}
            <div className="mb-2 flex items-center rounded border border-gray-200 px-3 py-1.5 bg-gray-50">
              <input
                type="text"
                placeholder="সার্চ করুন..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <FiSearch className="text-gray-400 shrink-0" size={16} />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded bg-brand-green px-4 py-2 text-center text-sm font-semibold text-white"
            >
              লগইন / রেজিস্ট্রেশন
            </Link>
          </nav>
        )}
      </Container>
    </div>
  );
}