"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaFacebookMessenger, FaPhoneAlt } from "react-icons/fa";
import { FiMessageCircle, FiX } from "react-icons/fi";

// upto 5 contacts allowed. but option is 3.
  const contacts = [
    {
      id: "messenger",
      label: "মেসেঞ্জার",
      href: "https://m.me/yourpage",
      icon: FaFacebookMessenger,
      bg: "bg-[#0084FF]",
    },
    {
      id: "whatsapp",
      label: "হোয়াটসঅ্যাপ",
      href: "https://wa.me/8801234567890",
      icon: FaWhatsapp,
      bg: "bg-[#25D366]",
    },
    {
      id: "call",
      label: "কল করুন",
      href: "tel:+8801234567890",
      icon: FaPhoneAlt,
      bg: "bg-brand-green",
    },
];

const RADIUS = 80; // main button er center theke koto px dure chorabe
const ARC_SPAN = 90; // 0deg (soja upore) theke 90deg (soja bame) - quarter circle

// index/total onujayi arc-er upor evenly-spaced (x, y) offset calculate kore
function getPosition(index, total) {
  const t = total > 1 ? index / (total - 1) : 0.5; // ekta item hole thik majh-e (45deg) bosbe
  const angleDeg = t * ARC_SPAN;
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: -RADIUS * Math.sin(angleRad),
    y: -RADIUS * Math.cos(angleRad),
  };
}

export default function FloatingContact() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // কম্পোনেন্ট ফুললি মাউন্ট বা লোড হওয়ার পর স্টেট ট্রু করা
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // baire click korle menu bondho korar effect
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // ফুললি লোড না হওয়া পর্যন্ত রেন্ডার করবে না
  if (!isMounted) {
    return null;
  }

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <div className="pointer-events-none absolute bottom-0 right-0">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              const { x, y } = getPosition(index, contacts.length);
              return (
                <motion.a
                  key={contact.id}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                  animate={{ opacity: 1, x, y, scale: 1 }}
                  exit={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                    delay: index * 0.04,
                  }}
                  className="group pointer-events-auto absolute bottom-1 right-1 flex origin-bottom-right items-center gap-2"
                >
                  <span className="whitespace-nowrap rounded-md bg-gray-900/90 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md backdrop-blur-xs transition-opacity group-hover:opacity-100">
                    {contact.label}
                  </span>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 group-hover:scale-110 ${contact.bg}`}
                  >
                    <Icon size={18} />
                  </span>
                </motion.a>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileTap={{ scale: 0.9 }}
        className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-xl shadow-brand-green/40 focus:outline-none"
        aria-label="যোগাযোগ অপশন খুলুন"
      >
        {!isOpen && (
          <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-brand-green/60" />
        )}
        <span className="relative flex items-center justify-center">
          {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
        </span>
      </motion.button>
    </div>
  );
}