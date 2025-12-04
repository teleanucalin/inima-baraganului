import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-serif text-9xl md:text-[12rem] font-bold text-primary/20 leading-none">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary">
            Pagină negăsită
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Ne pare rău, pagina pe care o cauți nu există sau a fost mutată.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="w-4 h-4 mr-2" />
              Înapoi la Acasă
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Search className="w-4 h-4 mr-2" />
              Contactează-ne
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Poate te interesează:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/despre-noi" className="text-sm text-primary hover:underline">
              Povestea Noastră
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/membri" className="text-sm text-primary hover:underline">
              Membri
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/proiecte" className="text-sm text-primary hover:underline">
              Transparență AFIR
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/contact" className="text-sm text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
