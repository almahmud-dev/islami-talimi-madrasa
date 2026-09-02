import Image from "next/image";
import Container from "./ui/Container";
import { FaPlay } from "react-icons/fa";
import { videoReports } from "@/helper/data";

export default function VideoReports() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          প্রতিবেদন
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {videoReports.map((video) => (
            <a
              key={video.id}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={230}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-red-600 shadow">
                    <FaPlay size={18} className="ml-1" />
                  </span>
                </span>
              </div>
              <p className="mt-3 text-center text-sm font-medium text-gray-700">
                {video.title}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
