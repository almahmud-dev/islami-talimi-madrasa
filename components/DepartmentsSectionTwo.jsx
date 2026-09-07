import Image from "next/image";
import {
  FaArrowRight,
  FaBookOpen,
  FaGraduationCap,
  FaMosque,
} from "react-icons/fa";
import Container from "./ui/Container";

const departments = [
  {
    id: 1,
    title: "হিফজ ও কুরআন শিক্ষা",
    description:
      "তাজবিদ, মাখরাজ ও সঠিক উচ্চারণের মাধ্যমে কুরআন মুখস্থ ও বোঝার জন্য সুপরিকল্পিত শিক্ষা।",
    image:
      "/images/departments/departments1.png",
    icon: FaBookOpen,
    number: "০১",
  },
  {
    id: 2,
    title: "ইসলামি শিক্ষা",
    description:
      "ফিকহ, হাদিস, তাফসির ও আরবি ভাষার সমন্বিত পাঠক্রমে জ্ঞান, আমল ও চরিত্র গঠনের সুযোগ।",
    image:
      "/images/departments/departments2.png",
    icon: FaMosque,
    number: "০২",
  },
  {
    id: 3,
    title: "সাধারণ শিক্ষা",
    description:
      "ইসলামি মূল্যবোধের পাশাপাশি আধুনিক বিষয়ভিত্তিক শিক্ষায় ভবিষ্যতের জন্য আত্মবিশ্বাসী করে তোলা।",
    image:
      "/images/departments/departments3.png",
    icon: FaGraduationCap,
    number: "০৩",
  },
  {
    id: 4,
    title: "আরবি ভাষা শিক্ষা",
    description:
      "কথোপকথন, ব্যাকরণ ও পাঠাভ্যাসের মাধ্যমে আরবি ভাষা শেখার সহজ ও কার্যকর পদ্ধতি।",
    image:
      "/images/departments/departments4.png",
    icon: FaBookOpen,
    number: "০৪",
  },
  {
    id: 5,
    title: "কিতাব বিভাগ",
    description:
      "ফিকহ, হাদিস, তাফসির ও ইসলামি জ্ঞানের গুরুত্বপূর্ণ বিষয়গুলো গভীরভাবে শেখার সুযোগ।",
    image:
      "/images/departments/departments5.png",
    icon: FaMosque,
    number: "০৫",
  },
  {
    id: 6,
    title: "ক্যাডেট প্রশিক্ষণ",
    description:
      "শৃঙ্খলা, নেতৃত্ব, আত্মবিশ্বাস ও দায়িত্ববোধ গঠনের জন্য নিয়মিত বিশেষ প্রশিক্ষণ।",
    image:
      "/images/departments/departments6.png",
    icon: FaGraduationCap,
    number: "০৬",
  },
  {
    id: 7,
    title: "নৈতিকতা ও আদব শিক্ষা",
    description:
      "সুন্দর আচরণ, মানবিকতা, শিষ্টাচার ও দায়িত্বশীল জীবনযাপনের মূল্যবোধ গড়ে তোলা।",
    image:
      "/images/departments/departments7.png",
    icon: FaMosque,
    number: "০৭",
  },
  {
    id: 8,
    title: "কম্পিউটার ও আইসিটি",
    description:
      "ডিজিটাল দক্ষতা, প্রযুক্তি ব্যবহার ও ভবিষ্যৎ কর্মজীবনের প্রয়োজনীয় ভিত্তি তৈরি করা।",
    image:
      "/images/departments/departments8.png",
    icon: FaGraduationCap,
    number: "০৮",
  },
  {
    id: 9,
    title: "সহশিক্ষা ও সৃজনশীলতা",
    description:
      "খেলাধুলা, বক্তৃতা, বিতর্ক ও সৃজনশীল কার্যক্রমের মাধ্যমে আত্মবিশ্বাস ও প্রতিভার বিকাশ।",
    image:
      "/images/departments/departments9.png",
    icon: FaBookOpen,
    number: "০৯",
  },
];

const DepartmentCard = ({ department }) => {
  const Icon = department.icon;

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-[#dcebe2] bg-white shadow-[0_10px_28px_rgba(14,122,62,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#a9d1b7] hover:shadow-[0_22px_44px_rgba(14,122,62,0.16)]">
      <div className="relative h-64 overflow-hidden bg-[#e5f4e9]">
        <Image
          src={department.image}
          alt={department.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#063d2d]/90 via-[#063d2d]/15 to-transparent" />
        <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f3b51b] text-sm font-bold text-[#174c37] shadow-lg">
          {department.number}
        </span>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
          <h3 className="text-2xl font-bold leading-tight text-white">
            {department.title}
          </h3>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-[#f8d878] backdrop-blur-sm">
            <Icon />
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="min-h-[84px] text-[15px] leading-7 text-[#63746b]">
          {department.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-[#e7f0ea] pt-4">
          <span className="text-xs font-semibold tracking-wide text-[#789085]">
            সুশৃঙ্খল পাঠক্রম
          </span>
          <button
            type="button"
            aria-label={`${department.title} সম্পর্কে জানুন`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0e7a3e] transition group-hover:text-[#0a5c2e]"
          >
            বিস্তারিত{" "}
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};

const DepartmentsSectionTwo = () => (
  <section
    aria-labelledby="departments-two-title"
    className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
  >
    <div className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#e5f4e9]/70 blur-3xl" />
    <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#fff1c9]/60 blur-3xl" />

    <Container>
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
        <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#0e7a3e] sm:text-base">
          আমাদের বিভাগসমূহ
        </p>
        <h2
          id="departments-two-title"
          className="text-3xl font-bold leading-tight text-[#174c37] sm:text-4xl lg:text-5xl"
        >
          বিশ্বমানের একাডেমিক উৎকর্ষ
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5d6d65] sm:text-lg">
          মন, আত্মা ও জ্ঞানের সামগ্রিক বিকাশের জন্য সাজানো আমাদের বিভাগগুলো
          প্রতিটি শিক্ষার্থীকে তার সম্ভাবনার সর্বোচ্চ পর্যায়ে পৌঁছাতে সহায়তা
          করে।
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {departments.map((department) => (
          <DepartmentCard key={department.id} department={department} />
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-[#dcebe2] bg-[#f8fbf9] px-6 py-5 text-center sm:flex-row sm:text-left sm:px-8">
        <div>
          <p className="font-bold text-[#174c37]">সঠিক শিক্ষার পথ বেছে নিন</p>
          <p className="mt-1 text-sm leading-6 text-[#63746b]">
            আপনার সন্তানের জন্য উপযুক্ত বিভাগ সম্পর্কে জানতে আমাদের সঙ্গে
            যোগাযোগ করুন।
          </p>
        </div>
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0e7a3e] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0a5c2e]"
        >
          ভর্তি সম্পর্কে জানুন <FaArrowRight className="text-xs" />
        </button>
      </div>
    </Container>
  </section>
);

export default DepartmentsSectionTwo;
