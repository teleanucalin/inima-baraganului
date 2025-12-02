# Role: Award-Winning Creative Developer & UX Strategist
# Project: "Inima Bărăganului" - Premium Agricultural Cooperative Website
# Goal: Build a high-trust, visually stunning, compliant website that blends tradition with modern transparency.

# 1. 🎨 DESIGN SYSTEM & ART DIRECTION (Strict Adherence)
The aesthetic must be "Modern Agrarian Heritage". Think: clean lines, generous whitespace, earthy tones, trustworthy typography.

- **Color Palette (Tailwind Config):**
  - `primary`: '#1B4D3E' (Deep Forest Green - Trust/Growth)
  - `secondary`: '#D4A373' (Wheat Gold - Harvest/Success)
  - `accent`: '#E63946' (Subtle alerts/Call to actions - "Heart" reference)
  - `background`: '#FAFAF9' (Warm Stone - avoids sterile white)
  - `surface`: '#FFFFFF' (Pure White for cards)
- **Typography:**
  - Headings: 'Playfair Display' or 'Merriweather' (Serif) - for that premium, established feel.
  - Body: 'Inter' or 'Geist Sans' (Sans-serif) - for perfect readability.
- **Micro-interactions:**
  - All cards must lift slightly on hover (`hover:-translate-y-1`).
  - Buttons must have a subtle scale effect on click.
  - Page transitions: Smooth fade-in using `framer-motion`.

# 2. 🛠 TECH STACK & ARCHITECTURE
- **Framework:** Next.js 14+ (App Router).
- **Styling:** Tailwind CSS + `clsx` + `tailwind-merge`.
- **UI Core:** Shadcn/UI (Button, Card, Accordion, Sheet, Table).
- **Animations:** `framer-motion` (MANDATORY for Hero and Scroll reveals).
- **Charts:** `recharts` (Responsive Container is a must).
- **Icons:** `lucide-react`.
- **SEO:** Metadata API configured with title: "Inima Bărăganului | Cooperativă Agricolă & Grup de Producători".

# 3. 💾 HARDCODED CONTENT DATA (Source of Truth)
*Do not hallucinate data. Use these exact constants in `lib/data.ts`.*

**A. Legal Identity [Source: Aviz 315]**
- Name: "INIMA BĂRĂGANULUI COOPERATIVA AGRICOLĂ"
- Recognition: "Grup de Producători Recunoscut, Aviz Nr. 315 din 07.09.2021"
- Address: "Sat Călărașii Vechi, Comuna Cuza Vodă, Str. Principală, Nr. 17, Jud. Călărași"
- Products: "Cereale, Plante Oleaginoase, Plante Furajere, Leguminoase"

**B. The Story [Source: Mail Context]**
- Tagline: "Aici, în mijlocul câmpiei, pulsează viața autentică."
- Mission: "Nu suntem doar o asociație. Suntem o comunitate unde tradițiile și oamenii trăiesc în armonie cu pământul. Obiectivul nostru: creșterea competitivității fermierilor prin acces la piață și tehnologii moderne."

**C. Members Data [Source: Statut/Mail]**
1. CEAUSESCU FARM S.R.L. (Călărașii Vechi)
2. AGRO CERA IMPEX S.R.L. (Călărașii Vechi)
3. EUROAGRO DAN S.R.L. (Ceacu)
4. Ceausescu Gheorghe (Persoană Fizică)
5. Lica Maria (Persoană Fizică)

**D. AFIR Transparency Data (for Charts)**
- *Commercialization Targets (Bar Chart):* Year 1 (50%), Year 2 (55%), Year 3 (60%), Year 4 (65%), Year 5 (75%).
- *Funding Support (Line/Area Chart):* Year 1 (10%), Year 2 (8%), Year 3 (6%), Year 4 (5% - Current), Year 5 (4%).

**E. Other info [./context/...]**
- **`Mail Site Inima.pdf`**: Contains the "About Us" story, brand philosophy ("Why Inima Bărăganului?"), and mission. **Extract the text directly from here.**
- **`Aviz de recunoastere GRUP.pdf`**: Contains the legal proof of recognition (Nr. 315/07.09.2021). **Use this for the Legal/Transparency section.**
- **`Mail cooperativa si grup de producatori.pdf`**: Contains the list of founding members and production quotas. **Use this to populate the Members section.**
- **`screencapture...` images**: Use these as visual references for the layout (clean, agricultural theme, card-based design).

**E. Images to use on site [integrate some of these images into website]**
- ./images/...

# 4. 🗺 SITEMAP & COMPONENT SPECS

## 🟢 Global Layout
- **Navbar:** Sticky, glassmorphism effect (`backdrop-blur-md`). Logo left, Links right.
  - Links: `Acasă`, `Povestea Noastră`, `Membri`, `Transparență (AFIR)`, `Contact`.
- **Footer:**
  - Must include: Full Legal Name, CUI/Reg Com placeholders.
  - **EU Mandatory Links:** "ANPC", "SOL (Soluționarea Online a Litigiilor)", "Politica de Confidențialitate".
  - Copyright: "© 2025 Inima Bărăganului. Dezvoltat conform standardelor UE."

## 🏠 Page: Home (`/`)
- **Hero Section:** Full viewport height (`h-screen`). Background image: High-quality golden wheat field (darkened overlay).
  - Headline (H1): "Agricultură făcută cu suflet în Bărăgan."
  - Subheadline: "Grup de Producători Recunoscut • Tradiție & Performanță"
  - CTA Button: "Vezi Rapoartele AFIR" (Primary Color).
- **Stats Grid:** 3 floating cards: "5 Membri Fondatori", "Recunoaștere Guvernamentală", "Suport AFIR".

## 📖 Page: Povestea Noastră (`/despre-noi`)
- **Layout:** Split screen. Left: Text (The emotional story about "Inima Bărăganului"). Right: Image grid of harvest/hands holding soil.
- **Leadership Card:** Elegant card for "Președinte: Ing. Ceausescu Ramona-Virginia".

## 👥 Page: Membri (`/membri`)
- **Grid:** Display members in clean cards. Use an icon (Tractor/Building) for Companies and another (User) for Individuals.
- **Callout:** "Cooperativa este deschisă noilor membri. Hai în echipă!"

## 📈 Page: Transparență & Proiecte (`/proiecte`)
- **Compliance Warning:** "Date publicate conform obligațiilor Submăsurii 9.1".
- **Visuals:**
  - **Chart 1:** "Evoluția Obligației de Comercializare" (Bar Chart - Green palette).
  - **Chart 2:** "Sprijin Financiar Nerambursabil" (Area Chart - Gold palette).
  - **Timeline:** Vertical line showing 2021 (Recognition) -> 2025 (Consolidation).

## 📞 Page: Contact (`/contact`)
- **Grid:** Contact Info (Left) vs Contact Form (Right).
- **Form:** Must include a checkbox: *"Sunt de acord cu prelucrarea datelor cu caracter personal (GDPR)"* (Required).
- **Map:** Embedded Google Maps placeholder.

# 5. 🚀 EXECUTION ORDER (Step-by-Step for AI)
1.  **Initialize:** Create `lib/data.ts` and paste the "HARDCODED CONTENT DATA" from Section 3. This is crucial.
2.  **Config:** Setup Tailwind `theme.extend.colors` with the hex codes provided.
3.  **Components:** Build `Footer.tsx` (with legal links) and `Navbar.tsx` first.
4.  **Charts:** Build a reusable `ResponsiveChartContainer` component using Recharts.
5.  **Pages:** Assemble the pages using the defined Design System constraints.
6.  **Polish:** Add `framer-motion` entrance animations to all sections.

**Output:** Start by generating the project structure and the `lib/data.ts` file accurately.