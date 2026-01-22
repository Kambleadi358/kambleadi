import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, FileText, Code, Briefcase, GraduationCap, Trophy, 
  Mail, LogOut, Save, Plus, Trash2, ArrowLeft, Image, FileDown, FolderLock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { usePortfolio, Skill, Project, Experience, Education, Award, Document } from '@/context/PortfolioContext';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

type Tab = 'profile' | 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'awards' | 'contact' | 'documents';

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'about', label: 'About', icon: FileText },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'awards', label: 'Awards', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail },
  { id: 'documents', label: 'Documents', icon: FolderLock },
];

const Admin = () => {
  const { data, updateData, isAdmin, logout } = usePortfolio();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [formData, setFormData] = useState(() => ({
    ...data,
    documents: data.documents || [],
    cvUrl: data.cvUrl || '',
  }));

  useEffect(() => {
    if (!isAdmin) {
      navigate('/login');
    }
  }, [isAdmin, navigate]);

  useEffect(() => {
    setFormData({
      ...data,
      documents: data.documents || [],
      cvUrl: data.cvUrl || '',
    });
  }, [data]);

  const handleSave = () => {
    updateData(formData);
    toast({
      title: "Changes saved!",
      description: "Your portfolio has been updated successfully.",
    });
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const generateId = () => Math.random().toString(36).substr(2, 9);

  // Skills handlers
  const addSkill = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, { id: generateId(), name: '', level: 50 }]
    }));
  };

  const updateSkill = (id: string, field: keyof Skill, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.map(s => s.id === id ? { ...s, [field]: value } : s)
    }));
  };

  const deleteSkill = (id: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id)
    }));
  };

  // Projects handlers
  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects: [...prev.projects, { id: generateId(), title: '', description: '', techStack: [], link: '' }]
    }));
  };

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, [field]: value } : p)
    }));
  };

  const deleteProject = (id: string) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  // Experience handlers
  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: generateId(), company: '', role: '', duration: '', description: '' }]
    }));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map(e => e.id === id ? { ...e, [field]: value } : e)
    }));
  };

  const deleteExperience = (id: string) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter(e => e.id !== id)
    }));
  };

  // Education handlers
  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { id: generateId(), institution: '', degree: '', duration: '', grade: '', activities: '' }]
    }));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map(e => e.id === id ? { ...e, [field]: value } : e)
    }));
  };

  const deleteEducation = (id: string) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter(e => e.id !== id)
    }));
  };

  // Awards handlers
  const addAward = () => {
    setFormData(prev => ({
      ...prev,
      awards: [...prev.awards, { id: generateId(), title: '', year: '', description: '' }]
    }));
  };

  const updateAward = (id: string, field: keyof Award, value: string) => {
    setFormData(prev => ({
      ...prev,
      awards: prev.awards.map(a => a.id === id ? { ...a, [field]: value } : a)
    }));
  };

  const deleteAward = (id: string) => {
    setFormData(prev => ({
      ...prev,
      awards: prev.awards.filter(a => a.id !== id)
    }));
  };

  // Documents handlers
  const addDocument = () => {
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, { id: generateId(), name: '', url: '' }]
    }));
  };

  const updateDocument = (id: string, field: keyof Document, value: string) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.map(d => d.id === id ? { ...d, [field]: value } : d)
    }));
  };

  const deleteDocument = (id: string) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter(d => d.id !== id)
    }));
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-xl font-display font-bold">Admin Panel</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="hero" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="glass-card p-4 lg:sticky lg:top-24">
              <ul className="space-y-1">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-grow">
            <div className="glass-card p-6 md:p-8">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-display font-bold">Profile Settings</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="bg-secondary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location</label>
                      <Input
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        className="bg-secondary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <Textarea
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="bg-secondary/50"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Profile Image URL</label>
                    <div className="flex gap-4">
                      <Input
                        value={formData.profileImage}
                        onChange={(e) => setFormData(prev => ({ ...prev, profileImage: e.target.value }))}
                        placeholder="https://example.com/your-photo.jpg"
                        className="bg-secondary/50 flex-grow"
                      />
                      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center overflow-hidden flex-shrink-0">
                        {formData.profileImage ? (
                          <img src={formData.profileImage} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                          <Image className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">CV/Resume URL</label>
                    <div className="flex gap-4 items-center">
                      <Input
                        value={formData.cvUrl || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, cvUrl: e.target.value }))}
                        placeholder="https://drive.google.com/your-cv.pdf"
                        className="bg-secondary/50 flex-grow"
                      />
                      <FileDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Add a link to your CV (Google Drive, Dropbox, etc.)</p>
                  </div>
                </div>
              )}

              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-display font-bold">About Me</h2>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Textarea
                      value={formData.about}
                      onChange={(e) => setFormData(prev => ({ ...prev, about: e.target.value }))}
                      className="bg-secondary/50"
                      rows={6}
                    />
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold">Skills</h2>
                    <Button onClick={addSkill} variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Skill
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {formData.skills.map((skill) => (
                      <div key={skill.id} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
                        <Input
                          value={skill.name}
                          onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                          placeholder="Skill name"
                          className="bg-secondary/50 flex-grow"
                        />
                        <div className="flex items-center gap-2 w-32">
                          <Input
                            type="number"
                            min="0"
                            max="100"
                            value={skill.level}
                            onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value) || 0)}
                            className="bg-secondary/50 w-20"
                          />
                          <span className="text-muted-foreground">%</span>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => deleteSkill(skill.id)}>
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold">Projects</h2>
                    <Button onClick={addProject} variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Project
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {formData.projects.map((project) => (
                      <div key={project.id} className="p-6 bg-secondary/30 rounded-lg space-y-4">
                        <div className="flex items-start justify-between">
                          <Input
                            value={project.title}
                            onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                            placeholder="Project title"
                            className="bg-secondary/50 text-lg font-semibold"
                          />
                          <Button variant="ghost" size="icon" onClick={() => deleteProject(project.id)}>
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                        <Textarea
                          value={project.description}
                          onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                          placeholder="Project description"
                          className="bg-secondary/50"
                          rows={3}
                        />
                        <Input
                          value={project.techStack.join(', ')}
                          onChange={(e) => updateProject(project.id, 'techStack', e.target.value.split(', '))}
                          placeholder="Tech stack (comma separated)"
                          className="bg-secondary/50"
                        />
                        <Input
                          value={project.link || ''}
                          onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                          placeholder="Project link (optional)"
                          className="bg-secondary/50"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold">Experience</h2>
                    <Button onClick={addExperience} variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Experience
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {formData.experience.map((exp) => (
                      <div key={exp.id} className="p-6 bg-secondary/30 rounded-lg space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="grid md:grid-cols-2 gap-4 flex-grow">
                            <Input
                              value={exp.company}
                              onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                              placeholder="Company name"
                              className="bg-secondary/50"
                            />
                            <Input
                              value={exp.role}
                              onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                              placeholder="Role / Position"
                              className="bg-secondary/50"
                            />
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => deleteExperience(exp.id)} className="ml-4">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                        <Input
                          value={exp.duration}
                          onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                          placeholder="Duration (e.g., Jan 2024 - Present)"
                          className="bg-secondary/50"
                        />
                        <Textarea
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                          placeholder="Description"
                          className="bg-secondary/50"
                          rows={3}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold">Education</h2>
                    <Button onClick={addEducation} variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Education
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {formData.education.map((edu) => (
                      <div key={edu.id} className="p-6 bg-secondary/30 rounded-lg space-y-4">
                        <div className="flex items-start justify-between">
                          <Input
                            value={edu.institution}
                            onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                            placeholder="Institution name"
                            className="bg-secondary/50 flex-grow"
                          />
                          <Button variant="ghost" size="icon" onClick={() => deleteEducation(edu.id)} className="ml-4">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input
                            value={edu.degree}
                            onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                            placeholder="Degree"
                            className="bg-secondary/50"
                          />
                          <Input
                            value={edu.duration}
                            onChange={(e) => updateEducation(edu.id, 'duration', e.target.value)}
                            placeholder="Duration"
                            className="bg-secondary/50"
                          />
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <Input
                            value={edu.grade || ''}
                            onChange={(e) => updateEducation(edu.id, 'grade', e.target.value)}
                            placeholder="Grade/Percentage (optional)"
                            className="bg-secondary/50"
                          />
                          <Input
                            value={edu.cgpa || ''}
                            onChange={(e) => updateEducation(edu.id, 'cgpa', e.target.value)}
                            placeholder="CGPA (optional)"
                            className="bg-secondary/50"
                          />
                          <Input
                            value={edu.activities || ''}
                            onChange={(e) => updateEducation(edu.id, 'activities', e.target.value)}
                            placeholder="Activities (optional)"
                            className="bg-secondary/50"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Awards Tab */}
              {activeTab === 'awards' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold">Awards & Honors</h2>
                    <Button onClick={addAward} variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Award
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {formData.awards.map((award) => (
                      <div key={award.id} className="p-6 bg-secondary/30 rounded-lg space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="grid md:grid-cols-2 gap-4 flex-grow">
                            <Input
                              value={award.title}
                              onChange={(e) => updateAward(award.id, 'title', e.target.value)}
                              placeholder="Award title"
                              className="bg-secondary/50"
                            />
                            <Input
                              value={award.year}
                              onChange={(e) => updateAward(award.id, 'year', e.target.value)}
                              placeholder="Year"
                              className="bg-secondary/50"
                            />
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => deleteAward(award.id)} className="ml-4">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                        <Textarea
                          value={award.description}
                          onChange={(e) => updateAward(award.id, 'description', e.target.value)}
                          placeholder="Description"
                          className="bg-secondary/50"
                          rows={2}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Tab */}
              {activeTab === 'contact' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-display font-bold">Contact Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="bg-secondary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="bg-secondary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">LinkedIn</label>
                      <Input
                        value={formData.linkedin}
                        onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                        placeholder="linkedin.com/in/username"
                        className="bg-secondary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">GitHub</label>
                      <Input
                        value={formData.github}
                        onChange={(e) => setFormData(prev => ({ ...prev, github: e.target.value }))}
                        placeholder="github.com/username"
                        className="bg-secondary/50"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Documents Tab */}
              {activeTab === 'documents' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-display font-bold">Academic Documents</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Add documents with their names and URLs. Access via: /documents
                      </p>
                    </div>
                    <Button onClick={addDocument} variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Document
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {formData.documents.map((doc) => (
                      <div key={doc.id} className="p-4 bg-secondary/30 rounded-lg space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="grid md:grid-cols-2 gap-4 flex-grow">
                            <Input
                              value={doc.name}
                              onChange={(e) => updateDocument(doc.id, 'name', e.target.value)}
                              placeholder="Document name (e.g., 10th Marksheet)"
                              className="bg-secondary/50"
                            />
                            <Input
                              value={doc.url}
                              onChange={(e) => updateDocument(doc.id, 'url', e.target.value)}
                              placeholder="Document URL (Google Drive, etc.)"
                              className="bg-secondary/50"
                            />
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => deleteDocument(doc.id)}>
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {formData.documents.length === 0 && (
                      <p className="text-muted-foreground text-center py-8">No documents added yet. Click "Add Document" to start.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
