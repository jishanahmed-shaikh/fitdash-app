
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Scale, FileText, AlertCircle, ShieldCheck, CreditCard, CalendarClock, 
  MessageSquare, ScrollText, Globe, Users, ThumbsUp, Bookmark 
} from "lucide-react";

const Terms = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span>Terms of Service</span>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: April 8, 2025</p>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-6 mb-8 flex items-start gap-4 animate-fade-in">
              <Scale className="text-primary h-10 w-10 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  These Terms of Service constitute a legally binding agreement made between you and FitDash concerning your access to and use of our website and mobile application. Please read them carefully.
                </p>
              </div>
            </div>

            <div className="space-y-8 prose prose-sm dark:prose-invert max-w-none">
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Acceptance of Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4">
                    By accessing or using the FitDash platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary my-4">
                    <p className="italic text-sm">
                      "Your use of FitDash indicates your understanding and agreement to these terms, which form a binding contract between you and FitDash."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    User Accounts
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms.</p>
                    
                    <Separator className="my-4" />
                    
                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Account Responsibilities:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>You are responsible for safeguarding your account password.</li>
                        <li>You agree to notify us immediately of any unauthorized access or use of your account.</li>
                        <li>You are responsible for all activities that occur under your account.</li>
                        <li>You may not use another person's account without permission.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    Prohibited Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4">You may not engage in any of the following prohibited activities:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start p-3 rounded bg-muted/30">
                      <div className="rounded-full bg-destructive/20 p-1 mr-2 mt-1">
                        <AlertCircle className="h-3 w-3 text-destructive" />
                      </div>
                      <p className="text-sm">Using the service for any illegal purpose</p>
                    </div>
                    <div className="flex items-start p-3 rounded bg-muted/30">
                      <div className="rounded-full bg-destructive/20 p-1 mr-2 mt-1">
                        <AlertCircle className="h-3 w-3 text-destructive" />
                      </div>
                      <p className="text-sm">Violating any laws in your jurisdiction</p>
                    </div>
                    <div className="flex items-start p-3 rounded bg-muted/30">
                      <div className="rounded-full bg-destructive/20 p-1 mr-2 mt-1">
                        <AlertCircle className="h-3 w-3 text-destructive" />
                      </div>
                      <p className="text-sm">Interfering with the proper working of the service</p>
                    </div>
                    <div className="flex items-start p-3 rounded bg-muted/30">
                      <div className="rounded-full bg-destructive/20 p-1 mr-2 mt-1">
                        <AlertCircle className="h-3 w-3 text-destructive" />
                      </div>
                      <p className="text-sm">Bypassing measures used to prevent or restrict access</p>
                    </div>
                    <div className="flex items-start p-3 rounded bg-muted/30">
                      <div className="rounded-full bg-destructive/20 p-1 mr-2 mt-1">
                        <AlertCircle className="h-3 w-3 text-destructive" />
                      </div>
                      <p className="text-sm">Introducing malicious programs to the network</p>
                    </div>
                    <div className="flex items-start p-3 rounded bg-muted/30">
                      <div className="rounded-full bg-destructive/20 p-1 mr-2 mt-1">
                        <AlertCircle className="h-3 w-3 text-destructive" />
                      </div>
                      <p className="text-sm">Attempting to gain unauthorized access to systems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    Intellectual Property
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-muted/20 p-5 rounded-lg">
                    <p className="mb-4">
                      The FitDash service and its original content, features, and functionality are owned by FitDash and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>
                    <div className="flex items-center justify-center my-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <ShieldCheck className="text-primary h-8 w-8" />
                      </div>
                    </div>
                    <p>
                      Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of FitDash.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Subscription Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>Some aspects of our service are billed on a subscription basis. Payment rules include:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <Card className="bg-muted/10 border border-muted">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <CalendarClock className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <h3 className="font-medium text-sm mb-1">Billing Cycle</h3>
                              <p className="text-xs text-muted-foreground">
                                Subscription fees are billed in advance on a monthly or annual basis depending on the subscription plan selected.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-muted/10 border border-muted">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <CreditCard className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <h3 className="font-medium text-sm mb-1">Automatic Renewal</h3>
                              <p className="text-xs text-muted-foreground">
                                Subscriptions automatically renew unless you cancel them before the next renewal date.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-muted/10 border border-muted">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <ScrollText className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <h3 className="font-medium text-sm mb-1">Cancellation</h3>
                              <p className="text-xs text-muted-foreground">
                                You can cancel your subscription at any time through your account settings. Cancellations will be effective at the end of the current billing period.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-muted/10 border border-muted">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <ThumbsUp className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <h3 className="font-medium text-sm mb-1">Refunds</h3>
                              <p className="text-xs text-muted-foreground">
                                Refunds are provided in accordance with our refund policy, which may vary based on your region and applicable laws.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    User Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4">
                    Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. By providing User Content, you:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start bg-muted/30 p-4 rounded-lg">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p>Grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content</p>
                    </div>
                    <div className="flex items-start bg-muted/30 p-4 rounded-lg">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p>Represent and warrant that you own or control all rights to such content</p>
                    </div>
                    <div className="flex items-start bg-muted/30 p-4 rounded-lg">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p>Confirm that all content complies with these Terms of Service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Links To Other Web Sites
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-6 bg-muted/30 p-6 rounded-xl">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="mb-3">
                        Our Service may contain links to third-party web sites or services that are not owned or controlled by FitDash.
                      </p>
                      <p>
                        FitDash has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that FitDash shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Bookmark className="h-5 w-5 text-primary" />
                    Changes to Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <Bookmark className="h-12 w-12 text-primary mx-auto md:mx-0" />
                    </div>
                    <div>
                      <p className="mb-3">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice prior to any new terms taking effect.
                      </p>
                      <p>
                        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center bg-muted/20 rounded-xl p-8">
                    <MessageSquare className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Have Questions About Our Terms?</h3>
                    <p className="mb-6 max-w-md">
                      If you have any questions about these Terms, please contact us at:
                    </p>
                    <div className="space-y-1">
                      <p><span className="font-medium">Email:</span> legal@fitdash.com</p>
                      <p><span className="font-medium">Phone:</span> (800) 123-4567</p>
                      <p><span className="font-medium">Address:</span> 123 Fitness Street, San Francisco, CA 94107</p>
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
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Terms;
