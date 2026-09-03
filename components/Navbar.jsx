"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Container from "./ui/Container";
import { navLinks } from "@/helper/data";
import logo from "@/public/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100">
      {/* Top identity bar */}
      <div className="bg-linear-to-br from-pink-200 via-white to-green-200 py-3 md:py-9">
        <Container>
          <div className="flex flex-row items-center justify-center gap-3 md:gap-8 ">
            <Image
              src={logo}
              alt="ইছলাহুত তালিম ক্যাডেট মাদ্রাসা লোগো"
              width={150}
              height={150}
              className=" w-16 xs:w-20 sm:w-27 md:w-37 aspect-square shrink-0 rounded-full object-cover"
            />
            <div className="text-center flex flex-col items-center gap-1  md:gap-4">
              <p className="text-[11px] font-semibold text-red-800 sm:text-xs md:text-sm lg:text-2xl">
                إصلاح التعليم كاديت مدرسة إسلامية
              </p>
              <h1 className="text-base font-extrabold text-brand-green sm:text-2xl md:text-3xl lg:text-4xl">
                ইছলাহুত তালিম ক্যাডেট মাদ্রাসা
              </h1>
              <p className="text-[9px] font-semibold tracking-wider sm:text-xs md:text-sm lg:text-base">
                ICHLAHUT TALIM CADET MADRASA BANGLADESH
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Main nav row */}
      <div className="border-t border-gray-100 bg-white/95 backdrop-blur">
        <Container>
          <div className="flex items-center justify-center gap-10 py-3">
            {/* Desktop nav */}
            <nav className="hidden items-center  gap-6 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl font-medium text-gray-700 transition-colors hover:text-brand-green `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Search + CTA */}
            <div className=" hidden items-center  gap-3 lg:flex">
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

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="ml-auto p-2 text-gray-700 lg:hidden"
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
                  className="text-sm rounded-lg px-3 py-2  font-medium text-gray-700 hover:bg-gray-50"
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
      </div>
    </header>
  );
}
