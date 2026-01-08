import { Trophy, Star, Sparkles } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export const AwardsSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="awards" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-peach rounded-full text-peach-foreground text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Recognition</span>
            </div>
            <h2 className="section-heading">Awards & Honors</h2>
            <p className="section-subheading mx-auto">
              Recognition for excellence in academics and professional achievements.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {data.awards.map((award, index) => (
              <div
                key={award.id}
                className="friendly-card p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${
                    index % 3 === 0 ? 'bg-primary/10' : index % 3 === 1 ? 'bg-lavender' : 'bg-peach'
                  }`}>
                    <Trophy className={`w-7 h-7 ${
                      index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-lavender-foreground' : 'text-peach-foreground'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary font-semibold">{award.year}</span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
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