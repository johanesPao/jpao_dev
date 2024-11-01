import BasicCard from "@/components/client/BasicCard";
import TopBorderHead from "@/components/client/TopBorderHead";
import About from "@/components/client/About";
import History from "@/components/client/History";
import Footer from "@/components/client/Footer";

import { IHistory } from "@/components/client/History";

export default function Home() {
  const aboutDesc = `Johanes Indra Pradana Pao is a Business Analyst Senior Supervisor with over a decade of experience turning data into insights. With a knack for creating financial models and machine learning magic, Pao has a history of solving complex problems—like bridging data gaps during a major ERP overhaul.

When he’s not mastering the art of data, Pao is focused on family, especially his son, who always takes precedence over work. Pao enjoys sharing his Programming and Excel knowledge and thrives in the office, where he gets to dive into data science and technology. Surviving catholic school is just one of his many skills, but balancing work and family is his real talent.

His tech stack includes Python, TypeScript, Rust, Excel, TensorFlow, and a few programming languages he’s still trying to pronounce correctly.

If you find his writings mind-blowing, sensational, and earth-shattering—especially if they save you from a spreadsheet meltdown—feel free to donate here. He’s in the middle of a ‘loan’ from his wife, and he promises this will help him pay it back!`;
  const history: IHistory[] = [
    {
      period: "2024 - Now",
      compPos: {
        company: "PT Sembilan Ohm Sembilan",
        position: "Merchandising Planning Manager",
      },
    },
    {
      period: "2019 - 2024",
      compPos: {
        company: "PT Prestasi Retail Innovation",
        position: "Senior Business Analyst",
      },
    },
    {
      period: "2015 - 2019",
      compPos: {
        company: "PT Mitra Adiperkasa Aktif",
        position: "Merchandising Planning Asst. Manager",
      },
    },
    {
      period: "2013 - 2015",
      compPos: {
        company: "PT Vasham Kosa Sejahtera",
        position: "Financial Analyst & Accounting Supervisor",
      },
    },
  ];

  return (
    <div className="flex flex-col gap-[2rem]">
      <header className="text-center py-[2rem] mb-[2rem]">
        <span className="hero">Johanes Pao</span>
      </header>
      <main className="flex flex-col gap-[2rem]">
        {/* Basic Card section */}
        <section className="flex flex-col md:flex-row md:justify-between gap-[1rem]">
          <BasicCard title="Working at" value="PT Sembilan Ohm Sembilan" />
          <BasicCard
            title="Previous work"
            value="PT Prestasi Retail Innovation"
          />
          <BasicCard title="Get in touch" value="me@johanespao.dev" />
          <BasicCard title="Find me" value="johanesPao" />
        </section>
        {/* Recent Posts */}
        <section className="flex flex-col gap-[2px]">
          <TopBorderHead title="Recent Posts" />
          <section className="grid grid-cols-1 md:grid-cols-2">
            <span>Post 1</span>
            <span>Post 2</span>
            <span>Post 3</span>
            <span>Post 4</span>
          </section>
        </section>
        {/* About Me & History Timeline */}
        <section className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 md:justify-between">
          <section className="flex flex-col w-full">
            <TopBorderHead title="About Me" />
            <About desc={aboutDesc} />
          </section>
          <section className="flex flex-col w-full">
            <TopBorderHead title="History" />
            <History history={history} />
          </section>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
