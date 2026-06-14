'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {  Phone, Mail, ArrowRight, GraduationCap, Users } from 'lucide-react';
import { IMG, hideOnError } from '@/lib/images';
import { Card, CardMedia, CardOverlay, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Video } from '@/components/ui/video';
import { Marquee } from '@/components/ui/marquee';
import StoresSection from '@/components/StoresSection';

const dishes = [
  {
    name: 'Masala Dosa',
    desc: 'Crisp outside, soft inside, filled with spiced potato. Served with chutney & hot sambar.',
    img: IMG.dishMasalaDosa,
    fallback: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Idli',
    desc: 'Soft idlis served with fresh coconut chutney and sambhar ,  A breakfast classic.',
    img: IMG.dishIdliPodi,
    fallback: 'https://images.unsplash.com/photo-1741376509253-221ac18fac0f?q=80&w=2670&auto=format&fit=crop',
  },
  {
    name: 'Medu Vada',
    desc: 'Crisp lentil donuts served with coconut chutney and hot sambhar.',
    img: IMG.dishVadaIdli,
    fallback: 'https://images.unsplash.com/photo-1728508707623-56d3dca51187?q=80&w=2670&auto=format&fit=crop',
  },
  {
    name: 'Curd Rice',
    desc: 'Creamy and comforting curd rice tempered with mustard seeds, curry leaves, and fresh herbs for a refreshing South Indian classic.',
    img: IMG.dishMasalaDosaClose,
    fallback: 'https://images.unsplash.com/photo-1633383718081-22ac93e3db65?q=80&w=2258&auto=format&fit=crop',
  },
];

const reviews = [
  { name: 'Sourabh Chandel', text: 'Had Some Delicious Meal Tonight in Namma Malgudi. Staff Took Good Care of Our Best South Indian Restaurant.' },
  { name: 'Anuj mannu', text: 'A must-visit for South Indian food lovers! Their finger-licking dosas and vadas are just amazing. This is their second outlet & is doing great.' },
  { name: 'Vaisavi Ananya', text: 'Authentic south indian food for pretty cheap prices. Loved it. Good quantity too.' },
  { name: 'Prachi Tiwari', text: 'A must-visit for South Indian food lovers! Their finger-licking dosas and vadas. This is the best.' },
  { name: 'Ananya', text: 'Authentic south indian food for pretty cheap prices. Good quantity too.' },
  { name: 'Saroj Soni', text: 'Quick service, pocket-friendly, delicious taste — you can enjoy the combo platter for two or four persons.' },
  { name: 'Prachi Tiwari', text: "My go-to place. You'll find me here every day." },
  { name: 'Sourabh C.', text: 'Had My Some Delicious Meal at Namma Malgudi. Best South Indian Meal.' },
];

const Divider = () => (
  <div className="flex justify-center my-2">
    <img src={IMG.divider} alt="" aria-hidden className="h-5 sm:h-6 w-auto opacity-80" />
  </div>
);

const FloralOrnament = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <circle cx="2" cy="12" r="1" />
    <circle cx="22" cy="12" r="1" />
    <path d="M12 4c1.4 1.4 1.4 3.6 0 5-1.4-1.4-1.4-3.6 0-5z" />
    <path d="M20 12c-1.4 1.4-3.6 1.4-5 0 1.4-1.4 3.6-1.4 5 0z" />
    <path d="M12 20c-1.4-1.4-1.4-3.6 0-5 1.4 1.4 1.4 3.6 0 5z" />
    <path d="M4 12c1.4-1.4 3.6-1.4 5 0-1.4 1.4-3.6 1.4-5 0z" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

export default function Home() {
  const router = useRouter();
  return (
    <main className="bg-[#FFF8E7] text-[#1F4D2C]">
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[420px] sm:h-[85vh] sm:min-h-150 md:h-[90vh] lg:h-[92vh] overflow-hidden">
          <div className="absolute inset-0 bg-[#1F4D2C]" />
          <Video
            className="absolute inset-0 w-full h-full object-cover"
            poster={IMG.hero}
            onError={hideOnError}
            aria-label="Namma Malgudi brand video"
            sources={[
              { src: IMG.heroVideo, type: 'video/mp4' },
            ]}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/50 to-black/20" />
          <div className="relative h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl lg:max-w-3xl xl:max-w-4xl text-white"
            >
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[112px] font-semibold leading-[1.02] tracking-tight">
                Where Every Bite<br />
                Feels Like <span className="text-[#F4A261]">Home</span>
              </h1>
              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 max-w-xl lg:max-w-2xl leading-relaxed">
                From steaming idlis at dawn to filter coffee after lunch, Namma Malgudi is where South India comes to your plate.
              </p>
              <button
                onClick={() => router.push('/menu')}
                className="mt-8 sm:mt-10 inline-flex items-center gap-2 bg-[#E87B33] hover:bg-[#C25E1F] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-md font-medium text-base sm:text-lg shadow-lg lift-on-hover press-on-click"
              >
                Explore Menu <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="relative bg-[#FBEFD0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          {[
            { icon: IMG.leaf, title: 'Fresh Every Morning', text: 'Batter ground daily. No premix, no shortcuts. What you taste is what we made today.' },
            { icon: IMG.soup, title: 'Recipes That Stay True', text: "Traditional preparation, balanced spices, honest food just like it's supposed to be." },
            { icon: IMG.home, title: 'A Table for Everyone', text: 'Combos for couples, feasts for families, from kids to grandparents, all welcome.' },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-4 sm:gap-5">
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFF8E7] flex items-center justify-center shadow-sm">
                <img src={f.icon} alt="" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1F4D2C] text-base sm:text-lg">{f.title}</h3>
                <p className="text-xs sm:text-sm text-[#1F4D2C]/75 mt-1 leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
        <img src={IMG.rangoli} aria-hidden alt="" className="absolute -left-20 top-32 w-48 sm:w-72 opacity-20 -translate-x-1/4 pointer-events-none" />
        <img src={IMG.rangoli} aria-hidden alt="" className="absolute -right-20 top-32 w-48 sm:w-72 opacity-20 translate-x-1/4 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-[#E87B33] text-[11px] sm:text-xs tracking-[0.35em] font-semibold uppercase mb-2">
              Signature Dishes
            </div>
            <Divider />
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F4D2C]">What People Keep Coming Back For</h2>
            <p className="mt-3 text-sm sm:text-base text-[#1F4D2C]/70">Simple favourites. Made right, every single time.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {dishes.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="aspect-16/10"
              >
                <Card className="group w-full h-full bg-[#1F4D2C]">
                  <CardMedia>
                    <Image
                      src={d.img}
                      alt={d.name}
                      fallbackSrc={d.fallback}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </CardMedia>
                  <CardOverlay />
                  <CardContent className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
                    <CardTitle>{d.name}</CardTitle>
                    <CardDescription className="max-w-md">{d.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={() => router.push('/menu')}
              className="px-6 sm:px-8 py-3 rounded-md bg-[#E87B33] hover:bg-[#C25E1F] text-white font-medium text-sm sm:text-base shadow-md transition-colors"
            >
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* LOYALTY */}
      <section className="relative px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16 overflow-hidden">
        <img src={IMG.rangoli} aria-hidden alt="" className="absolute -left-20 top-10 w-48 sm:w-72 opacity-20 -translate-x-1/4 pointer-events-none" />
        <img src={IMG.rangoli} aria-hidden alt="" className="absolute -right-20 top-10 w-48 sm:w-72 opacity-20 translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto rounded-2xl bg-linear-to-b from-[#FFF3D6] to-[#FBE7BC] border border-[#E87B33]/25 px-6 sm:px-12 py-10 sm:py-16 text-center shadow-sm">
          <div className="relative">
            {/* Kicker with floral ornaments */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-[#E87B33] text-[11px] sm:text-sm tracking-[0.3em] font-semibold uppercase mb-5">
              <FloralOrnament className="w-4 h-4 sm:w-5 sm:h-5" />
              Loyalty / Kudumbam Pass
              <FloralOrnament className="w-4 h-4 sm:w-5 sm:h-5 -scale-x-100" />
            </div>

            {/* Title */}
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F4D2C] leading-[1.15]">
              Eat 9 Times.<br />
              Your 10th Comes with <span className="text-[#E87B33]">20% Off</span>
            </h3>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-[#1F4D2C]/75 max-w-2xl mx-auto leading-relaxed">
              Join the Kudumbam Loyalty Pass… our way of saying thank you to regulars who keep coming back.<br className="hidden sm:block" />
              Because loyalty deserves something real.
            </p>

            {/* Benefit pills */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: IMG.heart, title: 'Healthcare Heroes', value: '10% Off' },
                { icon: 'graduation', title: 'Students', value: '10% Off' },
                { icon: 'users', title: 'Family Combos from', value: '₹320' },
              ].map((p, i) => (
                <div key={i} className="bg-white/60 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 border border-[#E87B33]/15">
                  <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EFE3CB] flex items-center justify-center">
                    {p.icon === 'graduation' && <GraduationCap className="w-5 h-5 text-[#1F4D2C]" />}
                    {p.icon === 'users' && <Users className="w-5 h-5 text-[#1F4D2C]" />}
                    {typeof p.icon === 'string' && p.icon.endsWith('.webp') && <img src={p.icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />}
                  </div>
                  <div className="text-sm sm:text-[15px] font-medium text-[#1F4D2C]">
                    {p.title}: <span className="text-[#E87B33] font-semibold">{p.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-7 sm:px-8 py-3 rounded-md bg-[#E87B33] hover:bg-[#C25E1F] text-white text-sm sm:text-base font-medium inline-flex items-center justify-center gap-2 shadow-sm">
                Join Kudumbam Pass <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-7 sm:px-8 py-3 rounded-md bg-transparent border border-[#E87B33] text-[#E87B33] text-sm sm:text-base font-medium inline-flex items-center justify-center gap-2 hover:bg-[#E87B33]/5">
                View Combos <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STORES */}
      <StoresSection />

      {/* OUR STORY */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Palm tree silhouettes — left and right background decoration */}
        <img src={IMG.nariyal} aria-hidden alt="" className="absolute -left-50 top-0 w-48 sm:w-64 lg:w-120 opacity-50 pointer-events-none select-none" />
        <img src={IMG.nariyal} aria-hidden alt="" className="absolute -right-50 bottom-0 w-48 sm:w-64 lg:w-120 opacity-50 -scale-x-100 pointer-events-none select-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="flex items-center gap-2 text-[#E87B33] text-xs tracking-[0.25em] font-semibold uppercase mb-2">
              <span className="h-px w-6 bg-[#E87B33]/60" /> Our Story
            </div>
            <div className="mb-4">
              <img src={IMG.divider} alt="" aria-hidden className="h-5 sm:h-6 w-auto opacity-80" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F4D2C]">Where Tradition Meets Everyday</h2>
            <div className="mt-5 space-y-4 text-sm sm:text-base text-[#1F4D2C]/80 leading-relaxed">
              <p>In 2018, with a vision to bring authentic, homely South Indian food to the city, Bhavani, backed by her daughter Anshu, began the journey of Namma Malgudi.</p>
              <p>What started with family recipes, fresh batter and food made with heart has grown into a beloved brand with two thriving branches, serving nearly 20,000 guests every month, with many more chapters still to come.</p>
              <p>Built on the warmth of home-style cooking and the trust of a growing community, Namma Malgudi continues to expand while staying true to what started it all: honest food, traditional flavours and heartfelt hospitality.</p>
              <p>From one mother's kitchen dream to a growing South Indian legacy.</p>
            </div>
            <button
              onClick={() => router.push('/story')}
              className="mt-6 inline-flex items-center gap-2 bg-[#E87B33] hover:bg-[#C25E1F] text-white px-5 py-2.5 rounded-md text-sm font-medium"
            >
              Know Our Story <ArrowRight className="w-4 h-4" />
            </button>
            {/* Coffee filter cups illustration - bottom-right of text column */}
            <img src={IMG.coffee} aria-hidden alt="" className="hidden lg:block absolute -bottom-4 right-0 w-32 opacity-80 pointer-events-none select-none" />
          </div>
          <div className="rounded-2xl overflow-hidden order-first lg:order-last bg-[#1F4D2C]/10">
            <img src={IMG.founder} alt="Founder portrait" className="w-full h-full object-cover aspect-4/5 sm:aspect-4/4" onError={hideOnError} />
          </div>
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-linear-to-r from-[#FFEFD2] to-[#FBE3B6] border border-[#E87B33]/15 p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center justify-center">
            <img src={IMG.hut} alt="Palm tree and hut illustration" className="w-48 sm:w-64 h-auto object-contain" />
          </div>
          <div>
            <div className="text-[#E87B33] text-xs tracking-[0.25em] font-semibold uppercase mb-2">Contact Us</div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F4D2C]">We're Here for You</h3>
            <p className="mt-2 text-sm sm:text-base text-[#1F4D2C]/75">
              Have a question or suggestion? Reach out anytime, we're here to help.
            </p>
            <div className="mt-4 space-y-2 text-sm sm:text-base text-[#1F4D2C]">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#E87B33]">
                <Phone className="w-4 h-4 text-[#E87B33]" /> +91 98765 43210
              </a>
              <a href="mailto:hello@nammamalgudi.com" className="flex items-center gap-2 hover:text-[#E87B33]">
                <Mail className="w-4 h-4 text-[#E87B33]" /> hello@nammamalgudi.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FBF1DD] relative overflow-hidden">
        <img src={IMG.rangoli} aria-hidden alt="" className="absolute left-0 top-1/2 w-56 opacity-10 -translate-x-1/3 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
            <div>
              <div className="text-[#E87B33] text-xs tracking-[0.25em] font-semibold uppercase mb-2">Reviews</div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F4D2C]">What our Regulars Say…</h2>
              <p className="text-sm sm:text-base text-[#1F4D2C]/70 mt-2">Real experiences. Honest words. Timeless flavours.</p>
            </div>
            <div className="bg-[#FFF8E7] border border-[#E87B33]/20 rounded-2xl px-3 sm:px-4 py-3 flex items-center gap-3 sm:gap-5">
              {/* Award badge in circular sage background */}
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D8DBC2]/50 flex items-center justify-center">
                <img src={IMG.award} alt="" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              </div>

              {/* Rating */}
              <div className="flex-1">
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F4D2C] leading-none">
                  4.8 <span className="text-lg sm:text-xl md:text-2xl text-[#1F4D2C]/55 font-normal">/5</span>
                </div>
                <div className="text-xs sm:text-sm text-[#1F4D2C]/70 mt-2">Based on 1000+ reviews</div>
              </div>

              {/* Dosa illustration on right */}
              <img src={IMG.dishIllustration} alt="" aria-hidden className="hidden sm:block w-28 md:w-36 lg:w-40 h-auto object-contain shrink-0" />
            </div>
          </div>

          {/* Two-row marquee using Marquee component */}
          <div className="-mx-4 sm:-mx-6 lg:-mx-10 space-y-4">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-linear-to-r from-[#FBF1DD] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-linear-to-l from-[#FBF1DD] to-transparent z-10" />
              <Marquee pauseOnHover repeat={3}>
                {reviews.slice(0, 4).map((r, i) => (
                  <div key={`r1-${i}`} className="w-72 sm:w-80 shrink-0 bg-white rounded-xl p-4 sm:p-5 border border-amber-900/5 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-full bg-[#E87B33]/15 text-[#E87B33] flex items-center justify-center text-xs font-semibold">
                        {r.name.charAt(0)}
                      </div>
                      <div className="text-sm font-semibold text-[#1F4D2C]">{r.name}</div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#1F4D2C]/75 leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-linear-to-r from-[#FBF1DD] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-linear-to-l from-[#FBF1DD] to-transparent z-10" />
              <Marquee pauseOnHover reverse repeat={3}>
                {reviews.slice(4).map((r, i) => (
                  <div key={`r2-${i}`} className="w-72 sm:w-80 shrink-0 bg-white rounded-xl p-4 sm:p-5 border border-amber-900/5 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-full bg-[#E87B33]/15 text-[#E87B33] flex items-center justify-center text-xs font-semibold">
                        {r.name.charAt(0)}
                      </div>
                      <div className="text-sm font-semibold text-[#1F4D2C]">{r.name}</div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#1F4D2C]/75 leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
