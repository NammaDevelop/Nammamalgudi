// Direct Google Maps directions URLs for each Namma Malgudi store.
// `smriti` uses the exact link shared by the team. `junwani` uses the official
// Google Maps Urls API (`dir/?api=1&destination=...`) — this is the recommended
// shareable format: it uses the clicker's current location as origin and opens
// the native Maps app on iOS/Android.
export const STORE_LINKS = {
  smriti:
    'https://www.google.com/maps?sca_esv=b5576d60e09f6916&biw=1536&bih=730&sxsrf=ANbL-n6B-Shb7DihQ5hnojlQ9Ip7qx2axQ:1777399457708&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiFG1hbGd1ZGkgc21yaXRpIG5hZ2FyMgUQABiABDIFEAAYgAQyBhAAGAcYHjIFEAAYgAQyAhAmMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyBRAAGO8FMgUQABjvBTIIEAAYgAQYogRlmSVQQiJYqiJwC3gBkAEAmAGpAaABqQGqAQMwLjG4AQPIAQD4AQGYAgGgAgygyqAolCwgIKEAAYRxjWBBiwA5gDAIgGAZAGA5IHBDExLjGgB5kHsgcDMC4xuAe0AcIHBTItOS4zyAc9gAgB&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KUvI1srtPSk6MQkdxtSSAW5n&daddr=Namma+Malgudi,+beside+Panchmukhi+Hanuman+Temple+Infront+of+ESIC+Hospital,+Block+J,+Smriti+Nagar,+Bhilai,+Chhattisgarh+490020',
  junwani:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent(
      'Namma Malgudi, Shop No 02, Shree Shyam Business Park, Junwani Road, near Shubham K Mart, Bhilai, Chhattisgarh'
    ),
};

// Address strings used inside the Maps iframe `src` so the embed shows the right pin.
export const STORE_EMBED_QUERIES = {
  smriti: 'Namma Malgudi Smriti Nagar Bhilai',
  junwani: 'Namma Malgudi Junwani Road Bhilai',
};

// Delivery / ordering partner links. Swiggy & Zomato point at confirmed Namma
// Malgudi listings in Bhilai.
export const PARTNER_LINKS = {
  swiggy:
    'https://www.swiggy.com/restaurants/malgudi-nehru-nagar-east-junwani-road-smriti-nagar-bhilai-99688',
  zomato: 'https://www.zomato.com/durg-bhilai/malgudi-nehru-nagar/order',
};

// `logo` points at a raster image in /public — drop swiggy.png & zomato.png there.
export const PARTNERS = [
  { id: 'swiggy', label: 'Swiggy', href: PARTNER_LINKS.swiggy, logo: '/swiggy.png' },
  { id: 'zomato', label: 'Zomato', href: PARTNER_LINKS.zomato, logo: '/zomato.png' },
];
