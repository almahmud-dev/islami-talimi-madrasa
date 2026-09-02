import Container from "./ui/Container";
import { FaBookQuran, FaGraduationCap, FaShieldHeart, FaChild } from "react-icons/fa6";
import { whyChooseUs } from "@/helper/data";

const icons = [FaBookQuran, FaGraduationCap, FaShieldHeart, FaChild];

export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          কেন আমাদের মাদ্রাসায় ভর্তি হবেন?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600">
          আমাদের মাদ্রাসার পাঠদান পদ্ধতি ও পরিবেশ শিক্ষার্থীদের দ্বীনি ও
          দুনিয়াবি জীবনে সাফল্য অর্জনে সহায়তা করে।
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={item.id} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <Icon size={26} />
                </div>
                <h3 className="mt-4 text-sm font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
