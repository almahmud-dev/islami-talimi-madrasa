"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

/**
 * পুনঃব্যবহারযোগ্য Swiper কম্পোনেন্ট।
 * ref-based navigation — একই পেজে একাধিক Swiper থাকলেও arrow কনফ্লিক্ট করবে না।
 */
const CustomSwiper = ({
  children,
  slidesPerView = "auto",
  spaceBetween = 16,
  breakpoints,
  grid,
  showArrows = true,
  className = "",
}) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [canSlide, setCanSlide] = useState(true);

  const updateNavState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    // যদি সব স্লাইড একসাথে ফিট হয়ে যায়, তাহলে arrow লুকিয়ে ফেলা হবে
    setCanSlide(!(swiper.isBeginning && swiper.isEnd));
  };

  return (
    <div className="relative">
      <Swiper
        modules={grid ? [Navigation, Grid] : [Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onInit={updateNavState}
        onSlideChange={updateNavState}
        onResize={updateNavState}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        grid={grid}
        className={`!overflow-hidden ${className}`}
      >
        {children}
      </Swiper>

      {showArrows && canSlide && (
        <>
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            aria-label="পূর্ববর্তী"
            className="absolute -left-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaChevronLeft size={14} />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            aria-label="পরবর্তী"
            className="absolute -right-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaChevronRight size={14} />
          </button>
        </>
      )}
    </div>
  );
};

export default CustomSwiper;
export { SwiperSlide };