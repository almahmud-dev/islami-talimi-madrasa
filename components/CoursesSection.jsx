import Link from "next/link";
import Container from "./ui/Container";
import CourseCard from "./CourseCard";

export default function CoursesSection({ title, courses, seeMoreHref = "/courses" }) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          {title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={seeMoreHref}
            className="rounded-full border border-brand-green px-6 py-2.5 text-sm font-semibold text-brand-green hover:bg-brand-green hover:text-white"
          >
            আরো দেখুন
          </Link>
        </div>
      </Container>
    </section>
  );
}
