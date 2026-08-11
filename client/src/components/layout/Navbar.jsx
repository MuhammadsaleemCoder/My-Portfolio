import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function scrollToSection(href) {
  const el = document.querySelector(href);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-2 group"
          data-testid="link-logo"
        >
          <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-sm font-bold">
            MS
          </span>
          <span className="hidden sm:inline-block">Muhammad Saleem</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="hover:text-primary transition-colors focus:outline-none bg-transparent border-none cursor-pointer text-muted-foreground text-sm font-medium"
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNav('#contact')}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:opacity-90 transition-all cursor-pointer border-none"
            data-testid="btn-nav-hire"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="btn-mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.href)}
              className="text-left py-2 text-foreground font-medium w-full bg-transparent border-none cursor-pointer text-base"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="w-full mt-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold border-none cursor-pointer hover:opacity-90 transition-opacity"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}
