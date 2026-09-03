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

const learningModes = [
  "অনলাইন শিক্ষা",
  "অফলাইন শিক্ষা",
  "দ্বীনি প্রশিক্ষণ",
];

export default function IntroSection() {
  return (
    <section className="">
      <Container className="grid items-center gap-16 lg:grid-cols-3">
        {/* Left: lanterns illustration */}
        <div className="order-2 hidden lg:flex justify-center lg:order-1 ">
          <Image
            src={lantern}
            alt="ইসলামিক লণ্ঠন ইলাস্ট্রেশন"
            width={480}
            height={360}
            className="w-full max-w-md"
          />
        </div>

        {/* Right: text content */}
        <div className="order-1 lg:order-2 col-span-2 py-14 sm:py-20">
          <h2 className="text-2xl font-bold text-brand-green sm:text-3xl">
            ইছলাহ তালিম ক্যাডেট মাদ্রাসা
          </h2>

          <hr />

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
                className=" bg-gray-900 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Learning modes */}
          <div className="mt-6 flex flex-wrap gap-6">
            {learningModes.map((mode) => (
              <div key={mode} className="flex items-center gap-2">
                <FaMosque className="text-brand-green" size={18} />
                <span className="text-sm font-medium text-gray-700">
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