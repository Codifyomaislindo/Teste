import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChartRanking from "@/components/ChartRanking";
import { ranking } from "@/data/ranking";

export const metadata = { title: "Ranking — OtakuBR" };

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Top animes da semana</h1>
        <div className="card p-5">
          <ChartRanking data={ranking} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

