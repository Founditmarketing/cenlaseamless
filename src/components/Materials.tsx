import { motion } from 'motion/react';

const colors = [
  { name: "Royal Brown", hex: "#5D4037" },
  { name: "Antique Ivory", hex: "#F5F5DC" },
  { name: "Classic White", hex: "#FFFFFF" },
  { name: "Wicker", hex: "#D2B48C" },
  { name: "Clay", hex: "#BCAAA4" },
  { name: "Bronze", hex: "#4E342E" },
  { name: "Black", hex: "#212121" },
  { name: "Grecian Green", hex: "#556B2F" },
];

export default function Materials() {
  return (
    <section id="materials" className="py-20 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Premium Materials & Colors</h2>
          <p className="text-stone-300 text-lg">
            Your home deserves the best. Choose from our premium copper options or over 26 baked-on enamel colors to match your exterior perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copper Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-700 to-orange-900 rounded-2xl p-8 shadow-2xl border border-orange-600/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-700 border border-orange-300 shadow-inner"></span>
              The Copper Standard
            </h3>
            <p className="text-orange-100 mb-6 leading-relaxed">
              Nothing beats the longevity and classic aesthetic of real copper. It doesn't just drain water; it adds a distinctive architectural element that increases your home's value and curb appeal.
            </p>
            <ul className="space-y-3 text-orange-50">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                Naturally resists corrosion
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                Develops a beautiful patina over time
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                Lasts 50+ years with proper maintenance
              </li>
            </ul>
          </motion.div>

          {/* Color Palette */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Popular Aluminum Colors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {colors.map((color, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex flex-col items-center group cursor-default"
                >
                  <div 
                    className="w-16 h-16 rounded-full shadow-lg border-2 border-white/10 mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <span className="text-sm text-stone-300 font-medium">{color.name}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-center text-stone-400 text-sm italic">
              * Plus 18 more custom colors available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
