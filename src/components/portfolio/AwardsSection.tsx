import { Trophy, Star } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export const AwardsSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="awards" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
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
                className="glass-card p-6 card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary font-medium">{award.year}</span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
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
