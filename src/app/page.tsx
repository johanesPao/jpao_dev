import BasicCard from "@/components/client/BasicCard";
import Footer from "@/components/client/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-[2rem]">
      <header className="text-center py-[2rem] mb-[2rem]">
        <span className="hero">Johanes Pao</span>
      </header>
      <main className="flex flex-col gap-[2rem]">
        {/* Basic Card section */}
        <section className="flex flex-col md:flex-row md:justify-between gap-[1rem]">
          <BasicCard title="Currently working at" value="Meta" />
          <BasicCard
            title="Previous work"
            value="PT Prestasi Retail Innovation"
          />
          <BasicCard title="Get in touch" value="me@johanespao.dev" />
          <BasicCard title="Found elsewhere" value="johanesPao" />
        </section>
        {/* Recent Posts */}
        <section className="grid grid-cols-2">
          <span>Post 1</span>
          <span>Post 2</span>
          <span>Post 3</span>
          <span>Post 4</span>
        </section>
        {/* About Me & History Timeline */}
        <section className="flex justify-between">
          <span>About Me</span>
          <span>History</span>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
