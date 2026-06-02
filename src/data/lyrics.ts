export interface LyricSection {
  header: string;
  lines: string[];
}

export const lyricsBySlug: Record<string, LyricSection[]> = {
  corona: [
    {
      header: "[2:00 – 2:45] Chorus – The First Memory",
      lines: [
        "This is not the beginning",
        "This is the first time light",
        "remembered its own name",
      ],
    },
  ],
  "the-unmaking": [
    {
      header: "[2:15 – 3:00] Chorus – The Unmaking",
      lines: ["I will not destroy you", "I will only stop holding you together"],
    },
  ],
  "siren-protocol": [
    {
      header: "[1:30 – 2:15] Chorus – Siren Protocol",
      lines: [
        "Move",
        "because your bones remember the song",
        "before your mind was given a name",
      ],
    },
  ],
  apotheosis: [
    {
      header: "[1:40 – 2:30] Chorus – Apotheosis",
      lines: [
        "This is not the end",
        "This is the moment",
        "the veil",
        "stops being a veil",
      ],
    },
  ],
};