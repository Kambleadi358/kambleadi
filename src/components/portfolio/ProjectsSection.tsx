import { ExternalLink, Folder, Code } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export const ProjectsSection = () => {
  const { data } = usePortfolio();

  const cardColors = [
    'hover:border-primary/50',
    'hover:border-lavender-foreground/50',
    'hover:border-peach-foreground/50',
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-peach rounded-full text-peach-foreground text-sm font-medium mb-4">
              <Code className="w-4 h-4" />
              <span>Featured work</span>
            </div>
            <h2 className="section-heading">Projects</h2>
            <p className="section-subheading mx-auto">
              A selection of projects I've worked on, showcasing my skills in development and problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((project, index) => (
              <article
                key={project.id}
                className={`friendly-card p-6 flex flex-col group ${cardColors[index % 3]}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    index % 3 === 0 ? 'bg-primary/10' : index % 3 === 1 ? 'bg-lavender' : 'bg-peach'
                  }`}>
                    <Folder className={`w-7 h-7 ${
                      index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-lavender-foreground' : 'text-peach-foreground'
                    }`} />
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        techIndex % 3 === 0 ? 'bg-primary/10 text-primary' : 
                        techIndex % 3 === 1 ? 'bg-lavender text-lavender-foreground' : 
                        'bg-peach text-peach-foreground'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};