import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/data/gallery";

export function VisualGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const active = galleryItems.find((g) => g.src === lightbox);

  return (
    <section id="gallery" className="border-t border-[#c9a962]/10 py-24 sacred-bg">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-grotesk text-[10px] tracking-[0.4em] text-[#c9a962]">[VISUAL ARCHIVE]</p>
        <h2 className="mt-2 font-display text-3xl text-[#e8d5a3] md:text-4xl">
          Sacred geometry & ritual light
        </h2>
        <div className="mt-12 columns-2 gap-4 md:columns-3">
          {galleryItems.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setLightbox(item.src)}
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg ring-1 ring-[#c9a962]/15 hover:ring-[#c9a962]/45"
            >
              <img src={item.src} alt={item.alt} className="w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lightbox && active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <img src={lightbox} alt={active.alt} className="max-h-[90vh] max-w-full rounded-lg object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}