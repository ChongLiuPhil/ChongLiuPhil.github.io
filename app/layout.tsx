import type { Metadata } from 'next';
import { academicContent } from './content';
import './globals.css';

const siteUrl = 'https://chongliuphil.github.io';
const profile = academicContent.profile;
const siteTitle = `${profile.name.en} ${profile.name.zh} — ${profile.role.en}`;
const siteDescription = profile.statement.en;
const researchKeywords = academicContent.researchAreas.flatMap((area) => [area.title.en, area.title.zh]);
const siteKeywords = Array.from(
  new Set([
    profile.name.en,
    profile.name.zh,
    ...profile.alternateNames,
    ...researchKeywords,
  ]),
);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: profile.name.en, url: siteUrl }],
  creator: profile.name.en,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.png' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/og-v2.png', width: 1731, height: 909, alt: `${profile.name.en} — ${profile.role.en}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-v2.png'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name.en,
  alternateName: profile.alternateNames,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  image: `${siteUrl}/og-v2.png`,
  description: profile.bio.en,
  sameAs: profile.externalLinks.map((link) => link.href),
  knowsAbout: researchKeywords,
  mainEntityOfPage: siteUrl,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
          type="application/ld+json"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
