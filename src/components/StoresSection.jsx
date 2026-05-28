import  { useState, useEffect } from 'react';
import { Store, MapPin } from 'lucide-react';
import { IMG } from '@/lib/images';
import { STORE_LINKS, PARTNERS } from '@/lib/stores';
import { Image } from '@/components/ui/image';

const Divider = () => (
  <div className="flex justify-center my-2">
    <img src={IMG.divider} alt="" aria-hidden className="h-5 sm:h-6 w-auto opacity-80" />
  </div>
);

const carouselSlides = [
  { src: IMG.thali, fallback: 'https://images.unsplash.com/photo-1633383718081-22ac93e3db65?q=80&w=2258&auto=format&fit=crop' },
  { src: IMG.dishMasalaDosa, fallback: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1400&q=80&auto=format&fit=crop' },
  { src: IMG.dishIdliPodi, fallback: 'https://images.unsplash.com/photo-1741376509253-221ac18fac0f?q=80&w=2670&auto=format&fit=crop' },
  { src: IMG.dishVadaIdli, fallback: 'https://images.unsplash.com/photo-1728508707623-56d3dca51187?q=80&w=2670&auto=format&fit=crop' },
];

const STORE_SMRITI_FALLBACK = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&auto=format&fit=crop';
const STORE_JUNWANI_FALLBACK = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop';

export default function StoresSection({
  kicker = 'Our Stores',
  title = 'Find A Namma Malgudi Near You.',
  subtitle = 'Two neighbourhoods, one shared love for hot dosas and homely meals.',
  showDeliveryPartners = true,
  background = '#FBF1DD',
} = {}) {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveSlide((s) => (s + 1) % carouselSlides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: background }}>
      <img src={IMG.rangoli} aria-hidden alt="" className="absolute top-10 right-0 w-56 opacity-10 translate-x-1/3" />
      <img src={IMG.rangoli} aria-hidden alt="" className="absolute bottom-10 left-0 w-56 opacity-10 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10">
          <div className="text-[#E87B33] text-[10px] sm:text-xs tracking-[0.3em] font-semibold uppercase mb-2">
            {kicker}
          </div>
          <Divider />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F4D2C]">{title}</h2>
          <p className="mt-3 text-sm sm:text-base text-[#1F4D2C]/70">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT: Auto-sliding carousel */}
          <div className="relative aspect-3/2 rounded-2xl overflow-hidden shadow-lg bg-[#1F4D2C]/10">
            {carouselSlides.map((s, i) => (
              <Image
                key={i}
                src={s.src}
                fallbackSrc={s.fallback}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === activeSlide ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {carouselSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${i === activeSlide ? 'bg-[#E87B33] w-6' : 'bg-white/70 w-1.5'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Map-style storefronts; diagonal 2-column on lg+, single stack on mobile */}
          <div className="relative w-full lg:aspect-4/3">
            {/* Dotted S-curve PNG — desktop only */}
            <img
              src={IMG.subtract}
              alt=""
              aria-hidden
              className="hidden lg:block absolute left-10 top-2 inset-0 w-full h-full object-contain opacity-40 pointer-events-none select-none"
            />

            {/* BHILAI label — desktop only */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl sm:text-lg font-medium text-[#1F4D2C]/80 tracking-[0.35em] font-serif z-10">
              BHILAI
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:h-full">
              {/* LEFT column: Smriti circle on top, card below — pinned to TOP */}
              <div className="flex flex-col items-center lg:relative lg:-left-8">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-[#E87B33] bg-[#1F4D2C]/10">
                    <Image
                      src={IMG.storeSmriti}
                      fallbackSrc={STORE_SMRITI_FALLBACK}
                      alt="Smriti Nagar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -left-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E87B33] flex items-center justify-center shadow-md ring-2 ring-white">
                    <Store className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="relative mt-3 bg-white rounded-xl px-3 py-3 shadow-md border border-amber-900/10 w-full">
                  {/* Triangle pointer pointing UP */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-10 border-b-white" />
                  <div className="text-[10px] tracking-widest text-[#E87B33] font-semibold text-center">BHILAI</div>
                  <h3 className="font-semibold text-[#1F4D2C] text-sm sm:text-base text-center mt-0.5">Smriti Nagar</h3>
                  <p className="text-[10px] sm:text-[11px] text-[#1F4D2C]/70 mt-1 text-center leading-snug">
                    Beside Panchmukhi Hanuman Temple, in front of ESIC Hospital, Block 1, Smriti Nagar, Bhilai
                  </p>
                  <div className="mt-2 flex justify-center">
                    <a
                      href={STORE_LINKS.smriti}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#E87B33] hover:text-[#C25E1F] border border-[#E87B33]/40 rounded-md px-2.5 py-1 transition-colors"
                    >
                      <MapPin className="w-3 h-3" /> Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT column: Junwani card on top, circle below — pinned to BOTTOM on lg+ */}
              <div className="flex flex-col items-center lg:justify-end lg:relative lg:-right-12">
                <div className="relative bg-white rounded-xl px-3 py-3 shadow-md border border-amber-900/10 w-full">
                  {/* Triangle pointer pointing DOWN */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-t-10 border-t-white" />
                  <div className="text-[10px] tracking-widest text-[#1F4D2C] font-semibold text-center">BHILAI</div>
                  <h3 className="font-semibold text-[#1F4D2C] text-sm sm:text-base text-center mt-0.5">Junwani Road</h3>
                  <p className="text-[10px] sm:text-[11px] text-[#1F4D2C]/70 mt-1 text-center leading-snug">
                    Shop No D2, Shree Shyam Business Park, Junwani Rd, Near Shubham H Mart, Bhilai
                  </p>
                  <div className="mt-2 flex justify-center">
                    <a
                      href={STORE_LINKS.junwani}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#E87B33] hover:text-[#C25E1F] border border-[#E87B33]/40 rounded-md px-2.5 py-1 transition-colors"
                    >
                      <MapPin className="w-3 h-3" /> Get Directions
                    </a>
                  </div>
                </div>
                <div className="relative mt-3 w-24 h-24 sm:w-28 sm:h-28">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-[#1F4D2C] bg-[#1F4D2C]/10">
                    <Image
                      src={IMG.storeJunwani}
                      fallbackSrc={STORE_JUNWANI_FALLBACK}
                      alt="Junwani Road"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -left-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1F4D2C] flex items-center justify-center shadow-md ring-2 ring-white">
                    <Store className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery partners */}
        {showDeliveryPartners && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PARTNERS.map((p) => (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="w-full px-5 py-3 rounded-md bg-[#E87B33] hover:bg-[#C25E1F] text-white text-sm sm:text-base font-medium transition-colors text-center"
              >
                Order on <span className="font-bold italic">{p.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
