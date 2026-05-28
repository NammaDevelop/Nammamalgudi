import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Flame,
  MapPin,
  Heart,
  Store,
  Quote,
} from 'lucide-react';
import { IMG, hideOnError } from '@/lib/images';
import { STORE_LINKS } from '@/lib/stores';
import { Image } from '@/components/ui/image';

const EASE = [0.2, 0.7, 0.2, 1];

const Divider = ({ align = 'left' }) => (
  <div className={`flex my-2 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
    <img src={IMG.divider} alt="" aria-hidden className="h-5 sm:h-6 w-auto opacity-80" />
  </div>
);

const Kicker = ({ children, align = 'left' }) => (
  <div
    className={`text-[#E87B33] text-[11px] sm:text-xs tracking-[0.3em] font-semibold uppercase ${
      align === 'center' ? 'text-center' : 'text-left'
    }`}
  >
    {children}
  </div>
);

const milestones = [
  {
    Icon: Calendar,
    emoji: '📅',
    date: '13 September 2018',
    title: 'Malgudi Opens Its Doors for the First Time',
    text:
      'A small space on KPS Road, Nehru Nagar, Bhilai. Fresh batter, handmade sambar, real filter coffee, and a belief that good food is all you need to build something lasting.',
  },
  {
    Icon: Flame,
    emoji: '🔥',
    date: '2018 – 2019',
    title: 'The Word Spreads — Regulars Become Family',
    text:
      'One table at a time, one cup of filter coffee at a time. People who came for breakfast started coming for lunch. People who came once started coming every week. The little room on KPS Road was never empty for long.',
  },
  {
    Icon: MapPin,
    emoji: '📅',
    date: '7 June 2019',
    title: 'A New Location. Same Heart.',
    text:
      'Smriti Nagar, in front of ESIC Hospital — a new address, a bigger kitchen, but the exact same batter recipe, the same spice balance, and the same warmth at the door. The "Namma" was added to the name, because this truly belonged to everyone.',
  },
  {
    Icon: Heart,
    emoji: '❤️',
    date: '2025 – 2026',
    title: 'Building a Community — The Kudumbam Loyalty Pass is Born',
    text:
      "Kudumbam — meaning 'family' in Tamil. Our loyalty program wasn't a marketing idea. It was a thank-you note to the people who never stopped showing up. Complete 9 visits, earn 20% off your next one. Students and healthcare workers welcomed with 10% always.",
  },
  {
    Icon: Store,
    emoji: '🏠',
    date: 'Second Branch — Bhilai',
    title: 'The Second Home Opens in Bhilai',
    text:
      "Shop No. 02, Shree Shyam Business Park, Junwani Road, near Shubham K Mart — Anustha Residency, Bhilai. A full-format restaurant, designed with everything we'd learned from six years of cooking. Bigger space, same soul.",
  },
];

const locations = [
  {
    name: 'Smriti Nagar (The OG)',
    addr:
      'Beside Panchmukhi Hanuman Temple, in front of ESIC Hospital, Block 1, Smriti Nagar, Bhilai',
    landmark: 'ESIC Hospital Road',
    // Embed keyed off the landmark so it doesn't collide with the Junwani business listing.
    mapsQuery: 'Panchmukhi Hanuman Temple, Smriti Nagar, Bhilai, Chhattisgarh 490020',
    mapsUrl: STORE_LINKS.smriti,
  },
  {
    name: 'Junwani Road',
    addr:
      'Shop No. 02, Shree Shyam Business Park, Junwani Road, near Shubham K Mart, Anustha Residency, Bhilai',
    landmark: 'Near Shubham K Mart',
    mapsQuery: 'Shree Shyam Business Park, Junwani Road, Bhilai, Chhattisgarh',
    mapsUrl: STORE_LINKS.junwani,
  },
];

export default function OurStory({ onNavigate }) {
  return (
    <main className="bg-[#FFF8E7] text-[#1F4D2C]">
      {/* HERO — CHAPTER ONE */}
      <section className="relative overflow-hidden">
        <img
          src={IMG.nariyal}
          aria-hidden
          alt=""
          className="absolute -left-24 -top-10 w-56 sm:w-80 lg:w-[28rem] opacity-30 pointer-events-none select-none"
        />
        <img
          src={IMG.nariyal}
          aria-hidden
          alt=""
          className="absolute -right-24 -bottom-10 w-56 sm:w-80 lg:w-[28rem] opacity-30 -scale-x-100 pointer-events-none select-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-10 sm:pb-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT — heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Kicker>Chapter One</Kicker>
            <Divider />
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold text-[#1F4D2C] leading-[1.08] mt-3">
              We Started with One Tawa<br />
              <span className="text-[#E87B33]">&amp; a Lot of Heart.</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base lg:text-lg text-[#1F4D2C]/75 leading-relaxed max-w-xl">
              The story of Namma Malgudi is not complicated. It is the story of someone who
              believed Bhilai deserved real South Indian food… and decided to make it happen.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-[#E87B33]/25 rounded-full pl-2 pr-5 py-2 shadow-sm">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E87B33] text-white">
                <Calendar className="w-4 h-4" />
              </span>
              <div className="text-left leading-tight">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#1F4D2C]/55 font-semibold">
                  Founded
                </div>
                <div className="text-sm sm:text-base font-semibold text-[#1F4D2C]">
                  13 September 2018
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — founder/storefront frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[5/4] sm:aspect-[16/11] bg-[#1F4D2C]/10">
              <Image
                src="/shop.png"
                fallbackSrc="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop"
                alt="The OG Malgudi at Smriti Nagar"
                className="w-full h-full object-cover"
              />
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHERE IT ALL BEGAN */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <img
          src={IMG.rangoli}
          aria-hidden
          alt=""
          className="absolute -left-16 top-10 w-44 sm:w-72 opacity-20 -translate-x-1/4 pointer-events-none select-none"
        />
        <img
          src={IMG.rangoli}
          aria-hidden
          alt=""
          className="absolute -right-16 bottom-10 w-44 sm:w-72 opacity-20 translate-x-1/4 pointer-events-none select-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-[#1F4D2C]/10">
              <img
                src={IMG.founder}
                onError={hideOnError}
                alt="Bhavani Amma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-[#FFF8E7] border border-[#E87B33]/25 rounded-2xl px-4 sm:px-5 py-3 shadow-md max-w-[16rem]">
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#E87B33] font-semibold">
                Bhavani Amma
              </div>
              <div className="font-serif text-sm sm:text-base text-[#1F4D2C] leading-snug mt-0.5">
                Mother, cook & the heart of every recipe.
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Kicker>Where it all began</Kicker>
            <Divider />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F4D2C] leading-[1.1] mt-3">
              It started with<br />
              <span className="text-[#E87B33] italic">Bhavani Amma's</span> cooking.
            </h2>
            <div className="mt-5 space-y-4 text-sm sm:text-base text-[#1F4D2C]/80 leading-relaxed max-w-2xl">
              <p>
                Every recipe at Namma Malgudi traces back to one kitchen, one woman, one
                lifetime of cooking with love. Bhavani Amma — our mother — made food the way
                only mothers can: with instinct, with memory, with the certainty that feeding
                someone well is an act of love.
              </p>
              <p>
                Growing up, her kitchen was the warmest corner of the house. The smell of
                sambar simmering from scratch, the sizzle of a perfectly seasoned dosa, the
                quiet ritual of it all — that's what we wanted to share with Bhilai.
              </p>
            </div>
          </motion.div>
        </div>

        {/* PULL QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16"
        >
          <div className="relative rounded-2xl bg-linear-to-br from-[#FFF3D6] to-[#FBE7BC] border border-[#E87B33]/20 p-6 sm:p-10 lg:p-12 text-center shadow-sm">
            <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 w-8 h-8 sm:w-10 sm:h-10 text-[#E87B33]/40" />
            <Quote className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 text-[#E87B33]/40 -scale-x-100" />
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#1F4D2C] leading-[1.4] max-w-3xl mx-auto">
              "We never opened this place to become famous. We opened it because we loved the
              food our mom made growing up — the kind that feels like home in every bite. And
              we figured if we loved it this much, maybe others would too."
            </p>
            <div className="mt-5 text-[#E87B33] text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold">
              — The Namma Malgudi Family
            </div>
          </div>
        </motion.div>
      </section>

      {/* THE JOURNEY — TIMELINE */}
      <section className="relative py-14 sm:py-20 bg-[#FBF1DD] overflow-hidden">
        <img
          src={IMG.rangoli}
          aria-hidden
          alt=""
          className="absolute right-0 top-20 w-56 opacity-10 translate-x-1/3 pointer-events-none select-none"
        />
        <img
          src={IMG.rangoli}
          aria-hidden
          alt=""
          className="absolute left-0 bottom-20 w-56 opacity-10 -translate-x-1/3 pointer-events-none select-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center max-w-2xl mx-auto"
          >
            <Kicker align="center">The Journey</Kicker>
            <Divider align="center" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F4D2C] leading-[1.1] mt-3">
              Seven Years. Two Homes.<br />
              <span className="text-[#E87B33]">One Recipe.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#1F4D2C]/70 leading-relaxed">
              From a small shop on KPS Road to three locations across Bhilai, every step was
              the city asking us to stay.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-14 sm:mt-16">
            {/* Vertical line — desktop center, mobile left */}
            <div
              aria-hidden
              className="absolute left-6 sm:left-8 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2 bg-linear-to-b from-[#E87B33]/0 via-[#E87B33]/60 to-[#E87B33]/0"
            />

            <ol className="space-y-12 sm:space-y-16">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
                    className="relative grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] lg:grid-cols-2 lg:gap-12"
                  >
                    {/* Center marker */}
                    <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 flex justify-center">
                      <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E87B33] text-white shadow-lg ring-4 ring-[#FBF1DD]">
                        <m.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span
                          aria-hidden
                          className="absolute -top-1.5 -right-1.5 text-base sm:text-lg select-none"
                        >
                          {m.emoji}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`lg:col-span-1 ${
                        isLeft ? 'lg:col-start-1 lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'
                      }`}
                    >
                      <div
                        className={`relative bg-white rounded-2xl border border-amber-900/10 shadow-sm p-5 sm:p-6 lg:p-7 lift-on-hover`}
                      >
                        {/* Pointer (lg only) */}
                        <span
                          aria-hidden
                          className={`hidden lg:block absolute top-5 w-0 h-0 border-y-8 border-y-transparent ${
                            isLeft
                              ? '-right-2 border-l-8 border-l-white'
                              : '-left-2 border-r-8 border-r-white'
                          }`}
                        />

                        <div
                          className={`inline-flex items-center gap-2 bg-[#E87B33]/10 text-[#E87B33] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold px-3 py-1 rounded-full ${
                            isLeft ? 'lg:flex-row-reverse' : ''
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          {m.date}
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1F4D2C] mt-3 leading-snug">
                          {m.title}
                        </h3>
                        <p className="mt-2 text-sm sm:text-[15px] text-[#1F4D2C]/75 leading-relaxed">
                          {m.text}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* FIND US — MAP */}
      <section className="relative py-14 sm:py-20 overflow-hidden">
        <img
          src={IMG.nariyal}
          aria-hidden
          alt=""
          className="absolute -left-24 top-0 w-56 sm:w-72 opacity-25 pointer-events-none select-none"
        />
        <img
          src={IMG.nariyal}
          aria-hidden
          alt=""
          className="absolute -right-24 bottom-0 w-56 sm:w-72 opacity-25 -scale-x-100 pointer-events-none select-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center max-w-2xl mx-auto"
          >
            <Kicker align="center">Find Us</Kicker>
            <Divider align="center" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F4D2C] leading-[1.1] mt-3">
              Namma Malgudi <span className="text-[#E87B33]">Around Bhilai</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#1F4D2C]/70 leading-relaxed">
              Every location carries the same recipes, the same sambar, and the same warmth.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {locations.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-amber-900/10 shadow-sm lift-on-hover"
              >
                <div className="aspect-[16/10] bg-[#1F4D2C]/5 relative">
                  <iframe
                    title={l.name}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(l.mapsQuery)}&z=17&output=embed`}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E87B33] text-white flex items-center justify-center shrink-0 shadow">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1F4D2C]">
                        {l.name}
                      </h3>
                      <div className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#E87B33] font-semibold mt-0.5">
                        {l.landmark}
                      </div>
                      <p className="text-sm text-[#1F4D2C]/75 mt-2 leading-relaxed">{l.addr}</p>
                      <a
                        href={l.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#E87B33] hover:text-[#C25E1F] transition-colors"
                      >
                        Get Directions <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-10 pb-14 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative max-w-5xl mx-auto rounded-2xl bg-linear-to-br from-[#FFF3D6] to-[#FBE7BC] border border-[#E87B33]/20 px-6 sm:px-10 py-10 sm:py-14 text-center overflow-hidden shadow-sm"
        >
          <img
            src={IMG.rangoli}
            aria-hidden
            alt=""
            className="absolute -left-10 top-1/2 -translate-y-1/2 w-44 sm:w-60 opacity-25 pointer-events-none select-none"
          />
          <img
            src={IMG.rangoli}
            aria-hidden
            alt=""
            className="absolute -right-10 top-1/2 -translate-y-1/2 w-44 sm:w-60 opacity-25 pointer-events-none select-none"
          />

          <div className="relative">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F4D2C] leading-[1.1]">
              The Story Isn't Over.<br />
              <span className="text-[#E87B33]">Your Chapter Starts Now.</span>
            </h3>
            <p className="mt-4 text-sm sm:text-base text-[#1F4D2C]/75 max-w-xl mx-auto leading-relaxed">
              Come in for the dosa. Stay for the filter coffee. Leave with plans to come back.
              That's the Namma Malgudi promise.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => onNavigate?.('menu')}
                className="px-7 sm:px-8 py-3 rounded-md bg-[#E87B33] hover:bg-[#C25E1F] text-white text-sm sm:text-base font-medium inline-flex items-center justify-center gap-2 shadow-sm lift-on-hover press-on-click"
              >
                Explore Our Menu <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="px-7 sm:px-8 py-3 rounded-md bg-transparent border border-[#E87B33] text-[#E87B33] text-sm sm:text-base font-medium inline-flex items-center justify-center gap-2 hover:bg-[#E87B33]/5 lift-on-hover press-on-click"
              >
                Find Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
