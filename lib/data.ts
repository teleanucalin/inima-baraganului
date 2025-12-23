// Source of Truth - Hardcoded Content Data for Inima Bărăganului

// A. Legal Identity (Source: Aviz 315)
export const legalIdentity = {
  name: "INIMA BĂRĂGANULUI COOPERATIVA AGRICOLĂ",
  recognition: "Grup de Producători Recunoscut, Aviz Nr. 315 din 07.09.2021",
  address: "Sat Călărașii Vechi, Comuna Cuza Vodă, Str. Principală, Nr. 17, Jud. Călărași",
  products: "Cereale, Plante Oleaginoase, Plante Furajere, Leguminoase",
  cui: "CUI: 44402085",
  regCom: "Reg. Com.: C51/4/2021",
};

// B. The Story (Source: Mail Context)
export const story = {
  tagline: "Aici, în mijlocul câmpiei, pulsează viața autentică.",
  mission: "Nu suntem doar o asociație. Suntem o comunitate unde tradițiile și oamenii trăiesc în armonie cu pământul. Obiectivul nostru: creșterea competitivității fermierilor prin acces la piață și tehnologii moderne.",
  about: `În inima Bărăganului, unde câmpiile se întind până la orizont și pământul povestește despre generații de muncă cinstită, s-a născut Cooperativa Agricolă "Inima Bărăganului".

Nu suntem doar o asociație agricolă – suntem o comunitate unită de dragoste pentru pământ și respect pentru tradiție. Aici, în satul Călărașii Vechi, fiecare sâmbure semănat și fiecare recoltă adunată poartă amprenta angajamentului nostru față de excelență și sustenabilitate.

Recunoscuți oficial ca Grup de Producători prin Avizul Nr. 315 din 07.09.2021, reprezentăm modernizarea agriculturii românești fără a uita de unde venim. Cultivăm cereale, plante oleaginoase, furajere și leguminoase cu aceeași dedicare cu care strămoșii noștri au lucrat aceste pământuri.

Viziunea noastră este simplă dar puternică: să creștem competitivitatea fermierilor locali prin acces la piețe moderne, tehnologii performante și sprijin constant. Împreună, suntem mai puternici. Împreună, suntem inima Bărăganului.`,
  whyName: "De ce 'Inima Bărăganului'? Pentru că aici, în mijlocul câmpiei, pulsează viața autentică. Numele nostru reflectă esența a ceea ce facem: punem suflet în fiecare acțiune, transformăm munca în artă, iar agricultura devine o formă de rezistență culturală și economică.",
};

// C. Leadership
export const leadership = {
  president: {
    name: "Ing. Ramona-Virginia Ceaușescu",
    title: "Președinte",
    description: "Inginer agronom, formată într-o familie cu tradiție în agricultură, coordonează Cooperativa Agricolă Inima Bărăganului, promovând colaborarea între fermieri, modernizarea, dezvoltarea durabilă a mediului rural și a agriculturii locale!",
  },
};

// D. Members Data (Source: Statut/Mail)
export interface Member {
  id: number;
  name: string;
  type: 'company' | 'individual';
  location: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "CEAUȘESCU FARM S.R.L.",
    type: "company",
    location: "Călărașii Vechi",
  },
  {
    id: 2,
    name: "AGRO CERA IMPEX S.R.L.",
    type: "company",
    location: "Călărașii Vechi",
  },
  {
    id: 3,
    name: "EUROAGRO DAN S.R.L.",
    type: "company",
    location: "Ceacu",
  },
  {
    id: 4,
    name: "Ceaușescu Gheorghe",
    type: "individual",
    location: "Persoană Fizică",
  },
  {
    id: 5,
    name: "Lica Maria",
    type: "individual",
    location: "Persoană Fizică",
  },
];

// E. AFIR Transparency Data (for Charts)
export const afirData = {
  commercializationTargets: [
    { year: "An 1", target: 50, label: "2021-2022" },
    { year: "An 2", target: 55, label: "2022-2023" },
    { year: "An 3", target: 60, label: "2023-2024" },
    { year: "An 4", target: 65, label: "2024-2025" },
    { year: "An 5", target: 75, label: "2025-2026" },
  ],
  fundingSupport: [
    { year: "An 1", support: 10, label: "2021-2022" },
    { year: "An 2", support: 8, label: "2022-2023" },
    { year: "An 3", support: 6, label: "2023-2024" },
    { year: "An 4", support: 5, label: "2024-2025 (Actual)" },
    { year: "An 5", support: 4, label: "2025-2026" },
  ],
};

// F. Timeline Data
export const timeline = [
  {
    year: "2021",
    title: "Recunoaștere Oficială",
    description: "Obținerea Avizului Nr. 315 - Grup de Producători Recunoscut",
  },
  {
    year: "2022-2024",
    title: "Consolidare și Creștere",
    description: "Dezvoltarea capacităților de comercializare și acces la programe AFIR",
  },
  {
    year: "2025",
    title: "Maturitate și Expansiune",
    description: "Atingerea obiectivelor de comercializare și reducerea dependenței de sprijin",
  },
];

// G. Stats for Home Page
export const stats = [
  {
    number: "5",
    label: "Membri Fondatori",
    description: "Ferme și producători dedicați",
  },
  {
    number: "2021",
    label: "Recunoaștere Guvernamentală",
    description: "Aviz Nr. 315 - Grup de Producători",
  },
  {
    number: "75%",
    label: "Țintă Comercializare",
    description: "Obiectiv pentru anul 5 (AFIR)",
  },
];

// H. Contact Information
export const contact = {
  address: "Sat Călărașii Vechi, Comuna Cuza Vodă, Str. Principală, Nr. 17, Jud. Călărași",
  email: "inimabaraganului@yahoo.com",
  phone: "0726 119 206",
  coordinates: {
    lat: 44.2167,
    lng: 26.6500,
  },
};

// I. Legal Links (EU Mandatory)
export const legalLinks = {
  anpc: {
    name: "ANPC",
    url: "https://anpc.ro",
    description: "Autoritatea Națională pentru Protecția Consumatorilor",
  },
  sol: {
    name: "SOL",
    url: "https://ec.europa.eu/consumers/odr",
    description: "Soluționarea Online a Litigiilor",
  },
  gdpr: {
    name: "Politica de Confidențialitate",
    url: "/politica-confidentialitate",
    description: "Politica GDPR",
  },
};

// J. Navigation Links
export const navLinks = [
  { name: "Acasă", href: "/" },
  { name: "Povestea Noastră", href: "/despre-noi" },
  { name: "Membri", href: "/membri" },
  { name: "Proiecte", href: "/proiecte" },
  { name: "Contact", href: "/contact" },
];
