import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle2, Navigation, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Alexandria, LA",
    text: "Joe and his son did an amazing job on our copper gutters. They were professional, on time, and the quality is outstanding. Our house looks completely different now!",
    rating: 5,
    timeAgo: "2 days ago",
    verified: true
  },
  {
    name: "Michael Thompson",
    location: "Pineville, LA",
    text: "I've used Cenla Seamless for two different properties. They are the only ones I trust for gutter work in Central Louisiana. Honest pricing and great work.",
    rating: 5,
    timeAgo: "1 week ago",
    verified: true
  },
  {
    name: "David Miller",
    location: "Lecompte, LA",
    text: "Fast service and the color match was perfect. The seamless gutters they installed have handled the heavy Louisiana rains without a single issue.",
    rating: 5,
    timeAgo: "2 weeks ago",
    verified: true
  },
  {
    name: "Jessica Barnes",
    location: "Woodworth, LA",
    text: "They custom-fabricated 7-inch gutters for our large runoff roof on-site. Incredible speed and the price was exactly what they quoted. Highly recommend.",
    rating: 5,
    timeAgo: "1 month ago",
    verified: true
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate reviews to feel "live"
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 text-white overflow-hidden border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Trust Signals */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Reviews
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Real Results. <br /><span className="text-orange-400 italic">Real Neighbors.</span></h2>

            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              Don't just take our word for it. See what homeowners across Central Louisiana are saying about our family's craftsmanship.
            </p>

            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="flex-shrink-0">
                <div className="flex text-orange-400 text-xl">
                  ★★★★★
                </div>
                <div className="text-2xl font-bold text-white mt-1">4.9/5</div>
              </div>
              <div className="w-px h-12 bg-white/20 mx-2"></div>
              <div>
                <p className="font-semibold">Google Reviews</p>
                <p className="text-sm text-stone-400">Based on 145+ Ratings</p>
              </div>
            </div>
          </div>

          {/* Right: Automated Review Carousel */}
          <div className="lg:w-2/3 w-full relative h-[350px] flex items-center justify-center">

            {/* Background design elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/10 rounded-full blur-3xl z-0"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-2xl relative z-10"
              >
                <div className="bg-stone-800/80 backdrop-blur-xl border border-stone-700/50 p-8 md:p-10 rounded-3xl shadow-2xl relative">

                  {/* Decorative Quote Mark */}
                  <MessageCircle className="absolute -top-6 -right-6 w-20 h-20 text-emerald-500/20 fill-emerald-500/10 rotate-12" />

                  <div className="flex justify-between items-start mb-6 border-b border-stone-700 pb-6 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                        {testimonials[currentIndex].verified && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-stone-400 text-sm">
                        <Navigation className="w-3.5 h-3.5" />
                        {testimonials[currentIndex].location}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex gap-1 text-orange-400 mb-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-stone-500 font-medium tracking-wider uppercase">
                        {testimonials[currentIndex].timeAgo}
                      </span>
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-stone-300 leading-relaxed italic relative z-10">
                    "{testimonials[currentIndex].text}"
                  </p>

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-orange-400 w-8' : 'bg-stone-600 hover:bg-stone-400'}`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
