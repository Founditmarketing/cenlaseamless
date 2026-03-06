import { motion } from 'motion/react';
import { Wrench, Droplets, Shield, Hammer, Ruler, Palette } from 'lucide-react';

const services = [
  {
    icon: Ruler,
    title: "Seamless Gutters",
    description: "Custom-fit 6-inch and 7-inch seamless aluminum gutters fabricated on-site for a perfect fit to your home's unique dimensions."
  },
  {
    icon: Droplets,
    title: "Copper Specialists",
    description: "Premium copper gutter systems that age beautifully, adding timeless elegance and superior durability to your property."
  },
  {
    icon: Shield,
    title: "Gutter Guards",
    description: "Advanced leaf protection systems to keep your gutters flowing freely and eliminate dangerous ladder climbing for cleaning."
  },
  {
    icon: Hammer,
    title: "Expert Installation",
    description: "Professional installation by our experienced team, ensuring proper pitch and secure attachment to protect your fascia."
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "From sealing leaks to re-securing loose sections, we extend the life of your existing gutter system."
  },
  {
    icon: Palette,
    title: "26+ Colors",
    description: "A wide selection of baked-on enamel colors to perfectly match or accent your home's trim, siding, or brick."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">World-Class Craftsmanship</h2>
          <p className="text-lg text-stone-600">
            We don't just hang gutters; we engineer water management systems that protect your foundation and beautify your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md hover:border-orange-300 transition-all group"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <service.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
