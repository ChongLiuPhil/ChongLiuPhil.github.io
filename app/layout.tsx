import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://chongliuphil.github.io'),
  title: 'Chong Liu 刘崇 — Philosophy',
  description: 'Chong Liu’s bilingual academic homepage, focused on epistemology, philosophy of science, philosophy of language, causation, and consciousness.',
  keywords: ['Chong Liu', 'John', 'epistemology', 'philosophy of science', 'philosophy of language', 'causation', 'consciousness'],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.png' },
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
