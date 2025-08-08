import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events } from "@/data/events";

export const metadata = { title: "Eventos — OtakuBR" };

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Eventos</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          {events.map((ev, i) => (
            <div key={i} className="card p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{ev.title}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{ev.where} • {ev.type === 'online' ? 'Online' : 'Presencial'}</p>
              </div>
              <span className="badge">{ev.date}</span>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
  }

