import React from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Container from "./ui/Container";
import pattern from "@/public/images/hero/pattern.png";

export default function TopHeader() {
  return (
    <div className="relative bg-linear-to-br from-pink-200 via-white to-green-200 py-3 md:py-6 overflow-hidden">
      {/* ব্যাকগ্রাউন্ড প্যাটার্ন লেয়ার (হালকা অপাসিটি দিয়ে কালার ঠিক রাখা হয়েছে) */}
      <div 
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `url(${pattern.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "800px", // প্যাটার্ন ছোট-বড় করতে চাইলে এখান থেকে সাইজ কমাতে বা বাড়াতে পারেন
        }}
      ></div>

      <Container className="relative z-10">
        <div className="flex flex-row items-center justify-center gap-3 md:gap-8 ">
          <Image
            src={logo}
            alt="ইছলাহুত তালিম ক্যাডেট মাদ্রাসা লোগো"
            width={150}
            height={150}
            className="w-16 xs:w-20 sm:w-27 md:w-30 aspect-square shrink-0 rounded-full object-cover"
          />
          <div className="text-center flex flex-col items-center gap-1 md:gap-2">
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
  );
}