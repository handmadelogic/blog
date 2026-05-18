import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPost } from '@/lib/posts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

/* ─────────────────────────────────────────
   PostImage — photo card used inside MDX
   <PostImage caption="..." align="right" accent="#C9347E" />
───────────────────────────────────────── */
function PostImage({
  src,
  caption,
  align = 'full',
  accent = '#E58FB8',
}: {
  src?: string;
  caption?: string;
  align?: 'left' | 'right' | 'full';
  accent?: string;
}) {
  const wrapClass =
    align === 'full'
      ? 'w-full my-10 clear-both'
      : align === 'left'
      ? 'w-full my-8 clear-both sm:float-left sm:w-[200px] md:w-[240px] sm:mr-7 sm:mb-4 sm:mt-1 sm:clear-left sm:my-0'
      : 'w-full my-8 clear-both sm:float-right sm:w-[200px] md:w-[240px] sm:ml-7 sm:mb-4 sm:mt-1 sm:clear-right sm:my-0';

  const rotate =
    align === 'full' ? 'rotate(-0.6deg)' : align === 'left' ? 'rotate(-1.8deg)' : 'rotate(1.5deg)';

  return (
    <figure className={`${wrapClass} relative`} style={{ transform: rotate }}>
      {/* Washi tape — decorative */}
      <div
        aria-hidden="true"
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 rounded-sm z-10 opacity-75"
        style={{ backgroundColor: accent }}
      />
      <div
        className="bg-[rgb(255,250,235)] p-3 pb-5 rounded-sm"
        style={{ boxShadow: 'rgba(42,24,37,0.15) 2px 4px 18px 0px' }}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={caption ?? ''} className="w-full rounded-sm object-cover block" />
        ) : (
          <div
            aria-hidden="true"
            className="w-full rounded-sm flex items-center justify-center font-caveat text-white/70 text-[15px]"
            style={{
              aspectRatio: align === 'full' ? '16/7' : '4/3',
              background: `linear-gradient(135deg, ${accent}55 0%, ${accent}cc 100%)`,
            }}
          >
            photo here ✿
          </div>
        )}
        {caption && (
          <figcaption className="text-center text-[rgb(112,84,95)] text-[14px] font-caveat mt-3 leading-tight px-1">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
}

/* ─────────────────────────────────────────
   Quip — cartoon character chirps in from
   the right margin at this exact spot.

   Desktop: peeks out of the right margin.
   Mobile:  drops inline as a speech bubble.

   Usage in MDX:
   <Quip>why did I think this would be easy</Quip>
───────────────────────────────────────── */
function Quip({ children, side = 'right' }: { children: React.ReactNode; side?: 'left' | 'right' }) {
  const isLeft = side === 'left';

  return (
    <>
      {/* ── Desktop: positioned into the margin ── */}
      <div className="hidden xl:block relative h-0 overflow-visible clear-both">
        <aside
          aria-label="Author's aside"
          className="absolute top-[-20px] flex flex-col items-center gap-3"
          style={{
            ...(isLeft
              ? { right: 'calc(100% + 2.5rem)' }
              : { left: 'calc(100% + 2.5rem)' }),
            width: '190px',
          }}
        >
          {/* Speech bubble — tail points DOWN toward the portrait */}
          <div className="relative w-full">
            {/* Bubble body */}
            <div
              className="bg-[rgb(255,250,235)] rounded-2xl px-4 py-3 text-[14px] font-caveat text-[rgb(42,24,37)] leading-snug"
              style={{ boxShadow: 'rgba(42,24,37,0.12) 1px 3px 12px 0px' }}
            >
              {children}
            </div>
            {/* Tail pointing down toward the portrait — decorative */}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 12"
              width="20"
              height="12"
              className="absolute -bottom-[10px] left-1/2 -translate-x-1/2"
              fill="rgb(255,250,235)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,0 L20,0 L10,12 Z" />
            </svg>
          </div>

          {/* Cartoon portrait — decorative, the text above is the content */}
          <div
            aria-hidden="true"
            className="relative w-[72px] h-[72px] rounded-full border-2 border-dashed border-[rgba(201,52,126,0.35)] bg-[rgb(246,240,220)] flex items-center justify-center overflow-hidden"
            style={{ transform: isLeft ? 'rotate(-2deg)' : 'rotate(2deg)' }}
          >
            <svg viewBox="0 0 60 80" width="36" height="48" fill="none">
              <ellipse cx="30" cy="22" rx="14" ry="16" fill="rgb(201,52,126)" opacity="0.25" />
              <path d="M10,80 C12,56 20,46 30,46 C40,46 48,56 50,80 Z" fill="rgb(201,52,126)" opacity="0.2" />
            </svg>
            <span aria-hidden="true" className="absolute bottom-1 text-[8px] font-caveat text-[rgb(201,52,126)] opacity-50">
              me
            </span>
          </div>
        </aside>
      </div>

      {/* ── Mobile / tablet: inline speech bubble ── */}
      <aside aria-label="Author's aside" className="xl:hidden my-6 clear-both flex items-start gap-3 bg-[rgb(255,250,235)] rounded-2xl px-4 py-3" style={{ boxShadow: 'rgba(42,24,37,0.1) 1px 3px 10px 0px' }}>
        {/* Mini portrait — decorative */}
        <div aria-hidden="true" className="shrink-0 w-10 h-10 rounded-full border-2 border-dashed border-[rgba(201,52,126,0.35)] bg-[rgb(246,240,220)] flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 60 80" width="22" height="30" fill="none">
            <ellipse cx="30" cy="22" rx="14" ry="16" fill="rgb(201,52,126)" opacity="0.3" />
            <path d="M10,80 C12,56 20,46 30,46 C40,46 48,56 50,80 Z" fill="rgb(201,52,126)" opacity="0.25" />
          </svg>
        </div>
        <p className="font-caveat text-[rgb(42,24,37)] text-[15px] leading-snug pt-1">{children}</p>
      </aside>
    </>
  );
}

const mdxComponents = { PostImage, Quip };

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return { title: `${post.title} · Handmade Logic` };
  } catch {
    return { title: 'Post not found · Handmade Logic' };
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div
      className="w-full max-w-[1440px] mx-auto bg-[rgb(241,236,220)]"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(42, 24, 37, 0.13) 1px, rgba(0, 0, 0, 0) 1.2px)',
        backgroundSize: '22px 22px',
      }}
    >
      <Nav />

      <main className="w-full px-6 md:px-[90px] xl:px-[120px] pt-12 pb-24">
        {/* Back link */}
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 text-[rgb(112,84,95)] text-[14px] font-semibold font-nunito mb-10 hover:text-[rgb(42,24,37)] transition-colors"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none">
            <path d="M19,12 L5,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M11,6 L5,12 L11,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All posts
        </Link>

        {/* Article — the quips escape out of this via overflow:visible */}
        <article aria-labelledby="post-title" className="relative max-w-[640px] mx-auto overflow-visible">
          {/* Category */}
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold font-nunito tracking-[0.44px] bg-[rgb(240,182,82)] text-[rgb(42,24,37)] px-3 py-1 rounded-full mb-6">
            <span>{post.categoryEmoji}</span>
            <span>{post.category}</span>
          </div>

          {/* Title */}
          <h1
            id="post-title"
            className="font-bold font-lora text-[rgb(42,24,37)] leading-tight mb-6"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-3 text-[rgb(112,84,95)] text-[13px] font-nunito mb-10 pb-10 border-b border-[rgba(42,24,37,0.1)]">
            <time dateTime={post.date}>{formattedDate}</time>
            <span aria-hidden="true" className="w-1 h-1 bg-[rgb(112,84,95)] rounded-full" />
            <span>{post.readingMins} min read</span>
          </div>

          {/* Body */}
          <div className="prose-handmade">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-[rgba(42,24,37,0.1)] clear-both">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 text-[rgb(178,28,103)] text-[15px] font-bold font-nunito hover:underline"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none">
                <path d="M19,12 L5,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M11,6 L5,12 L11,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
