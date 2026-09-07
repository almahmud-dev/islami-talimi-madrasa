import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { courses } from "@/helper/data";
import FloatingContact from "@/components/FloatingContact";
import StorySection from "@/components/StorySection";
import TeacherSection from "@/components/TeacherSection";
import OurCampusSection from "@/components/OurCampusSection";
import DepartmentsSectionTwo from "@/components/DepartmentsSectionTwo";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* About */}
        <IntroSection />

        {/* Academics */}
        <CoursesSection title="আমাদের কোর্সসমূহ" courses={courses} />

        <DepartmentsSectionTwo />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Teachers */}
        <TeacherSection />

        {/* Campus */}
        <OurCampusSection />

        {/* Stories */}
        <StorySection />

        {/* Alumni / Testimonials */}
        <Testimonials />

        {/* Gallery */}
        <Gallery />

        {/* Floating Contact */}
        <FloatingContact />
      </main>

      <Footer />
    </>
  );
}
