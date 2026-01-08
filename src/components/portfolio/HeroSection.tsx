import { ArrowDown, MapPin, Github, Linkedin, Mail, Sparkles, Instagram } from 'lucide-react';
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
      {/* Background with soft gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-lavender rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-peach rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-gradient-to-br from-primary/20 via-lavender to-peach p-1 shadow-[var(--shadow-glow)]">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden border-4 border-background">
                {data.profileImage ? (
                  <img src={data.profileImage} alt={data.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-5xl md:text-6xl font-display font-bold text-primary">
                    {data.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Sparkle badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-slide-up">
            <Sparkles className="w-4 h-4" />
            <span>Passionate Developer | Problem Solver | Creative Thinker</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 animate-slide-up text-foreground">
            {data.name}
          </h1>

          {/* Title */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto animate-slide-up stagger-1 leading-relaxed">
            {data.title}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-slide-up stagger-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{data.location}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mb-10 animate-slide-up stagger-3">
            <a
              href={`https://${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[var(--shadow-glow)]"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[var(--shadow-glow)]"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`https://${data.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[var(--shadow-glow)]"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[var(--shadow-glow)]"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-4">
            <Button variant="hero" size="xl" onClick={scrollToProjects} className="rounded-full">
              View My Work
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-full">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="p-2 rounded-full bg-card border border-border shadow-sm">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};