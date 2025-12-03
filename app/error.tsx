'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry)
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary">
          Oops! Ceva nu a mers bine
        </h1>

        <p className="text-lg text-muted-foreground mb-2">
          {error.message || 'A apărut o eroare neașteptată'}
        </p>

        {error.digest && (
          <p className="text-sm text-muted-foreground mb-6">
            Cod eroare: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button onClick={reset} size="lg">
            Încearcă din nou
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.location.href = '/'}
          >
            Înapoi la Acasă
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Dacă problema persistă, te rugăm să ne contactezi la{' '}
          <a href="mailto:contact@inimabaraganului.ro" className="text-primary hover:underline">
            contact@inimabaraganului.ro
          </a>
        </p>
      </div>
    </div>
  )
}
