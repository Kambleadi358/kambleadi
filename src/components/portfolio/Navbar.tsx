import { useState, useEffect } from 'react';
import { Menu, X, User, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePortfolio } from '@/context/PortfolioContext';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const { isAdmin, logout, data } = usePortfolio();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(l => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background/85 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={e => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-lg font-display font-bold tracking-tight"
          >
            Aditya Kamble<span className="text-primary">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                aria-current={active === link.href ? 'true' : undefined}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  active === link.href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.name}
              </button>
            ))}

            <a href={data.cvUrl} download className="ml-2">
              <Button size="sm" className="gap-2">
                <FileDown className="w-4 h-4" aria-hidden="true" />
                Resume
              </Button>
            </a>

            {isAdmin ? (
              <div className="flex items-center gap-2 ml-2">
                <Link to="/admin">
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 mr-1" aria-hidden="true" />
                    Admin
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : null}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-foreground rounded-md hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden pb-4 border-t border-border animate-fade-in bg-background/95 backdrop-blur-md"
          >
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-3 py-3 rounded-md transition-colors ${
                  active === link.href ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="px-3 pt-3 flex flex-col gap-2">
              <a href={data.cvUrl} download>
                <Button className="w-full gap-2">
                  <FileDown className="w-4 h-4" aria-hidden="true" />
                  Download Resume
                </Button>
              </a>
              {isAdmin && (
                <div className="flex gap-2">
                  <Link to="/admin" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      Admin Panel
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
