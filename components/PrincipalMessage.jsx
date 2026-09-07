import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import Container from "./ui/Container";
import principalPhoto from "@/public/images/principal.png";

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
            <circle
              key={`dot-${row}-${col}`}
              cx={col * 16 + 4}
              cy={row * 16 + 4}
              r="2"
            />
          )),
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
              <p className="text-2xl font-semibold tracking-tight">
                প্রিন্সিপাল
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                প্রিন্সিপাল ও সিইও
              </p>
            </div>
          </div>

          {/* Floating circular badge */}
          <div className="absolute -bottom-7 right-3 z-10 sm:right-5">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-amber-200/80 bg-white/95 p-4 text-center shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-md ring-1 ring-white sm:h-36 sm:w-36">
              {/* Outer decorative ring */}
              <div className="pointer-events-none absolute inset-2 rounded-full border border-dashed border-amber-300/70" />

              {/* Small top accent */}
              <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-white bg-amber-500 shadow-sm" />

              <div className="relative z-10">
                <span className="block text-2xl font-bold leading-none tracking-tight text-brand-green-dark sm:text-3xl">
                  ৩
                </span>

                <span className="mt-1 block text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-amber-600 sm:text-[10px]">
                  বছর ধরে
                </span>

                <span className="mx-auto mt-1.5 block h-px w-8 bg-amber-400/80" />

                <span className="mt-1.5 block text-[9px] font-semibold leading-[1.35] text-gray-600 sm:text-[10px]">
                  মানসম্মত শিক্ষার
                  <br />
                  প্রত্যয়ে
                </span>
              </div>
            </div>
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
            জ্ঞান, আদর্শ ও নৈতিকতায়
            <br />
            একজন মানুষ হিসেবে গড়ে তোলা
          </h2>

          <p className="mt-6 leading-relaxed text-gray-600">
            আমাদের কাছে শিক্ষা শুধু পাঠ্যবইয়ের জ্ঞান অর্জনের মধ্যে সীমাবদ্ধ নয়।
            একজন শিক্ষার্থীর জ্ঞানার্জনের পাশাপাশি তার চরিত্র, নৈতিকতা, শৃঙ্খলা
            ও দায়িত্ববোধ গড়ে তোলাই আমাদের অন্যতম প্রধান লক্ষ্য।
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            আমরা এমন একটি শিক্ষার পরিবেশ নিশ্চিত করতে চাই, যেখানে দ্বীনি
            মূল্যবোধের সাথে প্রয়োজনীয় আধুনিক শিক্ষা ও দক্ষতার সমন্বয় ঘটে। অভিজ্ঞ
            শিক্ষকমণ্ডলীর নির্দেশনা, নিয়মিত পাঠদান এবং যত্নশীল পরিবেশের মাধ্যমে
            আমরা প্রতিটি শিক্ষার্থীকে তার সম্ভাবনাকে বিকশিত করার সুযোগ দিতে
            প্রতিশ্রুতিবদ্ধ।
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex flex-col">
              <span
                className="text-2xl font-semibold italic leading-none text-brand-green-dark"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                মাওলানা আব্দুল হাকিম
              </span>

              <span className="mt-2 h-px w-36 bg-linear-to-r from-brand-green-dark/60 to-transparent" />

              <p className="mt-2 text-sm text-gray-500">
                শুভেচ্ছান্তে, প্রিন্সিপাল
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
