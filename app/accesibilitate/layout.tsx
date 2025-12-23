import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Declarație de Accesibilitate | Inima Bărăganului",
  description: "Declarația de accesibilitate a site-ului Inima Bărăganului. Conformitate WCAG 2.1 AA, caracteristici de accesibilitate și angajamentul nostru pentru incluziune digitală.",
  keywords: [
    "declarație accesibilitate",
    "WCAG 2.1",
    "accesibilitate web",
    "site accesibil",
    "incluziune digitală",
  ],
  openGraph: {
    title: "Declarație de Accesibilitate - Inima Bărăganului",
    description: "Angajamentul nostru pentru un site accesibil tuturor utilizatorilor. Conformitate WCAG 2.1 AA.",
    url: "https://inimabaraganului.ro/accesibilitate",
    siteName: "Inima Bărăganului",
    locale: "ro_RO",
    type: "website",
  },
  alternates: {
    canonical: "https://inimabaraganului.ro/accesibilitate",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AccesibilitateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
