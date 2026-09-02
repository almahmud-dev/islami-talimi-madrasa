"use client";

import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function VideoModal({ video, standalone = false }) {
  const router = useRouter();

  const closeModal = () => {
    if (standalone) {
      router.push("/");
    } else {
      router.back();
    }
  };

  return (
    <div
      className={`${standalone ? "min-h-screen bg-gray-950 py-10" : "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"}`}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={standalone ? undefined : closeModal}
    >
      <div
        className={`${standalone ? "mx-auto max-w-5xl" : "w-full max-w-4xl"} overflow-hidden rounded-xl bg-white shadow-2xl`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-4 py-3 sm:px-5">
          <h1 className="text-base font-bold text-gray-900 sm:text-lg">
            {video.title}
          </h1>
          <button
            type="button"
            onClick={closeModal}
            aria-label="ভিডিও বন্ধ করুন"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-red-50 hover:text-red-600"
          >
            <FaTimes size={16} />
          </button>
        </div>

        <div className="aspect-video bg-black">
          <iframe
            className="h-full w-full"
            src={`${video.embedUrl}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
