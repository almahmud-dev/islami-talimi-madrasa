import { FaArrowRight, FaGraduationCap, FaQuoteLeft } from "react-icons/fa";
import Container from "./ui/Container";

const alumni = [
  {
    id: 1,
    name: "ডা. ইব্রাহিম খান",
    role: "চিকিৎসক ও গবেষক",
    year: "২০১৫",
    image:
      "images/teachers/teachers1.png",
  },
  {
    id: 2,
    name: "লায়লা ফাতেমা",
    role: "ইসলামি গবেষক ও লেখক",
    year: "২০১৮",
    image:
      "images/teachers/teachers2.png",
  },
  {
    id: 3,
    name: "আহমেদ সুলতান",
    role: "ব্যবসায়িক নির্বাহী ও উদ্যোক্তা",
    year: "২০১২",
    image:
      "images/teachers/teachers3.png",
  },
  {
    id: 4,
    name: "নূর হাসান",
    role: "সিভিল ইঞ্জিনিয়ার ও সমাজকর্মী",
    year: "২০১৬",
    image:
      "images/teachers/teachers4.png",
  },
];

const AlumniCard = ({ person }) => (
  <article className="group relative h-[430px] overflow-hidden rounded-[2rem] border border-[#cfe5d8] bg-[#0b5037] shadow-[0_14px_30px_rgba(14,122,62,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_42px_rgba(14,122,62,0.2)]">
    <img
      src={person.image}
      alt={person.name}
      className="absolute inset-0 h-full w-full object-cover object-center grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#083c2b]/5 via-[#063d2d]/10 to-[#032d21]/95" />
    <div className="absolute left-5 top-5 rounded-full bg-[#f3b51b] px-4 py-2 text-[11px] font-bold tracking-[0.08em] text-[#173d2b] shadow-lg">
      {person.year} ব্যাচ
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[#f3b51b] backdrop-blur-sm">
        <FaGraduationCap size={17} />
      </div>
      <h3 className="text-2xl font-bold leading-tight text-white">
        {person.name}
      </h3>
      <p className="mt-2 text-sm font-medium leading-6 text-[#f8d878]">
        {person.role}
      </p>
    </div>
  </article>
);

const TeacherSection = () => (
  <section
    aria-labelledby="alumni-section-title"
    className="relative isolate overflow-hidden bg-[#fffdf9] py-16 sm:py-20 lg:py-24"
  >
    <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-[#e5f4e9] blur-3xl" />
    <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-[#fff1c9] blur-3xl" />

    <Container>
      <div className="mx-auto mb-11 flex max-w-3xl flex-col items-center text-center sm:mb-14">
        <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#0e7a3e] sm:text-base">
          প্রাক্তন শিক্ষার্থীদের ঐতিহ্য
        </p>

        <h2
          id="alumni-section-title"
          className="text-3xl font-bold leading-tight text-[#174c37] sm:text-4xl lg:text-5xl"
        >
          শ্রেণিকক্ষের বাইরেও সাফল্যের ছাপ
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5d6d65] sm:text-lg">
          Ichlahut Talim Cadet Madrasa Bangladesh-এর প্রাক্তন শিক্ষার্থীরা
          জ্ঞান, নৈতিকতা ও দায়িত্ববোধ নিয়ে বিভিন্ন ক্ষেত্রে সমাজে গুরুত্বপূর্ণ
          অবদান রেখে চলেছেন।
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {alumni.map((person) => (
          <AlumniCard key={person.id} person={person} />
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-[#dcebe2] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(14,122,62,0.06)] sm:flex-row sm:px-7">
        <div className="flex items-start gap-3">
          <FaQuoteLeft className="mt-1 shrink-0 text-[#d4a017]" />
          <p className="text-sm leading-6 text-[#53665b] sm:text-base">
            সফল প্রাক্তন শিক্ষার্থীদের এই সম্প্রদায়ে আপনিও যুক্ত হোন।
          </p>
        </div>
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0e7a3e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0a5c2e]"
        >
          প্রাক্তন শিক্ষার্থীদের দেখুন <FaArrowRight className="text-xs" />
        </button>
      </div>
    </Container>
  </section>
);

export default TeacherSection;
