"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { members } from "@/lib/data"
import { Building2, User, MapPin, UserPlus } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Membri() {
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
              Membrii Noștri
            </h1>
            <p className="text-xl text-muted-foreground">
              Fermierii și companiile care formează inima cooperativei noastre
            </p>
          </motion.div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                        member.type === 'company'
                          ? 'bg-primary/10'
                          : 'bg-secondary/10'
                      }`}>
                        {member.type === 'company' ? (
                          <Building2 className={`w-7 h-7 ${
                            member.type === 'company' ? 'text-primary' : 'text-secondary'
                          }`} />
                        ) : (
                          <User className="w-7 h-7 text-secondary" />
                        )}
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        member.type === 'company'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-secondary/10 text-secondary'
                      }`}>
                        {member.type === 'company' ? 'Societate' : 'Persoană Fizică'}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      {member.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{member.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="mx-auto w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <UserPlus className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4 text-primary">
                    Cooperativa este deschisă noilor membri
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Dacă împărtășești valorile noastre și dorești să fii parte din comunitatea
                    noastră, te invităm să ne contactezi. Împreună suntem mai puternici!
                  </p>
                  <Link href="/contact">
                    <Button size="lg" variant="default">
                      Hai în echipă!
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">5</div>
              <div className="text-lg font-semibold mb-2">Membri Fondatori</div>
              <div className="text-sm text-muted-foreground">
                Companii și fermieri dedicați
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">3</div>
              <div className="text-lg font-semibold mb-2">Societăți Agricole</div>
              <div className="text-sm text-muted-foreground">
                Experiență și profesionalism
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">2</div>
              <div className="text-lg font-semibold mb-2">Producători Individuali</div>
              <div className="text-sm text-muted-foreground">
                Pasiune pentru agricultură
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
