
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Sobre — OtakuBR" };

function Stat({ label, value }) {
  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-zinc-600 dark:text-zinc-400">{label}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="container py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold">Sobre o projeto</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            A OtakuBR é uma comunidade feita por fãs e para fãs. Nosso objetivo é reunir o público brasileiro de anime e mangá, promover eventos, discussões saudáveis e apoiar criadores independentes.
          </p>
          <div className="mt-4 grid sm:grid-cols-3 gap-3">
            <Stat label="Membros" value="12.4k+" />
            <Stat label="Eventos/ano" value="50+" />
            <Stat label="Reviews" value="1.2k+" />
          </div>
        </div>
        <div className="card p-5">
          <h2 className="text-lg font-semibold">Contato & redes</h2>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">Site oficial</a>
            <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">Discord</a>
            <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">YouTube</a>
            <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">Twitch</a>
          </div>
          <p className="text-xs text-zinc-500 mt-3">Sugestões? Envie no #feedback ou fale com a moderação.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
