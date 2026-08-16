import { FileDown, GraduationCap, Code2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePortfolio } from '@/context/PortfolioContext';
import aboutPhoto from '@/assets/about-photo.jpg';

export const AboutSection = () => {
  const { data } = usePortfolio();

  const facts = [
    { icon: GraduationCap, label: 'B.Tech Computer Engineering', value: 'VIT Pune · CGPA 9.07' },
    { icon: Code2, label: 'Diploma Computer Engineering', value: '95.66% · MSBTE' },
    { icon: Layers, label: 'Focus areas', value: 'Full stack web, databases, AI tooling' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="eyebrow">About</p>
            <h2 className="section-heading">Engineering background & current focus</h2>
          </div>

          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
            <div className="rounded-xl overflow-hidden border border-border bg-card aspect-[4/5] max-w-xs">
              <img
                src={aboutPhoto}
                alt={`${data.name} working on a development project`}
                loading="lazy"
                width={400}
                height={500}
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>

            <div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">{data.about}</p>

              <ul className="space-y-4 mb-8">
                {facts.map(fact => (
                  <li key={fact.label} className="flex items-start gap-3">
                    <span className="mt-0.5 p-2 rounded-md bg-primary/10 text-primary">
                      <fact.icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-foreground">{fact.label}</span>
                      <span className="block text-sm text-muted-foreground">{fact.value}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href={data.cvUrl} download>
                  <Button className="gap-2">
                    <FileDown className="w-4 h-4" aria-hidden="true" />
                    Download Resume
                  </Button>
                </a>
                <a href={data.cvUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">View Resume</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
