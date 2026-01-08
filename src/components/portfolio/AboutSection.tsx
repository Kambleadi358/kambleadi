import { Award, Briefcase, GraduationCap, Rocket, Heart } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const highlights = [
  { icon: Award, label: 'Best Outgoing Student', value: '24-25', color: 'pastel-blue' },
  { icon: Briefcase, label: 'Internships', value: '3+', color: 'pastel-lavender' },
  { icon: Rocket, label: 'Co-Founder', value: 'projectCave', color: 'pastel-peach' },
  { icon: GraduationCap, label: 'Diploma Grade', value: '95.66%', color: 'pastel-blue' },
];

export const AboutSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender rounded-full text-lavender-foreground text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              <span>Get to know me</span>
            </div>
            <h2 className="section-heading">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* About Text */}
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 leading-relaxed max-w-3xl mx-auto">
            {data.about}
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="friendly-card p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl ${
                  index % 3 === 0 ? 'bg-primary/10' : index % 3 === 1 ? 'bg-lavender' : 'bg-peach'
                } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-7 h-7 ${
                    index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-lavender-foreground' : 'text-peach-foreground'
                  }`} />
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