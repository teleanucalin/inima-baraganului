import Link from "next/link"
import { legalIdentity, legalLinks, contact } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              {legalIdentity.name}
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-2">
              {legalIdentity.recognition}
            </p>
            <p className="text-sm text-primary-foreground/80">
              {legalIdentity.address}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-primary-foreground/80 mb-2">
              Email: {contact.email}
            </p>
            <p className="text-sm text-primary-foreground/80">
              Telefon: {contact.phone}
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Informații Legale
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={legalLinks.anpc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {legalLinks.anpc.name} - {legalLinks.anpc.description}
                </a>
              </li>
              <li>
                <a
                  href={legalLinks.sol.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {legalLinks.sol.name} - {legalLinks.sol.description}
                </a>
              </li>
              <li>
                <Link
                  href={legalLinks.gdpr.url}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {legalLinks.gdpr.name}
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
