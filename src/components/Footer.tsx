import { album } from "@/data/tracks";

export function Footer() {
  return (
    <footer className="border-t border-[#c9a962]/10 py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-grotesk text-[10px] tracking-[0.4em] text-[#c9a962]">[STREAMING]</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={album.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[#fa233b] to-[#fb5c74] px-6 py-2.5 font-grotesk text-xs tracking-widest text-white transition hover:brightness-110"
          >
            Apple Music
          </a>
          <a
            href={album.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#1ed760]/50 bg-[#1ed760]/10 px-6 py-2.5 font-grotesk text-xs tracking-widest text-[#1ed760] transition hover:bg-[#1ed760]/20"
          >
            Spotify
          </a>
        </div>
        <p className="mt-12 font-display text-xl tracking-widest text-[#e8d5a3]/80">CODEX</p>
        <p className="mt-2 text-sm text-[#888]">
          {album.artist} · {album.label} · ℗ {album.year}
        </p>
      </div>
    </footer>
  );
}