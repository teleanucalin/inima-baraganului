import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proiecte și Transparență AFIR | Inima Bărăganului",
  description: "Proiecte agricole finanțate prin PNDR și AFIR. Transparență totală în gestionarea fondurilor europene. Consultă rapoartele și măsurile implementate de cooperativa Inima Bărăganului.",
  keywords: [
    "proiecte AFIR",
    "fonduri europene agricultură",
    "PNDR",
    "transparență financiară",
    "măsuri AFIR",
    "proiecte agricole",
  ],
  openGraph: {
    title: "Proiecte și Transparență AFIR - Inima Bărăganului",
    description: "Transparență totală în gestionarea fondurilor europene pentru agricultură. Vezi proiectele noastre AFIR și PNDR.",
    url: "https://inimabaraganului.ro/proiecte",
    siteName: "Inima Bărăganului",
    images: [
      {
        url: "https://inimabaraganului.ro/images/background-proiecte.jpg",
        width: 1920,
        height: 1080,
        alt: "Proiecte agricole Inima Bărăganului",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proiecte și Transparență AFIR - Inima Bărăganului",
    description: "Transparență în gestionarea fondurilor europene pentru agricultură.",
    images: ["https://inimabaraganului.ro/images/background-proiecte.jpg"],
  },
  alternates: {
    canonical: "https://inimabaraganului.ro/proiecte",
  },
}

export default function ProiecteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
