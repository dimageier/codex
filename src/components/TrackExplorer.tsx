import { tracks } from "@/data/tracks";
import type { Track } from "@/data/tracks";
import { TrackPanel } from "./TrackPanel";

interface TrackExplorerProps {
  activeId: number;
  activeTrack: Track;
  onSelect: (id: number) => void;
}

export function TrackExplorer({
  activeId,
  activeTrack,
  onSelect,
}: TrackExplorerProps) {
  return (
    <section id="tracks" className="mx-auto max-w-7xl px-6 py-24">
      <p className="font-grotesk text-[10px] tracking-[0.4em] text-[#c9a962]">[TRACKLIST]</p>
      <h2 className="mt-2 font-display text-3xl text-[#e8d5a3] md:text-4xl">
        Twelve transmissions
      </h2>
      <p className="mt-2 text-sm text-[#888]">← → to change tracks · 45-second previews</p>

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:gap-12">
        <nav
          className="track-rail flex gap-2 overflow-x-auto pb-2 lg:max-h-[70vh] lg:w-56 lg:shrink-0 lg:flex-col lg:overflow-y-auto"
          aria-label="Track list"
        >
          {tracks.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelect(t.id)}
              className={`shrink-0 rounded-lg border px-4 py-3 text-left transition lg:w-full ${
                activeId === t.id
                  ? "border-[#c9a962] bg-[#c9a962]/12"
                  : "border-white/8 bg-white/3 hover:border-[#c9a962]/35"
              }`}
            >
              <span className="font-grotesk text-[10px] text-[#c9a962]/70">
                {String(t.id).padStart(2, "0")}
              </span>
              <p className="font-grotesk text-sm text-[#ede9e3]">{t.title}</p>
            </button>
          ))}
        </nav>
        <TrackPanel track={activeTrack} />
      </div>
    </section>
  );
}