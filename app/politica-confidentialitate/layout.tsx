import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politica de Confidențialitate | Inima Bărăganului",
  description: "Politica de confidențialitate și protecția datelor personale conform GDPR. Află cum prelucrăm și protejăm datele tale la Inima Bărăganului.",
  keywords: [
    "politică confidențialitate",
    "GDPR",
    "protecția datelor",
    "politică cookies",
    "date personale",
  ],
  openGraph: {
    title: "Politica de Confidențialitate - Inima Bărăganului",
    description: "Politica de confidențialitate și protecția datelor conform GDPR.",
    url: "https://inimabaraganului.ro/politica-confidentialitate",
    siteName: "Inima Bărăganului",
    locale: "ro_RO",
    type: "website",
  },
  alternates: {
    canonical: "https://inimabaraganului.ro/politica-confidentialitate",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PoliticaConfidentialitateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
