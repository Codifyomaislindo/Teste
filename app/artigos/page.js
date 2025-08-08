import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

export const metadata = { title: "Artigos — OtakuBR" };

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="container py-10 space-y-6">
        <h1 className="text-3xl font-bold">Artigos</h1>
        {posts.map(p => <PostCard key={p.id} post={p} />)}
      </section>
      <Footer />
    </main>
  );
                   }

