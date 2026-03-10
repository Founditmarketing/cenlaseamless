import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfterSlider() {
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [sliderPosition, setSliderPosition] = useState(50); // percentage

    const handlePointerMove = (e: React.PointerEvent | PointerEvent) => {
        if (!isResizing || !containerRef.current) return;

        requestAnimationFrame(() => {
            const rect = containerRef.current!.getBoundingClientRect();
            const clientX = 'touches' in e ? (e as any).touches[0].clientX : (e as MouseEvent).clientX;
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        });
    };

    useEffect(() => {
        const handleMove = (e: PointerEvent) => handlePointerMove(e);
        const handleUp = () => setIsResizing(false);

        if (isResizing) {
            window.addEventListener('pointermove', handleMove);
            window.addEventListener('pointerup', handleUp);
        }

        return () => {
            window.removeEventListener('pointermove', handleMove);
            window.removeEventListener('pointerup', handleUp);
        };
    }, [isResizing]);

    return (
        <section className="py-20 bg-stone-900 border-t border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">See the Difference</h2>
                    <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                        Drag the slider to see how a professional seamless gutter installation instantly transforms a home's exterior and structural integrity.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] select-none touch-none cursor-ew-resize border border-white/10"
                    ref={containerRef}
                    onPointerDown={(e) => {
                        setIsResizing(true);
                        handlePointerMove(e);
                    }}
                >
                    {/* After Image (Full Background) */}
                    <div className="absolute inset-0">
                        <img
                            src="/after_comparison.jpg"
                            alt="Brand new seamless gutters installation"
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>

                    {/* Before Image (Clipped Overlay) */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img
                            src="/before_comparison.jpg"
                            alt="Old, rusting and leaking gutters"
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-stone-100 hover:scale-110 transition-transform">
                            <ChevronLeft className="w-5 h-5 text-stone-600" />
                            <ChevronRight className="w-5 h-5 text-stone-600 -ml-2" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
