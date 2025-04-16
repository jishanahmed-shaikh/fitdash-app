
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, ChevronRight, Award, Heart, Zap, ArrowRight, Check, X, Moon, Sun } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/components/theme-provider";

const Landing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Show success toast before redirecting
    toast({
      title: "Welcome back!",
      description: "Successfully logged in to your account.",
    });
    
    // Simulate loading for demo purposes
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 500);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-fitdash-purple-light dark:from-gray-900 dark:to-gray-800">
      <div className="relative overflow-hidden">
        {/* Header */}
        <header className="relative z-10 container mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-fitdash-purple mr-2" />
              <span className="text-2xl font-bold text-fitdash-purple">FitDash</span>
            </div>
            <div className="hidden md:flex space-x-4 items-center">
              <Link to="/about" className="text-gray-600 hover:text-fitdash-purple dark:text-gray-300 dark:hover:text-fitdash-purple transition-colors">About</Link>
              <Link to="/blog" className="text-gray-600 hover:text-fitdash-purple dark:text-gray-300 dark:hover:text-fitdash-purple transition-colors">Blog</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-fitdash-purple dark:text-gray-300 dark:hover:text-fitdash-purple transition-colors">Pricing</Link>
              <Button onClick={toggleTheme} size="icon" variant="ghost" className="mr-2">
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button asChild variant="outline" className="border-fitdash-purple text-fitdash-purple hover:bg-fitdash-purple hover:text-white">
                <Link to="/dashboard">
                  Sign In
                </Link>
              </Button>
            </div>
            <div className="md:hidden flex items-center">
              <Button onClick={toggleTheme} size="icon" variant="ghost" className="mr-2">
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button asChild variant="outline" size="sm" className="border-fitdash-purple text-fitdash-purple">
                <Link to="/dashboard">
                  Sign In
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Track Your Fitness Journey, 
                  <span className="text-transparent bg-clip-text bg-gradient-primary"> One Step at a Time</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                  FitDash helps you visualize your daily activity, track your progress, 
                  and achieve your fitness goals with a beautiful, intuitive dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-fitdash-purple hover:bg-fitdash-purple-dark text-white px-8 py-6">
                    <Link to="/dashboard" className="flex items-center">
                      Get Started <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-fitdash-purple text-fitdash-purple hover:bg-fitdash-purple/10">
                    <Link to="/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Auth Card */}
              <div className="w-full max-w-md mx-auto lg:mx-0 animate-fade-in">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-8">
                    <Tabs defaultValue="login" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                      </TabsList>

                      <TabsContent value="login">
                        <form onSubmit={handleLogin} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="you@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <Label htmlFor="password">Password</Label>
                              <a href="#" className="text-xs text-fitdash-purple hover:underline">
                                Forgot password?
                              </a>
                            </div>
                            <Input
                              id="password"
                              type="password"
                              placeholder="••••••••"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="w-full"
                            />
                          </div>
                          
                          <Button type="submit" className="w-full bg-fitdash-purple hover:bg-fitdash-purple-dark">
                            Sign In
                          </Button>
                          
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground mt-4">
                              Demo account - No actual login required
                            </p>
                          </div>
                        </form>
                      </TabsContent>

                      <TabsContent value="register">
                        <form onSubmit={handleLogin} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              type="text"
                              placeholder="Jishanahmed AR Shaikh"
                              className="w-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="you@example.com"
                              className="w-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                              id="password"
                              type="password"
                              placeholder="••••••••"
                              className="w-full"
                            />
                          </div>
                          
                          <Button type="submit" className="w-full bg-fitdash-purple hover:bg-fitdash-purple-dark">
                            Create Account
                          </Button>
                          
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground mt-4">
                              Demo account - No actual registration required
                            </p>
                          </div>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 dark:bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose FitDash?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our comprehensive fitness tracking platform helps you stay motivated and reach your goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="dashboard-card">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-fitdash-blue-light dark:bg-fitdash-blue/20 p-4 rounded-full">
                      <Zap className="h-8 w-8 text-fitdash-blue" />
                    </div>
                    <h3 className="text-xl font-bold">Activity Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monitor your steps, calories, and daily activity with visual progress indicators.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="dashboard-card">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-fitdash-green-light dark:bg-fitdash-green/20 p-4 rounded-full">
                      <Award className="h-8 w-8 text-fitdash-green" />
                    </div>
                    <h3 className="text-xl font-bold">Goal Setting</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Create personal fitness goals and track your progress over time with detailed analytics.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="dashboard-card">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-fitdash-red-light dark:bg-fitdash-red/20 p-4 rounded-full">
                      <Heart className="h-8 w-8 text-fitdash-red" />
                    </div>
                    <h3 className="text-xl font-bold">Health Insights</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get personalized health insights and recommendations based on your activity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-16 bg-gradient-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Ready to start your fitness journey?
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl">
                    Join thousands of users who are transforming their lives with FitDash.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:ml-6 flex flex-shrink-0">
                  <Button asChild className="bg-fitdash-purple hover:bg-fitdash-purple-dark text-white px-8 py-6">
                    <Link to="/dashboard" className="flex items-center">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose the plan that works best for your fitness goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <Card className="dashboard-card relative">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2">Free</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-extrabold">$0</span>
                        <span className="ml-1 text-gray-500">/month</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">Perfect for beginners</p>
                    </div>
                    
                    <div className="space-y-3 flex-grow mb-6">
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>Basic activity tracking</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>Limited goal setting</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>7-day history</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <X className="h-5 w-5 mr-2" />
                        <span>Detailed analytics</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <X className="h-5 w-5 mr-2" />
                        <span>Personalized insights</span>
                      </div>
                    </div>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/dashboard">
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="dashboard-card relative border-fitdash-purple">
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                  <div className="inline-block bg-fitdash-purple text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2">Pro</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-extrabold">$9.99</span>
                        <span className="ml-1 text-gray-500">/month</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">For serious fitness enthusiasts</p>
                    </div>
                    
                    <div className="space-y-3 flex-grow mb-6">
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>Advanced activity tracking</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>Unlimited goal setting</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>Full history access</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>Detailed analytics</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <X className="h-5 w-5 mr-2" />
                        <span>Personalized insights</span>
                      </div>
                    </div>
                    
                    <Button asChild className="w-full bg-fitdash-purple hover:bg-fitdash-purple-dark">
                      <Link to="/dashboard">
                        Try Pro Free
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="dashboard-card relative">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2">Premium</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-extrabold">$19.99</span>
                        <span className="ml-1 text-gray-500">/month</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">For fitness professionals</p>
                    </div>
                    
                    <div className="space-y-3 flex-grow mb-6">
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>Advanced activity tracking</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>Unlimited goal setting</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>Full history access</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>Detailed analytics</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-fitdash-green mr-2" />
                        <span>Personalized insights</span>
                      </div>
                    </div>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/dashboard">
                        Try Premium
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center">
                  <Activity className="h-6 w-6 text-fitdash-purple mr-2" />
                  <span className="text-xl font-bold">FitDash</span>
                </div>
                <p className="mt-4 text-gray-400 text-sm">
                  Track your fitness journey, one step at a time.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Product</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/features" className="text-gray-400 hover:text-white">Features</Link></li>
                  <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                  <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link to="/glossary" className="text-gray-400 hover:text-white">Glossary</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                  <li><Link to="/press" className="text-gray-400 hover:text-white">Press</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy</Link></li>
                  <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} FitDash. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <a target="_blank" href="https://www.x.com/jishanarshaikh" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a target="_blank" href="https://www.facebook.com/jishanahmedarshaikh" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenorrd" />
                  </svg>
                </a>
                <a target="_blank" href="https://www.instagram.com/jishanahmed_shaikh" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
