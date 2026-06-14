import Menu from '@/screens/Menu';

export const metadata = {
  title: 'Menu',
  description:
    'Explore the Namma Malgudi menu — dosas, idli, vada, uttapam, meals, rice and beverages. Authentic South Indian favourites made fresh every day in Bhilai.',
  alternates: { canonical: '/menu' },
};

export default function Page() {
  return <Menu />;
}
