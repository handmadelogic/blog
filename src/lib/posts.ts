import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'src/content/posts');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  categoryEmoji: string;
  excerpt: string;
  readingMins: number;
  featured?: boolean;
};

export type Post = PostMeta & {
  content: string;
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'));

  return files
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8');
      const { data } = matter(raw);
      return { slug, ...data } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export type CategoryMeta = {
  slug: string;
  category: string;
  categoryEmoji: string;
  count: number;
};

export function getAllCategories(): CategoryMeta[] {
  const posts = getAllPosts();
  const map = new Map<string, CategoryMeta>();
  for (const post of posts) {
    const slug = post.category.toLowerCase().replace(/\s+/g, '-');
    const existing = map.get(slug);
    if (existing) {
      existing.count++;
    } else {
      map.set(slug, { slug, category: post.category, categoryEmoji: post.categoryEmoji, count: 1 });
    }
  }
  return Array.from(map.values());
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );
}

export function getPost(slug: string): Post {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(raw);
  return { slug, ...data, content } as Post;
}
