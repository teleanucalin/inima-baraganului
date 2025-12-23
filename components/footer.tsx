import Link from "next/link"
import { legalIdentity, legalLinks, contact } from "@/lib/data"

export function Footer() {
  return (
    <footer role="contentinfo" aria-label="Informații juridice și contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h2 className="font-serif text-lg font-semibold mb-4">
              {legalIdentity.name}
            </h2>
            <p className="text-sm text-primary-foreground/80 mb-2">
              {legalIdentity.recognition}
            </p>
            <p className="text-sm text-primary-foreground/80">
              {legalIdentity.address}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-serif text-lg font-semibold mb-4">Contact</h2>
            <p className="text-sm text-primary-foreground/80 mb-2">
              <a href={`mailto:${contact.email}`} className="hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded">
                Email: {contact.email}
              </a>
            </p>
            <p className="text-sm text-primary-foreground/80">
              <a href={`tel:${contact.phone}`} className="hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded">
                Telefon: {contact.phone}
              </a>
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h2 className="font-serif text-lg font-semibold mb-4">
              Informații Legale
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href={legalLinks.anpc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${legalLinks.anpc.name} - ${legalLinks.anpc.description} (se deschide într-o fereastră nouă)`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  {legalLinks.anpc.name} - {legalLinks.anpc.description}
                </a>
              </li>
              <li>
                <a
                  href={legalLinks.sol.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${legalLinks.sol.name} - ${legalLinks.sol.description} (se deschide într-o fereastră nouă)`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  {legalLinks.sol.name} - {legalLinks.sol.description}
                </a>
              </li>
              <li>
                <Link
                  href={legalLinks.gdpr.url}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  {legalLinks.gdpr.name}
                </Link>
              </li>
              <li>
                <Link
                  href="/accesibilitate"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  Declarație de Accesibilitate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">
            © 2025 Inima Bărăganului. Dezvoltat conform standardelor UE.
          </p>
          <p className="text-center text-xs text-primary-foreground/60 mt-2">
            {legalIdentity.cui} | {legalIdentity.regCom}
          </p>
        </div>
      </div>
    </footer>
  )
}
