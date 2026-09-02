import Link from "next/link";
import Container from "./ui/Container";
import { FaMosque } from "react-icons/fa";
import { departments } from "@/helper/data";

const colorMap = {
  green: "bg-brand-green",
  orange: "bg-orange-500",
  blue: "bg-blue-600",
};

export default function DepartmentsSection() {
  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          আমাদের শাখা ও বিভাগসমূহ
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600">
          আমাদের মাদ্রাসায় শিক্ষার্থীদের দ্বীনি ও দুনিয়াবি শিক্ষায় দক্ষ করে
          তুলতে বিভিন্ন বিভাগে বিভক্ত পাঠদান পরিচালিত হয়।
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className={`flex flex-col items-start gap-3 rounded-xl p-6 text-white ${colorMap[dept.color]}`}
            >
              <FaMosque size={26} />
              <h3 className="text-base font-bold">{dept.title}</h3>
              <p className="text-xs text-white/90">{dept.subtitle}</p>
              <Link
                href={dept.href}
                className="mt-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-gray-800 hover:bg-white/90"
              >
                বিস্তারিত দেখুন
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
