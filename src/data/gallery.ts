export interface GalleryItem {
  src: string;
  alt: string;
  track: string;
}

export const galleryItems: GalleryItem[] = [
  { src: "/cover.jpg", alt: "Codex album cover", track: "Codex" },
  { src: "/images/corona-hero.jpg", alt: "Corona", track: "Corona" },
  { src: "/images/the-unmaking/04_The_Unmaking.jpg", alt: "The Unmaking", track: "The Unmaking" },
  { src: "/images/siren-protocol/18_Hands_Lifting_Veil.jpg", alt: "Siren Protocol", track: "Siren Protocol" },
  { src: "/images/null-choir/15_Figure_Faint_Silhouette.jpg", alt: "Null Choir", track: "Null Choir" },
  { src: "/images/apotheosis/06_Twelve_Figures_Circle.jpg", alt: "Apotheosis", track: "Apotheosis" },
];