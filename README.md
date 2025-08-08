# OtakuBR — Comunidade de Animes (Next.js + Tailwind)

Site pronto para deploy na **Vercel**.

## 🚀 Como rodar localmente
```bash
npm install
npm run dev
```
Abra http://localhost:3000

## 🧱 Stack
- Next.js 14 (App Router)
- TailwindCSS
- Recharts (gráfico do ranking)
- Framer Motion (opcional, anims simples – já instalado)

## 🏗️ Estrutura
- `app/` — páginas (home, artigos, eventos, ranking, sobre)
- `components/` — Navbar, Footer, PostCard, ChartRanking
- `data/` — dados mock usados pelo site
- `app/api/*` — endpoints que retornam os dados mock (GET)

## ☁️ Deploy na Vercel
1. Crie um novo projeto na Vercel e conecte este repositório **ou** faça upload do `.zip`.
2. A Vercel instala dependências e roda `next build` automaticamente.
3. Pronto!

## 🔌 Próximos passos (opcional)
- Conectar os dados a um banco/CMS (Strapi, Notion, Contentful, MDX).
- Adicionar autenticação (Discord/Google) com NextAuth.
- Implementar formulário de review com API POST.
- Substituir links do Discord/YouTube/Twitch pelos reais.
- Ajustar domínio no `metadataBase` e `sitemap.js`.
