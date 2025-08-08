import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://otakubr.example"),
  title: "OtakuBR — Comunidade de Animes do Brasil",
  description: "Notícias, reviews, eventos e watch parties. Uma comunidade brasileira para fãs de anime e mangá.",
  openGraph: {
    title: "OtakuBR — Comunidade de Animes do Brasil",
    description: "Notícias, reviews, eventos e watch parties.",
    images: ["/logo.svg"]
  },
  icons: { icon: "/logo.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
