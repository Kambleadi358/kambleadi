import { BookOpen } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export const SkillsSection = () => {
  const { data } = usePortfolio();

  const grouped = data.skills.reduce<Record<string, string[]>>((acc, skill) => {
    const key = skill.category || 'Other';
    acc[key] = [...(acc[key] || []), skill.name];
    return acc;
  }, {});

  const categories = Object.keys(grouped);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="eyebrow">Skills</p>
            <h2 className="section-heading">Technical toolkit</h2>
            <p className="section-subheading">
              Technologies and computer science fundamentals used across coursework, internships and shipped projects.
            </p>
          </div>

          {categories.length === 0 ? (
            <p className="text-muted-foreground">No skills added yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map(category => (
                <div key={category} className="interactive-card p-5">
                  <h3 className="text-sm font-display font-semibold uppercase tracking-wider text-primary mb-4">
                    {category}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {grouped[category].map(name => (
                      <li key={name} className="chip">
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Courses */}
          {data.courses?.length > 0 && (
            <div className="mt-12">
              <h3 className="flex items-center gap-2 text-lg font-display font-semibold mb-5">
                <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
                Relevant coursework
              </h3>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.courses.map(course => (
                  <li key={course.id} className="surface-card p-4">
                    <p className="font-medium text-foreground text-sm">{course.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {[course.provider, course.year].filter(Boolean).join(' · ')}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
