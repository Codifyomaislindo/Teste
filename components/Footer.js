export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="container py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} OtakuBR — Feito com ❤ no Brasil</p>
        <div className="flex items-center gap-4">
          <a className="link" href="/termos">Termos</a>
          <a className="link" href="/privacidade">Privacidade</a>
          <a className="link" href="/contato">Contato</a>
        </div>
      </div>
    </footer>
  );
}
