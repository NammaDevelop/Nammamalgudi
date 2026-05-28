const BASE = '/malgudi%20images';
export const img = (file) => `${BASE}/${encodeURI(file)}`;

// Hide broken-image icon when a not-yet-uploaded webp 404s.
export const hideOnError = (e) => {
  e.currentTarget.style.visibility = 'hidden';
};

// Swap to a fallback URL when the primary image fails (e.g. webp not yet uploaded).
export const fallbackOnError = (fallbackUrl) => (e) => {
  if (e.currentTarget.dataset.fallbackApplied === 'true') return;
  e.currentTarget.dataset.fallbackApplied = 'true';
  e.currentTarget.src = fallbackUrl;
};

export const IMG = {
  logo: img('New_Malgudi_Logo_1-01 1.webp'),
  leaf: img('Vectorleaf.webp'),
  award: img('award.webp'),
  heart: img('heart.webp'),
  hut: img('hut.webp'),
  nariyal: img('nariyal.webp'),
  home: img('noun-home-5460319 1.webp'),
  vegan: img('noun-vegan-food-429729 1.webp'),
  rangoli: img('rangoli.webp'),
  soup: img('soup vector.webp'),
  coffee: img('coffee.webp'),
  tea: img('tea.webp'),
  dishIllustration: img('dosa.webp'),
  borderTriangle: img('Group 57.webp'),
  divider: img('Group 58.webp'),
  subtract: img('Subtract.png'),
  // Slots awaiting upload:
  hero: img('hero.webp'),
  thali: img('thali.webp'),
  storeSmriti: img('store-smriti.webp'),
  storeJunwani: img('store-junwani.webp'),
  founder: '/aunty.jpeg',
  dishMasalaDosa: img('dish-masala-dosa.webp'),
  dishIdliPodi: img('dish-idli-podi.webp'),
  dishVadaIdli: img('dish-vada-idli.webp'),
  dishMasalaDosaClose: img('dish-masala-dosa-close.webp'),
  heroVideo: img('Malgudi Final Render.mp4'),
  footerBg: '/Group%2090.png',
};
