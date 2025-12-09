import { GraduationCap, Calendar, Award } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export const EducationSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
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
                className="glass-card p-6 md:p-8 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      {edu.grade && (
                        <div className="flex items-center gap-2 text-primary">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold">{edu.grade}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    {edu.activities && (
                      <p className="text-sm text-muted-foreground">
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
