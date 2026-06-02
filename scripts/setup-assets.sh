#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC="$ROOT/public"
ASSETS="$(cd "$ROOT/.." && pwd)/assets"

mkdir -p "$PUBLIC/images" "$PUBLIC/videos" "$PUBLIC/audio/previews"

cp -f "$ASSETS/images/Codex_Album_Cover.jpg" "$PUBLIC/cover.jpg"
cp -f "$ASSETS/images/01_Corona_Cathedral_of_Fire.jpg" "$PUBLIC/images/corona-hero.jpg"

declare -a PAIRS=(
  "corona:Track_01_Corona"
  "the-unmaking:Track_02_The_Unmaking"
  "the-archive-of-forgotten-light:Track_03_The_Archive_of_Forgotten_Light"
  "veins-of-the-earth:Track_04_Veins_of_the_Earth"
  "siren-protocol:Track_05_Siren_Protocol"
  "the-wound-that-dances:Track_06_The_Wound_That_Dances"
  "the-clockwork-garden:Track_07_The_Clockwork_Garden"
  "dust-and-neon:Track_08_Dust_and_Neon"
  "fools-orbit:Track_09_Fools_Orbit"
  "the-long-collapse:Track_10_The_Long_Collapse"
  "null-choir:Track_11_Null_Choir"
  "apotheosis:Track_12_Apotheosis"
)

for pair in "${PAIRS[@]}"; do
  slug="${pair%%:*}"
  folder="${pair##*:}"
  ln -sfn "$ASSETS/images/$folder" "$PUBLIC/images/$slug"
  rm -rf "$PUBLIC/videos/$slug"
  mkdir -p "$PUBLIC/videos/$slug"
  n=0
  for f in "$ASSETS/videos/$folder"/*.mp4; do
    [[ -f "$f" ]] || continue
    n=$((n + 1))
    [[ $n -le 6 ]] || break
    ln -sfn "$f" "$PUBLIC/videos/$slug/$(basename "$f")"
  done
done

echo "Codex assets linked."