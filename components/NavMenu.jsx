"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Container from "./ui/Container";
import { navLinks } from "@/helper/data";
import logo from "@/public/images/logo.png";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-100 bg-white/95 backdrop-blur shadow-xs">
      <Container>
        {/* Main Bar - shudhu desktop e dekhabe, mobile e completely hidden */}
        <div className="hidden lg:flex items-center justify-center gap-10 py-2.5">
          {/* Desktop nav */}
          <nav className="flex items-center gap-6">
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

          {/* Search + CTA */}
          <div className="flex items-center gap-3">
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
        </div>
      </Container>

      {/* Mobile: floating menu button (side-e fixed thakbe, live support-er jaiga faka rekhe majhkane ba upore thakbe) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 right-0 -translate-y-1/2 z-40 flex w-7 aspect-1/1.5 items-center justify-center rounded-l-full bg-brand-green text-white shadow-xl shadow-brand-green/30 transition-transform hover:scale-105 active:scale-95 lg:hidden"
        aria-label="মেনু খুলুন"
      >
        <FiMenu size={20} />
      </button>

      {/* Mobile: floating button click korle je menu khulbe (slide-in drawer) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop - eikhane click korleo menu bondho hobe */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Right theke slide-in panel */}
          <div className="absolute right-0 top-0 flex h-full w-[80%] max-w-xs flex-col bg-white p-5 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <Image
                src={logo}
                alt="লোগো"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover border border-gray-200"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="মেনু বন্ধ করুন"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* Search box */}
            <div className="mt-5 flex items-center rounded border border-gray-200 bg-gray-50 px-3 py-2">
              <input
                type="text"
                placeholder="সার্চ করুন..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <FiSearch className="shrink-0 text-gray-400" size={16} />
            </div>

            {/* Links */}
            <nav className="mt-4 flex flex-1 flex-col gap-1.5 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-brand-green/10 hover:text-brand-green"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-lg bg-brand-green px-4 py-3 text-center text-sm font-semibold text-white shadow-sm"
            >
              লগইন / রেজিস্ট্রেশন
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}