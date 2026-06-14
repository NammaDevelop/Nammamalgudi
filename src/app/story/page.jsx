import OurStory from '@/screens/OurStory';

export const metadata = {
  title: 'Our Story',
  description:
    'The story of Namma Malgudi — from one mother’s kitchen dream in 2018 to a beloved South Indian brand with two homes across Bhilai. Where tradition meets everyday.',
  alternates: { canonical: '/story' },
};

export default function Page() {
  return <OurStory />;
}
