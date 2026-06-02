export interface Track {
  id: number;
  slug: string;
  title: string;
  muses: string;
  genre: string;
  concept: string;
  arcLabel: string;
  heroImage: string;
  previewAudio: string;
}

export const album = {
  title: "Codex",
  artist: "Dimitri Geier",
  label: "Urantian Beats",
  year: 2026,
  genre: "Electronica",
  trackCount: 12,
  appleMusic: "https://music.apple.com/us/album/codex/6775315893",
  spotify:
    "https://open.spotify.com/album/1LdnuUwln9Whj8bOUtPUc3",
};

export const tracks: Track[] = [
  {
    id: 1,
    slug: "corona",
    title: "Corona",
    muses: "Urania + Euterpe",
    genre: "Solar atmospheric techno",
    concept:
      "The moment a star ignites its corona — raw plasma, magnetic fields, and the first breath of light.",
    arcLabel: "Ignition",
    heroImage: "/images/corona-hero.jpg",
    previewAudio: "/audio/previews/track-01.mp3",
  },
  {
    id: 2,
    slug: "the-unmaking",
    title: "The Unmaking",
    muses: "Melpomene + Polyhymnia",
    genre: "Dark sacred ritual techno",
    concept:
      "The deliberate, reverent dismantling of a god or a world — the beauty in endings.",
    arcLabel: "Unmaking",
    heroImage: "/images/the-unmaking/01_The_Veil.jpg",
    previewAudio: "/audio/previews/track-02.mp3",
  },
  {
    id: 3,
    slug: "the-archive-of-forgotten-light",
    title: "The Archive of Forgotten Light",
    muses: "Clio + Calliope",
    genre: "Narrative cinematic techno",
    concept:
      "A vault of lost radiance — star catalogs, glass plates, and names the sky refused to forget.",
    arcLabel: "Archive",
    heroImage:
      "/images/the-archive-of-forgotten-light/01_Observatory_Archive_Room.jpg",
    previewAudio: "/audio/previews/track-03.mp3",
  },
  {
    id: 4,
    slug: "veins-of-the-earth",
    title: "Veins of the Earth",
    muses: "Erato + Terpsichore",
    genre: "Organic future techno",
    concept:
      "Roots, soil, and bodies intertwined — the earth remembering every touch that ever reached it.",
    arcLabel: "Earth",
    heroImage: "/images/veins-of-the-earth/01_Soil_Opened_by_Fingers.jpg",
    previewAudio: "/audio/previews/track-04.mp3",
  },
  {
    id: 5,
    slug: "siren-protocol",
    title: "Siren Protocol",
    muses: "Terpsichore + Polyhymnia",
    genre: "Sacred dance techno",
    concept:
      "The dance that calls souls across the veil — movement as invocation.",
    arcLabel: "Invocation",
    heroImage: "/images/siren-protocol/01_Empty_Stone_Chamber_Veil.jpg",
    previewAudio: "/audio/previews/track-05.mp3",
  },
  {
    id: 6,
    slug: "the-wound-that-dances",
    title: "The Wound That Dances",
    muses: "Melpomene + Erato",
    genre: "Cathartic techno",
    concept:
      "Pain that refuses to heal quietly — the body as proof that survival can move.",
    arcLabel: "Wound",
    heroImage: "/images/the-wound-that-dances/01_Bare_Back_with_Markings.jpg",
    previewAudio: "/audio/previews/track-06.mp3",
  },
  {
    id: 7,
    slug: "the-clockwork-garden",
    title: "The Clockwork Garden",
    muses: "Euterpe + Clio",
    genre: "Mechanical-organic techno",
    concept:
      "A garden grown by machines that remember the names of every flower that ever existed.",
    arcLabel: "Garden",
    heroImage: "/images/the-clockwork-garden/01_Clockwork_Garden_Dawn.jpg",
    previewAudio: "/audio/previews/track-07.mp3",
  },
  {
    id: 8,
    slug: "dust-and-neon",
    title: "Dust and Neon",
    muses: "Thalia + Euterpe",
    genre: "Electro / tech-house",
    concept:
      "The last party at the end of the universe — joyful, desperate, and oddly tender.",
    arcLabel: "Neon",
    heroImage: "/images/dust-and-neon/01_Rooftop_Party_Neon.jpg",
    previewAudio: "/audio/previews/track-08.mp3",
  },
  {
    id: 9,
    slug: "fools-orbit",
    title: "Fool's Orbit",
    muses: "Thalia + Calliope",
    genre: "Theatrical tech-house",
    concept:
      "A trickster deity on a doomed but beautiful orbital path — satirical yet strangely moving.",
    arcLabel: "Trickster",
    heroImage: "/images/fools-orbit/01_Jester_Throne_Turntable.jpg",
    previewAudio: "/audio/previews/track-09.mp3",
  },
  {
    id: 10,
    slug: "the-long-collapse",
    title: "The Long Collapse",
    muses: "Calliope + Melpomene",
    genre: "Epic cinematic techno",
    concept:
      "The slow, inevitable fall of an empire that lasted ten thousand years.",
    arcLabel: "Collapse",
    heroImage:
      "/images/the-long-collapse/01_Observer_On_Obsidian_Platform.jpg",
    previewAudio: "/audio/previews/track-10.mp3",
  },
  {
    id: 11,
    slug: "null-choir",
    title: "Null Choir",
    muses: "Polyhymnia + Urania",
    genre: "Void ambient techno",
    concept:
      "A choir singing in the vacuum between galaxies — heard through gravitational lensing.",
    arcLabel: "Void",
    heroImage: "/images/null-choir/01_Ethereal_Figure_Void.jpg",
    previewAudio: "/audio/previews/track-11.mp3",
  },
  {
    id: 12,
    slug: "apotheosis",
    title: "Apotheosis",
    muses: "Full Council",
    genre: "Transcendent finale",
    concept:
      "Every thread converges. The veil is lifted. The listener is invited to step through.",
    arcLabel: "Apotheosis",
    heroImage: "/images/apotheosis/01_Living_Cathedral.jpg",
    previewAudio: "/audio/previews/track-12.mp3",
  },
];