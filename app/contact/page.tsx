"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { contact, legalIdentity } from "@/lib/data"
import { MapPin, Mail, Phone } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background-contact.jpg"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Contactează-ne
            </h1>
            <p className="text-xl text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Suntem aici să răspundem întrebărilor tale și să te ajutăm să devii parte din echipa noastră
            </p>
          </motion.div>
        </div>

        {/* Gradient transition to next section - smoother and taller */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-background/50 to-background z-[5]" />
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl font-bold mb-6 text-primary">
                    Informații de Contact
                  </h2>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      Adresă
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{contact.address}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-primary hover:underline"
                    >
                      {contact.email}
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      Telefon
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-primary hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-sm font-semibold mb-2">{legalIdentity.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {legalIdentity.recognition}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full">
                <div className="relative w-full h-full min-h-[600px] bg-muted">
                  <iframe
                    src={`https://www.google.com/maps?q=${contact.coordinates.lat},${contact.coordinates.lng}&hl=ro&z=11&t=k&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Locația Cooperativei"
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
