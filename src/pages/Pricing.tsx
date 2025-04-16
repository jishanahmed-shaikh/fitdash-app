
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";

const Pricing = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h1 className="text-2xl font-bold tracking-tight">Pricing Plans</h1>
              <p className="text-muted-foreground">Choose the plan that works best for your fitness goals.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Pricing;
