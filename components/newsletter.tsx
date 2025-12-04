"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NewsletterProps {
  variant?: "default" | "compact"
  className?: string
}

export function Newsletter({ variant = "default", className = "" }: NewsletterProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call (replace with actual newsletter service integration)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // TODO: Integrate with actual newsletter service (Mailchimp, SendGrid, etc.)
      // Example: await subscribeToNewsletter(email)

      setStatus("success")
      setMessage("Mulțumim! Te-ai abonat cu succes la newsletter.")
      setEmail("")

      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 5000)
    } catch (error) {
      setStatus("error")
      setMessage("A apărut o eroare. Te rugăm să încerci din nou.")

      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 5000)
    }
  }

  if (variant === "compact") {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email-ul tău"
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
          />
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            variant="secondary"
            size="default"
          >
            {status === "loading" ? "..." : status === "success" ? "✓" : "Abonează-te"}
          </Button>
        </form>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm mt-2 ${
              status === "success" ? "text-wheat" : "text-accent"
            }`}
          >
            {message}
          </motion.p>
        )}
      </div>
    )
  }

  return (
    <section className={`py-20 bg-gradient-to-br from-primary to-olive ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wheat/20 mb-6">
            <Mail className="w-8 h-8 text-wheat" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
            Rămâi la curent cu noutățile din Bărăgan
          </h2>

          <p className="text-lg text-white/90 mb-8">
            Abonează-te la newsletter-ul nostru pentru actualizări despre sezon, povești
            ale membrilor, rapoarte AFIR și anunțuri importante.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresa ta de email"
              required
              disabled={status === "loading" || status === "success"}
              className="flex-1 px-6 py-3 rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-wheat disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <Button
              type="submit"
              disabled={status === "loading" || status === "success"}
              size="lg"
              variant="secondary"
              className="sm:w-auto"
            >
              {status === "loading" && "Se procesează..."}
              {status === "success" && (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Abonat!
                </>
              )}
              {status === "idle" && "Abonează-te"}
              {status === "error" && "Încearcă din nou"}
            </Button>
          </form>

          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-lg flex items-center justify-center gap-2 ${
                status === "success"
                  ? "bg-wheat/20 text-wheat"
                  : "bg-accent/20 text-accent-foreground"
              }`}
            >
              {status === "success" ? (
                <Check className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <p>{message}</p>
            </motion.div>
          )}

          <p className="text-sm text-white/70 mt-6">
            Ne respectăm abonații. Fără spam, doar conținut relevant despre agricultura din Bărăgan.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
