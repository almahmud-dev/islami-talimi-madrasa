"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaGraduationCap,
  FaLayerGroup,
  FaUserFriends,
  FaRegClock,
  FaArrowRight,
} from "react-icons/fa";

import Container from "./ui/Container";
import CustomSwiper, { SwiperSlide } from "./ui/Swiper";
// Category data
const categories = [
  { id: 1, title: "ইসলামিক কোর্স", count: 10 },
  { id: 2, title: "ওয়েব ডিজাইন কোর্স", count: 10 },
  { id: 3, title: "ওয়েব ডেভেলপমেন্ট কোর্স", count: 10 },
  { id: 4, title: "গ্রাফিক্স ডিজাইন কোর্স", count: 20 },
  { id: 5, title: "ডিজিটাল মার্কেটিং কোর্স", count: 10 },
  { id: 6, title: "ইংলিশ কোর্স", count: 10 },
];

// Course data
const courses = [
  {
    id: 1,
    title: "১০,০০০ বার ব্যবহৃত ১১টি অব্যয়বাচক শব্দ",
    image: "/images/courses/course1.png",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ দিন বাকি",
    description:
      "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 2,
    title: "লারাভেল মডেল ও ডাটা মাইগ্রেশন - Full Stack Web Development",
    image: "/images/courses/course2.png",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ দিন বাকি",
    description:
      "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
    highlight: true,
  },
  {
    id: 3,
    title: "কোরআনে সবচেয়ে বেশি ব্যবহৃত ১০টি শব্দ",
    image: "/images/courses/course3.png",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ দিন বাকি",
    description:
      "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 4,
    title: "WordPress এ কাজ করার আগে কম্পিউটার সেটআপ!",
    image: "/images/courses/course4.png",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ দিন বাকি",
    description:
      "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 5,
    title: "ডিপ্লোমা ইন ইসলামিক স্টাডিজ",
    image: "/images/courses/course5.png",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ দিন বাকি",
    description:
      "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 6,
    title: "Full Stack MERN ডেভেলপার হতে যা যা জানা প্রয়োজন",
    image: "/images/courses/course6.png",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ দিন বাকি",
    description:
      "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 7,
    title: "Docker শিখে ডিপ্লয় ফ্রেন্ডলি অ্যাপ্লিকেশন বিল্ড করুন",
    image: "/images/courses/course7.png",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ দিন বাকি",
    description:
      "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 8,
    title: "IT সেক্টরে কাজ করতে প্রয়োজনীয় ENGLISH",
    image: "/images/courses/course8.png",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ দিন বাকি",
    description:
      "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
];

const CourseSection = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll ? courses : courses.slice(0, 8);

  return (
    <section className="py-14">
      <Container>
        {/* Section Title */}
        <h2 className="mb-10 flex items-center justify-center gap-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
          আমাদের কোর্সসমুহ
          <FaGraduationCap className="text-emerald-500" />
        </h2>

        {/* Category Tabs */}
        <div className="mb-12 px-2">
          <CustomSwiper
            slidesPerView={2}
            spaceBetween={16}
            showPrevArrow={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`group flex w-full items-center gap-3 whitespace-nowrap rounded-xl border px-5 py-5 transition-all duration-300 ${
                    activeCategory === category.id
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-300 bg-gray-100 text-gray-800 hover:border-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-white/10 text-emerald-400"
                        : "bg-gray-100 text-gray-500 group-hover:bg-white/10 group-hover:text-emerald-400"
                    }`}
                  >
                    <FaGraduationCap size={16} />
                  </span>

                  <span className="text-left">
                    <span className="block text-md font-semibold">
                      {category.title}
                    </span>

                    <span
                      className={`block text-xs transition-colors duration-300 ${
                        activeCategory === category.id
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300"
                      }`}
                    >
                      {category.count} টি কোর্স
                    </span>
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 gap-5 px-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleCourses.map((course) => (
            <article
              key={course.id}
              className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-gray-900 hover:shadow-lg"
            >
              {/* Course Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                />
              </div>

              {/* Course Meta */}
              <div className="flex items-center justify-between gap-2 border-b border-gray-100 px-1.5 py-2">
                <span className="flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600">
                  <FaLayerGroup size={12} />
                  {course.batch}
                </span>

                <span className="flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600">
                  <FaUserFriends size={12} />
                  {course.seat}
                </span>

                <span className="flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600">
                  <FaRegClock size={12} />
                  {course.duration}
                </span>
              </div>

              {/* Course Content */}
              <div className="flex flex-1 flex-col justify-between p-4">
                <h3 className="mb-4 text-lg font-bold leading-snug text-black">
                  {course.description}
                </h3>

                <button
                  type="button"
                  className={`flex items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-semibold transition-all duration-200 ${
                    course.highlight
                      ? "border-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer"
                      : "border-gray-200 bg-gray-100 text-gray-700 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white cursor-pointer"
                  }`}
                >
                  বিস্তারিত দেখি
                  <FaArrowRight size={12} className="text-xs transition-transform duration-300 group-hover:translate-x-1"/>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Show More / Less */}
        <div className="mt-8 flex justify-center">
          {!showAll ? (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-200 cursor-pointer"
            >
              আরো দেখুন
              <FaArrowRight size={12} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowAll(false)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-200 cursor-pointer"
            >
              কমিয়ে দেখুন
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CourseSection;