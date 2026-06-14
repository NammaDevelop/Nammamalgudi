'use client';

import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { IMG } from '@/lib/images';

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
  </svg>
);

const TABS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'menu', label: 'Menu', href: '/menu' },
  { id: 'story', label: 'Our Story', href: '/story' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-[#1F4D2C] text-white/85 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${IMG.footerBg})` }}
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block rounded-xl p-2.5">
            <img src={IMG.logo} alt="Namma Malgudi" className="h-12 sm:h-24 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Fresh Batter. Hot Plates. True Taste.<br />
            Serving Authentic South Indian Food With Love And Tradition Since 2018.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-[#F4A261]">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {TABS.map((t) => (
              <li key={t.id}>
                <Link href={t.href} className="hover:text-[#F4A261] transition-colors">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-[#F4A261]">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F4A261]" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F4A261]" /> hello@nammamalgudi.com
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E87B33] flex items-center justify-center transition-colors">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E87B33] flex items-center justify-center transition-colors">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Youtube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E87B33] flex items-center justify-center transition-colors">
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 text-center text-xs sm:text-sm text-white/60">
          © {new Date().getFullYear()} Namma Malgudi. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
