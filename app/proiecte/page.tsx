"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { afirData, timeline } from "@/lib/data"
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Proiecte() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-primary">
              Transparență & Proiecte AFIR
            </h1>
            <p className="text-xl text-muted-foreground">
              Raportare conformă cu obligațiile Submăsurii 9.1
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Warning */}
      <section className="py-8 bg-accent/5 border-y border-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-start gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Conformitate Legală</h3>
              <p className="text-muted-foreground">
                Date publicate conform obligațiilor Submăsurii 9.1 - Înființarea grupurilor de producători
                și a organizațiilor de producători în sectorul agricol. Toate informațiile sunt
                raportate către AFIR și sunt disponibile publicului.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Chart 1: Commercialization Targets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Evoluția Obligației de Comercializare
                  </CardTitle>
                  <CardDescription>
                    Procentul din producția membrilor comercializată prin grup (%)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={afirData.commercializationTargets}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis
                        dataKey="year"
                        tick={{ fill: '#6b7280' }}
                      />
                      <YAxis
                        tick={{ fill: '#6b7280' }}
                        label={{ value: 'Procent (%)', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px'
                        }}
                        formatter={(value: number) => [`${value}%`, 'Țintă']}
                        labelFormatter={(label) => {
                          const item = afirData.commercializationTargets.find(d => d.year === label)
                          return item?.label || label
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="target"
                        fill="#1B4D3E"
                        name="Ținta de Comercializare"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold mb-1">Obiectiv An 5: 75%</p>
                        <p className="text-sm text-muted-foreground">
                          Grupul își propune să comercializeze 75% din producția membrilor până în anul 5,
                          demonstrând o creștere constantă și sustenabilă a capacităților de comercializare.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Chart 2: Funding Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Sprijin Financiar Nerambursabil (AFIR)
                  </CardTitle>
                  <CardDescription>
                    Procentul din cheltuielile eligibile acoperite de sprijinul AFIR (%)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={afirData.fundingSupport}>
                      <defs>
                        <linearGradient id="colorSupport" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#D4A373" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#D4A373" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis
                        dataKey="year"
                        tick={{ fill: '#6b7280' }}
                      />
                      <YAxis
                        tick={{ fill: '#6b7280' }}
                        label={{ value: 'Procent (%)', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px'
                        }}
                        formatter={(value: number) => [`${value}%`, 'Sprijin']}
                        labelFormatter={(label) => {
                          const item = afirData.fundingSupport.find(d => d.year === label)
                          return item?.label || label
                        }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="support"
                        stroke="#D4A373"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorSupport)"
                        name="Sprijin AFIR"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <div className="mt-6 p-4 bg-secondary/5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold mb-1">Autonomie Crescândă</p>
                        <p className="text-sm text-muted-foreground">
                          Reducerea treptată a sprijinului financiar demonstrează că grupul devine
                          din ce în ce mai autonom și competitiv pe piață, conform planului de dezvoltare.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-4xl font-bold mb-12 text-primary text-center">
              Parcursul Nostru
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex gap-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{item.year}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
