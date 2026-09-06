import Image from "next/image";
import Container from "./ui/Container";
import lantern from "../public/images/intro/3d_lantern.jpg";
import { FaMosque } from "react-icons/fa";

const skillBadges = [
  "ISLAMIC KNOWLEDGE",
  "ACADEMIC KNOWLEDGE",
  "LANGUAGES",
  "IT SKILLS",
  "SOFT SKILLS",
  "BUSINESS SKILLS",
];

const learningModes = ["অনলাইন শিক্ষা", "অফলাইন শিক্ষা", "দ্বীনি প্রশিক্ষণ"];

export default function IntroSection() {
  return (
    <section>
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: lantern illustration - mobile e chotto size, lg e boro */}
        <div className="flex justify-center lg:w-1/3 lg:justify-start">
          <Image
            src={lantern}
            alt="ইসলামিক লণ্ঠন ইলাস্ট্রেশন"
            className="h-auto w-44 sm:w-56 md:w-64 lg:w-full lg:max-w-md"
          />
        </div>

        {/* Right: text content */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold text-brand-green sm:text-3xl">
            ইছলাহ তালিম ক্যাডেট মাদ্রাসা
          </h2>

          <hr className="mt-3" />

          <p className="mt-4 leading-relaxed text-gray-600">
            আমাদের মাদ্রাসা বাংলাদেশের একটি আধুনিক ইসলামিক শিক্ষা প্রতিষ্ঠান,
            যেখানে ছাত্রদের বহির্মুখী ও আন্তর্জাতিক শিক্ষার সমন্বিত প্রতিফলন
            ঘটানো হয়। আমাদের মাদ্রাসা কুরআন, হাদিস, ফিকাহ ও দ্বীনি শিক্ষার
            পাশাপাশি বিজ্ঞান, গণিত, ইংরেজি ও অন্যান্য সাধারণ শিক্ষাক্রমেও
            উপযুক্ত গুরুত্ব দিয়ে থাকে, যাতে শিক্ষার্থীরা ইসলামি মূল্যবোধ ও
            আধুনিক শিক্ষা একসাথে গ্রহণ করতে পারে।
          </p>

          <p className="mt-3 leading-relaxed text-gray-600">
            আমাদের মাদ্রাসা অনলাইন ও অফলাইন উভয় মাধ্যমে ক্লাস পরিচালনা করে
            থাকে, যাতে সকল শ্রেণির শিক্ষার্থীরা প্রয়োজনীয় উত্তরাধিকার ও
            দক্ষতাবিহীন শ্রম শক্তি হিসেবে গড়ে তোলার সুযোগ নিতে পারে।
          </p>

          {/* Skill badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {skillBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-md bg-gray-900 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-white"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Learning modes */}
          <div className="mt-6 flex justify-between w-full gap-2 sm:gap-6">
            {learningModes.map((mode) => (
              <div key={mode} className="flex items-center gap-2">
                <FaMosque className="text-brand-green" size={18} />
                <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-700">
                  {mode}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
