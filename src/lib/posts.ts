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

export function getPost(slug: string): Post {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(raw);
  return { slug, ...data, content } as Post;
}
