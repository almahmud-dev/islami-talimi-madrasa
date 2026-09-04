import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Container from "./ui/Container";
import { galleryImages } from "@/helper/data";

export default function Gallery() {
  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <Container>
        <div className="flex flex-col items-center">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            গ্যালারী
          </h2>
          <div className="mx-auto mt-3 h-[3.5px] w-[120px] rounded-full bg-[#00bc7d]" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[135px]">
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              className={`group relative h-56 overflow-hidden rounded-lg sm:h-64 md:h-auto ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes={index === 0 ? "(max-width: 639px) 100vw, (max-width: 767px) 50vw, 50vw" : "(max-width: 639px) 100vw, (max-width: 767px) 50vw, 25vw"}
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-3 left-3 translate-y-2 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-brand-green bg-brand-green px-6 py-2.5 text-sm font-semibold text-white transition hover:border-brand-green-dark hover:bg-brand-green-dark"
          >
            আরো দেখুন
            <FaArrowRight size={12} />
          </button>
        </div>
      </Container>
    </section>
  );
}
