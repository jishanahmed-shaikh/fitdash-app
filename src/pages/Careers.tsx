
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, DollarSign, ChevronRight, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Sample job postings
const jobPostings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    department: "Engineering",
    description: "We're looking for a Senior Frontend Developer to join our team and help build the next generation of our fitness app.",
    requirements: [
      "5+ years of experience with React",
      "Strong knowledge of TypeScript",
      "Experience with responsive design and CSS frameworks like Tailwind",
      "Passion for creating beautiful, intuitive interfaces",
      "Experience with testing frameworks"
    ],
    responsibilities: [
      "Develop and maintain the user interface of our web application",
      "Collaborate with designers to implement UI/UX improvements",
      "Write clean, maintainable code following best practices",
      "Optimize application for performance and responsiveness",
      "Participate in code reviews and team discussions"
    ]
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    department: "Engineering",
    description: "Join our backend team to build scalable APIs and services that power our fitness platform.",
    requirements: [
      "4+ years of experience with Node.js or similar backend technologies",
      "Strong knowledge of database design and optimization",
      "Experience with API design and development",
      "Familiarity with cloud services (AWS, GCP, or Azure)",
      "Understanding of security best practices"
    ],
    responsibilities: [
      "Design and implement scalable backend services",
      "Optimize database queries and data models",
      "Ensure security of user data and API endpoints",
      "Collaborate with frontend team on API integration",
      "Participate in on-call rotation and maintain system reliability"
    ]
  },
  {
    id: 3,
    title: "Product Designer",
    location: "Remote",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    department: "Design",
    description: "We're seeking a talented Product Designer to create engaging and intuitive user experiences for our fitness app.",
    requirements: [
      "3+ years of product design experience",
      "Strong portfolio demonstrating UI/UX expertise",
      "Proficiency with design tools (Figma, Sketch, etc.)",
      "Experience with user research and usability testing",
      "Ability to translate user needs into design solutions"
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Collaborate with engineering team on implementation",
      "Conduct user research and usability testing",
      "Maintain design system and component library",
      "Help shape product strategy and roadmap"
    ]
  },
  {
    id: 4,
    title: "Marketing Manager",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    department: "Marketing",
    description: "Lead our marketing efforts to grow our user base and establish our brand in the fitness tech space.",
    requirements: [
      "5+ years of marketing experience, preferably in tech or health/fitness",
      "Experience with digital marketing channels and analytics",
      "Strong project management and communication skills",
      "Data-driven approach to marketing strategy",
      "Creative thinking and problem-solving abilities"
    ],
    responsibilities: [
      "Develop and execute marketing campaigns across channels",
      "Track and analyze marketing metrics to optimize performance",
      "Manage social media presence and content strategy",
      "Collaborate with product team on launches and features",
      "Build and maintain relationships with partners and influencers"
    ]
  }
];

const JobApplicationModal = ({ job, onClose }) => {
  const { toast } = useToast();
  
  const handleApply = () => {
    toast({
      title: "Application Submitted!",
      description: `Thank you for applying to the ${job.title} position. We'll review your application and get back to you soon.`,
    });
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{job.title}</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-fitdash-purple mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-fitdash-purple mr-2" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 text-fitdash-purple mr-2" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 text-fitdash-purple mr-2" />
                <span>{job.salary}</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Job Description</h3>
              <p className="text-muted-foreground">{job.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Requirements</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Responsibilities</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            
            <div className="border-t pt-6">
              <p className="mb-4">
                FitDash is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
              </p>
              <Button className="w-full bg-fitdash-purple hover:bg-fitdash-purple-dark" onClick={handleApply}>
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span>Careers</span>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-2">Join Our Team</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Help us shape the future of fitness and wellness technology.
              </p>
            </div>
            
            <div className="bg-fitdash-purple/5 rounded-lg p-6 md:p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-fitdash-purple/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitdash-purple">
                          <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                          <path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                          <path d="M20 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"></path>
                          <path d="M4 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                          <path d="M16 12h-4"></path>
                          <path d="M4 12h4"></path>
                          <path d="M12 16v-4"></path>
                          <path d="M12 4v4"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Innovative Technology</h3>
                        <p className="text-muted-foreground text-sm">Work with cutting-edge technology to solve real health challenges.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-fitdash-purple/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitdash-purple">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 8v4l3 3"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Flexible Work Environment</h3>
                        <p className="text-muted-foreground text-sm">Remote-first culture with the flexibility to work your way.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-fitdash-purple/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitdash-purple">
                          <path d="M20 6H10m0 0H4m6 0V3m4 14h6m0 0h-6m0 0v3M4 10h6m0 0h10m-10 0V7"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Competitive Benefits</h3>
                        <p className="text-muted-foreground text-sm">Comprehensive health coverage, 401k, generous PTO, and more.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-fitdash-purple/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitdash-purple">
                          <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0Z"></path>
                          <circle cx="12" cy="8" r="2"></circle>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Growth Opportunities</h3>
                        <p className="text-muted-foreground text-sm">Continuous learning, mentorship, and career development.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Team working together" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
            
            <div className="space-y-4">
              {jobPostings.map((job) => (
                <Card key={job.id} className="hover-scale cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold">{job.title}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <DollarSign className="h-4 w-4 mr-1" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                        <p className="mt-3 text-muted-foreground">{job.description}</p>
                      </div>
                      <Button 
                        className="bg-fitdash-purple hover:bg-fitdash-purple-dark mt-4 md:mt-0"
                        onClick={() => setSelectedJob(job)}
                      >
                        Apply Now
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-6 text-center my-12">
              <h3 className="text-xl font-bold mb-2">Don't see a role that fits?</h3>
              <p className="mb-4 text-muted-foreground">We're always looking for talented individuals to join our team.</p>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="pt-8 border-t mt-8">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </main>
        
        {selectedJob && (
          <JobApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </div>
    </SidebarProvider>
  );
};

export default Careers;
