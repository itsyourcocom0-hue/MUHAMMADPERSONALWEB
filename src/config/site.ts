// ─────────────────────────────────────────────────────────────
//  ONE place for every personal detail on the site.
//  Empty string = that link/button is hidden automatically.
//  Fill these in yourself — nothing here is guessed.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Muhammad Farooqui',
  // Locked in vault note 02 Instagram/2.2 Naming and Bio (2026-10-19)
  tagline: 'E-Commerce',
  jobTitle: 'E-Commerce Manager',
  linkedinHeadline: 'E-Commerce Manager | Shopify · CRO · COD Logistics · Performance Marketing',
  url: 'https://muhammadfarooqui.com',
  city: 'Karachi',
  country: 'Pakistan',
  email: 'muhammad@farooqui-inc.com',
  company: { name: 'Farooqui Inc', url: 'https://farooqui-inc.com' },

  // TODO (Muhammad): paste real links when ready — empty ones stay hidden.
  calendlyUrl: '',   // e.g. https://calendly.com/<your-link>
  whatsappUrl: 'https://wa.me/923111101577',
  socials: {
    instagram: 'https://www.instagram.com/its_cocom0/',
    linkedin: 'https://www.linkedin.com/in/muhammad-bin-yousuf-835208287/',
    youtube: '',
  },

  // Store/brand names are intentionally NOT shown anywhere on this site.
} as const;

export const nav = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
];

export const sameAs = Object.values(site.socials).filter(Boolean);
