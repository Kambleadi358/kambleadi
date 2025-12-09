import { Award, Briefcase, GraduationCap, Rocket } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const highlights = [
  { icon: Award, label: 'Best Outgoing Student', value: '24-25' },
  { icon: Briefcase, label: 'Internships', value: '3+' },
  { icon: Rocket, label: 'Co-Founder', value: 'projectCave' },
  { icon: GraduationCap, label: 'Diploma Grade', value: '95.66%' },
];

export const AboutSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-heading">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* About Text */}
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 leading-relaxed">
            {data.about}
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="glass-card p-6 text-center card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-display font-bold text-foreground mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
