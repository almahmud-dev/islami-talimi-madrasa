import React from "react";

import logo from "@/public/images/logo.png";
import Image from "next/image";
import Container from "./ui/Container";

export default function TopHeader() {
  return (
    <div className="bg-linear-to-br from-pink-200 via-white to-green-200 py-3 md:py-6">
      <Container>
        <div className="flex flex-row items-center justify-center gap-3 md:gap-8 ">
          <Image
            src={logo}
            alt="ইছলাহুত তালিম ক্যাডেট মাদ্রাসা লোগো"
            width={150}
            height={150}
            className=" w-16 xs:w-20 sm:w-27 md:w-30 aspect-square shrink-0 rounded-full object-cover"
          />
          <div className="text-center flex flex-col items-center gap-1  md:gap-2">
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
