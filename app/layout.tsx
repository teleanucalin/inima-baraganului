import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import "@/styles/cookie-consent.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CookieConsentBanner } from "@/components/cookie-consent"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Inima Bărăganului | Cooperativă Agricolă & Grup de Producători",
  description: "Grup de Producători Recunoscut din inima Bărăganului. Agricultură făcută cu suflet. Tradiție & Performanță.",
  keywords: ["cooperativă agricolă", "grup producători", "Bărăgan", "cereale", "agricultură"],
  openGraph: {
    title: "Inima Bărăganului - Cooperativă Agricolă & Grup de Producători",
    description: "Grup de Producători Recunoscut din inima Bărăganului. Agricultură făcută cu suflet.",
    url: "https://inimabaraganului.ro",
    siteName: "Inima Bărăganului",
    images: [
      {
        url: "https://inimabaraganului.ro/images/logo.png",
        width: 250,
        height: 250,
        alt: "Logo Inima Bărăganului",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inima Bărăganului - Cooperativă Agricolă",
    description: "Grup de Producători Recunoscut din inima Bărăganului.",
  },
  alternates: {
    canonical: "https://inimabaraganului.ro",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Inima Bărăganului",
  "description": "Grup de Producători Recunoscut din inima Bărăganului. Agricultură făcută cu suflet. Tradiție & Performanță.",
  "url": "https://inimabaraganului.ro",
  "logo": "https://inimabaraganului.ro/images/logo.png",
  "image": "https://inimabaraganului.ro/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sat Călărașii Vechi, Comuna Cuza Vodă, Str. Principală, Nr. 17",
    "addressLocality": "Călărași",
    "addressRegion": "Călărași",
    "postalCode": "",
    "addressCountry": "RO"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+40-726-119-206",
    "email": "inimabaraganului@yahoo.com",
    "contactType": "Customer Service",
    "areaServed": "RO",
    "availableLanguage": ["Romanian"]
  },
  "sameAs": [],
  "foundingDate": "2020",
  "knowsAbout": ["Agricultură", "Cereale", "Grup de Producători", "Cooperative Agricole"],
  "areaServed": {
    "@type": "Place",
    "name": "Bărăgan, România"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Sari la conținut principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
