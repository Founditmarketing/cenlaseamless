import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-stone-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/hero_exterior_1772761240375.png"
          alt="Beautiful home with quality gutters"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-900/80 to-stone-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-900/60 border border-emerald-700/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-50 uppercase tracking-wide">Family Owned & Operated Since 1986</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-white">
            Protecting Central Louisiana Homes for <span className="text-orange-400 italic">40 Years</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl leading-relaxed">
            Expert craftsmanship from a father-son team. We specialize in seamless copper and aluminum gutters designed to withstand Louisiana weather.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:318-555-0123"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-md text-stone-900 bg-white hover:bg-stone-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get a Free Estimate
            </a>
            <a
              href="#services"
              className="inline-flex justify-center items-center px-8 py-4 border border-white/30 text-base font-semibold rounded-md text-white hover:bg-white/10 transition-all backdrop-blur-sm gap-2"
            >
              View Our Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-50 to-transparent z-20" />
    </div>
  );
}
