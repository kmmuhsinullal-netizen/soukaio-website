import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'SouKaio | Coffee Export & Global Trade',
  description: 'Connecting coffee origins to global markets. SouKaio works with international buyers and partners on coffee sourcing and export opportunities.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://soukaio.com'),
  icons: { icon: '/images/soukaio-symbol.svg', shortcut: '/images/soukaio-symbol.svg', apple: '/images/soukaio-symbol.svg' },
  openGraph: { title: 'SouKaio | From Coffee Origins to Global Markets', description: 'Connecting Markets. Creating Opportunities.', type: 'website' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
