import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Membrii Noștri | Inima Bărăganului",
  description: "Cunoaște membrii cooperativei Inima Bărăganului - agricultori pasionați și profesioniști din Bărăgan. Împreună cultivăm excelență și tradiție.",
  keywords: [
    "membri cooperativă",
    "agricultori Bărăgan",
    "fermieri români",
    "membrii grup producători",
    "echipă agricolă",
  ],
  openGraph: {
    title: "Membrii Noștri - Inima Bărăganului",
    description: "Cunoaște echipa de agricultori profesioniști din cooperativa Inima Bărăganului.",
    url: "https://inimabaraganului.ro/membri",
    siteName: "Inima Bărăganului",
    images: [
      {
        url: "https://inimabaraganului.ro/images/background-membri.jpg",
        width: 1920,
        height: 1080,
        alt: "Membrii cooperativei Inima Bărăganului",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membrii Noștri - Inima Bărăganului",
    description: "Cunoaște echipa de agricultori profesioniști din cooperativa noastră.",
    images: ["https://inimabaraganului.ro/images/background-membri.jpg"],
  },
  alternates: {
    canonical: "https://inimabaraganului.ro/membri",
  },
}

export default function MembriLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
