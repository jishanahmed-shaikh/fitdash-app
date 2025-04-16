
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Share2, Bell, User, Globe, FileText, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span>Privacy Policy</span>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: April 8, 2025</p>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-6 mb-8 flex items-start gap-4 animate-fade-in">
              <Shield className="text-primary h-10 w-10 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Your Privacy Matters</h2>
                <p className="text-muted-foreground">
                  At FitDash, we're committed to protecting your personal information and being transparent about how we use it. This policy explains our data practices and your rights.
                </p>
              </div>
            </div>

            <div className="space-y-8 prose prose-sm dark:prose-invert max-w-none">
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4">
                    At FitDash, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our fitness tracking application.
                  </p>
                  <p>
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>We collect information that you provide directly to us when you:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Register for an account</li>
                      <li>Fill in forms in our application</li>
                      <li>Correspond with us</li>
                      <li>Participate in surveys or promotions</li>
                      <li>Share information through the application</li>
                    </ul>

                    <Separator className="my-4" />

                    <p>This information may include:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      <div className="flex items-center gap-2 bg-muted/50 p-3 rounded-md">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Personal identifiers (name, email, phone)</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted/50 p-3 rounded-md">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Account credentials</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted/50 p-3 rounded-md">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Profile information (height, weight, age)</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted/50 p-3 rounded-md">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Health and fitness data</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted/50 p-3 rounded-md">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Goals and preferences</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted/50 p-3 rounded-md">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Device information and usage data</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4">We may use the information we collect from you for various purposes, including to:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center p-3 rounded bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="rounded-full bg-primary/10 p-1 mr-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-sm">Provide and maintain our services</p>
                    </div>
                    <div className="flex items-center p-3 rounded bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="rounded-full bg-primary/10 p-1 mr-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-sm">Personalize your experience</p>
                    </div>
                    <div className="flex items-center p-3 rounded bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="rounded-full bg-primary/10 p-1 mr-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-sm">Track and analyze your health and fitness progress</p>
                    </div>
                    <div className="flex items-center p-3 rounded bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="rounded-full bg-primary/10 p-1 mr-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-sm">Improve our application and services</p>
                    </div>
                    <div className="flex items-center p-3 rounded bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="rounded-full bg-primary/10 p-1 mr-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-sm">Communicate with you about updates, features, or support</p>
                    </div>
                    <div className="flex items-center p-3 rounded bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="rounded-full bg-primary/10 p-1 mr-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-sm">Respond to your inquiries and requests</p>
                    </div>
                    <div className="flex items-center p-3 rounded bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="rounded-full bg-primary/10 p-1 mr-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-sm">Deliver targeted content and advertising</p>
                    </div>
                    <div className="flex items-center p-3 rounded bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="rounded-full bg-primary/10 p-1 mr-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-sm">Ensure the security of our application</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-primary" />
                    Sharing Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4">We may share your information in the following situations:</p>
                  <div className="space-y-3">
                    <div className="flex items-start bg-muted/30 p-4 rounded-lg">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p>With service providers who perform services on our behalf</p>
                    </div>
                    <div className="flex items-start bg-muted/30 p-4 rounded-lg">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p>To comply with legal obligations</p>
                    </div>
                    <div className="flex items-start bg-muted/30 p-4 rounded-lg">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p>To protect our rights, privacy, safety, or property</p>
                    </div>
                    <div className="flex items-start bg-muted/30 p-4 rounded-lg">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p>In connection with a business transaction such as a merger or acquisition</p>
                    </div>
                    <div className="flex items-start bg-muted/30 p-4 rounded-lg">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p>With your consent or at your direction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-6 bg-muted/30 p-6 rounded-xl">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Lock className="h-8 w-8 text-primary" />
                    </div>
                    <p>
                      We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Your Choices
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4">You have several choices regarding your personal information:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/20 border border-primary/10">
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-2">Access & Update</h3>
                        <p className="text-sm">Access, update, or delete your account information through your profile settings</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/20 border border-primary/10">
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-2">Email Preferences</h3>
                        <p className="text-sm">Opt-out of receiving promotional emails by following the unsubscribe instructions</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/20 border border-primary/10">
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-2">Device Settings</h3>
                        <p className="text-sm">Adjust your device settings to disable cookies or prevent certain tracking technologies</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/20 border border-primary/10">
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-2">Data Requests</h3>
                        <p className="text-sm">Request access to, correction of, or deletion of your personal information</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Changes to This Privacy Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-6 bg-muted/30 p-6 rounded-xl">
                    <div className="rounded-full bg-primary/10 p-4 hidden md:flex">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <p>
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <Mail className="h-12 w-12 text-primary mx-auto md:mx-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
                      <p className="mb-1">
                        <span className="font-medium">Email:</span> privacy@fitdash.com
                      </p>
                      <p>
                        <span className="font-medium">Address:</span> 123 Fitness Street, San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-8 border-t mt-8">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Privacy;
