import AboutThisProject from "@/components/AboutThisProject";
import HeroSection from "@/components/HeroSection";
import MonitorRise from "@/components/MonitorRise";
import ProgressBar from "@/components/ProgressBar";

export default function Page() {
  return (
    <>
      <HeroSection />

      <main className="relative z-20">
        <section className="flex flex-col items-center gap-6 -mt-24 md:-mt-32">
          <MonitorRise />
          <ProgressBar />
          <AboutThisProject />
        </section>
      </main>
    </>
  );
}
