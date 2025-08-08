"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark"); else root.classList.remove("dark");
  }, [dark]);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 dark:border-zinc-800 backdrop-blur bg-white/70 dark:bg-zinc-950/70">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
          <img src="/logo.svg" alt="OtakuBR" className="h-8 w-8 rounded-xl" />
          <span>OtakuBR</span>
          <span className="badge">beta</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link className="hover:text-fuchsia-600" href="/#comunidade">Comunidade</Link>
          <Link className="hover:text-fuchsia-600" href="/eventos">Eventos</Link>
          <Link className="hover:text-fuchsia-600" href="/ranking">Ranking</Link>
          <Link className="hover:text-fuchsia-600" href="/artigos">Artigos</Link>
          <Link className="hover:text-fuchsia-600" href="/sobre">Sobre</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="btn btn-secondary" onClick={()=>setDark(!dark)}>{dark? "🌙" : "☀️"}</button>
          <a className="btn btn-primary" href="#comunidade">Entrar</a>
        </div>
      </div>
    </header>
  );
}
