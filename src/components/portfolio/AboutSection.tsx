import { Award, Briefcase, GraduationCap, Rocket, Heart } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import aboutPhoto from '@/assets/about-photo.jpg';

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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender rounded-full text-lavender-foreground text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              <span>Get to know me</span>
            </div>
            <h2 className="section-heading">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* About Content with Image */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-lavender to-peach rounded-3xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-glow)]">
                  <img 
                    src={aboutPhoto} 
                    alt="Aditya Kamble" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg">
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="text-2xl font-display font-bold text-primary">3+ Years</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Turning Ideas into <span className="text-primary">Digital Reality</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {data.about}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Software Development
                </span>
                <span className="px-4 py-2 bg-lavender text-lavender-foreground rounded-full text-sm font-medium">
                  Web Development
                </span>
                <span className="px-4 py-2 bg-peach text-peach-foreground rounded-full text-sm font-medium">
                  ERP Systems
                </span>
              </div>
            </div>
          </div>

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