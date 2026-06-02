import { useCallback, useEffect, useState } from "react";
import { tracks } from "@/data/tracks";

export function useActiveTrack(initialId = 1) {
  const [activeId, setActiveId] = useState(initialId);
  const activeTrack = tracks.find((t) => t.id === activeId) ?? tracks[0];

  const goNext = useCallback(() => {
    setActiveId((id) => (id >= 12 ? 1 : id + 1));
  }, []);

  const goPrev = useCallback(() => {
    setActiveId((id) => (id <= 1 ? 12 : id - 1));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return { activeId, activeTrack, setActiveId, goNext, goPrev };
}