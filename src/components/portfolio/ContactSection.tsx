import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { usePortfolio } from '@/context/PortfolioContext';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { data } = usePortfolio();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    toast({
      title: "Message Sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-peach/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4" />
              <span>Let's connect</span>
            </div>
            <h2 className="section-heading">Get In Touch</h2>
            <p className="section-subheading mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-4 p-4 friendly-card group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">{data.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 friendly-card">
                  <div className="w-14 h-14 rounded-2xl bg-lavender flex items-center justify-center">
                    <Phone className="w-6 h-6 text-lavender-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">{data.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 friendly-card">
                  <div className="w-14 h-14 rounded-2xl bg-peach flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-peach-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">{data.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href={`https://${data.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 friendly-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={`https://${data.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 friendly-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="friendly-card p-6 md:p-8">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Thank You! ✨
                  </h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">
                    Send a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Your name"
                        required
                        className="bg-secondary/50 border-border rounded-xl focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your@email.com"
                        required
                        className="bg-secondary/50 border-border rounded-xl focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Your message..."
                        rows={5}
                        required
                        className="bg-secondary/50 border-border resize-none rounded-xl focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full rounded-xl" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};