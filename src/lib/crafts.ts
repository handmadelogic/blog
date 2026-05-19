export type CraftDefinition = {
  slug: string;
  name: string;
  emoji: string;
  gradient: string;
  accent: string;
  tagline: string;
};

export const CRAFTS: CraftDefinition[] = [
  {
    slug: 'knitting',
    name: 'Knitting',
    emoji: '🧶',
    gradient: 'linear-gradient(135deg, rgb(229,143,184) 0%, rgb(201,52,126) 100%)',
    accent: 'rgb(178,28,103)',
    tagline: 'Yarn, needles, and the occasional unravelling.',
  },
  {
    slug: 'crocheting',
    name: 'Crocheting',
    emoji: '🪢',
    gradient: 'linear-gradient(135deg, rgb(181,197,165) 0%, rgb(92,45,82) 100%)',
    accent: 'rgb(92,45,82)',
    tagline: 'Hooks and loops and little creatures.',
  },
  {
    slug: 'woodworking',
    name: 'Woodworking',
    emoji: '🪵',
    gradient: 'linear-gradient(135deg, rgb(240,182,82) 0%, rgb(181,86,62) 100%)',
    accent: 'rgb(181,86,62)',
    tagline: 'Sawdust and a healthy overconfidence.',
  },
  {
    slug: 'polymer-clay',
    name: 'Polymer clay',
    emoji: '🌸',
    gradient: 'linear-gradient(135deg, rgb(181,197,165) 0%, rgb(122,148,104) 100%)',
    accent: 'rgb(122,148,104)',
    tagline: 'Small things, enormous satisfaction.',
  },
  {
    slug: 'embroidery',
    name: 'Embroidery',
    emoji: '🪡',
    gradient: 'linear-gradient(135deg, rgb(240,182,82) 0%, rgb(92,45,82) 100%)',
    accent: 'rgb(92,45,82)',
    tagline: 'Tiny stitches, enormous patience.',
  },
  {
    slug: 'punch-needle',
    name: 'Punch needle',
    emoji: '🧵',
    gradient: 'linear-gradient(135deg, rgb(240,204,194) 0%, rgb(155,65,42) 100%)',
    accent: 'rgb(155,65,42)',
    tagline: 'Loops and texture and meditative repetition.',
  },
  {
    slug: 'paint',
    name: 'Paint',
    emoji: '🎨',
    gradient: 'linear-gradient(135deg, rgb(229,143,184) 0%, rgb(216,128,24) 100%)',
    accent: 'rgb(181,86,62)',
    tagline: 'Brushes, pigment, and two unsolicited assistants.',
  },
  {
    slug: 'reno',
    name: 'Reno',
    emoji: '🔨',
    gradient: 'linear-gradient(135deg, rgb(181,197,165) 0%, rgb(155,65,42) 100%)',
    accent: 'rgb(155,65,42)',
    tagline: 'How hard can it be? (Often very.)',
  },
  {
    slug: 'scrapbooking',
    name: 'Scrapbooking',
    emoji: '✂️',
    gradient: 'linear-gradient(135deg, rgb(246,240,220) 0%, rgb(240,182,82) 100%)',
    accent: 'rgb(216,128,24)',
    tagline: 'Paper, glue, and the best kind of hoarding.',
  },
  {
    slug: 'graphic-design',
    name: 'Graphic design',
    emoji: '🖌️',
    gradient: 'linear-gradient(135deg, rgb(122,148,104) 0%, rgb(42,24,37) 100%)',
    accent: 'rgb(92,45,82)',
    tagline: 'Making things look like I meant them to.',
  },
];

export function getCraft(slug: string): CraftDefinition | undefined {
  return CRAFTS.find((c) => c.slug === slug);
}
