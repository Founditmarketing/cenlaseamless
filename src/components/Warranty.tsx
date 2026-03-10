import { motion } from 'motion/react';
import { ShieldCheck, Crosshair, Droplets } from 'lucide-react';

export default function Warranty() {
    return (
        <section className="relative py-24 md:py-32 bg-stone-950 text-white overflow-hidden border-t border-stone-800">

            {/* Background Antigravity Image */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    src="/gutierrez_match_bg.png"
                    alt="Precision seamless gutter installation"
                    className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-900/40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left / Text Payload */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-bold uppercase tracking-widest text-sm mb-8 backdrop-blur-md">
                                <ShieldCheck className="w-4 h-4" />
                                The Joe Gutierrez Match
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                                Gutters So Good, <br />
                                They Defy <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">the Elements.</span>
                            </h2>

                            <p className="text-stone-300 text-lg mb-8 leading-relaxed max-w-lg">
                                For 40 years, we haven't just installed metal on houses. We engineer complete water-evacuation systems designed to outlast the storms, the rot, and the years.
                            </p>

                            {/* Warranty Features */}
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-stone-800/80 border border-stone-700 flex items-center justify-center flex-shrink-0">
                                        <Droplets className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold font-serif text-white">Zero-Leak Lifetime Guarantee</h4>
                                        <p className="text-stone-400 text-sm mt-1">If our seamless corners ever fail, we fix them. Period.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-stone-800/80 border border-stone-700 flex items-center justify-center flex-shrink-0">
                                        <Crosshair className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold font-serif text-white">Pitch-Perfect Precision</h4>
                                        <p className="text-stone-400 text-sm mt-1">Laser-leveled to ensure zero standing water, preventing foundational erosion.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right / Badge */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-stone-700/50 bg-stone-900/40 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl p-8 text-center ring-1 ring-white/10">
                                <span className="text-8xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-yellow-600 mb-2 drop-shadow-lg filter">40</span>
                                <span className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.2em]">Years of</span>
                                <span className="text-sm md:text-base text-stone-400 uppercase tracking-widest mt-2 border-t border-stone-700 pt-2 w-full">Tested Durability</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
