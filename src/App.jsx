import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Mail, MapPin, Phone, Share2 } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl p-6"
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center">
          
          {/* Top Decorative Element */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="w-16 h-16 bg-gradient-to-tr from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          >
            <Leaf className="text-white w-8 h-8" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-amber-500 font-semibold tracking-[0.3em] uppercase text-sm mb-3"
          >
            A Taste of Tradition
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            Malgudi
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 font-light mb-10"
          >
            Authentic South Indian Cuisine
          </motion.p>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-3xl font-semibold text-white mb-4">Coming Soon</h3>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              We are brewing the perfect filter coffee and fermenting the softest idlis. Join our waitlist to get an exclusive invite for our grand opening!
            </p>

            {/* <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center whitespace-nowrap"
              >
                {submitted ? 'Joined!' : 'Notify Me'}
              </button>
            </form> */}
          </motion.div>

          {/* Footer / Contact */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-sm text-gray-500">© 2026 Malgudi Restaurant. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Location">
                <MapPin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Phone">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Share">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
