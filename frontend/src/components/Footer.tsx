export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-sm">
            AG<span className="text-blue-500">.</span>
          </span>
          <span className="text-gray-600 text-xs">Anuj Gupta</span>
        </div>
        <p className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Anuj Gupta &middot; Prayagraj, India
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:seriouslyanuj@gmail.com" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/seriouslyanuj/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">LinkedIn</a>
          <a href="https://github.com/seriouslyanuj" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
