export default function sitemap() {
  const base = "https://otakubr.example";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/artigos`, lastModified: new Date() },
    { url: `${base}/eventos`, lastModified: new Date() },
    { url: `${base}/ranking`, lastModified: new Date() },
    { url: `${base}/sobre`, lastModified: new Date() },
  ];
}
