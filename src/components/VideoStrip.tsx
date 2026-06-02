import { videosBySlug } from "@/data/videos";
import { assetUrl } from "@/lib/assetUrl";

interface VideoStripProps {
  slug: string;
}

export function VideoStrip({ slug }: VideoStripProps) {
  const files = videosBySlug[slug] ?? [];
  if (!files.length) return null;

  return (
    <div className="mt-6">
      <p className="mb-3 font-grotesk text-[10px] tracking-[0.3em] text-[#c9a962]">
        [VISUAL TRANSMISSIONS]
      </p>
      <div className="track-rail flex gap-3 overflow-x-auto pb-2">
        {files.map((file) => {
          const src = assetUrl(`/videos/${slug}/${file}`);
          return (
            <video
              key={src}
              src={src}
              className="h-36 w-64 shrink-0 rounded-lg object-cover opacity-90 ring-1 ring-[#c9a962]/20"
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
            />
          );
        })}
      </div>
    </div>
  );
}