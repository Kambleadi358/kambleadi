import { ArrowRight, MapPin, Github, Linkedin, Mail, FileDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePortfolio } from '@/context/PortfolioContext';

export const HeroSection = () => {
  const { data } = usePortfolio();

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Copy */}
          <div className="animate-slide-up">
            <p className="eyebrow">Available for internships & freelance work</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] mb-4">
              {data.name}
              <span className="block text-primary mt-2 text-2xl md:text-3xl lg:text-4xl">{data.title}</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6">
              {data.tagline}
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>{data.location}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button size="lg" onClick={() => scrollTo('#projects')} className="gap-2">
                View Projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('#contact')}>
                Contact Me
              </Button>
              <a href={data.cvUrl} download>
                <Button size="lg" variant="secondary" className="gap-2">
                  <FileDown className="w-4 h-4" aria-hidden="true" />
                  Download Resume
                </Button>
              </a>
              <a href={data.cvUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost" className="gap-2">
                  View Resume
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </Button>
              </a>
            </div>

            <ul className="flex items-center gap-3">
              <li>
                <a
                  href={`https://${data.github.replace(/^https?:\/\//, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={`https://${data.linkedin.replace(/^https?:\/\//, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${data.email}`}
                  aria-label="Send an email"
                  className="inline-flex p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Portrait — full head visible, no circular crop */}
          <div className="order-first lg:order-last animate-fade-in">
            <div className="relative w-56 sm:w-64 lg:w-full max-w-sm mx-auto">
              <div
                className="absolute -inset-3 rounded-2xl bg-[image:var(--gradient-primary)] opacity-20 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-glow)] aspect-[4/5]">
                {data.profileImage ? (
                  <img
                    src={data.profileImage}
                    alt={`Portrait of ${data.name}`}
                    width={480}
                    height={600}
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl font-display font-bold text-primary">
                    {data.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
