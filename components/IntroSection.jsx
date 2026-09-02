import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import { FiUsers, FiUserCheck } from "react-icons/fi";

export default function IntroSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left: lanterns illustration */}
        <div className="order-2 flex justify-center lg:order-1">
          <Image
            src="https://placehold.co/480x360/f5f5f4/166534?text=Lantern+Illustration"
            alt="ইসলামিক লণ্ঠন ইলাস্ট্রেশন"
            width={480}
            height={360}
            className="w-full max-w-md"
          />
        </div>

        {/* Right: text content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            ইসলামিয় তালিম ক্যাডেট মাদ্রাসা
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            আমাদের মাদ্রাসা আধুনিক ইসলামি শিক্ষা প্রতিষ্ঠান, যেখানে কুরআন,
            হাদিস ও দ্বীনি শিক্ষার পাশাপাশি সাধারণ শিক্ষা কারিকুলামও অনুসরণ
            করা হয়। যোগ্য শিক্ষকমণ্ডলীর তত্ত্বাবধানে শিক্ষার্থীদের নৈতিক ও
            মানসিক বিকাশে বিশেষ গুরুত্ব দেওয়া হয়।
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/courses"
              className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-dark"
            >
              কোর্স ক্যাটাগরি
            </Link>
            <Link
              href="/success-stories"
              className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-brand-green hover:text-brand-green"
            >
              সাফল্যের গল্প
            </Link>
          </div>

          <div className="mt-8 flex gap-8">
            <div className="flex items-center gap-2">
              <FiUsers className="text-brand-green" size={22} />
              <span className="text-sm font-medium text-gray-700">
                ১০+ জন শিক্ষার্থী
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiUserCheck className="text-brand-green" size={22} />
              <span className="text-sm font-medium text-gray-700">
                ১০+ জন শিক্ষক
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
