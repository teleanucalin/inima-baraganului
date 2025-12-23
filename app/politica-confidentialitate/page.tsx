"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { legalIdentity } from "@/lib/data"
import { Shield, Lock, Eye, FileText, Cookie } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function PoliticaConfidentialitate() {
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
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-primary">
              Politica de Confidențialitate
            </h1>
            <p className="text-xl text-muted-foreground">
              Protecția datelor tale personale este o prioritate pentru noi
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
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    Introducere
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {legalIdentity.name} respectă dreptul la confidențialitate și protejarea
                    datelor cu caracter personal ale tuturor utilizatorilor site-ului web și
                    partenerilor săi. Această politică de confidențialitate explică modul în
                    care colectăm, utilizăm și protejăm informațiile dumneavoastră personale,
                    în conformitate cu Regulamentul General privind Protecția Datelor (GDPR)
                    UE 2016/679.
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
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    Date Colectate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Informații pe care le colectăm:</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Nume și prenume</li>
                      <li>Adresă de email</li>
                      <li>Număr de telefon (opțional)</li>
                      <li>Mesajele trimise prin formularul de contact</li>
                      <li>Informații tehnice (adresa IP, tipul de browser, sistem de operare)</li>
                    </ul>
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
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    Utilizarea Datelor
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Folosim datele dumneavoastră pentru:</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Răspunsul la întrebările și solicitările dumneavoastră</li>
                      <li>Furnizarea de informații despre cooperativa noastră</li>
                      <li>Procesarea cererilor de membri</li>
                      <li>Îmbunătățirea serviciilor noastre</li>
                      <li>Respectarea obligațiilor legale</li>
                    </ul>
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
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-primary" />
                    </div>
                    Politica de Cookie-uri
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Acest site folosește cookie-uri pentru a asigura funcționarea corectă și pentru
                    a îmbunătăți experiența utilizatorilor. Puteți gestiona preferințele de cookie-uri
                    în orice moment.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2 text-primary">Cookie-uri Strict Necesare</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-sm">
                          <div className="font-medium">Nume Cookie</div>
                          <div className="font-medium">Scop</div>
                          <div className="font-medium">Expirare</div>
                          <div className="font-medium">Tip</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-sm text-muted-foreground">
                          <div>cc_inima_baraganului</div>
                          <div>Stochează preferințele cookie</div>
                          <div>1 an</div>
                          <div>Necesar</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 text-primary">Cookie-uri de Funcționalitate</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Aceste cookie-uri sunt utilizate de servicii terțe care oferă funcționalități suplimentare pe site-ul nostru.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-sm">
                          <div className="font-medium">Serviciu</div>
                          <div className="font-medium">Scop</div>
                          <div className="font-medium">Expirare</div>
                          <div className="font-medium">Tip</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-sm text-muted-foreground">
                          <div>Google Maps</div>
                          <div>Afișarea hărților interactive pe pagina de contact</div>
                          <div>Sesiune</div>
                          <div>Funcțional</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 text-primary">Cookie-uri de Analitică</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Aceste cookie-uri ne ajută să înțelegem cum vizitatorii interacționează cu site-ul nostru.
                        Toate datele sunt colectate în mod anonim și necesită consimțământul dumneavoastră.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-sm">
                          <div className="font-medium">Nume Cookie</div>
                          <div className="font-medium">Scop</div>
                          <div className="font-medium">Expirare</div>
                          <div className="font-medium">Tip</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-sm text-muted-foreground">
                          <div>_ga</div>
                          <div>Analiza traficului Google Analytics</div>
                          <div>2 ani</div>
                          <div>Analitic</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-sm text-muted-foreground">
                          <div>_gid</div>
                          <div>Diferențierea utilizatorilor</div>
                          <div>24 ore</div>
                          <div>Analitic</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h3 className="font-semibold mb-2">Gestionarea Cookie-urilor</h3>
                      <p className="text-sm text-muted-foreground">
                        Puteți gestiona preferințele de cookie-uri în orice moment prin intermediul
                        barei de cookie-uri care apare la prima vizită sau accesând setările browserului
                        dumneavoastră. Refuzul cookie-urilor neesențiale nu va afecta funcționalitatea
                        de bază a site-ului, dar poate limita accesul la anumite caracteristici.
                      </p>
                    </div>
                  </div>
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
                  <CardTitle>Drepturile Dumneavoastră GDPR</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    În conformitate cu GDPR, aveți următoarele drepturi:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Dreptul de acces</strong> - să obțineți o copie a datelor personale</li>
                    <li><strong>Dreptul de rectificare</strong> - să corectați datele inexacte</li>
                    <li><strong>Dreptul la ștergere</strong> - să solicitați ștergerea datelor</li>
                    <li><strong>Dreptul de opoziție</strong> - să vă opuneți prelucrării</li>
                    <li><strong>Dreptul la portabilitate</strong> - să transferați datele</li>
                    <li><strong>Dreptul de a retrage consimțământul</strong> - oricând</li>
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
                  <CardTitle>Securitatea Datelor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja
                    datele dumneavoastră personale împotriva accesului neautorizat, pierderii,
                    distrugerii sau alterării. Datele sunt stocate în mod securizat și sunt
                    accesibile doar personalului autorizat.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Perioada de Stocare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Păstrăm datele dumneavoastră personale doar atât timp cât este necesar
                    pentru scopurile pentru care au fost colectate sau conform cerințelor legale.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pentru exercitarea drepturilor dumneavoastră sau pentru întrebări legate
                    de protecția datelor, ne puteți contacta:
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Email:</strong> inimabaraganului@yahoo.com
                    </p>
                    <p className="text-sm">
                      <strong>Adresă:</strong> {legalIdentity.address}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center text-sm text-muted-foreground"
            >
              <p>Ultima actualizare: 23 Decembrie 2024</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
