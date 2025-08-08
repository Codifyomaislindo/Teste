import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import ChartRanking from "@/components/ChartRanking";
import { posts } from "@/data/posts";
import { events } from "@/data/events";
import { ranking } from "@/data/ranking";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-b from-fuchsia-100 to-white dark:from-fuchsia-950/20 dark:to-transparent">
        <div className="container py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Comunidade de Animes do Brasil</h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
              Notícias, reviews, watch parties e muito mais. Junte-se a milhares de otakus brasileiros.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#comunidade">Entrar na comunidade</a>
              <Link className="btn btn-secondary" href="/eventos">Ver eventos</Link>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="badge">Sem spoilers</span>
              <span className="badge">Respeito sempre</span>
              <span className="badge">Conteúdo em PT-BR</span>
            </div>
          </div>
          <div className="card overflow-hidden">
            <img src="/hero.png" alt="watch party" />
            <div className="p-4 flex gap-2">
              <a className="btn btn-secondary" href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
              <a className="btn btn-secondary" href="https://twitch.tv" target="_blank" rel="noreferrer">Twitch</a>
              <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">Discord</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Destaques da semana</h2>
            <Link href="/artigos" className="text-sm link">Ver todos</Link>
          </div>
          {posts.map(p => <PostCard key={p.id} post={p} />)}

          <div id="comunidade" className="card p-6">
            <h3 className="text-xl font-semibold mb-3">Envie sua review</h3>
            <form className="grid gap-3">
              <div className="grid md:grid-cols-2 gap-3">
                <input className="card p-3" placeholder="Título do anime (ex: Jujutsu Kaisen)" />
                <input className="card p-3" placeholder="Nota (0 a 10)" type="number" min="0" max="10" />
              </div>
              <textarea className="card p-3" placeholder="Escreva sua opinião (sem spoilers)." rows={5}></textarea>
              <div className="flex justify-end">
                <button className="btn btn-primary">Publicar</button>
              </div>
            </form>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card p-5">
            <h3 className="text-lg font-semibold mb-4">Próximos eventos</h3>
            <div className="space-y-3">
              {events.map((ev, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{ev.title}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{ev.where} • {ev.type === 'online' ? 'Online' : 'Presencial'}</p>
                  </div>
                  <span className="badge">{ev.date}</span>
                </div>
              ))}
            </div>
            <Link className="btn btn-secondary w-full mt-4" href="/eventos">Ver calendário completo</Link>
          </div>

          <div className="card p-5">
            <h3 className="text-lg font-semibold mb-4">Top animes da semana</h3>
            <ChartRanking data={ranking} />
          </div>

          <div className="card p-5">
            <h3 className="text-lg font-semibold">Receba novidades</h3>
            <form className="space-y-3 mt-3">
              <input className="card p-3" placeholder="Seu e-mail" type="email" />
              <button className="btn btn-primary w-full">Assinar newsletter</button>
              <p className="text-xs text-zinc-500">
                Ao assinar, você concorda com nossa <a className="link" href="/privacidade">política de privacidade</a>.
              </p>
            </form>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
