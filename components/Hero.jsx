import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-red">
      <Image
        src="https://placehold.co/1600x600/166534/166534?text=+"
        alt=""
        fill
        priority
        className="object-cover opacity-30"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-xl text-white">
          <p className="mb-3 text-sm font-medium text-white/90">
            ইসলামিক শিক্ষার নতুন দিগন্তে আপনাকে স্বাগতম
          </p>
          <h1 className="text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
            এখানেই শুরু হোক আপনার আখিরাতের সফলতার কুরআনি যাত্রা
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-green-dark transition-transform hover:scale-105"
            >
              কোর্স দেখুন
            </Link>
            <Link
              href="/admission"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              ভর্তি হোন
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
