import React, { useState } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';
import { IMG } from '@/lib/images';

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'story', label: 'Our Story' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8E7]/95 backdrop-blur-md border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick('home')}
          className="flex items-center group"
          aria-label="Namma Malgudi home"
        >
          <img src={IMG.logo} alt="Namma Malgudi" className="h-10 sm:h-12 lg:h-14 w-auto" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => handleClick(t.id)}
              className={`text-sm lg:text-base font-medium transition-colors relative pb-1 ${
                active === t.id
                  ? 'text-[#E87B33]'
                  : 'text-[#1F4D2C] hover:text-[#E87B33]'
              }`}
            >
              {t.label}
              {active === t.id && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#E87B33] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleClick('menu')}
            className="px-4 lg:px-5 py-2 rounded-full bg-[#E87B33] hover:bg-[#C25E1F] text-white text-sm font-medium transition-colors shadow-sm"
          >
            Order Online
          </button>
          <a
            href="tel:+919876543210"
            className="px-4 lg:px-5 py-2 rounded-full border border-[#1F4D2C]/30 text-[#1F4D2C] text-sm font-medium hover:bg-[#1F4D2C] hover:text-white transition-colors"
          >
            Call Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-[#1F4D2C] hover:bg-[#1F4D2C]/10"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-amber-900/10 bg-[#FFF8E7]">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => handleClick(t.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active === t.id
                    ? 'bg-[#E87B33]/10 text-[#E87B33]'
                    : 'text-[#1F4D2C] hover:bg-[#1F4D2C]/5'
                }`}
              >
                {t.label}
              </button>
            ))}
            <div className="flex gap-2 pt-3 pb-1">
              <button
                onClick={() => handleClick('menu')}
                className="flex-1 px-4 py-2.5 rounded-full bg-[#E87B33] hover:bg-[#C25E1F] text-white text-sm font-medium"
              >
                Order Online
              </button>
              <a
                href="tel:+919876543210"
                className="flex-1 px-4 py-2.5 rounded-full border border-[#1F4D2C]/30 text-[#1F4D2C] text-sm font-medium text-center inline-flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Decorative triangle border strip — appears just below the nav, above hero */}
      <div
        className="h-4 sm:h-5 lg:h-6 w-full bg-repeat-x bg-center"
        style={{ backgroundImage: `url(${IMG.borderTriangle})`, backgroundSize: 'auto 100%' }}
        aria-hidden
      />
    </header>
  );
}
