import Image from "next/image";
import Container from "./ui/Container";
const reasons = [
  {
    icon: "/images/whychoos/whychoos1.png",
    title: "বিশুদ্ধ ইসলামী শিক্ষার প্রতিশ্রুতি:",
    description:
      "আমরা ছাত্রদেরকে কুরআন, হাদিস এবং ইসলামী আইন সম্পর্কে বিশুদ্ধ জ্ঞান প্রদান করি, যা তাদের আখিরাত ও দুনিয়া উভয়ের জন্য উপকারী।",
  },
  {
    icon: "/images/whychoos/whychoos2.png",
    title: "আধুনিক ও ইসলামী শিক্ষার সমন্বয়:",
    description:
      "আমরা ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষার সুযোগ প্রদান করি, যা ছাত্রদের যুগের সাথে মানানসই দক্ষতা অর্জনে সহায়তা করে।",
  },
  {
    icon: "/images/whychoos/whychoos3.png",
    title: "প্রশিক্ষিত ও অভিজ্ঞ শিক্ষকবৃন্দ:",
    description:
      "আমাদের শিক্ষকরা অভিজ্ঞ, এবং তারা ছাত্রদের মানসিক ও আধ্যাত্মিক উন্নতির প্রতি মনোযোগ দেন।",
  },
  {
    icon: "/images/whychoos/whychoos4.png",
    title: "মানসম্মত শিক্ষার পরিবেশ:",
    description:
      "একটি মনোরম, নিরাপদ ও শিক্ষাবান্ধব পরিবেশে ছাত্রদের গড়ে তোলার জন্য আমরা বদ্ধপরিকর।",
  },
  {
    icon: "/images/whychoos/whychoos5.png",
    title: "প্রয়োগিক-সমৃদ্ধ শিক্ষা ব্যবস্থা:",
    description:
      "আমরা ছাত্রদেরকে কুরআন, হাদিস এবং ইসলামী আইন শাস্ত্রের বিশুদ্ধ জ্ঞান প্রদান করি, যা তাদের আখিরাত ও দুনিয়া উভয়ের জন্য উপকারী।",
  },
  {
    icon: "/images/whychoos/whychoos6.png",
    title: "আধুনিক ও ইসলামী শিক্ষার সমন্বয়:",
    description:
      "আমরা ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষার সুযোগ প্রদান করি, যা ছাত্রদের যুগের সাথে মানানসই দক্ষতা অর্জনে সহায়তা করে।",
  },
  {
    icon: "/images/whychoos/whychoos7.png",
    title: "প্রশিক্ষিত ও অভিজ্ঞ শিক্ষকবৃন্দ:",
    description:
      "আমাদের শিক্ষকরা অভিজ্ঞ, এবং তারা ছাত্রদের মানসিক ও আধ্যাত্মিক উন্নতির প্রতি মনোযোগ দেন।",
  },
  {
    icon: "/images/whychoos/whychoos8.png",
    title: "মানসম্মত শিক্ষার পরিবেশ:",
    description:
      "একটি মনোরম, নিরাপদ ও শিক্ষাবান্ধব পরিবেশে ছাত্রদের গড়ে তোলার জন্য আমরা বদ্ধপরিকর।",
  },
  {
    icon: "/images/whychoos/whychoos9.png",
    title: "শরীরচর্চা ও খেলাধুলা",
    description:
      "আমরা ছাত্রদেরকে কুরআন, হাদিস এবং ইসলামী আইন শাস্ত্রের বিশুদ্ধ জ্ঞান প্রদান করি, যা তাদের আখিরাত ও দুনিয়া উভয়ের জন্য উপকারী।",
  },
  {
    icon: "/images/whychoos/whychoos10.png",
    title: "শিক্ষার্থীদের শারীরিক ও মানসিক স্বাস্থ্য",
    description:
      "আমরা ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষার সুযোগ প্রদান করি, যা ছাত্রদের যুগের সাথে মানানসই দক্ষতা অর্জনে সহায়তা করে।",
  },
  {
    icon: "/images/whychoos/whychoos11.png",
    title: "শিক্ষার্থীদের সুরক্ষায় সার্বক্ষণিক নজরদারি",
    description:
      "আমাদের শিক্ষকরা অভিজ্ঞ, এবং তারা ছাত্রদের মানসিক ও আধ্যাত্মিক উন্নতির প্রতি মনোযোগ দেন।",
  },
  {
    icon: "/images/whychoos/whychoos12.png",
    title: "মেধা বিকাশে প্রশিক্ষণ",
    description:
      "আমরা ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষার সুযোগ প্রদান করি, যা ছাত্রদের যুগের সাথে মানানসই দক্ষতা অর্জনে সহায়তা করে।",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      aria-labelledby="why-choose-us-title"
      className="bg-[#f8f8f8] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-[800px] text-center sm:mb-12">
          <h2
            id="why-choose-us-title"
            className="relative inline-block text-2xl font-bold leading-tight text-[#252525] sm:text-3xl lg:text-[32px]"
          >
            কেন আমাদের মাদ্রাসায় ভর্তি হবেন?

            <span
              aria-hidden="true"
              className="absolute -bottom-4 left-1/2 h-[3px] w-32 -translate-x-1/2 rounded-full bg-[#20c997]"
            />
          </h2>

          <p className="mt-8 text-sm leading-7 text-[#666] md:text-[20px] font-semibold sm:leading-8">
            ইসলামাহ তালিম মাদ্রাসা ইসলামী শিক্ষার এক অনন্য প্রতিষ্ঠান। আমাদের
            মূল লক্ষ্য হলো ছাত্রদের মধ্যে কুরআন ও সুন্নাহর আলোকে সঠিক ইসলামী
            জ্ঞান ছড়িয়ে দেওয়া এবং তাদের আখলাক ও চরিত্র গঠনে সহায়তা করা।
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="overflow-hidden rounded-xl bg-white shadow-[0_2px_15px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const isLastRow = index >= 8;
              const isLastColumn = index % 4 === 3;
              const isEvenColumn = index % 2 === 0;

              return (
                <article
                  key={reason.icon}
                  className={`
                    group flex min-h-[190px] flex-col items-center
                    px-5 py-7 text-center
                    border-gray-200
                    transition-colors duration-300
                    hover:bg-[#fcfffd]

                    ${!isLastRow ? "border-b" : ""}

                    ${isEvenColumn ? "sm:border-r" : ""}

                    ${!isLastColumn ? "lg:border-r" : "lg:border-r-0"}
                  `}
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center">
                    <Image
                      src={reason.icon}
                      alt={reason.title}
                      width={84}
                      height={84}
                      sizes="84px"
                      className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-[18px] font-semibold leading-6 text-[#4a4a4a] sm:text-base">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-[255px] text-[16px] leading-6 text-[#777]">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;