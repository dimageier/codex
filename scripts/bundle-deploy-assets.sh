#!/usr/bin/env bash
# Copy real files into public/ for GitHub Pages (no symlinks).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ASSETS="$(cd "$ROOT/.." && pwd)/assets"
PUBLIC="$ROOT/public"

rm -rf "$PUBLIC/images" "$PUBLIC/videos"
mkdir -p "$PUBLIC/images" "$PUBLIC/audio/previews"

cp -f "$ASSETS/images/Codex_Album_Cover.jpg" "$PUBLIC/cover.jpg"
cp -f "$ASSETS/images/01_Corona_Cathedral_of_Fire.jpg" "$PUBLIC/images/corona-hero.jpg"

declare -a COPIES=(
  "the-unmaking/Track_02_The_Unmaking/01_The_Veil.jpg"
  "the-archive-of-forgotten-light/Track_03_The_Archive_of_Forgotten_Light/01_Observatory_Archive_Room.jpg"
  "veins-of-the-earth/Track_04_Veins_of_the_Earth/01_Soil_Opened_by_Fingers.jpg"
  "siren-protocol/Track_05_Siren_Protocol/01_Empty_Stone_Chamber_Veil.jpg"
  "the-wound-that-dances/Track_06_The_Wound_That_Dances/01_Bare_Back_with_Markings.jpg"
  "the-clockwork-garden/Track_07_The_Clockwork_Garden/01_Clockwork_Garden_Dawn.jpg"
  "dust-and-neon/Track_08_Dust_and_Neon/01_Rooftop_Party_Neon.jpg"
  "fools-orbit/Track_09_Fools_Orbit/01_Jester_Throne_Turntable.jpg"
  "the-long-collapse/Track_10_The_Long_Collapse/01_Observer_On_Obsidian_Platform.jpg"
  "null-choir/Track_11_Null_Choir/01_Ethereal_Figure_Void.jpg"
  "apotheosis/Track_12_Apotheosis/01_Living_Cathedral.jpg"
  "the-unmaking/Track_02_The_Unmaking/04_The_Unmaking.jpg"
  "siren-protocol/Track_05_Siren_Protocol/18_Hands_Lifting_Veil.jpg"
  "null-choir/Track_11_Null_Choir/15_Figure_Faint_Silhouette.jpg"
  "apotheosis/Track_12_Apotheosis/06_Twelve_Figures_Circle.jpg"
)

for entry in "${COPIES[@]}"; do
  slug="${entry%%/*}"
  rest="${entry#*/}"
  src="$ASSETS/images/$rest"
  dest="$PUBLIC/images/$slug"
  mkdir -p "$dest"
  cp -f "$src" "$dest/$(basename "$src")"
done

echo "Bundled deploy assets into $PUBLIC ($(find "$PUBLIC/images" -type f | wc -l | tr -d ' ') images)"