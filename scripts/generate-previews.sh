#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/audio/previews"
DOWNLOADS="$HOME/Downloads"
mkdir -p "$OUT"

declare -a SOURCES=(
  "01:codex-1-2.wav" "02:codex-2-2.wav" "03:codex-3-4.wav" "04:codex-4.wav"
  "05:codex-5.wav" "06:codex-6.wav" "07:codex-7-garden.wav" "08:codex-8.wav"
  "09:codex-9.wav" "10:codex-10.wav" "11:codex-11-2.wav" "12:codex-12.wav"
)

for entry in "${SOURCES[@]}"; do
  num="${entry%%:*}"
  file="${entry##*:}"
  src="$DOWNLOADS/$file"
  dest="$OUT/track-${num}.mp3"
  [[ -f "$src" ]] || { echo "Skip track-$num"; continue; }
  duration=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$src" 2>/dev/null || echo 120)
  start=90
  awk "BEGIN {exit !($duration < 80)}" && start=15
  ffmpeg -y -hide_banner -loglevel error -ss "$start" -t 45 -i "$src" -ac 1 -b:a 128k "$dest"
  echo "track-$num ok"
done