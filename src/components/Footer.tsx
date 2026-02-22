export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 px-4">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-accent-dim">
        <span>© {new Date().getFullYear()} Anuj Gupta</span>
        <span>Prayagraj, India</span>
      </div>
    </footer>
  )
}
