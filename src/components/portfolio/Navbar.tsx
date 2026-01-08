import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePortfolio } from '@/context/PortfolioContext';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAdmin, logout } = usePortfolio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" onClick={() => scrollToSection('#')} className="text-xl font-display font-bold text-foreground hover:text-primary transition-colors">
            AK<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/5"
              >
                {link.name}
              </button>
            ))}
            {isAdmin ? (
              <div className="flex items-center gap-2 ml-4">
                <Link to="/admin">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <User className="w-4 h-4 mr-1" />
                    Admin
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={logout} className="rounded-full">
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login" className="ml-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  Admin Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in bg-background/95 backdrop-blur-md rounded-b-2xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors rounded-xl mx-2"
              >
                {link.name}
              </button>
            ))}
            {isAdmin ? (
              <div className="px-4 py-3 flex gap-2">
                <Link to="/admin" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full rounded-full">
                    Admin Panel
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={logout} className="rounded-full">
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login" className="block px-4 py-3">
                <Button variant="outline" size="sm" className="w-full rounded-full">
                  Admin Login
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};