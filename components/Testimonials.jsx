import Container from "./ui/Container";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/helper/data";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          কেন অভিভাবক ও শিক্ষার্থীদের প্রধান পছন্দ?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="relative rounded-xl bg-white p-6 shadow-sm"
            >
              <FaQuoteLeft className="text-brand-green/30" size={22} />
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                {item.quote}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                  {idx + 1}
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
