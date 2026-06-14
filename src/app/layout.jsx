import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://nammamalgudi.com'),
  title: {
    default: 'Namma Malgudi — Authentic South Indian Food in Bhilai',
    template: '%s | Namma Malgudi',
  },
  description:
    'Namma Malgudi serves authentic, homely South Indian food in Bhilai — fresh dosas, idli, vada, filter coffee and more. Fresh batter, hot plates, true taste since 2018.',
  keywords: [
    'Namma Malgudi',
    'South Indian restaurant Bhilai',
    'dosa Bhilai',
    'filter coffee Bhilai',
    'idli vada Bhilai',
    'Smriti Nagar restaurant',
    'Junwani Road restaurant',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Namma Malgudi',
    title: 'Namma Malgudi — Authentic South Indian Food in Bhilai',
    description:
      'Fresh batter. Hot plates. True taste. Authentic South Indian food in Bhilai since 2018.',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namma Malgudi — Authentic South Indian Food in Bhilai',
    description:
      'Fresh batter. Hot plates. True taste. Authentic South Indian food in Bhilai since 2018.',
  },
  // Favicon/app icons are provided via the App Router file convention:
  // src/app/icon.png and src/app/apple-icon.png (generated from the logo).
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen bg-[#FFF8E7] font-sans antialiased">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
