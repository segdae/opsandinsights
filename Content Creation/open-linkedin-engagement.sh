#!/usr/bin/env bash
# Open LinkedIn profiles for engagement sessions
# Usage: bash open-linkedin-engagement.sh [OPTION]
#
# Options:
#   --dream-all       All 30 Dream 30 profiles
#   --dream-tier1     Dream 30 Tier 1 — daily engagement (10)
#   --dream-tier2     Dream 30 Tier 2 — 3x/week (10)
#   --dream-tier3     Dream 30 Tier 3 — weekly (10)
#   --rising          All Rising creators (40)
#   --rising-auto     Automation Builds (6)
#   --rising-agents   Agentic AI / Engineering (3)
#   --rising-tools    AI Tools & Tutorials (4)
#   --rising-notion   Notion & Productivity (3)
#   --rising-bip      Building in Public (2)
#   --rising-pm       Product Managers Using AI (4)
#   --rising-builders AI Builders & Developers (4)
#   --rising-labs     Frontier Lab Voices (8)
#   --rising-devrel   AI Developer Advocates (6)
#   --vc              VC & Startup voices (39)
#   --vc-partners     VC Partners only (20)
#   --vc-founders     Tech Founders & CEOs only (12)
#   --vc-solo         Solo GPs, Angels & Operators (7)
#   --all             Everything — Dream 30 + Rising + VC (109)
#   (no flag)         Shows usage

# ── Dream 30 ──────────────────────────────────────────────

DREAM_TIER1=(
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

DREAM_TIER2=(
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

DREAM_TIER3=(
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

# ── Rising: Automation Builds (6) ────────────────────────

RISING_AUTO=(
  "https://linkedin.com/in/nick-saraev"                # Nick Saraev
  "https://linkedin.com/in/robin-van-veen"              # Robin van Veen
  "https://linkedin.com/in/nateherkelman"               # Nate Herkelman
  "https://linkedin.com/in/taylorharen"                 # Taylor Haren
  "https://linkedin.com/in/benvansprundel"              # Ben van Sprundel
  "https://linkedin.com/in/marc-bresser-884628322"      # Marc Bresser
)

# ── Rising: Agentic AI / Engineering (3) ─────────────────

RISING_AGENTS=(
  "https://linkedin.com/in/vrsen"               # Arsenii Shatokhin (VRSEN)
  "https://linkedin.com/in/liamottley"           # Liam Ottley
  "https://linkedin.com/in/brockmesarich"        # Brock Mesarich
)

# ── Rising: AI Tools & Tutorials (4) ────────────────────

RISING_TOOLS=(
  "https://linkedin.com/in/charlie-hills"        # Charlie Hills
  "https://linkedin.com/in/amyru"                # Amy Ru
  "https://linkedin.com/in/ballykehal"           # Bally S Kehal
  "https://linkedin.com/in/aishwarya-srinivasan" # Aishwarya Srinivasan
)

# ── Rising: Notion & Productivity (3) ───────────────────

RISING_NOTION=(
  "https://linkedin.com/in/tomfrankly"           # Thomas Frank
  "https://linkedin.com/in/august-bradley"       # August Bradley
)

# ── Rising: Building in Public (2) ──────────────────────

RISING_BIP=(
  "https://linkedin.com/in/jedd-talbot-26794a2b6" # Jedd Talbot
  "https://linkedin.com/in/simonhoiberg"           # Simon Hoiberg
)

# ── Rising: Product Managers Using AI (4) ───────────────

RISING_PM=(
  "https://linkedin.com/in/carlvellotti"         # Carl Vellotti
  "https://linkedin.com/in/diegogranadosh"       # Diego Granados
  "https://linkedin.com/in/yana-yakubsfeld"      # Yana Yakubsfeld
  "https://linkedin.com/in/aatirar"              # Aatir Abdul Rauf
)

# ── Rising: AI Builders & Developers (4) ────────────────

RISING_BUILDERS=(
  "https://linkedin.com/in/nirkaufman"           # Nir Kaufman
  "https://linkedin.com/in/zpahuja"              # Zubin Pahuja
  "https://linkedin.com/in/markridley"           # Mark Ridley
  "https://linkedin.com/in/menno-fokkema"        # Menno Fokkema
)

# ── Rising: Frontier Lab Voices (8) ─────────────────────

RISING_LABS=(
  "https://linkedin.com/in/alex-albert"          # Alex Albert (Anthropic)
  "https://linkedin.com/in/bcherny"              # Boris Cherny (Anthropic — Claude Code)
  "https://linkedin.com/in/amanda-askell"        # Amanda Askell (Anthropic)
  "https://linkedin.com/in/ameisen"              # Emmanuel Ameisen (Anthropic)
  "https://linkedin.com/in/dave-orr"             # Dave Orr (Anthropic / ex-DeepMind)
  "https://linkedin.com/in/natolambert"          # Nathan Lambert (AI2 / ex-HF/DeepMind/Meta)
  "https://linkedin.com/in/srijan-mishra"        # Srijan Mishra (Mistral AI)
  "https://linkedin.com/in/sashaluccioniphd"     # Dr. Sasha Luccioni (Hugging Face)
)

# ── Rising: AI Developer Advocates (6) ──────────────────

RISING_DEVREL=(
  "https://linkedin.com/in/logankilpatrick"              # Logan Kilpatrick (Google DeepMind / ex-OpenAI)
  "https://linkedin.com/in/romainhuet"                   # Romain Huet (OpenAI)
  "https://linkedin.com/in/dkundel"                      # Dominik Kundel (OpenAI)
  "https://linkedin.com/in/philipp-schmid-a6a2bb196"     # Philipp Schmid (Google DeepMind / ex-HF)
  "https://linkedin.com/in/jalammar"                     # Jay Alammar (Cohere)
  "https://linkedin.com/in/rizel-bobb-semple"            # Rizel Scarlett (Block / ex-GitHub)
)

# ── Rising: Above 50K (Aspirational Peers) ──────────────

RISING_ASPIRATIONAL=(
  "https://linkedin.com/in/retentionadam"        # Adam Robinson
  "https://linkedin.com/in/shyveeshi"            # Shyvee Shi
  "https://linkedin.com/in/aagupta"              # Aakash Gupta
)

# ── VC & Startup: Partners (20) ──────────────────────────

VC_PARTNERS=(
  "https://linkedin.com/in/vinod-khosla-65387416"       # Vinod Khosla (Khosla Ventures)
  "https://linkedin.com/in/hemanttaneja"                 # Hemant Taneja (General Catalyst)
  "https://linkedin.com/in/gradypb"                      # Pat Grady (Sequoia)
  "https://linkedin.com/in/alfredlin"                    # Alfred Lin (Sequoia)
  "https://linkedin.com/in/konstantinebuhler"            # Konstantine Buhler (Sequoia)
  "https://linkedin.com/in/andrewchen"                   # Andrew Chen (a16z)
  "https://linkedin.com/in/martincasado"                 # Martin Casado (a16z)
  "https://linkedin.com/in/chris-dixon-9599b127b"        # Chris Dixon (a16z crypto)
  "https://linkedin.com/in/raghuraghuram"                # Raghu Raghuram (a16z)
  "https://linkedin.com/in/trae-stephens-485a811"        # Trae Stephens (Founders Fund / Anduril)
  "https://linkedin.com/in/harrystebbings"               # Harry Stebbings (20VC)
  "https://linkedin.com/in/sarahtavel"                   # Sarah Tavel (Benchmark)
  "https://linkedin.com/in/byrondeeter"                  # Byron Deeter (Bessemer)
  "https://linkedin.com/in/jerrychenprofile"             # Jerry Chen (Greylock)
  "https://linkedin.com/in/nabeelhyatt"                  # Nabeel Hyatt (Spark Capital)
  "https://linkedin.com/in/tomasztunguz"                 # Tomasz Tunguz (Theory Ventures)
  "https://linkedin.com/in/debarghyadas"                 # Deedy Das (Menlo Ventures)
  "https://linkedin.com/in/loganbartlett"                # Logan Bartlett (Redpoint)
  "https://linkedin.com/in/turck"                        # Matt Turck (FirstMark)
  "https://linkedin.com/in/semilshah"                    # Semil Shah (Haystack / Lightspeed)
)

# ── VC & Startup: Tech Founders & CEOs (12) ─────────────

VC_FOUNDERS=(
  "https://linkedin.com/in/palmer-luckey-21a16959"       # Palmer Luckey (Anduril / Oculus)
  "https://linkedin.com/in/garrytan"                     # Garry Tan (Y Combinator)
  "https://linkedin.com/in/satyanadella"                 # Satya Nadella (Microsoft)
  "https://linkedin.com/in/jenhsunhuang"                 # Jensen Huang (NVIDIA)
  "https://linkedin.com/in/reidhoffman"                  # Reid Hoffman (LinkedIn / Greylock)
  "https://linkedin.com/in/chamath"                      # Chamath Palihapitiya (Social Capital)
  "https://linkedin.com/in/davidoliversacks"             # David Sacks (Craft Ventures / All-In)
  "https://linkedin.com/in/jasoncalacanis"               # Jason Calacanis (Angel / All-In)
  "https://linkedin.com/in/davidfriedberg"               # David Friedberg (Production Board / All-In)
  "https://linkedin.com/in/balajissrinivasan"            # Balaji Srinivasan (Network State)
  "https://linkedin.com/in/nikitabier"                   # Nikita Bier (X / TBH / Gas)
  "https://linkedin.com/in/catherinedwood"               # Cathie Wood (ARK Invest)
)

# ── VC & Startup: Solo GPs, Angels & Operators (7) ──────

VC_SOLO=(
  "https://linkedin.com/in/josh-wolfe-7883"              # Josh Wolfe (Lux Capital)
  "https://linkedin.com/in/eladgil"                      # Elad Gil (Gil Capital)
  "https://linkedin.com/in/benedictevans"                # Benedict Evans (Independent / ex-a16z)
  "https://linkedin.com/in/ozeev"                        # Oren Zeev (Zeev Ventures)
  "https://linkedin.com/in/michael-solana-2484a644"      # Mike Solana (Founders Fund / Pirate Wires)
  "https://linkedin.com/in/emmettshear"                  # Emmett Shear (Stem AI / ex-Twitch)
  "https://linkedin.com/in/bfeld"                        # Brad Feld (Foundry / Techstars)
)

# ── Functions ─────────────────────────────────────────────

open_urls() {
  for url in "$@"; do
    start "$url"
    sleep 0.5
  done
}

all_rising() {
  open_urls "${RISING_AUTO[@]}"
  open_urls "${RISING_AGENTS[@]}"
  open_urls "${RISING_TOOLS[@]}"
  open_urls "${RISING_NOTION[@]}"
  open_urls "${RISING_BIP[@]}"
  open_urls "${RISING_PM[@]}"
  open_urls "${RISING_BUILDERS[@]}"
  open_urls "${RISING_LABS[@]}"
  open_urls "${RISING_DEVREL[@]}"
  open_urls "${RISING_ASPIRATIONAL[@]}"
}

all_dream() {
  open_urls "${DREAM_TIER1[@]}"
  open_urls "${DREAM_TIER2[@]}"
  open_urls "${DREAM_TIER3[@]}"
}

all_vc() {
  open_urls "${VC_PARTNERS[@]}"
  open_urls "${VC_FOUNDERS[@]}"
  open_urls "${VC_SOLO[@]}"
}

# ── Main ──────────────────────────────────────────────────

case "${1:-help}" in
  --dream-all)      echo "Opening Dream 30 (30 profiles)...";      all_dream ;;
  --dream-tier1)    echo "Opening Dream Tier 1 (10)...";            open_urls "${DREAM_TIER1[@]}" ;;
  --dream-tier2)    echo "Opening Dream Tier 2 (10)...";            open_urls "${DREAM_TIER2[@]}" ;;
  --dream-tier3)    echo "Opening Dream Tier 3 (10)...";            open_urls "${DREAM_TIER3[@]}" ;;
  --rising)         echo "Opening Rising creators (40 profiles)..."; all_rising ;;
  --rising-auto)    echo "Opening Rising: Automation (6)...";        open_urls "${RISING_AUTO[@]}" ;;
  --rising-agents)  echo "Opening Rising: Agents (3)...";            open_urls "${RISING_AGENTS[@]}" ;;
  --rising-tools)   echo "Opening Rising: AI Tools (4)...";          open_urls "${RISING_TOOLS[@]}" ;;
  --rising-notion)  echo "Opening Rising: Notion (2)...";            open_urls "${RISING_NOTION[@]}" ;;
  --rising-bip)     echo "Opening Rising: Build in Public (2)...";   open_urls "${RISING_BIP[@]}" ;;
  --rising-pm)      echo "Opening Rising: Product Managers (4)...";  open_urls "${RISING_PM[@]}" ;;
  --rising-builders) echo "Opening Rising: AI Builders (4)...";      open_urls "${RISING_BUILDERS[@]}" ;;
  --rising-labs)    echo "Opening Rising: Frontier Labs (8)...";     open_urls "${RISING_LABS[@]}" ;;
  --rising-devrel)  echo "Opening Rising: AI DevRel (6)...";         open_urls "${RISING_DEVREL[@]}" ;;
  --vc)             echo "Opening VC & Startup (39 profiles)...";    all_vc ;;
  --vc-partners)    echo "Opening VC Partners (20)...";              open_urls "${VC_PARTNERS[@]}" ;;
  --vc-founders)    echo "Opening Tech Founders & CEOs (12)...";     open_urls "${VC_FOUNDERS[@]}" ;;
  --vc-solo)        echo "Opening Solo GPs & Angels (7)...";         open_urls "${VC_SOLO[@]}" ;;
  --all)
    echo "Opening ALL profiles (109 total)..."
    all_dream
    all_rising
    all_vc
    ;;
  *)
    echo "LinkedIn Engagement Session Opener"
    echo ""
    echo "Usage: bash open-linkedin-engagement.sh [OPTION]"
    echo ""
    echo "  Dream 30 (big creators):"
    echo "    --dream-all       All 30 Dream 30 profiles"
    echo "    --dream-tier1     Tier 1 — daily engagement (10)"
    echo "    --dream-tier2     Tier 2 — 3x/week (10)"
    echo "    --dream-tier3     Tier 3 — weekly (10)"
    echo ""
    echo "  Rising creators (smaller, high reciprocity):"
    echo "    --rising          All Rising creators (40)"
    echo "    --rising-auto     Automation Builds (6)"
    echo "    --rising-agents   Agentic AI / Engineering (3)"
    echo "    --rising-tools    AI Tools & Tutorials (4)"
    echo "    --rising-notion   Notion & Productivity (2)"
    echo "    --rising-bip      Building in Public (2)"
    echo "    --rising-pm       Product Managers Using AI (4)"
    echo "    --rising-builders AI Builders & Developers (4)"
    echo "    --rising-labs     Frontier Lab Voices (8)"
    echo "    --rising-devrel   AI Developer Advocates (6)"
    echo ""
    echo "  VC & Startup voices:"
    echo "    --vc              All VC & Startup (39)"
    echo "    --vc-partners     VC Partners (20)"
    echo "    --vc-founders     Tech Founders & CEOs (12)"
    echo "    --vc-solo         Solo GPs, Angels & Operators (7)"
    echo ""
    echo "  Combined:"
    echo "    --all             Everything — Dream 30 + Rising + VC (109)"
    ;;
esac

echo "Done!"
