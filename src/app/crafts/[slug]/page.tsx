import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CRAFTS, getCraft } from '@/lib/crafts';
import { getPostsByCategory } from '@/lib/posts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return CRAFTS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const craft = getCraft(slug);
  if (!craft) return { title: 'Craft not found · Handmade Logic' };
  return { title: `${craft.name} · Handmade Logic` };
}

export default async function CraftPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const craft = getCraft(slug);

  /* Unknown slug → proper 404 */
  if (!craft) notFound();

  const posts = getPostsByCategory(slug);
  const hasPosts = posts.length > 0;

  return (
    <>
      <Nav />

      <div className="w-full">
        <main className="max-w-[1440px] mx-auto px-6 md:px-[90px] pt-12 pb-24 font-nunito">

          {/* ── Back link ── */}
          <Link
            href="/crafts"
            data-back-link
            className="inline-flex items-center gap-2 text-[rgb(112,84,95)] text-[14px] font-semibold font-nunito mb-10"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path d="M19,12 L5,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M11,6 L5,12 L11,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All crafts
          </Link>

          {/* ── Category hero banner ── */}
          <div
            className="relative w-full rounded-[20px] overflow-hidden mb-14 flex items-end"
            style={{
              backgroundImage: craft.gradient,
              minHeight: '220px',
              boxShadow: 'rgba(42,24,37,0.1) 0px 10px 30px 0px',
            }}
          >
            {/* Sheen */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ backgroundImage: 'radial-gradient(circle at 25% 35%, rgba(255,255,255,0.28), rgba(0,0,0,0) 65%)' }}
            />
            {/* Ghost emoji */}
            <span
              aria-hidden="true"
              className="absolute right-10 top-1/2 -translate-y-1/2 text-[120px] leading-none opacity-25 select-none"
            >
              {craft.emoji}
            </span>
            {/* Text */}
            <div className="relative px-8 md:px-12 py-10">
              <div className="inline-flex items-center gap-2 bg-[rgba(246,240,220,0.85)] backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                <span>{craft.emoji}</span>
                <span className="text-[12px] font-bold font-nunito tracking-[0.44px] text-[rgb(42,24,37)]">
                  {craft.name}
                </span>
              </div>
              <h1
                className="font-bold font-lora text-white leading-tight mb-2"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', textShadow: 'rgba(42,24,37,0.25) 0px 2px 8px' }}
              >
                {craft.name}
              </h1>
              <p className="text-white/80 font-lora italic text-[17px]">{craft.tagline}</p>
            </div>
          </div>

          {/* ── Posts or empty state ── */}
          {hasPosts ? (
            <div className="flex flex-col gap-6 max-w-[860px]">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="group block bg-[rgb(255,250,235)] rounded-[16px] px-8 py-7 transition-transform hover:-translate-y-1"
                  style={{ boxShadow: 'rgba(42, 24, 37, 0.07) 0px 6px 24px 0px' }}
                >
                  {/* Category pill */}
                  <div
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold font-nunito tracking-[0.44px] bg-[rgb(241,236,220)] px-3 py-1 rounded-full mb-3"
                    style={{ color: craft.accent }}
                  >
                    <span>{post.categoryEmoji}</span>
                    <span>{post.category}</span>
                  </div>

                  {/* Title */}
                  <h2
                    className="font-semibold font-lora text-[rgb(42,24,37)] group-hover:text-[rgb(178,28,103)] leading-snug mb-2 transition-colors"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[rgb(90,61,82)] text-[15px] font-nunito leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-[rgb(112,84,95)] text-[12px] font-nunito">
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="w-1 h-1 bg-[rgb(112,84,95)] rounded-full" aria-hidden="true" />
                    <span>{post.readingMins} min read</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* ── Empty state ── */
            <div className="max-w-[540px]">
              <div
                className="bg-[rgb(255,250,235)] rounded-[20px] px-10 py-12 text-center"
                style={{ boxShadow: 'rgba(42, 24, 37, 0.07) 0px 6px 24px 0px' }}
              >
                <span className="text-[56px] leading-none block mb-5" role="img" aria-label={craft.name}>
                  {craft.emoji}
                </span>
                <h2 className="font-bold font-lora text-[rgb(42,24,37)] text-[24px] leading-snug mb-3">
                  Nothing here yet
                </h2>
                <p className="text-[rgb(90,61,82)] font-lora italic text-[16px] leading-[1.7] mb-6">
                  I&apos;m working on it — this shelf will fill up soon. Check back or browse another craft in the meantime.
                </p>
                <p className="text-[rgb(216,128,24)] font-caveat text-[22px] font-semibold mb-8">
                  something&apos;s brewing ✿
                </p>
                <Link
                  href="/crafts"
                  className="inline-flex items-center gap-2 bg-[rgb(92,45,82)] text-[rgb(246,240,220)] px-6 py-3 text-[13px] font-bold font-nunito rounded-full"
                  data-btn="true"
                >
                  Browse all crafts →
                </Link>
              </div>
            </div>
          )}

        </main>
      </div>

      <Footer />
    </>
  );
}
