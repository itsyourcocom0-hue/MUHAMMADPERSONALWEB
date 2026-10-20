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
  whatsappUrl: '',   // e.g. https://wa.me/92XXXXXXXXXX
  socials: {
    instagram: '',   // https://instagram.com/<handle>
    linkedin: '',    // https://linkedin.com/in/<handle>
    youtube: '',
  },

  // Brand is written "AEEN"; the domain is only used when the website itself is meant.
  aeen: { name: 'AEEN', url: 'https://aeenwears.com', domain: 'aeenwears.com' },
  mog: { name: 'MOG', fullName: 'Mart of Gadget' },
} as const;

export const nav = [
  { href: '/work', label: 'Selected work' },
  { href: '/services', label: 'What I do' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
];

export const sameAs = Object.values(site.socials).filter(Boolean);
