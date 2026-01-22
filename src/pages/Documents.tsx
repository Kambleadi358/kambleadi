import { FileText, ExternalLink, ArrowLeft, Lock } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Documents = () => {
  const { data } = usePortfolio();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender rounded-full text-lavender-foreground text-sm font-medium mb-4">
              <Lock className="w-4 h-4" />
              <span>Academic Records</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              My Documents
            </h1>
            <p className="text-muted-foreground">
              Access my academic documents and certificates.
            </p>
          </div>

          {/* Documents List */}
          {data.documents.length > 0 ? (
            <div className="space-y-4">
              {data.documents.map((doc, index) => (
                <a
                  key={doc.id}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="friendly-card p-6 flex items-center gap-4 group hover:border-primary/50 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    index % 3 === 0 ? 'bg-primary/10' : index % 3 === 1 ? 'bg-lavender' : 'bg-peach'
                  }`}>
                    <FileText className={`w-7 h-7 ${
                      index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-lavender-foreground' : 'text-peach-foreground'
                    }`} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">Click to view document</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          ) : (
            <div className="friendly-card p-12 text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No documents available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documents;