
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const Settings = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold tracking-tight animate-fade-in">Settings</h1>
            
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Notifications</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="goal-notifications">Goal reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive reminders about your fitness goals
                      </p>
                    </div>
                    <Switch id="goal-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="achievement-notifications">Achievement alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notifications when you reach achievements
                      </p>
                    </div>
                    <Switch id="achievement-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="weekly-summary">Weekly summary</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive a weekly summary of your fitness progress
                      </p>
                    </div>
                    <Switch id="weekly-summary" defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Personalization</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="distance-unit">Distance unit</Label>
                      <Select defaultValue="km">
                        <SelectTrigger id="distance-unit">
                          <SelectValue placeholder="Select unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="km">Kilometers (km)</SelectItem>
                          <SelectItem value="mi">Miles (mi)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight-unit">Weight unit</Label>
                      <Select defaultValue="kg">
                        <SelectTrigger id="weight-unit">
                          <SelectValue placeholder="Select unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">Kilograms (kg)</SelectItem>
                          <SelectItem value="lb">Pounds (lb)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="daily-step-goal">Daily step goal</Label>
                      <Input id="daily-step-goal" type="number" defaultValue="10000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="daily-calorie-goal">Daily calorie burn goal</Label>
                      <Input id="daily-calorie-goal" type="number" defaultValue="500" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Privacy Settings</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-sharing">Data sharing</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow sharing your fitness data with third-party apps
                      </p>
                    </div>
                    <Switch id="data-sharing" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="public-profile">Public profile</Label>
                      <p className="text-sm text-muted-foreground">
                        Make your profile visible to other FitDash users
                      </p>
                    </div>
                    <Switch id="public-profile" defaultChecked />
                  </div>
                </div>
                
                <div className="flex justify-end pt-4">
                  <Button variant="outline" className="mr-2">Reset to Default</Button>
                  <Button className="bg-fitdash-purple hover:bg-fitdash-purple-dark">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
