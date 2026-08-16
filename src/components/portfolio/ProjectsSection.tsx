import { useMemo, useState } from 'react';
import { ExternalLink, Github, Search, Star, Folder } from 'lucide-react';
import { usePortfolio, ProjectCategory } from '@/context/PortfolioContext';
import { Input } from '@/components/ui/input';

const FILTERS: ('All' | ProjectCategory)[] = ['All', 'Web', 'AI/ML', 'Full Stack', 'Mobile', 'Other'];

export const ProjectsSection = () => {
  const { data } = usePortfolio();
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.projects.filter(p => {
      const matchesFilter = filter === 'All' || p.category === filter;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techStack.some(t => t.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [data.projects, filter, query]);

  const featured = data.projects.filter(p => p.featured).slice(0, 5);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="eyebrow">Projects</p>
            <h2 className="section-heading">Selected work</h2>
            <p className="section-subheading">
              Systems I designed and built end to end — from institutional ERP to accessibility tooling.
            </p>
          </div>

          {/* Featured */}
          {featured.length > 0 && (
            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {featured.slice(0, 2).map(project => (
                <article key={project.id} className="interactive-card p-6 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary mb-3">
                    <Star className="w-3.5 h-3.5" aria-hidden="true" />
                    Featured
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  {project.problem && (
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="text-foreground font-medium">Problem: </span>
                      {project.problem}
                    </p>
                  )}
                  <ul className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.techStack.map(tech => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" aria-hidden="true" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        Live demo
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Controls */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                    filter === f
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="relative md:ml-auto md:w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search projects"
                aria-label="Search projects"
                className="pl-9"
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="surface-card p-10 text-center">
              <Folder className="w-8 h-8 mx-auto text-muted-foreground mb-3" aria-hidden="true" />
              <p className="text-muted-foreground">No projects match this filter or search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(project => (
                <article key={project.id} className="interactive-card p-6 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-display font-semibold">{project.title}</h3>
                    <span className="chip shrink-0">{project.category}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                  {project.features?.length > 0 && (
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-4 list-disc pl-4">
                      {project.features.map(feature => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map(tech => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {(project.github || project.demo) && (
                    <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          Live demo
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <a
              href={`https://${data.github.replace(/^https?:\/\//, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
