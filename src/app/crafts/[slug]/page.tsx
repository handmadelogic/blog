import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllCategories, getPostsByCategory } from '@/lib/posts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

/* Same palette as the crafts index */
const categoryMeta: Record<string, { gradient: string; accent: string; tagline: string }> = {
  'knitting': {
    gradient: 'linear-gradient(135deg, rgb(229,143,184) 0%, rgb(201,52,126) 100%)',
    accent: 'rgb(178,28,103)',
    tagline: 'Yarn, needles, and the occasional unravelling.',
  },
  'polymer-clay': {
    gradient: 'linear-gradient(135deg, rgb(181,197,165) 0%, rgb(122,148,104) 100%)',
    accent: 'rgb(122,148,104)',
    tagline: 'Small things, big satisfaction.',
  },
  'crochet': {
    gradient: 'linear-gradient(135deg, rgb(181,197,165) 0%, rgb(92,45,82) 100%)',
    accent: 'rgb(92,45,82)',
    tagline: 'Hooks and loops and little creatures.',
  },
  'wood': {
    gradient: 'linear-gradient(135deg, rgb(240,182,82) 0%, rgb(216,128,24) 100%)',
    accent: 'rgb(181,86,62)',
    tagline: 'Sawdust and a healthy overconfidence.',
  },
  'paint': {
    gradient: 'linear-gradient(135deg, rgb(240,204,194) 0%, rgb(181,86,62) 100%)',
    accent: 'rgb(181,86,62)',
    tagline: 'Brushes, pigment, and the occasional cat.',
  },
  'reno': {
    gradient: 'linear-gradient(135deg, rgb(240,182,82) 0%, rgb(181,86,62) 100%)',
    accent: 'rgb(181,86,62)',
    tagline: 'How hard can it be? (Often very.)',
  },
  'embroidery': {
    gradient: 'linear-gradient(135deg, rgb(229,143,184) 0%, rgb(92,45,82) 100%)',
    accent: 'rgb(92,45,82)',
    tagline: 'Tiny stitches, enormous patience.',
  },
  'macrame': {
    gradient: 'linear-gradient(135deg, rgb(240,204,194) 0%, rgb(181,86,62) 100%)',
    accent: 'rgb(181,86,62)',
    tagline: 'Mostly knots. Occasional doubt.',
  },
};

const defaultMeta = {
  gradient: 'linear-gradient(135deg, rgb(214,205,184) 0%, rgb(137,112,120) 100%)',
  accent: 'rgb(112,84,95)',
  tagline: 'Making things with care.',
};

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = getPostsByCategory(slug);
  if (posts.length === 0) return { title: 'Craft not found · Handmade Logic' };
  return { title: `${posts[0].category} · Handmade Logic` };
}

export default async function CraftPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = getPostsByCategory(slug);

  if (posts.length === 0) notFound();

  const { category, categoryEmoji } = posts[0];
  const meta = categoryMeta[slug] ?? defaultMeta;

  return (
    <>
      <Nav />

      <div className="w-full">
        <main className="max-w-[1440px] mx-auto px-6 md:px-[90px] pt-12 pb-24 font-nunito">

          {/* Back link */}
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
            style={{ backgroundImage: meta.gradient, minHeight: '220px', boxShadow: 'rgba(42,24,37,0.1) 0px 10px 30px 0px' }}
          >
            {/* Sheen */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ backgroundImage: 'radial-gradient(circle at 25% 35%, rgba(255,255,255,0.28), rgba(0,0,0,0) 65%)' }}
            />
            {/* Large emoji, decorative */}
            <span
              aria-hidden="true"
              className="absolute right-10 top-1/2 -translate-y-1/2 text-[120px] leading-none opacity-30 select-none"
            >
              {categoryEmoji}
            </span>
            {/* Text */}
            <div className="relative px-8 md:px-12 py-10">
              <div className="inline-flex items-center gap-2 bg-[rgba(246,240,220,0.85)] backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                <span>{categoryEmoji}</span>
                <span className="text-[12px] font-bold font-nunito tracking-[0.44px] text-[rgb(42,24,37)]">
                  {category}
                </span>
              </div>
              <h1
                className="font-bold font-lora text-white leading-tight mb-2"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', textShadow: 'rgba(42,24,37,0.25) 0px 2px 8px' }}
              >
                {category}
              </h1>
              <p className="text-white/80 font-lora italic text-[17px]">{meta.tagline}</p>
            </div>
          </div>

          {/* ── Post list ── */}
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
                  style={{ color: meta.accent }}
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

        </main>
      </div>

      <Footer />
    </>
  );
}
