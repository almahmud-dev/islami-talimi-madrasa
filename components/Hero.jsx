import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import { FaMedal, FaUsers, FaGraduationCap, FaClipboardCheck } from "react-icons/fa";

import image1 from "@/public/images/hero/students1.jpg";
import image2 from "@/public/images/hero/students2.jpg";

const stats = [
  { icon: FaMedal, value: "১৫০০+", label: "মোট গ্র্যাজুয়েট" },
  { icon: FaUsers, value: "২০০+", label: "একটিভ শিক্ষার্থী" },
  { icon: FaGraduationCap, value: "২০+", label: "শিক্ষকমণ্ডলী" },
  { icon: FaClipboardCheck, value: "৯৯%", label: "সাফল্যের হার" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1c1c1c] text-white flex items-center">
      {/* Background Image Layers Container */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        {/* Green diagonal panel */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{ clipPath: "polygon(42% 0, 78% 0, 68% 100%, 32% 100%)" }}
        >
          <Image src={image1} alt="Green Section" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-brand-green/85 mix-blend-multiply" />
        </div>

        {/* Red diagonal panel */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{ clipPath: "polygon(78% 0, 100% 0, 100% 100%, 68% 100%)" }}
        >
          <Image src={image2} alt="Red Section" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[#8b1515]/85 mix-blend-multiply" />
        </div>
      </div>

      {/* Fallback for Mobile Screens */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-brand-green-dark via-brand-green to-brand-red opacity-50 brightness-50 lg:hidden">
        <Image src={image2} alt="Mobile Background" fill className="object-cover" />
      </div>

      {/* Content Container */}
      <Container className="relative z-40 w-full py-16 sm:py-20 ">
        <div className="max-w-xl text-white">
          <p className="mb-3 text-sm font-medium text-gray-200 sm:text-base">
            ইসলামিক শিক্ষার নতুন দিগন্তে আপনাকে স্বাগতম
          </p>
          <h1 className="text-4xl font-bold leading-snug sm:text-4xl lg:text-5xl">
            এখানেই শুরু হোক <br />
            আপনার আখিরাতের <br />
            সফলতার নূরানী যাত্রা
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="rounded-lg bg-brand-green px-8.5 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-brand-green-dark"
            >
              কোর্স দেখুন
            </Link>
            <Link
              href="/admission"
              className="rounded-lg border border-white/30 px-8.5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              ভর্তি হোন
            </Link>
          </div>
        </div>

        {/* Stats card */}
        <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-gray-200 overflow-hidden rounded-2xl bg-white shadow-xl sm:mt-16 sm:grid-cols-4 sm:divide-y-0">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 px-4 py-6 text-center"
              >
                <Icon className="text-amber-500" size={30} />
                <span className="text-2xl font-bold text-brand-green-dark sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-[11px] font-medium tracking-wide text-gray-500 sm:text-xs">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}