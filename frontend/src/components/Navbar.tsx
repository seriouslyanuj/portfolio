import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#summary', label: 'Summary' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-xl tracking-tight hover:text-blue-400 transition-colors">
          AG<span className="text-blue-500">.</span>
        </a>
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current transition-all mb-1 ${ menuOpen ? 'rotate-45 translate-y-1.5' : '' }`} />
          <div className={`w-5 h-0.5 bg-current transition-all mb-1 ${ menuOpen ? 'opacity-0' : '' }`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${ menuOpen ? '-rotate-45 -translate-y-1.5' : '' }`} />
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/98 border-t border-white/5 px-6 py-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-400 hover:text-white text-sm font-medium border-b border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
