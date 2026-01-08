import { Zap } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export const SkillsSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-peach/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>What I do best</span>
            </div>
            <h2 className="section-heading">Skills</h2>
            <p className="section-subheading mx-auto">
              Technologies and competencies I've developed through education and professional experience.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-5">
            {data.skills.map((skill, index) => (
              <div
                key={skill.id}
                className="friendly-card p-5 md:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-foreground font-display">{skill.name}</h3>
                  <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};