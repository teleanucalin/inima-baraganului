"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CurveDivider } from "@/components/curve-divider"
import { stats } from "@/lib/data"
import { CheckCircle2, TrendingUp, Users, ChevronDown } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f5f5f0' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/3115488-uhd_3840_2160_24fps-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Agricultură făcută cu suflet în Bărăgan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Grup de Producători Recunoscut • Tradiție & Performanță
            </p>
            <Link href="/proiecte">
              <Button size="lg" className="text-lg">
                Vezi Rapoartele AFIR
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          {/* Funding Logos */}
          <Image
            src="/images/funding-logos.png"
            alt="EU, Guvernul României, PNDR, AFIR"
            width={816}
            height={153}
            className="h-8 w-auto opacity-90"
          />
          {/* Down Arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              const element = document.getElementById('next-section')
              if (element) {
                const targetPosition = element.getBoundingClientRect().top + window.pageYOffset
                const startPosition = window.pageYOffset
                const distance = targetPosition - startPosition
                const duration = 1500 // 1.5 seconds for slower scroll
                let start: number | null = null

                const easeInOutCubic = (t: number): number => {
                  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                }

                const animation = (currentTime: number) => {
                  if (start === null) start = currentTime
                  const timeElapsed = currentTime - start
                  const progress = Math.min(timeElapsed / duration, 1)
                  const ease = easeInOutCubic(progress)

                  window.scrollTo(0, startPosition + distance * ease)

                  if (timeElapsed < duration) {
                    requestAnimationFrame(animation)
                  }
                }

                requestAnimationFrame(animation)
              }
            }}
            className="cursor-pointer"
          >
            <ChevronDown className="w-8 h-8 text-white/70" strokeWidth={2.5} />
          </motion.div>
        </div>
      </section>

      {/* CTA Cards Section */}
      <section id="next-section" className="py-20 bg-[#f5f5f0]">
        <motion.div
          className="container mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Visit Farm */}
            <motion.div variants={fadeIn}>
              <Link href="/despre-noi">
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <div className="relative h-96">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: "url('/images/WhatsApp Image 2025-12-02 at 13.52.09 (1).jpeg')",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <h3 className="absolute bottom-8 left-8 text-white text-3xl font-bold uppercase tracking-wider">
                      Despre Noi
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 2 - Markets */}
            <motion.div variants={fadeIn}>
              <Link href="/membri">
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <div className="relative h-96">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: "url('/images/WhatsApp Image 2025-12-02 at 13.52.09 (1).jpeg')",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <h3 className="absolute bottom-8 left-8 text-white text-3xl font-bold uppercase tracking-wider">
                      Membrii
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 3 - Projects */}
            <motion.div variants={fadeIn}>
              <Link href="/proiecte">
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <div className="relative h-96">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: "url('/images/WhatsApp Image 2025-12-02 at 13.52.09 (1).jpeg')",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <h3 className="absolute bottom-8 left-8 text-white text-3xl font-bold uppercase tracking-wider">
                      Proiecte
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Curve Divider */}
      <CurveDivider fillColor="#1B4D3E" />

      {/* Stats Grid */}
      <section className="py-20 bg-primary">
        <motion.div
          className="container mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const icons = [Users, CheckCircle2, TrendingUp]
              const Icon = icons[index]

              return (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="text-center shadow-lg">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-4xl font-bold text-primary mb-2">
                        {stat.number}
                      </CardTitle>
                      <p className="text-xl font-semibold text-foreground">
                        {stat.label}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Curve Divider */}
      <div className="-mt-1"> 
        <CurveDivider fillColor="#1B4D3E" flip />
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-[#f5f5f0]">
        <motion.div
          className="container mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Aici, în mijlocul câmpiei, pulsează viața autentică
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nu suntem doar o asociație. Suntem o comunitate unde tradițiile și oamenii
              trăiesc în armonie cu pământul. Obiectivul nostru: creșterea competitivității
              fermierilor prin acces la piață și tehnologii moderne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/despre-noi">
                <Button variant="default" size="lg">
                  Citește Povestea Noastră
                </Button>
              </Link>
              <Link href="/membri">
                <Button variant="outline" size="lg">
                  Cunoaște Membrii
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Curve Divider */}
      <CurveDivider fillColor="#1B4D3E" />

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Hai în echipa noastră!
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Cooperativa este deschisă noilor membri care împărtășesc valorile noastre.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contactează-ne
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
