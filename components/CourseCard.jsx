import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CourseCard({ course }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-lg">
      <div className="relative aspect-[400/220] overflow-hidden bg-gray-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="line-clamp-2 min-h-12 text-base font-bold leading-relaxed text-gray-900">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-relaxed text-gray-500">
          {course.subtitle}
        </p>
        <Link
          href={course.href}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-brand-green hover:bg-brand-green hover:text-white"
        >
          বিস্তারিত দেখি
          <FaArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
