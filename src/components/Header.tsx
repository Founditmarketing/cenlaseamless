import { Phone, MapPin, Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-stone-200">
      {/* Top Bar - Contact Info */}
      <div className="bg-emerald-900 text-emerald-50 py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              Alexandria & Pineville, LA
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              Serving Central LA Since 1986
            </span>
          </div>
          <a href="tel:318-442-8224" className="flex items-center gap-2 hover:text-white transition-colors font-medium">
            <Phone className="w-4 h-4" />
            Call for a Free Estimate: (318) 442-8224
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-900 rounded-sm flex items-center justify-center text-white font-serif font-bold text-xl border-2 border-emerald-800">
              CSG
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-stone-900 leading-none">Cenla</span>
              <span className="text-sm font-medium text-stone-500 tracking-widest uppercase">Seamless Gutters</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {['Services', 'Our Story', 'Materials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-stone-700 hover:text-orange-600 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:318-442-8224"
              className="bg-orange-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-orange-700 transition-colors shadow-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-stone-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['Services', 'Our Story', 'Materials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-3 text-base font-medium text-stone-800 hover:bg-stone-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="tel:318-442-8224"
                className="block w-full text-center mt-4 bg-orange-600 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-700 transition-colors"
              >
                Call (318) 442-8224
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
