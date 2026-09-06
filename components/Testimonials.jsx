"use client";

import { useEffect, useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import Container from "./ui/Container";
import { testimonials } from "@/helper/data";

const sectionTitle =
  "\u0995\u09c7\u09a8 \u0986\u09ae\u09b0\u09be\u0987 \u09b6\u09bf\u0995\u09cd\u09b7\u09be\u09b0\u09cd\u09a5\u09c0 \u0993 \u0985\u09ad\u09bf\u09ad\u09be\u09ac\u0995\u09a6\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a5\u09ae \u09aa\u099b\u09a8\u09cd\u09a6?";
const sectionDescription =
  "আমাদের শিক্ষার্থী ও অভিভাবকদের বাস্তব অভিজ্ঞতা, আস্থা ও ভালোবাসাই আমাদের পথচলার সবচেয়ে বড় অনুপ্রেরণা।";

export default function Testimonials() {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    swiper.params.navigation.prevEl = prevButtonRef.current;
    swiper.params.navigation.nextEl = nextButtonRef.current;
    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/3 bg-gradient-to-r from-blue-100/70 via-blue-50/35 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/3 bg-gradient-to-l from-emerald-100/70 via-green-50/35 to-transparent blur-2xl" />

      <Container className="relative max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3.5 text-sm font-semibold tracking-[0.16em] text-[#0e7a3e] sm:text-base">
            শিক্ষার্থী ও অভিভাবকদের অভিজ্ঞতা
          </p>
          <h2 className="mx-auto max-w-[450px] text-2xl font-bold leading-tight text-[#174c37] sm:text-3xl">
            {sectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-[450px]   max-w-2xl text-sm leading-7 text-[#63746b] sm:text-base">
            {sectionDescription}
          </p>
        </div>

        <div className="relative">
          <button
            ref={prevButtonRef}
            type="button"
            aria-label="Previous testimonial"
            className="absolute left-1 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-gray-700 sm:left-0 sm:h-10 sm:w-10 lg:-left-2"
          >
            <FaChevronLeft size={13} />
          </button>
          <button
            ref={nextButtonRef}
            type="button"
            aria-label="Next testimonial"
            className="absolute right-1 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gray-700 text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-gray-900 sm:right-0 sm:h-10 sm:w-10 lg:-right-2"
          >
            <FaChevronRight size={13} />
          </button>

          <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="!px-8 !pb-2 !pt-16 sm:!px-8"
          modules={[Autoplay, Navigation]}
          spaceBetween={35}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.params.navigation.nextEl = nextButtonRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <article className="group relative flex h-full min-h-[235px] flex-col rounded-lg border border-gray-200 bg-white px-4 pb-5 pt-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-[0_12px_28px_rgba(14,122,62,0.12)] sm:px-5">
                <span className="absolute right-1 top-1 rounded-full bg-[#0e7a3e] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white">
                  Verified
                </span>
                <span className="absolute -top-5 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105">
                  <FaQuoteLeft size={14} />
                </span>
                <p className="flex-1 text-base leading-7 text-gray-700 sm:text-[18px] mt-5">
                  {item.quote}
                </p>
                <div className="mt-4  border-t border-gray-200 pt-3">
                  <p className="text-sm font-medium text-gray-800 sm:text-base">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400 sm:text-sm">
                    {item.relation}
                  </p>
                </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
