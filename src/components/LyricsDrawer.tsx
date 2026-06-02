import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lyricsBySlug } from "@/data/lyrics";

interface LyricsDrawerProps {
  slug: string;
}

export function LyricsDrawer({ slug }: LyricsDrawerProps) {
  const [open, setOpen] = useState(false);
  const sections = lyricsBySlug[slug] ?? [];

  if (!sections.length) return null;

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="font-grotesk text-sm tracking-widest text-[#c9a962] transition hover:text-[#e8d5a3]"
      >
        {open ? "[ HIDE LYRICS ]" : "[ VIEW LYRICS ]"}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="glass-panel mt-4 space-y-6 rounded-xl p-6">
              {sections.map((section) => (
                <div key={section.header}>
                  <p className="mb-2 font-grotesk text-[10px] tracking-wider text-[#c9a962]/80">
                    {section.header}
                  </p>
                  <div className="space-y-1 font-light leading-relaxed text-[#ede9e3]/90">
                    {section.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}