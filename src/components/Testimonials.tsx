import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Alexandria, LA",
    text: "Joe and his son did an amazing job on our copper gutters. They were professional, on time, and the quality is outstanding. Our house looks completely different now!",
    rating: 5
  },
  {
    name: "Michael Thompson",
    location: "Pineville, LA",
    text: "I've used Cenla Seamless for two different properties. They are the only ones I trust for gutter work in Central Louisiana. Honest pricing and great work.",
    rating: 5
  },
  {
    name: "David Miller",
    location: "Lecompte, LA",
    text: "Fast service and the color match was perfect. The seamless gutters they installed have handled the heavy Louisiana rains without a single issue.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">What Our Neighbors Say</h2>
          <div className="flex justify-center gap-1 text-orange-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <p className="text-lg text-emerald-100">Trusted by hundreds of homeowners across Central Louisiana.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-emerald-800/40 p-8 rounded-2xl shadow-sm border border-emerald-700/50 relative backdrop-blur-sm"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-700 opacity-50" />
              <div className="flex gap-1 text-orange-400 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-emerald-50 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-emerald-300">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
