import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = { title: 'All Posts · Handmade Logic' };

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />

      <div className="w-full">
        <main className="max-w-[1440px] mx-auto px-6 md:px-[90px] pt-16 pb-24 font-nunito">
          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                <line x1="12" y1="3" x2="12" y2="21" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="text-[rgb(216,128,24)] text-[13px] font-bold tracking-[1.56px] uppercase">Everything I&apos;ve made &amp; written</span>
            </div>
            <h1 className="font-bold font-lora text-[rgb(42,24,37)] leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              All <em className="text-[rgb(178,28,103)]">posts</em>
            </h1>
          </div>

          {/* Post list */}
          <div className="flex flex-col gap-6 max-w-[860px]">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group block bg-[rgb(255,250,235)] rounded-[16px] px-8 py-7 transition-transform hover:-translate-y-1"
                style={{ boxShadow: 'rgba(42, 24, 37, 0.07) 0px 6px 24px 0px' }}
              >
                {/* Category pill */}
                <div className="inline-flex items-center gap-1.5 text-[12px] font-bold font-nunito tracking-[0.44px] bg-[rgb(241,236,220)] text-[rgb(42,24,37)] px-3 py-1 rounded-full mb-3">
                  <span>{post.categoryEmoji}</span>
                  <span>{post.category}</span>
                </div>

                {/* Title */}
                <h2 className="font-semibold font-lora text-[rgb(42,24,37)] leading-snug mb-2 group-hover:text-[rgb(178,28,103)] transition-colors" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[rgb(90,61,82)] text-[15px] font-nunito leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-[rgb(112,84,95)] text-[12px] font-nunito">
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="w-1 h-1 bg-[rgb(112,84,95)] rounded-full" />
                  <span>{post.readingMins} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
