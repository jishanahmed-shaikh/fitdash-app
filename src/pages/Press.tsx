import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Download, ExternalLink, Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

// Mock press releases data
const pressReleases = [
  {
    id: 1,
    title: "FitDash Adds Personalized AI Workout Recommendations",
    date: "April 5, 2025",
    excerpt: "FitDash introduces a new AI-powered feature that creates personalized workout plans based on individual fitness goals and progress.",
    category: "Product",
    image: "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "FitDash Partners with Leading Nutrition Research Institute",
    date: "March 22, 2025",
    excerpt: "Strategic partnership aims to develop evidence-based nutrition tracking and planning tools for the FitDash platform.",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "FitDash Reaches 2 Million Active Users Milestone",
    date: "March 10, 2025",
    excerpt: "Celebrating rapid growth and strong user retention, FitDash announces reaching 2 million active monthly users worldwide.",
    category: "Company",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "FitDash Launches Premium Subscription Tier",
    date: "February 28, 2025",
    excerpt: "New premium subscription offers advanced analytics, personalized coaching, and expanded workout library for fitness enthusiasts.",
    category: "Product",
    image: "https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "FitDash Publishes Annual Fitness Trends Report",
    date: "February 15, 2025",
    excerpt: "Comprehensive analysis of workout data reveals emerging fitness trends and changing exercise habits across different demographics.",
    category: "Research",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    title: "FitDash App Wins 'Best Health & Fitness App' Award",
    date: "January 30, 2025",
    excerpt: "Industry recognition for innovative features, intuitive design, and positive impact on users' fitness journeys.",
    category: "Award",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  }
];

// Mock media kit resources
const mediaResources = [
  {
    title: "Brand Guidelines",
    description: "Official logos, color palettes, typography, and usage guidelines.",
    fileSize: "2.4 MB",
    fileType: "PDF"
  },
  {
    title: "Press Kit",
    description: "Company background, leadership bios, and key statistics.",
    fileSize: "3.7 MB",
    fileType: "ZIP"
  },
  {
    title: "Product Images",
    description: "High-resolution screenshots and product images for publication.",
    fileSize: "18.5 MB",
    fileType: "ZIP"
  },
  {
    title: "Founder Headshots",
    description: "Professional photographs of FitDash founders and executives.",
    fileSize: "8.2 MB",
    fileType: "ZIP"
  }
];

// Mock press team contacts
const pressTeam = [
  {
    name: "Sarah Zhang",
    title: "Head of Public Relations",
    email: "sarah.zhang@fitdash.example.com",
    phone: "+1 (555) 123-4567"
  },
  {
    name: "David Rodriguez",
    title: "Media Relations Manager",
    email: "david.rodriguez@fitdash.example.com",
    phone: "+1 (555) 987-6543"
  }
];

const PressPage = () => {
  const { toast } = useToast();
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your inquiry and will get back to you shortly.",
    });
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Press Center</h1>
              <p className="text-xl text-muted-foreground">
                Latest news, media resources, and contact information for press inquiries.
              </p>
            </div>
            
            {/* Tabs Navigation */}
            <Tabs defaultValue="releases" className="space-y-8">
              <TabsList className="w-full grid grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="releases">Press Releases</TabsTrigger>
                <TabsTrigger value="resources">Media Resources</TabsTrigger>
                <TabsTrigger value="contact">Press Contact</TabsTrigger>
              </TabsList>
              
              {/* Press Releases Tab */}
              <TabsContent value="releases" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pressReleases.map((release) => (
                    <Card key={release.id} className="hover-scale overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={release.image} 
                          alt={release.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <CardHeader className="px-4 pt-4 pb-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-fitdash-purple/10 text-fitdash-purple">
                            {release.category}
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{release.date}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">{release.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 py-2">
                        <p className="text-muted-foreground text-sm">{release.excerpt}</p>
                      </CardContent>
                      <CardFooter className="px-4 pt-0 pb-4">
                        <Button variant="ghost" className="p-0 h-auto text-fitdash-purple hover:text-fitdash-purple-dark hover:bg-transparent">
                          Read Full Release <ExternalLink className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Media Resources Tab */}
              <TabsContent value="resources" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mediaResources.map((resource, index) => (
                    <Card key={index} className="hover-scale">
                      <CardHeader>
                        <CardTitle className="text-xl">{resource.title}</CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">
                          {resource.fileSize} · {resource.fileType}
                        </div>
                        <Button size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Additional Resources</CardTitle>
                    <CardDescription>
                      Looking for something specific? Contact our press team for custom resources and interview requests.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Button asChild>
                        <Link to="#contact" onClick={() => {
                          const element = document.querySelector('[data-value="contact"]');
                          if (element instanceof HTMLElement) {
                            element.click();
                          }
                        }}>
                          Contact Press Team
                        </Link>
                      </Button>
                      <Button variant="outline">
                        View Brand Guidelines
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Press Contact Tab */}
              <TabsContent value="contact" className="space-y-8">
                {/* Press Team */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Press Team</CardTitle>
                    <CardDescription>
                      Contact our press team for media inquiries, interview requests, or additional resources.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {pressTeam.map((contact, index) => (
                        <div key={index} className="flex border rounded-lg p-4 hover-scale">
                          <div className="mr-4 bg-fitdash-purple/10 rounded-full h-12 w-12 flex items-center justify-center">
                            <User className="h-6 w-6 text-fitdash-purple" />
                          </div>
                          <div>
                            <h4 className="font-medium">{contact.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{contact.title}</p>
                            <div className="space-y-1">
                              <div className="flex items-center text-xs">
                                <Mail className="h-3.5 w-3.5 mr-1.5 text-fitdash-blue" />
                                <a href={`mailto:${contact.email}`} className="hover:text-fitdash-purple">
                                  {contact.email}
                                </a>
                              </div>
                              <div className="flex items-center text-xs">
                                <Phone className="h-3.5 w-3.5 mr-1.5 text-fitdash-green" />
                                <a href={`tel:${contact.phone}`} className="hover:text-fitdash-purple">
                                  {contact.phone}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Media Inquiry</CardTitle>
                    <CardDescription>
                      Fill out the form below and a member of our press team will get back to you shortly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="Your email address" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="organization" className="text-sm font-medium">
                            Organization
                          </label>
                          <Input id="organization" placeholder="Company or publication" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="inquiry-type" className="text-sm font-medium">
                            Inquiry Type
                          </label>
                          <Select defaultValue="interview">
                            <SelectTrigger id="inquiry-type">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="interview">Interview Request</SelectItem>
                              <SelectItem value="press-kit">Press Kit</SelectItem>
                              <SelectItem value="statement">Statement Request</SelectItem>
                              <SelectItem value="resource">Additional Resources</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your inquiry"
                          className="min-h-[120px]"
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full md:w-auto">
                        Submit Inquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default PressPage;
