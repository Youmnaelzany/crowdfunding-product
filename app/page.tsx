import MonitorRise from "@/components/MonitorRise";
import ProgressBar from "@/components/ProgressBar";

export default function Page() {
  return (
    <main className="mx-auto relative top-54 lg:top-58 md:top-50">
      <section className="flex items-center flex-col gap-6 justify-center ">
        <MonitorRise />
        <ProgressBar />
      </section>
    </main>
  );
}
