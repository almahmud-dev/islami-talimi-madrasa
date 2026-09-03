"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { videoReports } from "@/helper/data";

export default function VideoReports() {
  const [showAll, setShowAll] = useState(false);
  const visibleVideos = showAll ? videoReports : videoReports.slice(0, 6);

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          প্রতিবেদন
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleVideos.map((video) => (
            <Link
              key={video.id}
              href={`/videos/${video.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={230}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="video-play-button relative flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-lg ring-1 ring-white/60 backdrop-blur-sm">
                    <FaPlay size={18} className="ml-1" />
                  </span>
                </span>
              </div>
              <p className="mt-3 text-center text-sm font-medium text-gray-700">
                {video.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
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
