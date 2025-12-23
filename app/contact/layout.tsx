import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Inima Bărăganului",
  description: "Contactează cooperativa agricolă Inima Bărăganului. Adresă, telefon, email și hartă. Suntem aici să răspundem întrebărilor tale despre agricultura din Bărăgan.",
  keywords: [
    "contact cooperativă",
    "contact Inima Bărăganului",
    "adresă Bărăgan",
    "telefon cooperativă agricolă",
    "contact agricultură",
  ],
  openGraph: {
    title: "Contact - Inima Bărăganului",
    description: "Contactează-ne pentru informații despre cooperativa agricolă din Bărăgan.",
    url: "https://inimabaraganului.ro/contact",
    siteName: "Inima Bărăganului",
    images: [
      {
        url: "https://inimabaraganului.ro/images/background-contact.jpg",
        width: 1920,
        height: 1080,
        alt: "Contact Inima Bărăganului",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Inima Bărăganului",
    description: "Contactează cooperativa agricolă Inima Bărăganului.",
    images: ["https://inimabaraganului.ro/images/background-contact.jpg"],
  },
  alternates: {
    canonical: "https://inimabaraganului.ro/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
