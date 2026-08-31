import type { Metadata } from 'next';
import { academicContent } from './content';
import './globals.css';

const siteUrl = 'https://chongliuphil.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Chong Liu 刘崇 — Philosophy',
  description: 'Chong Liu’s bilingual academic homepage, focused on epistemology, philosophy of science, philosophy of language, causation, and consciousness.',
  keywords: ['Chong Liu', '刘崇', 'John', 'epistemology', '认识论', 'philosophy of science', '科学哲学', 'philosophy of language', '语言哲学', 'causation', '因果关系', 'consciousness', '意识'],
  authors: [{ name: 'Chong Liu', url: siteUrl }],
  creator: 'Chong Liu',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.png' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Chong Liu 刘崇 — Philosophy',
    description: 'Epistemology · Philosophy of Science · Philosophy of Language · Causation · Consciousness',
    images: [{ url: '/og-v2.png', width: 1731, height: 909, alt: 'Chong Liu — Philosophy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chong Liu 刘崇 — Philosophy',
    description: 'Epistemology · Philosophy of Science · Philosophy of Language · Causation · Consciousness',
    images: ['/og-v2.png'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: academicContent.profile.name.en,
  alternateName: academicContent.profile.alternateNames,
  url: siteUrl,
  email: `mailto:${academicContent.profile.email}`,
  image: `${siteUrl}/og-v2.png`,
  description: academicContent.profile.bio.en,
  sameAs: academicContent.profile.externalLinks.map((link) => link.href),
  knowsAbout: academicContent.researchAreas.flatMap((area) => [area.title.en, area.title.zh]),
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
