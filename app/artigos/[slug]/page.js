import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";
import Link from "next/link";

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = posts.find(p => p.slug === params.slug);
  return { title: `${post?.title ?? "Artigo"} — OtakuBR`, description: post?.excerpt };
}

export default function Page({ params }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return <div>Post não encontrado</div>;

  return (
    <main>
      <Navbar />
      <article className="container py-10 prose dark:prose-invert max-w-3xl">
        <Link href="/artigos" className="link">← Voltar</Link>
        <h1 className="mt-2">{post.title}</h1>
        <img src={post.cover} alt={post.title} className="rounded-2xl my-4" />
        <p className="text-zinc-600 dark:text-zinc-300">{post.content}</p>
      </article>
      <Footer />
    </main>
  );
  }

