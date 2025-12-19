"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { story, leadership } from "@/lib/data"
import { Heart, Leaf, Users, Award } from "lucide-react"
import { CurveDivider } from "@/components/curve-divider"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function DespreNoi() {
  const values = [
    {
      icon: Heart,
      title: "Pasiune",
      description: "Agricultură făcută cu suflet și dedicare pentru pământul nostru"
    },
    {
      icon: Leaf,
      title: "Sustenabilitate",
      description: "Respectăm natura și lucrăm pentru un viitor verde"
    },
    {
      icon: Users,
      title: "Comunitate",
      description: "Împreună suntem mai puternici și mai competitivi"
    },
    {
      icon: Award,
      title: "Excelență",
      description: "Calitate premium în tot ce facem și producem"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background-despre-noi.jpg"
            alt="Despre Noi Background"
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
              Povestea Noastră
            </h1>
            <p className="text-xl text-white/90 italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {story.tagline}
            </p>
          </motion.div>
        </div>

        {/* Gradient transition to next section - smoother and taller */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-background/50 to-background z-[5]" />
      </section>

      {/* Main Story Section - Split Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none">
                {story.about.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/despre-noi-poza-top.jpeg"
                  alt="Câmp agricol"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/WhatsApp Image 2025-12-02 at 13.52.08 (1).jpeg"
                  alt="Recoltă"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                <Image
                  src="/images/despre-noi-poza-wide.jpeg"
                  alt="Pământ agricol"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curve Divider */}
      <div className="-mb-1">
        <CurveDivider fillColor="#1B4D3E" />
      </div>

      {/* Why "Inima Bărăganului" Section */}
      <section className="py-20 bg-primary">
        <motion.div
          className="container mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-3xl mx-auto">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-4xl font-bold text-primary mb-4">
                  De ce "Inima Bărăganului"?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {story.whyName}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Curve Divider */}
      <div className="-mt-1">
        <CurveDivider fillColor="#1B4D3E" flip />
      </div>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12 text-center"
          >
            <h2 className="font-serif text-4xl font-bold mb-4 text-primary">
              Valorile Noastre
            </h2>
            <p className="text-lg text-muted-foreground">
              Principiile care ne ghidează în fiecare zi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <motion.div
          className="container mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-12 text-primary text-center">
              Conducerea
            </h2>
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Award className="w-12 h-12 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">
                  {leadership.president.name}
                </CardTitle>
                <p className="text-secondary font-semibold">
                  {leadership.president.title}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground leading-relaxed">
                  {leadership.president.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
