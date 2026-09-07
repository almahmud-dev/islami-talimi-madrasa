"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { navLinks } from "@/helper/data";
import logo from "@/public/images/logo.png";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portal shudhu client-e mount howar por use kora jay
  useEffect(() => {
    setMounted(true);
  }, []);

  // Menu open thakle background scroll bondho rakhbe
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Button ekhon shomoy render hoy - mounted er upor r wait kore na, tai instant dekha jabe */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-1/2 right-0 z-[999] flex h-16 w-8 -translate-y-1/2 items-center justify-center rounded-l-full bg-brand-green text-white shadow-xl shadow-brand-green/30 transition-transform hover:scale-105 active:scale-95"
          aria-label="মেনু খুলুন"
        >
          <FiMenu size={22} />
        </button>
      )}

      {/* Overlay + panel - shudhu ei part-i portal-e jay, r eta mounted howar por-i lagbe (open howar age hoyeই jabe) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm"
                  onClick={() => setIsOpen(false)}
                />

                {/* Slide-in panel */}
                <motion.div
                  key="panel"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                  className="fixed right-0 top-0 z-999 flex h-full w-[80%] max-w-xs flex-col bg-white p-4 sm:p-5 shadow-2xl"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex items-center gap-2">
                      <Image
                        src={logo}
                        alt="লোগো"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full border border-gray-200 object-cover"
                      />{" "}
                      <h1 className="text-xs xs:text-sm sm:text-base font-extrabold text-brand-green ">
                        ইছলাহুত তালিম ক্যাডেট মাদ্রাসা
                      </h1>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100"
                      aria-label="মেনু বন্ধ করুন"
                    >
                      <FiX size={22} />
                    </button>
                  </div>

                  <div className="mt-5 flex items-center rounded border border-gray-200 bg-gray-50 px-3 py-2">
                    <input
                      type="text"
                      placeholder="সার্চ করুন..."
                      className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />
                    <FiSearch className="shrink-0 text-gray-400" size={16} />
                  </div>

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
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
