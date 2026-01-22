import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export const EducationSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-peach/50 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender rounded-full text-lavender-foreground text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Academic background</span>
            </div>
            <h2 className="section-heading">Education</h2>
            <p className="section-subheading mx-auto">
              My academic background and qualifications.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div
                key={edu.id}
                className="friendly-card p-6 md:p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    index % 2 === 0 ? 'bg-primary/10' : 'bg-lavender'
                  }`}>
                    <GraduationCap className={`w-8 h-8 ${
                      index % 2 === 0 ? 'text-primary' : 'text-lavender-foreground'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      {edu.grade && (
                        <div className="inline-flex items-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-full">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold text-sm">{edu.grade}</span>
                        </div>
                      )}
                      {edu.cgpa && (
                        <div className="inline-flex items-center gap-2 text-lavender-foreground bg-lavender px-3 py-1 rounded-full">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold text-sm">CGPA: {edu.cgpa}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    {edu.activities && (
                      <p className="text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-xl inline-block">
                        <span className="font-medium">Activities:</span> {edu.activities}
                      </p>
                    )}
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