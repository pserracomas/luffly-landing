#!/bin/sh
# Regenerates every icon the site uses from brand/icon-1024.png (the app icon, 1024 × 1024, no
# transparency). Swap that file for the final icon and run: sh brand/make-icons.sh
# Uses macOS's built-in `sips`.
set -e
cd "$(dirname "$0")/.."
SRC=brand/icon-1024.png
NAVY=0B2A4A

sips -s format png -z 64 64 "$SRC" --out public/favicon.png >/dev/null
sips -s format png -z 180 180 "$SRC" --out public/apple-touch-icon.png >/dev/null
sips -s format png -z 512 512 "$SRC" --out public/icon-512.png >/dev/null
# Shown in the hero and the footer, optimised by Astro at build time.
sips -s format png -z 512 512 "$SRC" --out src/assets/icon.png >/dev/null

# Open Graph image: the icon centred on navy, 1200 × 630.
TMP=$(mktemp -d)
sips -s format png -z 400 400 "$SRC" --out "$TMP/icon.png" >/dev/null
sips -p 630 1200 --padColor "$NAVY" "$TMP/icon.png" --out "$TMP/og.png" >/dev/null
sips -s format jpeg -s formatOptions 88 "$TMP/og.png" --out public/og.jpg >/dev/null
rm -rf "$TMP"

echo "Icons updated: public/favicon.png, apple-touch-icon.png, icon-512.png, og.jpg and src/assets/icon.png"
