#!/usr/bin/env bash
# Open all Dream 30 LinkedIn profiles in the browser
# Usage: bash open-dream-30.sh [--tier1 | --tier2 | --tier3]

TIER1=(
  "https://linkedin.com/in/gisenberg"          # Greg Isenberg
  "https://linkedin.com/in/rubenhassid"         # Ruben Hassid
  "https://linkedin.com/in/zainkahn"            # Zain Kahn
  "https://linkedin.com/in/emollick"            # Ethan Mollick
  "https://linkedin.com/in/jasmin-alic"         # Jasmin Alic
  "https://linkedin.com/in/pascalbornet"        # Pascal Bornet
  "https://linkedin.com/in/alliekmiller"        # Allie K. Miller
  "https://linkedin.com/in/andrej-karpathy"     # Andrej Karpathy
  "https://linkedin.com/in/stevenouri"          # Steve Nouri
  "https://linkedin.com/in/lennyrachitsky"      # Lenny Rachitsky
)

TIER2=(
  "https://linkedin.com/in/andrewyng"           # Andrew Ng
  "https://linkedin.com/in/bernardmarr"         # Bernard Marr
  "https://linkedin.com/in/cassie-kozyrkov"     # Cassie Kozyrkov
  "https://linkedin.com/in/sarahxguo"           # Sarah Guo
  "https://linkedin.com/in/briansolis"          # Brian Solis
  "https://linkedin.com/in/chiphuyen"           # Chip Huyen
  "https://linkedin.com/in/vinvashishta"        # Vin Vashishta
  "https://linkedin.com/in/kirkdborne"          # Kirk Borne
  "https://linkedin.com/in/kaifulee"            # Kai-Fu Lee
  "https://linkedin.com/in/clementdelangue"     # Clem Delangue
)

TIER3=(
  "https://linkedin.com/in/yann-lecun"          # Yann LeCun
  "https://linkedin.com/in/faboretum"           # Fei-Fei Li
  "https://linkedin.com/in/demis-hassabis"      # Demis Hassabis
  "https://linkedin.com/in/garymarcus"          # Gary Marcus
  "https://linkedin.com/in/deaborntosell"       # Devin Reed
  "https://linkedin.com/in/rosssimmonds"        # Ross Simmonds
  "https://linkedin.com/in/andriyburkov"        # Andriy Burkov
  "https://linkedin.com/in/addyosmani"          # Addy Osmani
  "https://linkedin.com/in/helenyu"             # Helen Yu
  "https://linkedin.com/in/sebastianraschka"    # Sebastian Raschka
)

open_urls() {
  for url in "$@"; do
    start "$url"
    sleep 0.5
  done
}

case "${1:-all}" in
  --tier1) echo "Opening Tier 1 (10 profiles)..."; open_urls "${TIER1[@]}" ;;
  --tier2) echo "Opening Tier 2 (10 profiles)..."; open_urls "${TIER2[@]}" ;;
  --tier3) echo "Opening Tier 3 (10 profiles)..."; open_urls "${TIER3[@]}" ;;
  all)
    echo "Opening all 30 Dream 30 profiles..."
    open_urls "${TIER1[@]}"
    open_urls "${TIER2[@]}"
    open_urls "${TIER3[@]}"
    ;;
  *)
    echo "Usage: bash open-dream-30.sh [--tier1 | --tier2 | --tier3]"
    echo "  No flag = open all 30"
    ;;
esac

echo "Done!"
