import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-900 rounded-sm flex items-center justify-center text-white font-serif font-bold text-lg border border-emerald-800">
                CSG
              </div>
              <span className="font-serif text-xl font-bold text-white">Cenla Seamless Gutters</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Providing world-class gutter solutions to Central Louisiana since 1986. Family owned, quality driven.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#our-story" className="hover:text-white transition-colors">Our Heritage</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Materials & Colors</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Alexandria, Louisiana</li>
              <li><a href="tel:318-555-0123" className="hover:text-white transition-colors">(318) 555-0123</a></li>
              <li className="pt-4 flex gap-4">
                <a href="#" className="text-stone-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-stone-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-900 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Cenla Seamless Gutters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
