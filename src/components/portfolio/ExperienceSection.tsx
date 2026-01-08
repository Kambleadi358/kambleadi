import { Briefcase, Building } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export const ExperienceSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-lavender/50 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Building className="w-4 h-4" />
              <span>My journey</span>
            </div>
            <h2 className="section-heading">Experience</h2>
            <p className="section-subheading mx-auto">
              My professional journey through various roles and organizations.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-lavender to-peach md:-translate-x-1/2" />

            {data.experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-start gap-6 md:gap-12 mb-10 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 shadow-[var(--shadow-glow)]" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="friendly-card p-6">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        index % 3 === 0 ? 'bg-primary/10' : index % 3 === 1 ? 'bg-lavender' : 'bg-peach'
                      }`}>
                        <Briefcase className={`w-6 h-6 ${
                          index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-lavender-foreground' : 'text-peach-foreground'
                        }`} />
                      </div>
                      <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">{exp.duration}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-semibold mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};