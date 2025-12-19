"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { contact, legalIdentity } from "@/lib/data"
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    gdprConsent: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.gdprConsent) {
      alert("Trebuie să accepți prelucrarea datelor personale pentru a trimite mesajul.")
      return
    }

    // In a real app, you would send this to a backend
    // TODO: Implement backend API endpoint for form submission
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        gdprConsent: false,
      })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

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
                  <p className="text-muted-foreground mb-8">
                    Nu ezita să ne contactezi pentru orice informație despre cooperativa noastră
                    sau dacă dorești să devii membru.
                  </p>
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Trimite-ne un mesaj</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">
                        Mesaj trimis cu succes!
                      </h3>
                      <p className="text-muted-foreground">
                        Îți mulțumim pentru interes. Te vom contacta în curând.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Nume complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Prenume Nume"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@exemplu.ro"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+40 XXX XXX XXX"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Mesaj *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Scrie-ne mesajul tău..."
                          className="mt-2 min-h-[150px]"
                        />
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
                        <input
                          type="checkbox"
                          id="gdprConsent"
                          name="gdprConsent"
                          required
                          checked={formData.gdprConsent}
                          onChange={handleChange}
                          className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <Label
                          htmlFor="gdprConsent"
                          className="text-sm leading-relaxed cursor-pointer"
                        >
                          Sunt de acord cu prelucrarea datelor cu caracter personal conform{" "}
                          <a href="/politica-confidentialitate" className="text-primary hover:underline">
                            Politicii de Confidențialitate
                          </a>{" "}
                          (GDPR). *
                        </Label>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Trimite Mesajul
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-bold mb-8 text-primary text-center">
              Locația Noastră
            </h2>
            <Card className="overflow-hidden">
              <div className="relative w-full h-[400px] bg-muted">
                <iframe
                  src={`https://www.google.com/maps?q=${contact.coordinates.lat},${contact.coordinates.lng}&hl=ro&z=14&output=embed`}
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
      </section>
    </div>
  )
}
