import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';

function App() {
  const [route, setRoute] = useState(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    return ['home', 'menu', 'story', 'contact'].includes(hash) ? hash : 'home';
  });

  const navigate = (next) => {
    setRoute(next);
    if (typeof window !== 'undefined') {
      window.location.hash = next;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'menu', 'story', 'contact'].includes(hash)) setRoute(hash);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8E7] font-sans antialiased">
      <Navbar active={route} onNavigate={navigate} />
      {route === 'home' && <Home onNavigate={navigate} />}
      {route === 'menu' && <Menu onNavigate={navigate} />}
      {route === 'story' && <OurStory onNavigate={navigate} />}
      {route === 'contact' && <Contact onNavigate={navigate} />}
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
