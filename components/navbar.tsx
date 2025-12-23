"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  // Apply solid background when scrolled OR when mobile menu is open
  const shouldUseSolidBackground = scrolled || isOpen

  return (
    <nav
      role="navigation"
      aria-label="Navigare principală"
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        shouldUseSolidBackground
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent border-b border-white/10"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            shouldUseSolidBackground ? "h-16" : "h-20"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Inima Bărăganului - Pagina principală"
          >
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-bold font-serif transition-all duration-300",
                  shouldUseSolidBackground
                    ? "text-lg text-primary"
                    : "text-2xl text-white"
                )}
              >
                Inima Bărăganului
              </span>
              <span
                className={cn(
                  "text-xs transition-all duration-300",
                  shouldUseSolidBackground
                    ? "text-secondary"
                    : "text-white/90"
                )}
              >
                Cooperativă Agricolă
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1",
                  shouldUseSolidBackground
                    ? "text-gray-900 hover:text-primary"
                    : "text-white hover:text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
            aria-controls="mobile-menu"
            className={cn(
              "md:hidden rounded-md p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              shouldUseSolidBackground
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col space-y-4 pt-4" role="menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                role="menuitem"
                className={cn(
                  "text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1",
                  shouldUseSolidBackground
                    ? "text-gray-900 hover:text-primary"
                    : "text-white hover:text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
