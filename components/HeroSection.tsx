import Image from "next/image";
import Header from "@/components/Header";

export default function HeroSection() {
  return (
    <section className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full">
      {/* Background Image */}
      <Image
        src="/image-hero-desktop.jpg"
        alt="Crowdfunding hero background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Header */}
      <div className="relative z-10">
        <Header />
      </div>
    </section>
  );
}
