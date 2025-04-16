
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Award,
  BarChart3,
  Calendar,
  Clock,
  Globe,
  Heart,
  Lightbulb,
  Lock,
  MessageSquare,
  Smile,
  Star,
  Target,
  ThumbsUp,
  Trophy,
  Users,
  Zap,
  ArrowRight,
  ExternalLink,
  Linkedin
} from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutPage = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About FitDash</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive fitness platform designed to help you achieve your health and fitness goals
                with personalized tracking, insights, and guidance.
              </p>
            </div>
            
            {/* Our Mission */}
            <Card className="border-fitdash-purple/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  At FitDash, we believe that fitness is for everyone. Our mission is to make health and fitness 
                  accessible, enjoyable, and sustainable for people of all fitness levels. We're committed to providing
                  the tools, support, and motivation needed to help our users build healthier habits and achieve their
                  personal goals.
                </p>
              </CardContent>
            </Card>
            
            {/* Key Features */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover-scale">
                  <CardHeader className="pb-2">
                    <div className="bg-fitdash-purple/10 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                      <BarChart3 className="h-5 w-5 text-fitdash-purple" />
                    </div>
                    <CardTitle className="text-xl">Advanced Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Track your fitness journey with detailed metrics and visualize your progress over time.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale">
                  <CardHeader className="pb-2">
                    <div className="bg-fitdash-blue/10 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                      <Target className="h-5 w-5 text-fitdash-blue" />
                    </div>
                    <CardTitle className="text-xl">Goal Setting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Set personalized fitness goals and receive actionable plans to achieve them.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale">
                  <CardHeader className="pb-2">
                    <div className="bg-fitdash-green/10 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                      <Calendar className="h-5 w-5 text-fitdash-green" />
                    </div>
                    <CardTitle className="text-xl">Workout Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Access customized workout routines and schedule them based on your availability.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale">
                  <CardHeader className="pb-2">
                    <div className="bg-fitdash-orange/10 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                      <Trophy className="h-5 w-5 text-fitdash-orange" />
                    </div>
                    <CardTitle className="text-xl">Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Earn badges and rewards as you hit milestones and stay consistent with your fitness routine.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale">
                  <CardHeader className="pb-2">
                    <div className="bg-fitdash-red/10 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                      <Heart className="h-5 w-5 text-fitdash-red" />
                    </div>
                    <CardTitle className="text-xl">Health Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Keep track of vital health metrics like heart rate, sleep quality, and nutrition intake.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale">
                  <CardHeader className="pb-2">
                    <div className="bg-fitdash-purple/10 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-fitdash-purple" />
                    </div>
                    <CardTitle className="text-xl">Community Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Connect with like-minded individuals, share experiences, and motivate each other.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Our Values */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-fitdash-green/10 rounded-full p-3">
                    <Lightbulb className="h-6 w-6 text-fitdash-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      We constantly push the boundaries of what's possible in fitness technology,
                      integrating the latest research and tools to provide cutting-edge solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-fitdash-purple/10 rounded-full p-3">
                    <Lock className="h-6 w-6 text-fitdash-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Privacy</h3>
                    <p className="text-muted-foreground">
                      We respect your data and privacy, implementing robust security measures
                      to ensure your personal information remains confidential.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-fitdash-blue/10 rounded-full p-3">
                    <Smile className="h-6 w-6 text-fitdash-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Inclusivity</h3>
                    <p className="text-muted-foreground">
                      We design our platform to be accessible and useful for people of all ages,
                      abilities, and fitness levels, ensuring everyone feels welcome.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-fitdash-orange/10 rounded-full p-3">
                    <ThumbsUp className="h-6 w-6 text-fitdash-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Quality</h3>
                    <p className="text-muted-foreground">
                      We are committed to providing reliable, evidence-based fitness guidance
                      that delivers real results for our users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subscription Plans */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold">Subscription Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover-scale border-fitdash-green/20">
                  <CardHeader>
                    <CardTitle>Free</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold">$0</span>
                      <span className="text-muted-foreground"> / month</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-green flex-shrink-0 mt-0.5" />
                        <span>Basic activity tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-green flex-shrink-0 mt-0.5" />
                        <span>Daily step counter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-green flex-shrink-0 mt-0.5" />
                        <span>Limited workout library</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-green flex-shrink-0 mt-0.5" />
                        <span>Community access</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Link to="/dashboard" className="flex items-center justify-center w-full">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover-scale border-fitdash-purple/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-fitdash-purple text-white text-xs font-bold px-3 py-1">
                    Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Premium</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold">$9.99</span>
                      <span className="text-muted-foreground"> / month</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-purple flex-shrink-0 mt-0.5" />
                        <span>Everything in Free</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-purple flex-shrink-0 mt-0.5" />
                        <span>Advanced analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-purple flex-shrink-0 mt-0.5" />
                        <span>Full workout library</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-purple flex-shrink-0 mt-0.5" />
                        <span>Personalized plans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-purple flex-shrink-0 mt-0.5" />
                        <span>Nutrition tracking</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-fitdash-purple hover:bg-fitdash-purple-dark">
                      <Link to="/pricing" className="flex items-center justify-center w-full text-white">
                        View Plans <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover-scale border-fitdash-blue/20">
                  <CardHeader>
                    <CardTitle>Elite</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold">$19.99</span>
                      <span className="text-muted-foreground"> / month</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-blue flex-shrink-0 mt-0.5" />
                        <span>Everything in Premium</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-blue flex-shrink-0 mt-0.5" />
                        <span>1-on-1 coaching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-blue flex-shrink-0 mt-0.5" />
                        <span>Custom workout creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-blue flex-shrink-0 mt-0.5" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-fitdash-blue flex-shrink-0 mt-0.5" />
                        <span>Exclusive content</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Link to="/pricing" className="flex items-center justify-center w-full">
                        View Plans <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold">What Our Users Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover-scale border-fitdash-purple/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-fitdash-orange fill-fitdash-orange" />
                          ))}
                        </div>
                      </div>
                      <p className="italic mb-6">
                        "FitDash has completely transformed my approach to fitness. The personalized
                        workout plans and progress tracking have helped me stay consistent and see real results."
                      </p>
                      <div className="flex items-center mt-auto">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Jessica D.</p>
                          <p className="text-sm text-muted-foreground">Premium user for 8 months</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale border-fitdash-purple/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-fitdash-orange fill-fitdash-orange" />
                          ))}
                        </div>
                      </div>
                      <p className="italic mb-6">
                        "As someone who never enjoyed exercising, FitDash made fitness fun and
                        accessible. The achievement system keeps me motivated, and I've lost 15 pounds so far!"
                      </p>
                      <div className="flex items-center mt-auto">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="https://i.pravatar.cc/150?img=52" />
                          <AvatarFallback>MK</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Michael K.</p>
                          <p className="text-sm text-muted-foreground">Elite user for 1 year</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Meet the Founder */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold">Meet the Founder</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-32 w-32 mb-4">
                        <AvatarImage src="/myimage/jishanahmed.png" alt="Jishanahmed AR Shaikh" />
                        <AvatarFallback className="text-2xl">JAS</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold">Jishanahmed AR Shaikh</h3>
                      <p className="text-muted-foreground mb-2">Founder & CEO</p>
                      <a href="https://www.linkedin.com/in/jishanahmedshaikh" target="_blank" rel="noopener noreferrer" className="flex items-center text-fitdash-purple hover:underline">
                        <Linkedin className="h-4 w-4 mr-1" /> LinkedIn
                      </a>
                    </div>
                    <div>
                      <p className="mb-4">
                        Jishanahmed AR Shaikh founded FitDash in 2023 with a vision to make fitness tracking more intuitive,
                        personalized, and effective. With a background in technology and a passion for health and wellness,
                        he saw an opportunity to create a platform that combines cutting-edge technology with evidence-based
                        fitness principles.
                      </p>
                      <p className="mb-4">
                        Prior to founding FitDash, Jishanahmed worked in software development and product management at
                        several tech companies, where he honed his skills in creating user-friendly digital experiences.
                        His personal journey with fitness—overcoming challenges and discovering sustainable approaches—informs
                        the core philosophy of FitDash.
                      </p>
                      <p>
                        Under his leadership, FitDash has grown to serve thousands of users worldwide, helping people of all
                        fitness levels achieve their health goals through personalized guidance, motivation, and community support.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* CTA */}
            <div className="bg-fitdash-purple rounded-lg p-8 text-center space-y-4 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to Start Your Fitness Journey?</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Join thousands of users who have transformed their health and fitness with FitDash.
                Get started today and take the first step toward achieving your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button size="lg" className="bg-white text-fitdash-purple hover:bg-gray-100">
                  <Link to="/" className="flex items-center">
                    Sign Up Free <Zap className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/pricing" className="flex items-center">
                    View Plans <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AboutPage;
