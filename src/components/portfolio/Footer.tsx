import { Heart, ArrowUp } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export const Footer = () => {
  const { data } = usePortfolio();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} {data.name}. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span>in {data.location}</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};