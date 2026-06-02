import { useEffect, useRef, useState } from "react";

interface AudioPreviewProps {
  src: string;
  trackTitle: string;
}

export function AudioPreview({ src, trackTitle }: AudioPreviewProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setPlaying(false);
    setProgress(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [src]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      void audio.play();
      setPlaying(true);
    }
  };

  return (
    <div className="glass-panel rounded-xl p-4">
      <p className="mb-3 font-grotesk text-[10px] tracking-[0.3em] text-[#c9a962]">
        [PREVIEW · 45 SECONDS]
      </p>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={() => {
          const a = audioRef.current;
          if (a?.duration) setProgress((a.currentTime / a.duration) * 100);
        }}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
        }}
      />
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c9a962]/50 text-[#e8d5a3] transition hover:bg-[#c9a962]/15"
          aria-label={playing ? `Pause ${trackTitle} preview` : `Play ${trackTitle} preview`}
        >
          {playing ? (
            <span className="text-lg">❚❚</span>
          ) : (
            <span className="ml-0.5 text-lg">▶</span>
          )}
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-grotesk text-sm text-[#ede9e3]">{trackTitle}</p>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#c9a962] to-[#7dd3fc] transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}