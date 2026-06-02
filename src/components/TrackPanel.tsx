import { motion, AnimatePresence } from "framer-motion";
import type { Track } from "@/data/tracks";
import { album } from "@/data/tracks";
import { AudioPreview } from "./AudioPreview";
import { VideoStrip } from "./VideoStrip";
import { LyricsDrawer } from "./LyricsDrawer";

interface TrackPanelProps {
  track: Track;
}

export function TrackPanel({ track }: TrackPanelProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={track.id}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -16 }}
        transition={{ duration: 0.35 }}
        className="min-w-0 flex-1"
      >
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-[#c9a962]/20">
          <img src={track.heroImage} alt={track.title} className="aspect-[16/10] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <p className="font-grotesk text-[10px] tracking-[0.35em] text-[#c9a962]">
              [TRACK {String(track.id).padStart(2, "0")}]
            </p>
            <h3 className="font-display text-3xl text-[#faf8f2] md:text-4xl">{track.title}</h3>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-[#c9a962]/30 px-3 py-1 font-grotesk text-[10px] tracking-wider text-[#c9a962]">
            [{track.muses}]
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1 font-grotesk text-[10px] text-[#c3b8a3]">
            {track.genre}
          </span>
        </div>
        <p className="mt-5 text-lg font-light leading-relaxed text-[#c3b8a3]">{track.concept}</p>
        <div className="mt-8">
          <AudioPreview src={track.previewAudio} trackTitle={track.title} />
        </div>
        <a
          href={album.appleMusic}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-grotesk text-xs tracking-widest text-[#c9a962] transition hover:text-[#e8d5a3]"
        >
          [STREAM ON APPLE MUSIC →]
        </a>
        <VideoStrip slug={track.slug} />
        <LyricsDrawer slug={track.slug} />
      </motion.article>
    </AnimatePresence>
  );
}