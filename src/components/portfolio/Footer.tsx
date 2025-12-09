import { Heart } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export const Footer = () => {
  const { data } = usePortfolio();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} {data.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>in {data.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
