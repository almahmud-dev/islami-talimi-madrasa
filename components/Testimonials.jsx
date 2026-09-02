"use client";

import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import Container from "./ui/Container";
import { testimonials } from "@/helper/data";

export default function Testimonials() {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            কেন অভিভাবক ও শিক্ষার্থীদের প্রধান পছন্দ?
          </h2>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              ref={prevButtonRef}
              type="button"
              aria-label="আগের মতামত"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-green text-brand-green transition hover:bg-brand-green hover:text-white"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              ref={nextButtonRef}
              type="button"
              aria-label="পরের মতামত"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-green text-brand-green transition hover:bg-brand-green hover:text-white"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        <Swiper
          className="mt-10 !pb-2"
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
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
          {testimonials.map((item, idx) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <article className="relative flex h-full flex-col rounded-xl bg-white p-6 shadow-sm">
                <FaQuoteLeft className="text-brand-green/30" size={22} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">
                  {item.quote}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500">
                      {item.relation}
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
