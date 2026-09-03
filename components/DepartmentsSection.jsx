// DepartmentsSection.jsx
import Image from "next/image";
import { FaUsers, FaClock, FaArrowRight } from "react-icons/fa";
import Container from "./ui/Container";

const departments = [
  {
    id: 1,
    title: "ইসলামী কিন্ডারগার্টেন",
    subtitle: "ক্লাস শুরু ১লা জানুয়ারি ২০২৫ থেকে",
    seats: "৫৬ সিট খালি আছে",
    daysLeft: "২৩ দিন বাকি",
    image: "/images/department/department1.png",
  },
  {
    id: 2,
    title: "নাজেরা বিভাগ",
    subtitle: "ক্লাস শুরু ১লা জানুয়ারি ২০২৫ থেকে",
    seats: "৫৬ সিট খালি আছে",
    daysLeft: "২৩ দিন বাকি",
    image: "/images/department/department2.png",
  },
  {
    id: 3,
    title: "হিফজুল কোরআন বিভাগ",
    subtitle: "ক্লাস শুরু ১লা জানুয়ারি ২০২৫ থেকে",
    seats: "৫৬ সিট খালি আছে",
    daysLeft: "২৩ দিন বাকি",
    image: "/images/department/department3.png",
  },
  {
    id: 4,
    title: "কিতাব বিভাগ",
    subtitle: "ক্লাস শুরু ১লা জানুয়ারি ২০২৫ থেকে",
    seats: "৫৬ সিট খালি আছে",
    daysLeft: "২৩ দিন বাকি",
    image: "/images/department/department4.png",
  },
  {
    id: 5,
    title: "ইসলামী কিন্ডারগার্টেন",
    subtitle: "ক্লাস শুরু ১লা জানুয়ারি ২০২৫ থেকে",
    seats: "৫৬ সিট খালি আছে",
    daysLeft: "২৩ দিন বাকি",
    image: "/images/department/department1.png",
  },
  {
    id: 6,
    title: "নাজেরা বিভাগ",
    subtitle: "ক্লাস শুরু ১লা জানুয়ারি ২০২৫ থেকে",
    seats: "৫৬ সিট খালি আছে",
    daysLeft: "২৩ দিন বাকি",
    image: "/images/department/department6.png",
  },
  {
    id: 7,
    title: "হিফজুল কোরআন বিভাগ",
    subtitle: "ক্লাস শুরু ১লা জানুয়ারি ২০২৫ থেকে",
    seats: "৫৬ সিট খালি আছে",
    daysLeft: "২৩ দিন বাকি",
    image: "/images/department/department3.png",
  },
  {
    id: 8,
    title: "কিতাব বিভাগ",
    subtitle: "ক্লাস শুরু ১লা জানুয়ারি ২০২৫ থেকে",
    seats: "৫৬ সিট খালি আছে",
    daysLeft: "২৩ দিন বাকি",
    image: "/images/department/department4.png",
  },
];

export default function DepartmentsSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="relative inline-block text-2xl md:text-3xl font-bold text-gray-800">
            আমাদের শাখা ও বিভাগসমূহ
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-24 h-1 bg-emerald-500 rounded-full" />
          </h2>

          <p className="mt-6 text-sm md:text-[17px] text-black font-medium leading-6">
            আমাদের মাদ্রাসা শিক্ষার্থীদের ইসলামী শিক্ষা ও নৈতিক মূল্যবোধ বিকাশের
            জন্য বিভিন্ন শাখা ও বিভাগ প্রতিষ্ঠা করেছে। প্রতিটি বিভাগ বিশেষভাবে
            পরিকল্পিত, যাতে শিক্ষার্থীরা তাদের পছন্দের ক্ষেত্রে গভীর জ্ঞান অর্জন
            করতে পারে।
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="group rounded-2xl border-2 border-gray-100 hover:border-emerald-500 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white"
            >
              {/* Department Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={dept.image}
                  alt={dept.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Card Body */}
              <div className="p-4">
                {/* Seats & Days Left */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-6 gap-2">
                  <span className="flex items-center gap-1.5 bg-gray-100 border border-gray-100 rounded-md px-2 py-1 text-black front-medium">
                    <FaUsers className="text-black shrink-0 text-[14px]" />
                    {dept.seats}
                  </span>

                  <span className="flex items-center gap-1.5 bg-gray-100 border border-gray-100 rounded-md px-2 py-1 text-black front-medium">
                    <FaClock className="text-black shrink-0 text-[14px]" />
                    {dept.daysLeft}
                  </span>
                </div>

                {/* Department Title */}
                <h4 className="font-semibold text-black text-[16px] lg:text-[20px] mb-1">
                  {dept.title}
                </h4>

                {/* Subtitle */}
                <p className="text-sm text-black mb-8">{dept.subtitle}</p>

                {/* Details Button */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 transition-all duration-300 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white"
                >
                  বিস্তারিত দেখি
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
          >
            আরো দেখুন
            <FaArrowRight className="text-xs transition-transform duration-200" />
          </button>
        </div>
      </Container>
    </section>
  );
}
