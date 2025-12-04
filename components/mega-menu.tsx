"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { megaMenuCategories, navLinks } from "@/lib/data"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary font-serif">
                Inima Bărăganului
              </span>
              <span className="text-xs text-secondary">
                Cooperativă Agricolă
              </span>
            </div>
          </Link>

          {/* Desktop Mega Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
            >
              Acasă
            </Link>

            {megaMenuCategories.map((category) => (
              <div
                key={category.title}
                className="relative"
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md",
                    activeCategory === category.title
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {category.title}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      activeCategory === category.title && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeCategory === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl border border-border overflow-hidden"
                    >
                      <div className="p-2">
                        {category.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 rounded-md hover:bg-primary/5 transition-colors group"
                          >
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.name}
                            </div>
                            {item.description && (
                              <div className="text-sm text-muted-foreground mt-1">
                                {item.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-md p-2 text-foreground hover:bg-primary/5 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
