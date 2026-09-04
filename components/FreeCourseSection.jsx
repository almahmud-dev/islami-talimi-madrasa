"use client";

import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaGift } from "react-icons/fa";
import Container from "./ui/Container";
import CourseCard from "./CourseCard";
import { freeCourses } from "@/helper/data";
import "swiper/css";

const FreeCourseSection = () => {
  return (
    <section className="py-14">
      <Container>
        <div className="mb-10">
          <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            আমাদের ফ্রি কোর্সসমূহ
            <FaGift className="text-brand-green" />
          </h2>

          <div className="mx-auto mt-3 h-[3.5px] w-[120px] rounded-full bg-[#00bc7d]" />
        </div>

        <Swiper
          className="!px-1 !pb-2"
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={freeCourses.length > 4}
          grabCursor
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {freeCourses.map((course) => (
            <SwiperSlide key={course.id} className="!h-auto">
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 flex justify-center">
          <Link
            href="/courses"
            className="flex items-center gap-2 rounded-lg border border-brand-green bg-brand-green px-6 py-2.5 text-sm font-semibold text-white transition hover:border-brand-green-dark hover:bg-brand-green-dark"
          >
            আরো দেখুন
            <FaArrowRight size={12} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FreeCourseSection;
