const BASE_URL = 'https://nammamalgudi.com';

export default function sitemap() {
  const routes = ['', '/menu', '/story', '/contact'];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
