import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <article className="card overflow-hidden">
      <div className="grid md:grid-cols-3">
        <div>
          <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-5 md:col-span-2">
          <div className="flex gap-2 mb-2 flex-wrap">
            {post.tags.map(t => <span key={t} className="badge">{t}</span>)}
          </div>
          <h3 className="text-xl font-semibold leading-snug">
            <Link href={`/artigos/${post.slug}`} className="hover:underline">{post.title}</Link>
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between text-sm opacity-80">
            <div className="flex items-center gap-2">
              <img src={post.author.avatar} alt={post.author.name} className="h-7 w-7 rounded-full" />
              <span>por {post.author.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>💬 {post.comments}</span>
              <span>❤️ {post.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
