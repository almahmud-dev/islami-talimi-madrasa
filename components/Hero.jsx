import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";

import image1 from "@/public/images/hero/students1.jpg";
import image2 from "@/public/images/hero/students2.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1c1c1c] text-white  flex items-center">
      
      {/* Background Image Layers Container */}
      <div className="absolute inset-0 z-0 hidden lg:block">

        {/* Green diagonal panel */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: "polygon(42% 0, 78% 0, 68% 100%, 32% 100%)" }}
        >
          <Image
            src={image1}
            alt="Green Section"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-green/85 mix-blend-multiply" />
        </div>

        {/* Red diagonal panel */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: "polygon(78% 0, 100% 0, 100% 100%, 68% 100%)" }}
        >
          <Image
            src={image2}
            alt="Red Section"
            fill
            priority
            className="object-cover "
          />
          <div className="absolute inset-0 bg-[#8b1515]/85 mix-blend-multiply" />
        </div>

        {/* Left dark area = just the section's own bg-[#1c1c1c], no layer needed */}
      </div>

      {/* Fallback for Mobile Screens */}
      <div className="absolute inset-0 z-0 lg:hidden bg-linear-to-br from-brand-green-dark via-brand-green to-brand-red opacity-50 brightness-50">
        <Image src={image2} alt="Mobile Background" fill className="object-cover" />
      </div>

      {/* Content Container */}
      <Container className="relative z-40 py-16 sm:py-20 lg:py-28 w-full">
        <div className="max-w-xl text-white">
          <p className="mb-3 text-sm sm:text-base font-medium text-gray-200">
            ইসলামিক শিক্ষার নতুন দিগন্তে আপনাকে স্বাগতম
          </p>
          <h1 className="text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
            এখানেই শুরু হোক <br />
            আপনার আখিরাতের <br />
            সফলতার নূরানী যাত্রা
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="rounded-full bg-brand-green px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-green-dark hover:scale-105 shadow-lg"
            >
              কোর্স দেখুন
            </Link>
            <Link
              href="/admission"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              ভর্তি হোন
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}