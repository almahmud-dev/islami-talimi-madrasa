import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative">
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={220}
          className="h-40 w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-green-dark">
          {course.badge}
        </span>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-bold text-gray-900">
          {course.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-gray-500">
          {course.subtitle}
        </p>
        <Link
          href={course.href}
          className="mt-3 inline-block rounded-full bg-brand-green px-4 py-1.5 text-xs font-semibold text-white hover:bg-brand-green-dark"
        >
          বিস্তারিত দেখুন →
        </Link>
      </div>
    </div>
  );
}
