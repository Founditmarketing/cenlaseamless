import { motion } from 'motion/react';

const images = [
  {
    url: "/gallery_seamless_1772761271385.png",
    title: "Seamless Installation",
    category: "Aluminum"
  },
  {
    url: "/gallery_copper_1772761285245.png",
    title: "Copper Detail",
    category: "Premium"
  },
  {
    url: "/gallery_commercial_1772761299097.png",
    title: "Commercial Project",
    category: "7-Inch Box"
  },
  {
    url: "/gallery_guards_1772761315088.png",
    title: "Residential Protection",
    category: "Gutter Guards"
  },
  {
    url: "/gallery_miters_1772761329378.png",
    title: "Custom Miters",
    category: "Craftsmanship"
  },
  {
    url: "/gallery_black_1772761341871.png",
    title: "Modern Finish",
    category: "Black Enamel"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Our Recent Work</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Take a look at some of our completed projects across Central Louisiana. We take pride in every inch of gutter we install.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-md aspect-square"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">{image.category}</span>
                <h3 className="text-white font-serif text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
