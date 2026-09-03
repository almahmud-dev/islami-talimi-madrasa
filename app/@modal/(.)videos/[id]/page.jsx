import { notFound } from "next/navigation";
import VideoModal from "@/components/VideoModal";
import { videoReports } from "@/helper/data";

export default async function InterceptedVideoPage({ params }) {
  const { id } = await params;
  const video = videoReports.find((item) => item.id === id);

  if (!video) notFound();

  return <VideoModal video={video} />;
}
