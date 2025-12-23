import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Despre Noi | Inima Bărăganului",
  description: "Descoperă povestea cooperativei Inima Bărăganului - Grup de Producători Recunoscut din inima Bărăganului. Pasiune pentru agricultură, dedicare pentru pământ, tradiție și performanță.",
  keywords: [
    "despre noi",
    "cooperativă agricolă",
    "grup producători Bărăgan",
    "poveste agricultură",
    "valori cooperative",
    "echipă agricolă",
  ],
  openGraph: {
    title: "Despre Noi - Inima Bărăganului",
    description: "Descoperă povestea cooperativei noastre agricole din Bărăgan. Pasiune, sustenabilitate, comunitate și excelență.",
    url: "https://inimabaraganului.ro/despre-noi",
    siteName: "Inima Bărăganului",
    images: [
      {
        url: "https://inimabaraganului.ro/images/background-despre-noi.jpg",
        width: 1920,
        height: 1080,
        alt: "Echipa Inima Bărăganului",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Despre Noi - Inima Bărăganului",
    description: "Descoperă povestea cooperativei noastre agricole din Bărăgan.",
    images: ["https://inimabaraganului.ro/images/background-despre-noi.jpg"],
  },
  alternates: {
    canonical: "https://inimabaraganului.ro/despre-noi",
  },
}

export default function DespreNoiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
