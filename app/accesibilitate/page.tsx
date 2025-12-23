"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Keyboard, Smartphone, Mail, CheckCircle2 } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Accesibilitate() {
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
            <Eye className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-primary">
              Declarație de Accesibilitate
            </h1>
            <p className="text-xl text-muted-foreground">
              Inima Bărăganului se angajează să facă acest site accesibil tuturor utilizatorilor
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    Angajamentul nostru
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Inima Bărăganului se angajează să asigure accesibilitatea digitală pentru persoanele
                    cu dizabilități. Ne îmbunătățim continuu experiența utilizatorilor pentru toată lumea
                    și aplicăm standardele de accesibilitate relevante.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Standarde de Conformare</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Acest site web urmărește să respecte{" "}
                    <strong>WCAG 2.1 nivel AA</strong> (Web Content Accessibility Guidelines),
                    un standard internațional pentru accesibilitatea web.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">Nivel de conformare actual:</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>WCAG 2.1 Nivel AA</strong> - Parțial conform
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Ultima evaluare: 23 Decembrie 2024
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    Caracteristici de Accesibilitate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground mb-4">
                    Am implementat următoarele caracteristici pentru a îmbunătăți accesibilitatea:
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Keyboard className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Navigare cu tastatura</h3>
                        <p className="text-sm text-muted-foreground">
                          Toate funcționalitățile site-ului sunt accesibile folosind doar tastatura.
                          Apăsați Tab pentru a naviga între elemente și Enter pentru a activa linkuri sau butoane.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Cititori de ecran</h3>
                        <p className="text-sm text-muted-foreground">
                          Site-ul este compatibil cu cititorii de ecran populari (NVDA, JAWS, VoiceOver).
                          Am folosit atribute ARIA și elemente semantice HTML pentru o experiență optimă.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Smartphone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Design responsive</h3>
                        <p className="text-sm text-muted-foreground">
                          Site-ul este complet funcțional pe dispozitive mobile, tablete și desktop,
                          adaptându-se automat la dimensiunea ecranului.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Contrast de culori</h3>
                        <p className="text-sm text-muted-foreground">
                          Toate textele respectă raportul minim de contrast de 4.5:1 pentru text normal
                          și 3:1 pentru text mare, conform standardelor WCAG 2.1 AA.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Link de săritură la conținut</h3>
                        <p className="text-sm text-muted-foreground">
                          Un link invizibil (vizibil doar la focalizare) permite utilizatorilor să sară
                          direct la conținutul principal al paginii.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Indicatori de focalizare</h3>
                        <p className="text-sm text-muted-foreground">
                          Toate elementele interactive au indicatori vizibili când sunt focalizate,
                          facilitând navigarea cu tastatura.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Tehnologii Utilizate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Accesibilitatea acestui site se bazează pe următoarele tehnologii:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>HTML5 semantic</li>
                    <li>WAI-ARIA (Accessible Rich Internet Applications)</li>
                    <li>CSS3 pentru stilizare și layout responsive</li>
                    <li>JavaScript pentru funcționalități interactive accesibile</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Limitări Cunoscute</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Deși ne străduim să respectăm pe deplin standardele WCAG 2.1 AA,
                    există unele limitări actuale:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                    <li>
                      Unele animații nu pot fi dezactivate complet (lucrăm la implementarea
                      suportului pentru prefers-reduced-motion)
                    </li>
                    <li>
                      Videoul de pe pagina principală nu include încă subtitrări
                      (planificăm adăugarea acestora)
                    </li>
                    <li>
                      Harta Google Maps de pe pagina de contact are limitări de accesibilitate
                      inherente platformei externe
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Îmbunătățiri Planificate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Ne angajăm să îmbunătățim continuu accesibilitatea site-ului nostru.
                    Următoarele îmbunătățiri sunt planificate:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                    <li>Adăugarea de subtitrări pentru conținutul video</li>
                    <li>Implementarea controalelor pentru reducerea mișcării</li>
                    <li>Testare detaliată cu utilizatori cu dizabilități</li>
                    <li>Audit profesional de accesibilitate</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    Raportați Probleme de Accesibilitate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dacă întâmpinați dificultăți în accesarea oricărui conținut de pe acest site
                    sau dacă aveți sugestii pentru îmbunătățirea accesibilității, vă rugăm să ne contactați:
                  </p>
                  <div className="space-y-2 bg-white dark:bg-gray-900 rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:contact@inimabaraganului.ro"
                        className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      >
                        contact@inimabaraganului.ro
                      </a>
                    </p>
                    <p className="text-sm">
                      <strong>Subiect:</strong> Accesibilitate Site Web
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Vom răspunde în cel mai scurt timp posibil, de obicei în 2-3 zile lucrătoare.
                    Ne străduim să oferim o soluție sau o explicație clară pentru orice problemă raportată.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center text-sm text-muted-foreground"
            >
              <p>Această declarație a fost actualizată ultima dată pe: 23 Decembrie 2024</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
