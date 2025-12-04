"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroCarousel } from "@/components/hero-carousel"
import { Newsletter } from "@/components/newsletter"
import { stats, heroSlides } from "@/lib/data"
import { CheckCircle2, TrendingUp, Users } from "lucide-react"

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
    <div>
      {/* Hero Carousel Section */}
      <HeroCarousel slides={heroSlides} autoPlayInterval={6000}>
        <Link href="/proiecte">
          <Button size="lg" className="text-lg">
            Vezi Rapoartele AFIR
          </Button>
        </Link>
      </HeroCarousel>

      {/* Stats Grid */}
      <section className="py-20 bg-background">
        <motion.div
          className="container mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-10">
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

      {/* Mission Section */}
      <section className="py-20 bg-surface">
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

      {/* Newsletter Section */}
      <Newsletter />

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
