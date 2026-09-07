"use client";

import { FaStar } from "react-icons/fa";
import Container from "./ui/Container";

const reviews = [
  {
    id: 1,
    name: "মো. আব্দুর রহমান",
    relation: "অভিভাবক",
    review:
      "আমার সন্তান এই মাদরাসায় ভর্তি হওয়ার পর থেকে দ্বীনি ও দুনিয়াবি উভয় শিক্ষায় দারুণ উন্নতি করেছে। শিক্ষকদের আন্তরিকতা সত্যিই প্রশংসনীয়।",
  },
  {
    id: 2,
    name: "মোছা. রোকসানা আক্তার",
    relation: "অভিভাবক",
    review:
      "এখানকার পরিবেশ খুবই শৃঙ্খলাবদ্ধ এবং শিক্ষকরা প্রতিটি শিক্ষার্থীর প্রতি আলাদাভাবে যত্নশীল। সন্তানের জন্য এটি একটি নিরাপদ জায়গা।",
  },
  {
    id: 3,
    name: "মো. আব্দুল্লাহ",
    relation: "শিক্ষার্থী",
    review:
      "হিফজ বিভাগে পড়াশোনা করে আমি অনেক কিছু শিখেছি। শিক্ষকদের সুন্দর দিকনির্দেশনা আমাকে নিয়মিত পড়াশোনায় আগ্রহী করেছে।",
  },
  {
    id: 4,
    name: "সুমাইয়া ইসলাম",
    relation: "অভিভাবক",
    review:
      "আমার মেয়ের কুরআন পড়ার ভয় কেটে গেছে। এখন সে নিয়মিত নামাজ পড়ে এবং আগ্রহ নিয়ে পড়াশোনা করে।",
  },
  {
    id: 5,
    name: "মো. সাইফুল ইসলাম",
    relation: "অভিভাবক",
    review:
      "শিক্ষকদের নিয়মিত পরামর্শ এবং অভিভাবকদের সঙ্গে যোগাযোগের কারণে সন্তানের পড়াশোনার অগ্রগতি সহজেই বুঝতে পারি।",
  },
  {
    id: 6,
    name: "মো. মাহমুদুল হাসান",
    relation: "শিক্ষার্থী",
    review:
      "আরবি ভাষার বিষয়গুলো এখানে খুব সহজভাবে শেখানো হয়। অল্প সময়েই কুরআনের অনেক শব্দের অর্থ বুঝতে শিখেছি।",
  },
  {
    id: 7,
    name: "ফারজানা ইয়াসমিন",
    relation: "অভিভাবক",
    review:
      "মাদরাসার পরিচ্ছন্ন পরিবেশ ও সুন্দর শৃঙ্খলা আমাদের পরিবারের কাছে খুব ভালো লেগেছে। সন্তানের জন্য এটি আদর্শ একটি প্রতিষ্ঠান।",
  },
  {
    id: 8,
    name: "মো. নাজমুল হক",
    relation: "অভিভাবক",
    review:
      "দ্বীনি শিক্ষার পাশাপাশি কম্পিউটার ও সাধারণ জ্ঞান শেখানোর ব্যবস্থা সন্তানকে ভবিষ্যতের জন্য আরও প্রস্তুত করছে।",
  },
  {
    id: 9,
    name: "আয়েশা সিদ্দিকা",
    relation: "শিক্ষার্থী",
    review:
      "শিক্ষকরা ভুল ধরিয়ে দেওয়ার সময়ও খুব আন্তরিক থাকেন। ফলে পড়াশোনায় আমার আগ্রহ এবং আত্মবিশ্বাস দুটিই বেড়েছে।",
  },
];

const ReviewCard = ({ item }) => (
  <article className="group relative flex min-h-[218px] h-full flex-col overflow-hidden rounded-2xl border border-[#dcebe2] bg-white p-5 shadow-[0_8px_24px_rgba(14,122,62,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#a9d1b7] hover:shadow-[0_16px_32px_rgba(14,122,62,0.13)] sm:p-6">
    <span className="absolute right-[8px] top-[8px] z-20 rounded-full bg-[#0e7a3e] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
      Verified
    </span>
    <div className="relative z-10 mb-4 flex items-center justify-between">
      <div
        className="flex gap-1 text-[#d4a017]"
        aria-label="পাঁচ তারকার মূল্যায়ন"
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar key={star} size={12} />
        ))}
      </div>
    </div>
    <p className="relative z-10 flex-1 text-[15px] leading-7 text-[#53665b]">
      {item.review}
    </p>
    <div className="relative z-10 mt-5 border-t border-[#e7f0ea] pt-3">
      <p className="font-bold text-[#174c37]">{item.name}</p>
      <p className="mt-1 text-sm text-[#789085]">{item.relation}</p>
    </div>
  </article>
);

const VerticalReviews = ({ items, reverse = false }) => {
  const loopItems = [...items, ...items];

  return (
    <div className="review-column h-[680px] overflow-hidden">
      <div className={`review-track ${reverse ? "review-track--reverse" : ""}`}>
        {loopItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="mb-4 last:mb-0">
            <ReviewCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const HorizontalReviews = ({ items }) => {
  const loopItems = [...items, ...items];

  return (
    <div className="review-column overflow-hidden px-1 pb-2">
      <div className="review-track review-track--horizontal flex w-max">
        {loopItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="mr-4 w-[92.5vw] max-w-[420px] flex-none last:mr-0"
          >
            <ReviewCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const StorySection = () => (
  <section
    aria-labelledby="story-section-title"
    className="relative isolate overflow-hidden bg-[#f8fbf9] py-14 sm:py-20 lg:py-24"
  >
    <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-72 w-72 rounded-full bg-[#dff3e6]/70 blur-3xl" />
    <div className="pointer-events-none absolute -right-32 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-[#f5e8c4]/50 blur-3xl" />

    <Container>
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#0e7a3e] sm:text-base">
          সাফল্যের পথচলা
        </p>
        <h2
          id="story-section-title"
          className="text-3xl font-bold leading-tight text-[#174c37] sm:text-4xl lg:text-[42px]"
        >
          আমাদের শিক্ষার্থীদের অর্জন ও অনুপ্রেরণার গল্প
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5d6d65] sm:text-lg">
          দ্বীনি শিক্ষা, নৈতিক মূল্যবোধ ও একাডেমিক উৎকর্ষের সমন্বয়ে আমাদের
          শিক্ষার্থীরা যেভাবে এগিয়ে যাচ্ছে, সেই সাফল্যের গল্পগুলোই আমাদের পথচলার
          প্রেরণা।
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 hidden h-24 bg-gradient-to-b from-[#f8fbf9] via-[#f8fbf9]/80 to-transparent md:block" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-24 bg-gradient-to-t from-[#f8fbf9] via-[#f8fbf9]/80 to-transparent md:block" />

        <div className="hidden grid-cols-3 gap-5 md:grid lg:gap-7">
          <VerticalReviews items={reviews.slice(0, 3)} />
          <VerticalReviews items={reviews.slice(3, 6)} reverse />
          <VerticalReviews items={reviews.slice(6, 9)} />
        </div>

        <div className="md:hidden">
          <HorizontalReviews items={reviews} />
        </div>
      </div>
    </Container>
  </section>
);

export default StorySection;
