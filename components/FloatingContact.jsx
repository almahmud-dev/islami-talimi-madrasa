"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaFacebookMessenger, FaPhoneAlt } from "react-icons/fa";
import { FiMessageCircle, FiX } from "react-icons/fi";

const contacts = [
  {
    id: "whatsapp",
    label: "হোয়াটসঅ্যাপ",
    href: "https://wa.me/8801234567890",
    icon: FaWhatsapp,
    bg: "bg-[#25D366]",
  },
  {
    id: "messenger",
    label: "মেসেঞ্জার",
    href: "https://m.me/yourpage",
    icon: FaFacebookMessenger,
    bg: "bg-[#0084FF]",
  },
  {
    id: "call",
    label: "কল করুন",
    href: "tel:+8801234567890",
    icon: FaPhoneAlt,
    bg: "bg-brand-green",
  },
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-1">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.id}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 25,
                    delay: index * 0.05,
                  }}
                  className="group flex items-center gap-2.5 origin-bottom"
                >
                  {/* লেবেল যা হোভার বা অ্যানিমেশনের সময় সুন্দর দেখাবে */}
                  <span className="rounded-md bg-gray-900/90 backdrop-blur-xs px-2.5 py-1 text-xs font-medium text-white shadow-md">
                    {contact.label}
                  </span>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 group-hover:scale-110 ${contact.bg}`}
                  >
                    <Icon size={20} />
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
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-xl shadow-brand-green/40 focus:outline-none"
        aria-label="যোগাযোগ অপশন খুলুন"
      >
        {!isOpen && (
          <span className="absolute inset-0 animate-ping rounded-full bg-brand-green/60 pointer-events-none" />
        )}
        <span className="relative flex items-center justify-center">
          {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
        </span>
      </motion.button>
    </div>
  );
}