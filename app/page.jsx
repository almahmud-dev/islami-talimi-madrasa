import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import CoursesSection from "@/components/CoursesSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import VideoReports from "@/components/VideoReports";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { courses } from "@/helper/data";
import FreeCourseSection from "@/components/FreeCourseSection";
import FloatingContact from "@/components/FloatingContact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <CoursesSection title="আমাদের কোর্সসমূহ" courses={courses} />
        <WhyChooseUs />
        <DepartmentsSection />
        <Testimonials />
        <VideoReports />
        <Gallery />
        <FreeCourseSection/>
        <FloatingContact />
      </main>
      <Footer />
    </>
  );
}
