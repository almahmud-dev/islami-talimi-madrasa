import Image from "next/image";
import Container from "./ui/Container";
import { galleryImages } from "@/helper/data";

export default function Gallery() {
  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          গ্যালারী
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
                className="h-40 w-full object-cover transition-transform duration-300 hover:scale-110 sm:h-48"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
