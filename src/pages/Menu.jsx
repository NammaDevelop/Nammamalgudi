import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, GraduationCap, Users, Heart, Star } from 'lucide-react';
import { IMG } from '@/lib/images';
import { PARTNERS } from '@/lib/stores';
import { Image } from '@/components/ui/image';

const EASE_PLEASANT = [0.2, 0.7, 0.2, 1];

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

const CATEGORIES = [
  'All Dishes',
  'Breakfast Combos',
  'Idli',
  'Vada',
  'Speciality Breakfast',
  'Dosa Variety',
  'Butter & Ghee Dosas',
  'Speciality Dosas',
  'Uttapam',
  'Meals & Paratha',
  'Rice',
  'Beverages',
];

const MENU = {
  'Breakfast Combos': [
    { name: 'Idli Vada Combo', desc: 'Soft idli with crisp medu vada, chutney & sambhar.', price: 60, popular: true },
    { name: 'Idli Dosa Combo', desc: 'Idli paired with a plain dosa, chutney & sambhar.', price: 70, popular: true },
    { name: 'Breakfast Combo for 2', desc: 'Idli 2pc, Vada 2pc, Upma, Mix Veg Uttapam & 2 Coffees.', price: 320, popular: true },
    { name: 'Family Combo for 4', desc: 'Idli 4pc, Vada 2pc, Upma, any Dosa or Uttapam (under ₹100) × 2 & 4 Coffees.', price: 520, popular: true },
  ],
  Idli: [
    { name: 'Idli (2 pcs)', desc: 'Soft steamed idli with chutney & sambhar.', price: 40 },
    { name: 'Ghee Idli (2 pcs)', desc: 'Idli drizzled with pure ghee.', price: 80 },
    { name: 'Ghee Podi Idli (2 pcs)', desc: 'Idli tossed in fragrant podi and ghee.', price: 90 },
    { name: 'Fried Idli', desc: 'Cubed idli sautéed with curry leaves and onions.', price: 80, popular: true },
    { name: 'Butter Fried Idli', desc: 'Pan-fried idli with butter and tempering.', price: 110 },
    { name: 'Ghee Fried Idli', desc: 'Pan-fried idli with pure ghee and tempering.', price: 110 },
  ],
  Vada: [
    { name: 'Medu Vada', desc: 'Crisp lentil donuts with sambhar & chutney.', price: 60 },
    { name: 'Sambhar Vada', desc: 'Medu vada dunked in hot sambhar.', price: 70, popular: true },
  ],
  'Speciality Breakfast': [
    { name: 'Ghee Upma', desc: 'Savoury semolina cooked in ghee with curry leaves and cashews.', price: 80, popular: true },
    { name: 'Paniyaram', desc: 'Soft, round savoury dumplings made from fermented batter.', price: 70, popular: true },
    { name: 'Puri Korma', desc: 'Fluffy puris served with a rich vegetable korma.', price: 70 },
    { name: 'Cheese Maggie', desc: 'Classic spiced maggie loaded with melted cheese.', price: 70 },
  ],
  'Dosa Variety': [
    { name: 'Plain Dosa', desc: 'Crisp dosa with chutney & sambhar.', price: 50 },
    { name: 'Plain Onion Dosa', desc: 'Dosa topped with chopped onion and chillies.', price: 60 },
    { name: 'Masala Dosa', desc: 'Crisp dosa with classic potato masala filling.', price: 60, popular: true },
    { name: 'Cut Piece Dosa', desc: 'Cut, layered dosa with potato masala.', price: 70, popular: true },
    { name: 'Press Masala Dosa', desc: 'Pressed-crisp dosa with potato masala.', price: 70 },
    { name: 'Onion Masala Dosa', desc: 'Masala dosa topped with onion.', price: 70 },
    { name: 'Onion Press Masala', desc: 'Pressed dosa with onion & potato masala.', price: 80 },
    { name: 'Cheese Masala Dosa', desc: 'Masala dosa loaded with melted cheese.', price: 110 },
  ],
  'Butter & Ghee Dosas': [
    { name: 'Ghee Roast Dosa (Plain)', desc: 'Golden crisp dosa roasted in pure ghee.', price: 90 },
    { name: 'Ghee Roast Dosa (Masala)', desc: 'Ghee-roasted dosa with potato masala filling.', price: 100 },
    { name: 'Butter Plain Dosa', desc: 'Crisp dosa roasted in butter.', price: 90 },
    { name: 'Butter Masala Dosa', desc: 'Butter-roasted dosa with potato masala.', price: 100 },
    { name: 'Ghee Plain Onion Dosa', desc: 'Ghee-roasted dosa with chopped onion.', price: 100 },
    { name: 'Ghee Onion Masala Dosa', desc: 'Ghee-roasted onion dosa with potato masala.', price: 110 },
    { name: 'Butter Plain Onion Dosa', desc: 'Butter-roasted dosa with chopped onion.', price: 100 },
    { name: 'Butter Onion Masala Dosa', desc: 'Butter-roasted onion dosa with potato masala.', price: 110 },
    { name: 'Ghee Cut Piece Dosa', desc: 'Cut, layered ghee-roasted dosa.', price: 110 },
    { name: 'Butter Cut Piece Dosa', desc: 'Cut, layered butter-roasted dosa.', price: 110 },
    { name: 'Ghee Press Masala Dosa', desc: 'Pressed ghee-roasted dosa with potato masala.', price: 110 },
    { name: 'Butter Press Masala Dosa', desc: 'Pressed butter-roasted dosa with potato masala.', price: 110 },
    { name: 'Ghee Onion Press Masala', desc: 'Pressed ghee-roasted onion dosa with masala.', price: 120 },
    { name: 'Butter Onion Press Masala', desc: 'Pressed butter-roasted onion dosa with masala.', price: 120 },
  ],
  'Speciality Dosas': [
    { name: 'Benne Dosa (Plain)', desc: 'Karnataka-style dosa cooked in rich butter.', price: 140 },
    { name: 'Benne Masala Dosa', desc: 'Benne dosa with potato masala filling.', price: 160 },
    { name: 'Benne Podi Masala', desc: 'Benne dosa with podi and potato masala.', price: 180 },
    { name: 'Podi Dosa', desc: 'Dosa smeared with spicy podi and ghee.', price: 100 },
    { name: 'Podi Masala Dosa', desc: 'Podi dosa with potato masala.', price: 110, popular: true },
    { name: 'Raagi Dosa', desc: 'Wholesome dosa made with finger millet.', price: 100 },
    { name: 'Raagi Masala Dosa', desc: 'Raagi dosa with potato masala.', price: 110, popular: true },
    { name: 'Rava Dosa', desc: 'Crisp lace-textured dosa made from semolina.', price: 110 },
    { name: 'Rava Masala Dosa', desc: 'Rava dosa with potato masala.', price: 120, popular: true },
    { name: 'Schezwan Dosa', desc: 'Dosa with spicy schezwan smear and vegetables.', price: 100 },
    { name: 'Schezwan Masala Dosa', desc: 'Schezwan dosa with potato masala filling.', price: 120 },
    { name: 'Set Dosa', desc: 'Fluffy, soft trio of small dosas served with sambhar.', price: 90 },
  ],
  Uttapam: [
    { name: 'Plain Uttapam', desc: 'Thick fluffy pancake with chutney & sambhar.', price: 50 },
    { name: 'Onion Uttapam', desc: 'Topped with chopped onion and green chilli.', price: 70, popular: true },
    { name: 'Tomato Uttapam', desc: 'Topped with juicy tomatoes and herbs.', price: 70 },
    { name: 'Carrot Uttapam', desc: 'Topped with fresh grated carrot.', price: 70 },
    { name: 'Mix Veg Uttapam', desc: 'Loaded with onion, tomato, capsicum & chillies.', price: 80, popular: true },
    { name: 'Masala Uttapam', desc: 'Uttapam with potato masala spread.', price: 80 },
    { name: 'Schezwan Uttapam', desc: 'Uttapam with spicy schezwan sauce.', price: 90 },
  ],
  'Meals & Paratha': [
    { name: 'Mini Meal — Roti', desc: '4 Roti, Dal, Sabji & Pickle.', price: 90 },
    { name: 'Mini Meal — Paratha', desc: '4 Paratha, Dal, Sabji & Pickle.', price: 100 },
    { name: 'Mini Meal — Rice', desc: 'Rice, Dal or Sambhar, Sabji, Appalam & Pickle.', price: 80 },
    { name: 'Combo Meal', desc: '2 Roti, Rice, Dal, Sabji, Appalam & Pickle.', price: 110, popular: true },
    { name: 'Aaloo Paratha', desc: 'Stuffed with spiced potato, served with curd & pickle.', price: 80 },
    { name: 'Pyaaz Paratha', desc: 'Stuffed with sautéed onion and spices.', price: 80 },
    { name: 'Paneer Paratha', desc: 'Stuffed with paneer & spices, served with curd.', price: 90, popular: true },
    { name: 'Extra Appalam', desc: 'A crispy fried appalam on the side.', price: 10 },
    { name: 'Extra Roti', desc: 'One additional roti.', price: 15 },
    { name: 'Extra Plain Paratha', desc: 'One additional plain paratha.', price: 20 },
    { name: 'Extra Sabji', desc: 'A bowl of seasonal sabji.', price: 20 },
    { name: 'Extra Dal', desc: 'A bowl of homely dal.', price: 20 },
    { name: 'Extra Rice', desc: 'A serving of steamed rice.', price: 20 },
  ],
  Rice: [
    { name: 'Tamarind Rice', desc: 'Tangy tamarind rice with peanuts and curry leaves.', price: 80 },
    { name: 'Lemon Rice', desc: 'Tangy lemon rice tempered with peanuts.', price: 80, popular: true },
    { name: 'Curd Rice', desc: 'Cool rice tossed in curd with tempering.', price: 80 },
    { name: 'Sambhar Rice', desc: 'Rice mixed with hot sambhar and ghee.', price: 80 },
    { name: 'Tomato Rice', desc: 'Rice tossed in tangy tomato masala.', price: 90, popular: true },
    { name: 'Veg Fried Rice', desc: 'Wok-tossed fried rice with seasonal vegetables.', price: 90, popular: true },
  ],
  Beverages: [
    { name: 'Tea', desc: 'Hot brewed Indian tea.', price: 20 },
    { name: 'Coffee', desc: 'Classic South Indian coffee.', price: 30 },
    { name: 'Filter Coffee', desc: 'Hot, strong, frothy — brewed the traditional way.', price: 40, popular: true },
    { name: 'Butter Milk', desc: 'Cool churned curd with curry leaves and ginger.', price: 50 },
    { name: 'Cold Coffee', desc: 'Chilled blended coffee, smooth and refreshing.', price: 100 },
  ],
};

const FEATURED_DEFAULT = {
  name: 'Breakfast Combo for 2',
  desc: 'A delicious combo platter featuring fluffy idlis, vada, upma, mix veg uttapam and two filter coffees — the perfect South Indian breakfast feast.',
  img: IMG.dishMasalaDosa,
  fallback: 'https://images.unsplash.com/photo-1741376509680-9517d487689f?q=80&w=2670&auto=format&fit=crop',
  badge: 'Best Seller',
};

const FEATURED_BY_CAT = {
  'Breakfast Combos': FEATURED_DEFAULT,
  Idli: {
    name: 'Ghee Podi Idli',
    desc: 'Soft idlis tossed in fragrant podi and pure ghee. A breakfast classic.',
    img: IMG.dishIdliPodi,
    fallback: 'https://images.unsplash.com/photo-1741376509253-221ac18fac0f?q=80&w=2670&auto=format&fit=crop',
    badge: "Customer's Favourite",
  },
  Vada: {
    name: 'Sambhar Vada',
    desc: 'Crisp medu vada dunked in hot sambhar, finished with onion and coriander.',
    img: IMG.dishVadaIdli,
    fallback: 'https://images.unsplash.com/photo-1728508707623-56d3dca51187?q=80&w=2670&auto=format&fit=crop',
    badge: "Customer's Favourite",
  },
  'Speciality Breakfast': {
    name: 'Ghee Upma',
    desc: 'Savoury semolina cooked in ghee with curry leaves and cashews — comforting and aromatic.',
    img: "https://images.unsplash.com/photo-1657196118354-f25f29fe636d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallback: 'https://images.unsplash.com/photo-1657196118354-f25f29fe636d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Morning Pick',
  },
  'Dosa Variety': {
    name: 'Masala Dosa',
    desc: 'Crisp outside, soft inside, filled with spiced potato. Served with chutney & hot sambhar.',
    img: IMG.dishMasalaDosa,
    fallback: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1400&q=80&auto=format&fit=crop',
    badge: "Customer's Favourite",
  },
  'Butter & Ghee Dosas': {
    name: 'Ghee Roast Dosa',
    desc: 'Golden crisp dosa roasted in pure ghee. Pairs perfectly with coconut chutney.',
    img: IMG.dishMasalaDosaClose,
    fallback: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1400&q=80&auto=format&fit=crop',
    badge: 'Must-Try',
  },
  'Speciality Dosas': {
    name: 'Benne Masala Dosa',
    desc: 'Karnataka-style dosa cooked in rich butter, filled with spiced potato masala.',
    img: IMG.dishMasalaDosa,
    fallback: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1400&q=80&auto=format&fit=crop',
    badge: 'Signature',
  },
  Uttapam: {
    name: 'Mix Veg Uttapam',
    desc: 'Thick, fluffy pancake topped with onion, tomato, capsicum and green chilli.',
    img: IMG.dishMasalaDosaClose,
    fallback: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1400&q=80&auto=format&fit=crop',
    badge: 'Most Requested',
  },
  'Meals & Paratha': {
    name: 'Combo Meal',
    desc: '2 Roti, Rice, Dal, Sabji, Appalam & Pickle — a balanced everyday plate.',
    img: "https://plus.unsplash.com/premium_photo-1712678280102-2ca5d468020a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallback: 'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1400&auto=format&fit=crop',
    badge: "Customer's Favourite",
  },
  Rice: {
    name: 'Lemon Rice',
    desc: 'Tangy lemon rice tempered with peanuts, curry leaves and mustard.',
    img: 'https://images.unsplash.com/photo-1633383718081-22ac93e3db65?q=80&w=2258&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2670&auto=format&fit=crop',
    badge: "Customer's Favourite",
  },
  Beverages: {
    name: 'Filter Coffee',
    desc: 'Hot, strong, frothy. Brewed the traditional South Indian way.',
    img: 'https://images.unsplash.com/photo-1582558529434-e130fa0f5a06?q=80&w=927&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1582558529434-e130fa0f5a06?q=80&w=927&auto=format&fit=crop',
    badge: 'Must-Try',
  },
};

export default function Menu() {
  const [active, setActive] = useState('Breakfast Combos');

  const items = useMemo(() => {
    if (active === 'All Dishes') {
      return Object.entries(MENU).flatMap(([cat, list]) => list.map((i) => ({ ...i, cat })));
    }
    return MENU[active] || [];
  }, [active]);

  const featured = active === 'All Dishes' ? FEATURED_DEFAULT : FEATURED_BY_CAT[active] || FEATURED_DEFAULT;

  return (
    <main className="bg-[#FFF8E7] text-[#1F4D2C]">
      {/* LOYALTY / KUDUMBAM PASS */}
      <section className="relative px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_PLEASANT }}
          className="relative max-w-6xl mx-auto rounded-2xl bg-linear-to-b from-[#FFF3D6] to-[#FBE7BC] border border-[#E87B33]/25 px-6 sm:px-12 py-10 sm:py-14 text-center shadow-sm overflow-hidden"
        >

          <div className="relative">
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-[#E87B33] text-[11px] sm:text-sm tracking-[0.3em] font-semibold uppercase mb-5">
              <FloralOrnament className="w-4 h-4 sm:w-5 sm:h-5" />
              Loyalty / Kudumbam Pass
              <FloralOrnament className="w-4 h-4 sm:w-5 sm:h-5 -scale-x-100" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F4D2C] leading-[1.15]">
              Eat 9 Times.<br />
              Your 10th Comes with <span className="text-[#E87B33]">20% Off</span>
            </h3>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-[#1F4D2C]/75 max-w-2xl mx-auto leading-relaxed">
              Join the Kudumbam Loyalty Pass… our way of saying thank you to regulars who keep coming back.<br className="hidden sm:block" />
              Because loyalty deserves something real.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: 'graduation', title: 'Students', value: '10% Off' },
                { icon: IMG.heart, title: 'Healthcare Heroes', value: '10% Off' },
                { icon: 'users', title: 'Family Combos from', value: '₹320' },
              ].map((p, i) => (
                <div key={i} className="bg-white/60 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 border border-[#E87B33]/15">
                  <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EFE3CB] flex items-center justify-center">
                    {p.icon === 'graduation' && <GraduationCap className="w-5 h-5 text-[#1F4D2C]" />}
                    {p.icon === 'users' && <Users className="w-5 h-5 text-[#1F4D2C]" />}
                    {typeof p.icon === 'string' && p.icon.endsWith('.webp') && (
                      <img src={p.icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </div>
                  <div className="text-sm sm:text-[15px] font-medium text-[#1F4D2C] text-left">
                    {p.title}: <span className="text-[#E87B33] font-semibold">{p.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-7 sm:px-8 py-3 rounded-md bg-[#E87B33] hover:bg-[#C25E1F] text-white text-sm sm:text-base font-medium inline-flex items-center justify-center gap-2 shadow-sm lift-on-hover press-on-click">
                Join Kudumbam Pass <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <button className="px-7 sm:px-8 py-3 rounded-md bg-transparent border border-[#E87B33] text-[#E87B33] text-sm sm:text-base font-medium inline-flex items-center justify-center gap-2 hover:bg-[#E87B33]/5 lift-on-hover press-on-click">
                View Combos <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SIGNATURE DISHES HEADER */}
      <section className="relative pt-6 sm:pt-10 pb-6 sm:pb-8 overflow-hidden">
        <img src={IMG.rangoli} aria-hidden alt="" className="absolute -left-20 top-0 w-44 sm:w-64 opacity-20 -translate-x-1/4 pointer-events-none select-none animate-float-soft" />
        <img src={IMG.rangoli} aria-hidden alt="" className="absolute -right-20 top-0 w-44 sm:w-64 opacity-20 translate-x-1/4 pointer-events-none select-none animate-float-soft" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE_PLEASANT }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center"
        >
          <div className="text-[#E87B33] text-[11px] sm:text-xs tracking-[0.35em] font-semibold uppercase mb-2">
            Signature Dishes
          </div>
          <div className="flex justify-center my-2">
            <img src={IMG.divider} alt="" aria-hidden className="h-5 sm:h-6 w-auto opacity-80" />
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F4D2C]">
            What People Keep Coming Back For
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1F4D2C]/70">
            Simple favourites. Made right, every single time.
          </p>
        </motion.div>
      </section>

      {/* CATEGORY TABS */}
      <section className="relative pb-4 sm:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: EASE_PLEASANT }}
            className="bg-white rounded-2xl border border-amber-900/5 shadow-sm overflow-x-auto"
          >
            <div className="flex items-center min-w-max px-2 sm:px-4 py-1.5 sm:py-2">
              {CATEGORIES.map((c) => {
                const isActive = active === c;
                return (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={`relative px-3 sm:px-4 py-3 text-sm sm:text-[15px] font-medium whitespace-nowrap press-on-click ${
                      isActive ? 'text-[#E87B33]' : 'text-[#1F4D2C]/75 hover:text-[#1F4D2C]'
                    }`}
                  >
                    <span className="relative z-10">{c}</span>
                    {isActive && (
                      <motion.span
                        layoutId="menu-tab-underline"
                        className="absolute left-3 right-3 sm:left-4 sm:right-4 -bottom-0.5 h-0.5 bg-[#E87B33] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MENU LIST + FEATURED */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* LEFT: scrollable dish list */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-amber-900/5 shadow-sm overflow-hidden">
              <div className="max-h-115 sm:max-h-130 overflow-y-auto divide-y divide-amber-900/10 [scrollbar-color:#E87B33_#FBEFD0] [scrollbar-width:thin]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: EASE_PLEASANT }}
                    className="divide-y divide-amber-900/10"
                  >
                    {items.length === 0 && (
                      <div className="px-6 py-12 text-center text-sm text-[#1F4D2C]/60">
                        No items in this category yet.
                      </div>
                    )}
                    {items.map((it, i) => (
                      <motion.div
                        key={`${it.name}-${i}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.35), ease: EASE_PLEASANT }}
                        whileHover={{ x: 4 }}
                        className="group px-5 sm:px-7 py-4 sm:py-5 hover:bg-[#FFF8E7]/60 transition-colors cursor-default"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1F4D2C] group-hover:text-[#E87B33] transition-colors duration-300">
                                {it.name}
                              </h3>
                              {it.popular && (
                                <motion.span
                                  initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
                                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                  transition={{ duration: 0.4, delay: 0.1 + i * 0.04, ease: EASE_PLEASANT }}
                                  className="inline-flex"
                                >
                                  <Star className="w-4 h-4 fill-[#E8B23B] text-[#E8B23B]" />
                                </motion.span>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm text-[#1F4D2C]/70 leading-relaxed">{it.desc}</p>
                            {active === 'All Dishes' && it.cat && (
                              <div className="mt-1.5 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#E87B33]/80 font-medium">
                                {it.cat}
                              </div>
                            )}
                          </div>
                          {typeof it.price === 'number' && (
                            <div className="shrink-0 font-serif text-base sm:text-lg font-semibold text-[#E87B33] whitespace-nowrap pt-0.5">
                              ₹{it.price}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT: Most Loved featured card */}
            <AnimatePresence mode="wait">
              <motion.aside
                key={`feat-${active}`}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE_PLEASANT }}
                className="bg-white rounded-2xl border border-amber-900/5 shadow-sm p-4 sm:p-5 lift-on-hover"
              >
                <div className="flex items-center justify-center gap-2 text-[#E87B33] text-[11px] sm:text-xs tracking-[0.25em] font-medium uppercase mb-3">
                  <span className="h-px w-6 bg-[#E87B33]/40" /> Most Loved <span className="h-px w-6 bg-[#E87B33]/40" />
                </div>

                <div className="aspect-4/3 sm:aspect-square rounded-xl overflow-hidden bg-[#1F4D2C]/5 group">
                  <Image
                    src={featured.img}
                    alt={featured.name}
                    fallbackSrc={featured.fallback}
                    className="w-full h-full object-cover group-hover:scale-105 ease-pleasant duration-700"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15, ease: EASE_PLEASANT }}
                  className="mt-4 inline-flex items-center gap-2 bg-[#1F4D2C]/8 text-[#1F4D2C] text-xs sm:text-sm font-medium px-3 py-1.5 rounded-md"
                >
                  <Heart className="w-4 h-4 text-[#1F4D2C] fill-[#1F4D2C]/30" /> {featured.badge}
                </motion.div>

                <div className="mt-3 flex items-center gap-2">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1F4D2C]">{featured.name}</h3>
                  <Star className="w-4 h-4 fill-[#E8B23B] text-[#E8B23B]" />
                </div>
                <p className="text-sm text-[#1F4D2C]/70 mt-1.5 leading-relaxed">{featured.desc}</p>
              </motion.aside>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ORDER PARTNERS */}
      <section className="px-4 sm:px-6 lg:px-10 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE_PLEASANT }}
          className="max-w-5xl mx-auto rounded-2xl bg-[#1F4D2C] text-white p-6 sm:p-10 text-center relative overflow-hidden"
        >
          <img src={IMG.nariyal} aria-hidden alt="" className="absolute -left-16 -top-6 w-40 opacity-20 pointer-events-none select-none animate-float-soft" />
          <img src={IMG.nariyal} aria-hidden alt="" className="absolute -right-16 -bottom-6 w-40 opacity-20 -scale-x-100 pointer-events-none select-none animate-float-soft" />
          <div className="relative">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold">Order in. Enjoy at home.</h3>
            <p className="text-white/75 mt-2 text-sm sm:text-base">Available on your favourite delivery apps.</p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PARTNERS.map((p, i) => (
                <motion.a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: EASE_PLEASANT }}
                  className="px-5 py-3 rounded-md bg-[#E87B33] hover:bg-[#C25E1F] text-white text-sm sm:text-base font-medium lift-on-hover press-on-click text-center"
                >
                  Order on <span className="font-bold italic">{p.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
