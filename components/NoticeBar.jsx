"use client";

import { motion } from "framer-motion";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const noticeText = "ইছলাহুত তালিম ক্যাডেট মাদ্রাসা";

// Ekbar-er content - eta duibar render kore seamless loop banano hoy
function NoticeContent() {
  return (
    <div className="flex shrink-0 items-center gap-3 pr-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="flex items-center gap-3">
          <span className="text-xs sm:text-sm">{noticeText}</span>
          <span className="text-yellow-400">•</span>
        </span>
      ))}
    </div>
  );
}

export default function NoticeBar() {
  return (
    <div className="flex items-center overflow-hidden bg-brand-green-dark text-white">
      {/* Left fixed badge - eta scroll hobe na */}
      <div className="z-10 flex shrink-0 items-center gap-2 border-r border-yellow-400/30 bg-brand-green-dark px-2 sm:px-4 py-2">
        <span className="flex items-center gap-1.5 rounded border border-yellow-400/50 px-2 py-1">
          <HiOutlineSpeakerphone className="text-yellow-400" size={14} />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wide text-yellow-400">
            NOTICE
          </span>
        </span>
      </div>

      {/* Scrolling text - framer-motion diye infinite loop, duitа copy pashapashi -50% porjonto move kore */}
      <motion.div
        className="flex py-2.5"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 25,
        }}
      >
        <NoticeContent />
        <NoticeContent aria-hidden="true" />
      </motion.div>
    </div>
  );
}
