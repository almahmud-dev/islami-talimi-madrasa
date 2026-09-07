import Image from "next/image";
import Container from "./ui/Container";
import CardBanner from "../public/images/whychoos/cardbanner.png";

const reasons = [
  {
    icon: "/images/whychoos/whychoos1.png",
    title: "বিশুদ্ধ ইসলামী শিক্ষার প্রতিশ্রুতি:",
    description: "আমরা ছাত্রদেরকে কুরআন, হাদিস এবং ইসলামী আইন সম্পর্কে বিশুদ্ধ জ্ঞান প্রদান করি, যা তাদের আখিরাত ও দুনিয়া উভয়ের জন্য উপকারী।",
  },
  {
    icon: "/images/whychoos/whychoos2.png",
    title: "আধুনিক ও ইসলামী শিক্ষার সমন্বয়:",
    description: "আমরা ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষার সুযোগ প্রদান করি, যা ছাত্রদের যুগের সাথে মানানসই দক্ষতা অর্জনে সহায়তা করে।",
  },
  {
    icon: "/images/whychoos/whychoos3.png",
    title: "প্রশিক্ষিত ও অভিজ্ঞ শিক্ষকবৃন্দ:",
    description: "আমাদের শিক্ষকরা অভিজ্ঞ, এবং তারা ছাত্রদের মানসিক ও আধ্যাত্মিক উন্নতির প্রতি মনোযোগ দেন।",
  },
  {
    icon: "/images/whychoos/whychoos4.png",
    title: "মানসম্মত শিক্ষার পরিবেশ:",
    description: "একটি মনোরম, নিরাপদ ও শিক্ষাবান্ধব পরিবেশে ছাত্রদের গড়ে তোলার জন্য আমরা বদ্ধপরিকর।",
  },
  {
    icon: "/images/whychoos/whychoos5.png",
    title: "প্রয়োগিক-সমৃদ্ধ শিক্ষা ব্যবস্থা:",
    description: "আমরা ছাত্রদেরকে কুরআন, হাদিস এবং ইসলামী আইন শাস্ত্রের বিশুদ্ধ জ্ঞান প্রদান করি, যা তাদের আখিরাত ও দুনিয়া উভয়ের জন্য উপকারী।",
  },
  {
    icon: "/images/whychoos/whychoos6.png",
    title: "আধুনিক ও ইসলামী শিক্ষার সমন্বয়:",
    description: "আমরা ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষার সুযোগ প্রদান করি, যা ছাত্রদের যুগের সাথে মানানসই দক্ষতা অর্জনে সহায়তা করে।",
  },
  {
    icon: "/images/whychoos/whychoos7.png",
    title: "প্রশিক্ষিত ও অভিজ্ঞ শিক্ষকবৃন্দ:",
    description: "আমাদের শিক্ষকরা অভিজ্ঞ, এবং তারা ছাত্রদের মানসিক ও আধ্যাত্মিক উন্নতির প্রতি মনোযোগ দেন।",
  },
  {
    icon: "/images/whychoos/whychoos8.png",
    title: "মানসম্মত শিক্ষার পরিবেশ:",
    description: "একটি মনোরম, নিরাপদ ও শিক্ষাবান্ধব পরিবেশে ছাত্রদের গড়ে তোলার জন্য আমরা বদ্ধপরিকর।",
  },
  {
    icon: "/images/whychoos/whychoos9.png",
    title: "শরীরচর্চা ও খেলাধুলা",
    description: "আমরা ছাত্রদেরকে কুরআন, হাদিস এবং ইসলামী আইন শাস্ত্রের বিশুদ্ধ জ্ঞান প্রদান করি, যা তাদের আখিরাত ও দুনিয়া উভয়ের জন্য উপকারী।",
  },
  {
    icon: "/images/whychoos/whychoos10.png",
    title: "শিক্ষার্থীদের শারীরিক ও মানসিক স্বাস্থ্য",
    description: "আমরা ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষার সুযোগ প্রদান করি, যা ছাত্রদের যুগের সাথে মানানসই দক্ষতা অর্জনে সহায়তা করে।",
  },
  {
    icon: "/images/whychoos/whychoos11.png",
    title: "শিক্ষার্থীদের সুরক্ষায় সার্বক্ষণিক নজরদারি",
    description: "আমাদের শিক্ষকরা অভিজ্ঞ, এবং তারা ছাত্রদের মানসিক ও আধ্যাত্মিক উন্নতির প্রতি মনোযোগ দেন।",
  },
  {
    icon: "/images/whychoos/whychoos12.png",
    title: "মেধা বিকাশে প্রশিক্ষণ",
    description: "আমরা ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষার সুযোগ প্রদান করি, যা ছাত্রদের যুগের সাথে মানানসই দক্ষতা অর্জনে সহায়তা করে।",
  },
];

const WhyChooseUs = () => (
  <section aria-labelledby="why-choose-us-title" className="bg-[#f8fbf9] py-14 sm:py-20 lg:py-24">
    <Container>
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#0e7a3e] sm:text-base">কেন আমাদের মাদ্রাসা বেছে নেবেন</p>
        <h2 id="why-choose-us-title" className="text-3xl font-bold leading-tight text-[#174c37] sm:text-4xl lg:text-5xl">
          আপনার সন্তানের সুন্দর ভবিষ্যতের জন্য বিশ্বস্ত একটি ঠিকানা
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5d6d65] sm:text-lg">
          দ্বীনি শিক্ষা, আধুনিক জ্ঞান ও নৈতিক চরিত্র গঠনের সমন্বয়ে আমরা তৈরি করি একটি নিরাপদ ও আদর্শ শিক্ষার পরিবেশ। আমাদের লক্ষ্য শুধু ভালো ফলাফল নয়, বরং আপনার সন্তানকে জ্ঞানী, নৈতিক ও দায়িত্বশীল মানুষ হিসেবে গড়ে তোলা।
        </p>
      </div>

      <div className="grid grid-cols-1  gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {reasons.map((reason) => (
          <article key={reason.icon} className="group relative isolate min-h-[260px] overflow-hidden rounded-3xl border border-[#dcebe2] bg-white p-5 shadow-[0_8px_24px_rgba(14,122,62,0.06)] transition-all duration-500 ease-out will-change-transform hover:-translate-y-2 hover:scale-[1.015] hover:border-[#b5d9c2] hover:shadow-[0_18px_38px_rgba(14,122,62,0.15)] sm:p-6">
            <Image src={CardBanner} alt="" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="pointer-events-none z-0 object-cover object-center opacity-[0.8]  " />
            <div className="relative z-10 grid grid-cols-[72px_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[88px_minmax(0,1fr)] sm:gap-5 h-full items-center">
              <div className="flex h-16 w-[72px] shrink-0 items-start justify-center sm:h-20 sm:w-[88px]">
                <Image src={reason.icon} alt="" width={64} height={64} sizes="64px" className="h-16 w-16 rounded-full object-cover" />
              </div>
              <div className="min-w-0">
                <h3 className="mb-2 text-lg font-bold leading-7 text-[#174c37] transition-colors duration-300 group-hover:text-[#0e7a3e] sm:text-xl sm:leading-8">{reason.title}</h3>
                <p className="text-sm leading-6 text-[#63746b] sm:text-base sm:leading-7">{reason.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

export default WhyChooseUs;
