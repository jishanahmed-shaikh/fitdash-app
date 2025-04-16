
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Home, Mail, Phone, MessageSquare, SendIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Contact Us</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a question or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form below to get in touch with our team.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                        <Input 
                          id="name" 
                          placeholder="Jishanahmed AR Shaikh" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="shaikhjishan255@gmail.com" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          required 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help you?" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message..." 
                        rows={5} 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <SendIcon className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-fitdash-purple mr-3" />
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a href="mailto:contact@fitdash.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          contact@fitdash.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-fitdash-purple mr-3" />
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-fitdash-purple mr-3" />
                      <div>
                        <p className="text-sm font-medium">Address</p>
                        <address className="text-sm text-muted-foreground not-italic">
                          123 Mumbai<br />
                          Maharashtra, IN 400615
                        </address>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 text-fitdash-purple mr-3" />
                      <div>
                        <p className="text-sm font-medium">Live Chat</p>
                        <p className="text-sm text-muted-foreground">
                          Available 24/7 in our app
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Operating Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Monday - Friday</span>
                      <span className="text-sm">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Saturday</span>
                      <span className="text-sm">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sunday</span>
                      <span className="text-sm">Closed</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="pt-8 border-t mt-8">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Contact;
