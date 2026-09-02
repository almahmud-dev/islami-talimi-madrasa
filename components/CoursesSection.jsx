"use client";

import { useState } from "react";
import {
  FaGraduationCap,
  FaLayerGroup,
  FaUserFriends,
  FaRegClock,
  FaArrowRight,
} from "react-icons/fa";

import Container from "./ui/Container";
import CustomSwiper, { SwiperSlide } from "./ui/Swiper";

// ক্যাটাগরি ডেটা
const categories = [
  { id: 1, title: "ইসলামিক কোর্স", count: 10 },
  { id: 2, title: "ওয়েব ডিজাইন কোর্স", count: 10 },
  { id: 3, title: "ওয়েব ডিজাইন কোর্স", count: 10 },
  { id: 4, title: "ওয়েব ডিজাইন কোর্স", count: 10 },
  { id: 5, title: "ওয়েব ডিজাইন কোর্স", count: 10 },
];

// কোর্স ডেটা
const courses = [
  {
    id: 1,
    title: "১০,০০০ বার ব্যবহৃত ১১টি অবায়বাচক শব্দ",
    gradient: "from-rose-950 via-red-900 to-amber-800",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ মিন বাকি",
    description: "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 2,
    title: "লারাভেল মডেল ও ডাটা মাইগ্রেশন - Full Stack Web Development",
    gradient: "from-slate-900 via-indigo-950 to-slate-800",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ মিন বাকি",
    description: "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
    highlight: true,
  },
  {
    id: 3,
    title: "কোরআনে সবচেয়ে বেশি ব্যবহৃত ১০টি শব্দ",
    gradient: "from-emerald-950 via-green-900 to-emerald-800",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ মিন বাকি",
    description: "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 4,
    title: "WordPress এ কাজ করার আগে কম্পিউটার সেটআপ!",
    gradient: "from-orange-900 via-amber-800 to-yellow-700",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ মিন বাকি",
    description: "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 5,
    title: "ডিপ্লোমা ইন ইসলামিক স্টাডিজ",
    gradient: "from-cyan-950 via-teal-900 to-slate-800",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ মিন বাকি",
    description: "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 6,
    title: "Full Stack MERN ডেভেলপার হতে যা যা জানা প্রয়োজন",
    gradient: "from-blue-950 via-sky-900 to-blue-800",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ মিন বাকি",
    description: "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 7,
    title: "Docker শিখে ডিপ্লয় ফ্রেন্ডলি অ্যাপ্লিকেশন বিল্ড করুন",
    gradient: "from-sky-900 via-blue-950 to-slate-900",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ মিন বাকি",
    description: "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
  {
    id: 8,
    title: "IT সেক্টরে কাজ করতে প্রয়োজনীয় ENGLISH",
    gradient: "from-purple-950 via-fuchsia-900 to-purple-800",
    batch: "ব্যাচ ১",
    seat: "৪৬ সিট বাকি",
    duration: "১০ মিন বাকি",
    description: "বাংলায় কোরআন শিখুন, নির্ভুল ভাবে এবং সবচেয়ে সহজ উপায়ে",
  },
];

const CourseSection = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll ? courses : courses.slice(0, 8);

  return (
    <section className="py-14">
      <Container>
        {/* সেকশন টাইটেল */}
        <h2 className="mb-10 flex items-center justify-center gap-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
          আমাদের কোর্সসমুহ
          <FaGraduationCap className="text-emerald-500" />
        </h2>

        {/* ক্যাটাগরি ট্যাব */}
        <div className="mb-12 px-2">
          <CustomSwiper slidesPerView="auto" spaceBetween={16}>
            {categories.map((category) => (
              <SwiperSlide key={category.id} style={{ width: "auto" }}>
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 whitespace-nowrap rounded-xl border px-5 py-3 transition-colors duration-200 ${
                    activeCategory === category.id
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-200 bg-white text-gray-800 hover:border-gray-300"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      activeCategory === category.id
                        ? "bg-white/10 text-emerald-400"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <FaGraduationCap size={16} />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold">
                      {category.title}
                    </span>
                    <span
                      className={`block text-xs ${
                        activeCategory === category.id
                          ? "text-gray-300"
                          : "text-gray-400"
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

        {/* কোর্স কার্ড */}
        <div className="px-2">
          <CustomSwiper
            spaceBetween={20}
            slidesPerView={1}
            grid={{ rows: 2, fill: "row" }}
            breakpoints={{
              640: { slidesPerView: 2, grid: { rows: 2, fill: "row" } },
              1024: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
              1280: { slidesPerView: 4, grid: { rows: 2, fill: "row" } },
            }}
          >
            {visibleCourses.map((course) => (
              <SwiperSlide
                key={course.id}
                style={{ height: "auto" }}
                className="pb-1"
              >
                <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  {/* ব্যানার */}
                  <div
                    className={`relative flex h-40 items-center justify-center bg-gradient-to-br p-4 ${course.gradient}`}
                  >
                    <p className="text-center text-sm font-bold leading-snug text-white line-clamp-3">
                      {course.title}
                    </p>
                  </div>

                  {/* ইনফো রো */}
                  <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaLayerGroup size={12} />
                      {course.batch}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUserFriends size={12} />
                      {course.seat}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegClock size={12} />
                      {course.duration}
                    </span>
                  </div>

                  {/* বিবরণ + বাটন */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <p className="mb-4 text-sm text-gray-600">
                      {course.description}
                    </p>

                    <button
                      className={`flex items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-semibold transition-all duration-200 ${
                        course.highlight
                          ? "border-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600"
                          : "border-gray-200 bg-gray-100 text-gray-700 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                      }`}
                    >
                      বিস্তারিত দেখি
                      <FaArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>

        {/* আরো দেখুন / কমিয়ে দেখুন */}
        <div className="mt-8 flex flex-col items-center gap-3">
          {!showAll && courses.length > 8 && (
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
            >
              আরো দেখুন
              <FaArrowRight size={12} />
            </button>
          )}
          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
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