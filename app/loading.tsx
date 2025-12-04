export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative mx-auto mb-6">
          <div className="w-16 h-16 border-4 border-primary/20 rounded-full" />
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>

        {/* Text */}
        <p className="text-lg font-medium text-muted-foreground">
          Se încarcă...
        </p>
      </div>
    </div>
  )
}
