
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Activity, 
  Award, 
  Heart, 
  Zap, 
  Clock, 
  BarChart, 
  Share2, 
  User, 
  Target, 
  Dumbbell 
} from "lucide-react";

const Features = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-2xl font-bold tracking-tight">Features</h1>
              <p className="text-muted-foreground">Explore the comprehensive tools and features FitDash offers to enhance your fitness journey.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <Card className="dashboard-card hover-scale">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-fitdash-blue-light dark:bg-fitdash-blue/20 p-4 rounded-full">
                      <Zap className="h-8 w-8 text-fitdash-blue" />
                    </div>
                    <h3 className="text-xl font-bold">Activity Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monitor your steps, calories, and daily activity with visual progress indicators. Sync with your favorite fitness devices.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="dashboard-card hover-scale">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-fitdash-green-light dark:bg-fitdash-green/20 p-4 rounded-full">
                      <Award className="h-8 w-8 text-fitdash-green" />
                    </div>
                    <h3 className="text-xl font-bold">Goal Setting</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Create personal fitness goals and track your progress over time with detailed analytics and milestone tracking.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="dashboard-card hover-scale">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-fitdash-red-light dark:bg-fitdash-red/20 p-4 rounded-full">
                      <Heart className="h-8 w-8 text-fitdash-red" />
                    </div>
                    <h3 className="text-xl font-bold">Health Insights</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get personalized health insights and recommendations based on your activity patterns and health metrics.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="dashboard-card hover-scale">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-fitdash-purple-light dark:bg-fitdash-purple/20 p-4 rounded-full">
                      <Clock className="h-8 w-8 text-fitdash-purple" />
                    </div>
                    <h3 className="text-xl font-bold">Sleep Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monitor your sleep patterns and quality to optimize recovery and overall wellness with detailed sleep analytics.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="dashboard-card hover-scale">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-orange-100 dark:bg-orange-900/20 p-4 rounded-full">
                      <BarChart className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold">Advanced Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      View detailed charts and reports of your progress over time, with custom date ranges and comparison tools.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 6 */}
              <Card className="dashboard-card hover-scale">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-full">
                      <Share2 className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold">Social Sharing</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Share your achievements and progress with friends and family on your favorite social media platforms.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 7 */}
              <Card className="dashboard-card hover-scale">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-violet-100 dark:bg-violet-900/20 p-4 rounded-full">
                      <User className="h-8 w-8 text-violet-500" />
                    </div>
                    <h3 className="text-xl font-bold">Custom Profiles</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Create customized fitness profiles with personal goals, preferences, and detailed health metrics.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 8 */}
              <Card className="dashboard-card hover-scale">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-cyan-100 dark:bg-cyan-900/20 p-4 rounded-full">
                      <Target className="h-8 w-8 text-cyan-500" />
                    </div>
                    <h3 className="text-xl font-bold">Challenges</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Join community challenges to stay motivated and compete with others in friendly fitness competitions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 9 */}
              <Card className="dashboard-card hover-scale">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/20 p-4 rounded-full">
                      <Dumbbell className="h-8 w-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold">Workout Library</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Access hundreds of pre-built workouts or create your own custom exercise routines with detailed instructions.
                    </p>
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

export default Features;
