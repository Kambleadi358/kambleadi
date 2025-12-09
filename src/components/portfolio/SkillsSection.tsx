import { usePortfolio } from '@/context/PortfolioContext';

export const SkillsSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-heading">Skills</h2>
            <p className="section-subheading mx-auto">
              Technologies and competencies I've developed through education and professional experience.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            {data.skills.map((skill, index) => (
              <div
                key={skill.id}
                className="glass-card p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
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
