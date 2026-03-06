import { motion } from 'motion/react';

export default function Heritage() {
  return (
    <section id="our-story" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-block border-b-2 border-emerald-600 pb-1 mb-6">
              <span className="text-emerald-700 font-bold uppercase tracking-widest text-sm">Our Heritage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              40 Years of Trust in Central Louisiana
            </h2>
            <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
              <p>
                <strong className="text-stone-900">Since 1986</strong>, Cenla Seamless Gutters has been more than just a business—it's a family legacy. Founded by Joe Gutierrez, we've built our reputation one handshake and one perfect install at a time.
              </p>
              <p>
                With 40 years of experience under Joe's belt and his son Joseph bringing 25 years of expertise to the team, we offer a level of generational knowledge that big corporate franchises simply can't match.
              </p>
              <p>
                We live here, we work here, and we treat every home in Alexandria and the surrounding areas as if it were our own. When you call us, you're not getting a call center; you're getting a family that cares about your home's protection.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <span className="block text-4xl font-serif font-bold text-orange-600">1986</span>
                <span className="text-sm text-stone-500 uppercase tracking-wide font-medium">Established</span>
              </div>
              <div className="h-12 w-px bg-stone-200"></div>
              <div className="text-center">
                <span className="block text-4xl font-serif font-bold text-orange-600">65+</span>
                <span className="text-sm text-stone-500 uppercase tracking-wide font-medium">Years Combined Exp.</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-stone-100 group">
              <img
                src="/heritage_team_1772761255629.png"
                alt="Contractor working on a home"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-2xl italic">"Quality is our family tradition."</p>
                <p className="text-sm opacity-90 mt-1">— The Gutierrez Family</p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-50 rounded-full -z-10 opacity-80"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
