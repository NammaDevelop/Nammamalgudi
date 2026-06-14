'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { IMG } from '@/lib/images';
import { Image } from '@/components/ui/image';
import StoresSection from '@/components/StoresSection';

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

const HERO_FALLBACK =
  'https://images.unsplash.com/photo-1582558529434-e130fa0f5a06?q=80&w=1200&auto=format&fit=crop';
const STOREFRONT_FALLBACK =
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop';

export default function Contact() {
  return (
    <main className="bg-[#FFF8E7] text-[#1F4D2C]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-10 sm:pb-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT — heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Kicker>Contact Us</Kicker>
            <Divider />
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold text-[#1F4D2C] leading-[1.1] mt-3">
              We'd Love to<br />Hear From You!
            </h1>
            <p className="mt-6 text-sm sm:text-base lg:text-lg text-[#1F4D2C]/75 leading-relaxed max-w-md">
              Have a question or suggestion?<br />
              Reach out anytime, we're here to help.
            </p>
          </motion.div>

          {/* RIGHT — illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[5/4] sm:aspect-[16/11] rounded-2xl overflow-hidden">
              <Image
                src={HERO_FALLBACK}
                fallbackSrc={HERO_FALLBACK}
                alt="Filter coffee with Namma Malgudi plaque"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL / EMAIL CARDS */}
      <section className="px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {[
            {
              icon: Phone,
              title: 'Call Us',
              sub: 'We Are Just A Call Away.',
              value: '+91 98765 43210',
              href: 'tel:+919876543210',
            },
            {
              icon: Mail,
              title: 'Email Us',
              sub: 'Drop Us An Email At Any Time',
              value: 'hello@nammamalgud.com',
              href: 'mailto:hello@nammamalgud.com',
            },
          ].map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="relative bg-[#FBEFD7] rounded-2xl px-6 sm:px-10 py-10 sm:py-12 text-center overflow-hidden border border-[#E87B33]/15 lift-on-hover press-on-click block"
            >
              <img
                src={IMG.rangoli}
                aria-hidden
                alt=""
                className="absolute left-0 top-0 w-36 sm:w-48 opacity-25 -translate-x-1/4 -translate-y-1/4 pointer-events-none select-none"
              />
              <img
                src={IMG.rangoli}
                aria-hidden
                alt=""
                className="absolute right-0 bottom-0 w-36 sm:w-48 opacity-25 translate-x-1/4 translate-y-1/4 pointer-events-none select-none"
              />

              <div className="relative">
                <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1F4D2C] flex items-center justify-center shadow-md mb-4">
                  <c.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#E87B33]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#1F4D2C]/80">{c.sub}</p>
                <div className="mt-3 text-base sm:text-lg font-semibold text-[#E87B33]">
                  {c.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* OUR STORES (reuses inbuilt component, copy overridden for this page) */}
      <StoresSection
        kicker="Our Stores"
        title="Two Locations. Same Taste."
        subtitle="Visit the branch nearest to you."
        showDeliveryPartners={false}
        background="#FFF8E7"
      />

      {/* FRANCHISE ENQUIRIES */}
      <section className="px-4 sm:px-6 lg:px-10 pb-14 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-7xl mx-auto rounded-2xl bg-linear-to-br from-[#FFF3D6] to-[#FBE7BC] border border-[#E87B33]/20 p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
        >
          {/* LEFT — storefront image */}
          <div className="rounded-xl overflow-hidden aspect-[16/12] bg-[#1F4D2C]/10">
            <Image
              src="/shop.png"
              fallbackSrc={STOREFRONT_FALLBACK}
              alt="Namma Malgudi storefront"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT — copy + contacts */}
          <div>
            <Kicker>Franchise Enquires</Kicker>
            <Divider />
            <h3 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-semibold text-[#1F4D2C] leading-[1.15] mt-3">
              Let's Build Something<br />Delicious Together.
            </h3>
            <p className="mt-4 text-sm sm:text-base text-[#1F4D2C]/75 leading-relaxed max-w-lg">
              Partner with Namma Malgudi and be a part of our journey of authentic taste and heartfelt hospitality.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-sm sm:text-base">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-3 text-[#1F4D2C] hover:text-[#E87B33] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#1F4D2C]/8 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#1F4D2C]" />
                </div>
                +91 98765 43210
              </a>
              <a
                href="mailto:hello@nammamalgud.com"
                className="inline-flex items-center gap-3 text-[#1F4D2C] hover:text-[#E87B33] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#1F4D2C]/8 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#1F4D2C]" />
                </div>
                hello@nammamalgud.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
