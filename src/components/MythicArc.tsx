import { motion } from "framer-motion";
import { tracks } from "@/data/tracks";

interface MythicArcProps {
  activeId: number;
  onSelect: (id: number) => void;
}

export function MythicArc({ activeId, onSelect }: MythicArcProps) {
  return (
    <section className="relative border-y border-[#c9a962]/10 py-20 sacred-bg">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 font-grotesk text-[10px] tracking-[0.4em] text-[#c9a962]">[MYTHIC ARC]</p>
        <h2 className="font-display text-3xl tracking-wide text-[#e8d5a3] md:text-4xl">
          From ignition to apotheosis
        </h2>
        <p className="mt-4 max-w-2xl text-[#c3b8a3]/90">
          Twelve tracks — matching the album on Apple Music — from solar ignition through void,
          collapse, and transcendence.
        </p>
        <div className="mt-12 flex gap-3 overflow-x-auto pb-4 track-rail md:flex-wrap md:overflow-visible">
          {tracks.map((track, i) => (
            <motion.button
              key={track.id}
              type="button"
              onClick={() => {
                onSelect(track.id);
                document.getElementById("tracks")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`shrink-0 rounded-lg border px-4 py-3 text-left transition ${
                activeId === track.id
                  ? "border-[#c9a962] bg-[#c9a962]/15"
                  : "border-white/10 bg-white/5 hover:border-[#c9a962]/40"
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <span className="font-grotesk text-[10px] text-[#c9a962]">
                {String(track.id).padStart(2, "0")}
              </span>
              <p className="mt-1 font-grotesk text-sm text-[#ede9e3]">{track.arcLabel}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}