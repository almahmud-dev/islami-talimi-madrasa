import Image from "next/image";
import {
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaLaptop,
  FaMosque,
  FaShieldAlt,
} from "react-icons/fa";
import Container from "./ui/Container";

const facilities = [
  {
    title: "সমৃদ্ধ গ্রন্থাগার",
    description:
      "ইসলামি জ্ঞান, সাধারণ শিক্ষা ও গবেষণামূলক বইয়ের সমৃদ্ধ সংগ্রহ।",
    image:
      "/images/campus/library.png",
    icon: FaBookOpen,
  },
  {
    title: "আধুনিক শ্রেণিকক্ষ",
    description: "আলো-বাতাসে ভরা, পরিচ্ছন্ন ও মনোযোগী পড়াশোনার উপযোগী পরিবেশ।",
    image:
      "/images/campus/class.png",
    icon: FaShieldAlt,
  },
  {
    title: "ডিজিটাল শিক্ষা ল্যাব",
    description:
      "প্রযুক্তিনির্ভর শেখার মাধ্যমে শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করা।",
    image:
      "/images/campus/lab.png",
    icon: FaLaptop,
  },
  {
    title: "কেন্দ্রীয় মসজিদ",
    description:
      "নামাজ, কুরআন শিক্ষা ও নৈতিক বিকাশের জন্য শান্তিপূর্ণ আধ্যাত্মিক পরিবেশ।",
    image:
      "/images/campus/mosjid.png",
    icon: FaMosque,
  },
];

const highlights = [
  "নিরাপদ, পরিচ্ছন্ন ও শৃঙ্খলাপূর্ণ ক্যাম্পাস",
  "ইসলামি মূল্যবোধের সঙ্গে আধুনিক শিক্ষার সমন্বয়",
  "শিক্ষার্থীবান্ধব সহশিক্ষা ও নেতৃত্ব উন্নয়ন কার্যক্রম",
  "অভিভাবকদের সঙ্গে নিয়মিত যোগাযোগ ও অগ্রগতি মূল্যায়ন",
];

const OurCampusSection = () => (
  <section
    aria-labelledby="campus-section-title"
    className="relative isolate overflow-hidden bg-[#f8fbf9] py-16 sm:py-20 lg:py-24"
  >
    <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#dff3e6]/70 blur-3xl" />
    <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#f5e8c4]/60 blur-3xl" />

    <Container>
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#0e7a3e] sm:text-base">
          আমাদের ক্যাম্পাস
        </p>
        <h2
          id="campus-section-title"
          className="text-3xl font-bold leading-tight text-[#174c37] sm:text-4xl lg:text-5xl"
        >
          সুন্দর পরিবেশে জ্ঞান, আদর্শ ও আত্মবিশ্বাসের বিকাশ
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5d6d65] sm:text-lg">
          ইচলাহুত তালিম ক্যাডেট মাদ্রাসা বাংলাদেশে প্রতিটি স্থান শিক্ষার্থীদের
          শেখা, বেড়ে ওঠা ও নিজেদের সেরা রূপটি আবিষ্কার করার জন্য যত্নসহকারে
          তৈরি।
        </p>
      </div>

      <div className="mb-12 grid items-center gap-8 lg:mb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[#cfe5d8] bg-[#0b5037] shadow-[0_18px_40px_rgba(14,122,62,0.14)] sm:min-h-[470px]">
          <Image
            src="/images/campus/campus.png"
            alt="মাদ্রাসার শান্তিপূর্ণ শিক্ষার পরিবেশ"
            fill
            className="object-cover transition duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#063d2d]/95 via-[#063d2d]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="text-sm font-semibold tracking-[0.14em] text-[#f8d878]">
              শেখার জন্য একটি নিরাপদ ঠিকানা
            </p>
            <p className="mt-2 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
              যেখানে প্রতিদিনের শিক্ষা ভবিষ্যতের পথ তৈরি করে
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold tracking-[0.12em] text-[#0e7a3e]">
            কেন আমাদের ক্যাম্পাস আলাদা
          </p>
          <h3 className="text-2xl font-bold leading-tight text-[#174c37] sm:text-3xl">
            আপনার সন্তানের নিরাপদ ও সুন্দর বেড়ে ওঠার জন্য পরিকল্পিত
          </h3>
          <p className="mt-5 text-base leading-8 text-[#63746b]">
            একজন নতুন শিক্ষার্থী যেন প্রথম দিন থেকেই আপন মনে করতে পারে—আমাদের
            ক্যাম্পাস সেই লক্ষ্যেই সাজানো। পাঠ্যজ্ঞান, আমল, শৃঙ্খলা, সৃজনশীলতা ও
            নেতৃত্ব—সবকিছুর সমন্বিত বিকাশে আমরা গুরুত্ব দিই।
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-xl border border-[#dcebe2] bg-white p-4 shadow-[0_6px_18px_rgba(14,122,62,0.04)]"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-[#0e7a3e]" />
                <span className="text-sm font-medium leading-6 text-[#53665b]">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {facilities.map(({ title, description, image, icon: Icon }) => (
          <article
            key={title}
            className="group overflow-hidden rounded-3xl border border-[#dcebe2] bg-white shadow-[0_8px_24px_rgba(14,122,62,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#b5d9c2] hover:shadow-[0_18px_38px_rgba(14,122,62,0.15)]"
          >
            <div className="relative h-48 overflow-hidden bg-[#e5f4e9]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063d2d]/55 to-transparent" />
              <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0e7a3e] shadow-lg">
                <Icon />
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#174c37]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#63746b]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-[#0e7a3e] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0a5c2e]"
        >
          ক্যাম্পাস সম্পর্কে আরও জানুন <FaArrowRight className="text-xs" />
        </button>
      </div>
    </Container>
  </section>
);

export default OurCampusSection;
