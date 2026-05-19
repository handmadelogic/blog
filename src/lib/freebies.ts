export type Freebie = {
  slug: string;
  title: string;
  description: string;
  craftSlug: string;
  craftName: string;
  craftEmoji: string;
  /** Brand accent colour for this craft (rgb string) */
  accentColor: string;
  fileType: 'PDF' | 'SVG' | 'ZIP';
  /** Path inside /public — e.g. '/downloads/gerald.pdf' */
  filePath: string;
  comingSoon?: boolean;
};

export const FREEBIES: Freebie[] = [
  {
    slug: 'gerald-the-frog-pattern',
    title: 'Gerald the Frog',
    description:
      'The crochet pattern for the small green creature currently living on my desk. Beginner-friendly. Gerald is very forgiving of dropped stitches.',
    craftSlug: 'crocheting',
    craftName: 'Crochet',
    craftEmoji: '🪢',
    accentColor: 'rgb(92,45,82)',
    fileType: 'PDF',
    filePath: '/downloads/gerald-the-frog-pattern.pdf',
  },
  {
    slug: 'dovetail-cheat-sheet',
    title: 'Dovetail Joint Cheat Sheet',
    description:
      'Measurements, ratios, and margin notes from after I finally got it right. One page. Print it, tape it to your bench.',
    craftSlug: 'woodworking',
    craftName: 'Woodworking',
    craftEmoji: '🪵',
    accentColor: 'rgb(181,86,62)',
    fileType: 'PDF',
    filePath: '/downloads/dovetail-cheat-sheet.pdf',
  },
  {
    slug: 'sweater-schematic',
    title: 'Blank Sweater Schematic',
    description:
      'A top-down schematic to fill in with your own measurements. Gauge calculation notes in the margin. Works for any yarn weight.',
    craftSlug: 'knitting',
    craftName: 'Knitting',
    craftEmoji: '🧶',
    accentColor: 'rgb(178,28,103)',
    fileType: 'PDF',
    filePath: '/downloads/sweater-schematic.pdf',
  },
  {
    slug: 'clay-colour-log',
    title: 'Polymer Clay Colour Log',
    description:
      'Log your mix ratios so you can reproduce that colour you made entirely by accident. Fits on one A4 sheet, survives craft room conditions.',
    craftSlug: 'polymer-clay',
    craftName: 'Polymer clay',
    craftEmoji: '🌸',
    accentColor: 'rgb(122,148,104)',
    fileType: 'PDF',
    filePath: '/downloads/clay-colour-log.pdf',
  },
  {
    slug: 'punch-needle-starter-grid',
    title: 'Punch Needle Starter Grid',
    description:
      'A printable 10×10 cm grid with loop-density guides. Use it to plan your design before committing to the fabric.',
    craftSlug: 'punch-needle',
    craftName: 'Punch needle',
    craftEmoji: '🧵',
    accentColor: 'rgb(155,65,42)',
    fileType: 'PDF',
    filePath: '/downloads/punch-needle-starter-grid.pdf',
    comingSoon: true,
  },
];
