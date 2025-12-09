import { ArrowDown, MapPin, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePortfolio } from '@/context/PortfolioContext';

export const HeroSection = () => {
  const { data } = usePortfolio();

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
              {data.profileImage ? (
                <img src={data.profileImage} alt={data.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-5xl md:text-6xl font-display font-bold text-primary">
                  {data.name.split(' ').map(n => n[0]).join('')}
                </span>
              )}
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 animate-slide-up">
            {data.name}
          </h1>

          {/* Title */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto animate-slide-up stagger-1">
            {data.title}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-slide-up stagger-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{data.location}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-10 animate-slide-up stagger-3">
            <a
              href={`https://${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-4">
            <Button variant="hero" size="xl" onClick={scrollToProjects}>
              View My Work
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};
