"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const CustomSwiper = ({
  children,
  slidesPerView = "auto",
  spaceBetween = 16,
  breakpoints,
  grid,
  showArrows = true,
  showPrevArrow = true,
  className = "",
}) => {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative w-full">
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

      {/* Left Arrow */}
      {showArrows && showPrevArrow && (
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          aria-label="পূর্ববর্তী"
          className="absolute left-1 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition-all duration-200 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FaChevronLeft size={14} />
        </button>
      )}

      {/* Right Arrow */}
      {showArrows && (
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          aria-label="পরবর্তী"
          className="absolute right-1 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition-all duration-200 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FaChevronRight size={14} />
        </button>
      )}
    </div>
  );
};

export default CustomSwiper;
export { SwiperSlide };