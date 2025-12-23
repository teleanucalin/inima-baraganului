# Inima Bărăganului - Website Oficial

Website oficial pentru **Inima Bărăganului Cooperativa Agricolă**, Grup de Producători Recunoscut (Aviz Nr. 315/07.09.2021).

## 🌾 Despre Proiect

Acesta este website-ul premium pentru cooperativa agricolă "Inima Bărăganului", construit cu tehnologii moderne și design elegant care îmbină tradiția cu transparența modernă.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Custom Shadcn/UI components
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React
- **Language:** TypeScript

## 🎨 Design System

### Culori
- **Primary:** #1B4D3E (Deep Forest Green) - Încredere și Creștere
- **Secondary:** #D4A373 (Wheat Gold) - Recoltă și Success
- **Accent:** #E63946 (Alert Red) - Call to Actions
- **Background:** #FAFAF9 (Warm Stone)
- **Surface:** #FFFFFF (Pure White)

### Tipografie
- **Headings:** Playfair Display (Serif) - Premium, stabilitate
- **Body:** Inter (Sans-serif) - Citibilitate perfectă

## 📁 Structura Proiectului

```
inima-baraganului/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage cu Hero și Stats
│   ├── despre-noi/               # Povestea cooperativei
│   ├── membri/                   # Membrii fondatori
│   ├── proiecte/                 # Transparență AFIR cu grafice
│   ├── contact/                  # Formular contact cu GDPR
│   ├── politica-confidentialitate/ # Politica GDPR
│   ├── layout.tsx                # Layout global
│   └── globals.css               # Stiluri globale
├── components/                    # Componente React
│   ├── navbar.tsx                # Navbar cu glassmorphism
│   ├── footer.tsx                # Footer cu linkuri legale
│   └── ui/                       # UI components (Button, Card, etc.)
├── lib/
│   ├── data.ts                   # Sursa de adevăr - date hardcodate
│   └── utils.ts                  # Funcții utilitare
├── public/
│   └── images/                   # Imagini agricole
├── context/                       # Documente PDF de context
├── tailwind.config.ts            # Configurare Tailwind
├── tsconfig.json                 # Configurare TypeScript
└── package.json                  # Dependințe
```

## 🚀 Cum să Rulezi Proiectul

### Instalare Dependințe
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Accesează [http://localhost:3000](http://localhost:3000)

### Build pentru Producție
```bash
npm run build
```

### Start Producție
```bash
npm start
```

## 📄 Pagini

### 🏠 Acasă (`/`)
- Hero section cu imagine wheat field
- Stats Grid: 5 Membri, Recunoaștere 2021, Țintă 75%
- Mission Statement
- Call to Action

### 📖 Povestea Noastră (`/despre-noi`)
- Split layout: text + imagini
- "De ce Inima Bărăganului?"
- Valorile cooperativei
- Card pentru conducere (Ing. Ceaușescu Ramona-Virginia)

### 👥 Membri (`/membri`)
- Grid cu carduri pentru fiecare membru
- Distincție între Societăți și Persoane Fizice
- Call to Action: "Hai în echipă!"
- Statistici membri

### 📈 Transparență & Proiecte (`/proiecte`)
- Compliance warning (Submăsura 9.1)
- **Chart 1:** Bar Chart - Evoluția Obligației de Comercializare (50% → 75%)
- **Chart 2:** Area Chart - Sprijin Financiar AFIR (10% → 4%)
- Timeline vertical: 2021 → 2025

### 📞 Contact (`/contact`)
- Grid: Info Contact + Formular
- Formular cu validare
- Checkbox GDPR (obligatoriu)
- Google Maps embed
- Success message

### 🔒 Politica de Confidențialitate (`/politica-confidentialitate`)
- Conformitate GDPR completă
- Drepturile utilizatorilor
- Securitatea datelor

## ✨ Features Principale

### Design
- ✅ Responsive design (mobile-first)
- ✅ Hover effects pe carduri (lift effect)
- ✅ Glassmorphism navbar
- ✅ Smooth animations cu Framer Motion
- ✅ Custom color palette
- ✅ Premium typography

### Funcționalități
- ✅ SEO optimizat
- ✅ Formular contact cu validare GDPR
- ✅ Charts interactive (Recharts)
- ✅ Timeline vizual
- ✅ Google Maps integration
- ✅ Metadata API configurată

### Conformitate
- ✅ Linkuri EU obligatorii (ANPC, SOL)
- ✅ Politică de confidențialitate GDPR
- ✅ Raportare AFIR transparentă
- ✅ Informații legale complete

## 📊 Date Hardcodate

Toate datele sunt stocate în `lib/data.ts`:
- Identitate legală (Aviz 315)
- Membri fondatori (5)
- Date AFIR (comercializare, funding)
- Timeline
- Contact info
- Legal links

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Licență

© 2025 Inima Bărăganului. Toate drepturile rezervate.

## 🤝 Contact

Pentru întrebări tehnice sau modificări:
- Email: inimabaraganului@yahoo.com
- Adresă: Sat Călărașii Vechi, Comuna Cuza Vodă, Str. Principală, Nr. 17, Jud. Călărași

---

**Dezvoltat conform standardelor UE și cerințelor AFIR.**