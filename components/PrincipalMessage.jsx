import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import Container from "./ui/Container";
import principalPhoto from "@/public/images/principal.jpg";

export default function PrincipalMessage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Decorative blurred blobs - depth ar color add kore */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />

      {/* Dotted pattern accent */}
      <svg
        className="pointer-events-none absolute right-10 top-16 hidden h-24 w-24 text-amber-300/60 lg:block"
        viewBox="0 0 80 80"
        fill="currentColor"
      >
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <circle key={`dot-${row}-${col}`} cx={col * 16 + 4} cy={row * 16 + 4} r="2" />
          ))
        )}
      </svg>

      <Container className="relative flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
        {/* Left: image */}
        <div className="relative mx-auto max-w-md lg:mx-0 lg:w-2/5 lg:shrink-0">
          {/* Decorative outline behind image */}
          <div className="absolute -left-6 -top-6 hidden h-40 w-40 rounded-[2.5rem] border-2 border-amber-300/70 sm:block" />

          {/* Image card */}
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-black/5">
            <Image
              src={principalPhoto}
              alt="প্রিন্সিপাল"
              className="aspect-[1/1.5] h-105 w-full object-cover sm:h-135"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-2xl font-semibold tracking-tight">প্রিন্সিপাল</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                প্রিন্সিপাল ও সিইও
              </p>
            </div>
          </div>

          {/* Floating circular badge */}
          <div className="absolute -bottom-8 right-2 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-amber-600 p-4 text-center shadow-xl ring-4 ring-white sm:right-6">
            <span className="text-[10px] font-bold uppercase leading-tight tracking-wide text-white">
              ৩ বছরের একাডেমিক শ্রেষ্ঠত্ব
            </span>
          </div>
        </div>

        {/* Right: text content */}
        <div className="relative pt-6 sm:pt-0 lg:w-3/5">
          <FaQuoteLeft className="mb-4 text-3xl text-amber-300/70" />

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-linear-to-r from-amber-500 to-amber-300" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
              প্রিন্সিপালের বার্তা
            </span>
          </div>

          <h2 className="mt-5 text-3xl leading-[1.15] text-brand-green-dark sm:text-4xl lg:text-5xl">
            উম্মাহর ভবিষ্যৎ নেতৃত্ব
            <br />
            গঠনে নিবেদিত
          </h2>

          <p className="mt-6 leading-relaxed text-gray-600">
            এই সম্মানিত প্রতিষ্ঠানের প্রধান হিসেবে, আপনাদের আমাদের একাডেমিক
            পরিবারে স্বাগত জানাতে পেরে আমি গর্বিত। আমরা শুধু বিষয় পড়াই না;
            আমরা চরিত্র গঠন করি, প্রজ্ঞা লালন করি, এবং বিশ্বাসের এক অটুট ভিত্তি
            তৈরি করি।
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            আমাদের লক্ষ্য হলো ধর্মীয় শিক্ষা ও আধুনিক বৈজ্ঞানিক শ্রেষ্ঠত্বের
            মধ্যে সেতুবন্ধন তৈরি করা — আধুনিক চ্যালেঞ্জ মোকাবিলায় সম্পূর্ণ
            প্রস্তুত থেকেও ইসলামের চিরন্তন মূল্যবোধে গভীরভাবে প্রোথিত থাকা।
          </p>

          <div className="mt-8 flex items-center gap-4">
            <svg
              className="h-6 w-28 text-brand-green-dark"
              viewBox="0 0 140 24"
              fill="none"
            >
              <path
                d="M2 12c8-10 16-10 24 0s16 10 24 0 16-10 24 0 16 10 24 0 16-10 24 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-sm italic text-gray-500">
              প্রিন্সিপাল কর্তৃক স্বাক্ষরিত
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}