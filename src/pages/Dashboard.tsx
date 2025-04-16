
import React, { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StepsCard from "@/components/dashboard/StepsCard";
import CaloriesCard from "@/components/dashboard/CaloriesCard";
import ActivityChart from "@/components/dashboard/ActivityChart";
import GoalsCard from "@/components/dashboard/GoalsCard";
import ProfileCard from "@/components/dashboard/ProfileCard";
import QuoteCard from "@/components/dashboard/QuoteCard";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Calendar, 
  Clock, 
  Dumbbell, 
  Heart, 
  BarChart, 
  TrendingUp, 
  Droplet, 
  Trophy,
  Zap,
  ChevronRight,
  Home
} from "lucide-react";
import { 
  stepData, 
  calorieData, 
  userProfile, 
  workoutData, 
  nutritionData, 
  sleepData 
} from "@/lib/mock-data";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState<"daily" | "weekly" | "monthly">("daily");
  const [filteredData, setFilteredData] = useState({
    steps: stepData.today,
    calories: calorieData.today,
    water: nutritionData.today.water,
    sleep: sleepData.lastNight.duration
  });
  const { toast } = useToast();
  
  // Calculate streaks and overall progress
  const workoutStreak = userProfile.statistics.streakDays;
  const weeklyProgress = (workoutData.thisWeek.workouts / 5) * 100; // Assuming 5 workouts per week is the goal

  // Update filtered data based on time range
  useEffect(() => {
    // This would normally come from an API with different timeframes
    // For demo purposes, we'll just modify the values based on the selected range
    if (timeRange === "daily") {
      setFilteredData({
        steps: stepData.today,
        calories: calorieData.today,
        water: nutritionData.today.water,
        sleep: sleepData.lastNight.duration
      });
    } else if (timeRange === "weekly") {
      setFilteredData({
        steps: stepData.today * 0.8 * 7, // Average for a week
        calories: calorieData.today * 0.9 * 7, // Average for a week
        water: nutritionData.today.water * 0.95 * 7, // Average for a week
        sleep: sleepData.lastNight.duration * 0.97 * 7 // Average for a week
      });
      toast({
        title: "Weekly View",
        description: "Showing averaged data for the current week",
      });
    } else if (timeRange === "monthly") {
      setFilteredData({
        steps: stepData.today * 0.75 * 30, // Average for a month
        calories: calorieData.today * 0.85 * 30, // Average for a month
        water: nutritionData.today.water * 0.9 * 30, // Average for a month
        sleep: sleepData.lastNight.duration * 0.95 * 30 // Average for a month
      });
      toast({
        title: "Monthly View",
        description: "Showing averaged data for the current month",
      });
    }
  }, [timeRange, toast]);
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Track your fitness progress and achieve your goals.</p>
              </div>
              <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Home className="h-4 w-4 mr-1" />
                    Home
                  </Button>
                </Link>
                <Tabs defaultValue="daily" value={timeRange} onValueChange={(v: "daily" | "weekly" | "monthly") => setTimeRange(v)}>
                  <TabsList>
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            {/* Quote Card - Moved to top */}
            <QuoteCard />
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
              <StepsCard steps={filteredData.steps} timeRange={timeRange} />
              <CaloriesCard calories={filteredData.calories} timeRange={timeRange} />
              <Card className="dashboard-card hover-scale">
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-base font-medium flex items-center">
                    <Droplet className="h-4 w-4 text-fitdash-blue mr-2" />
                    Water Intake
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-bold">{(filteredData.water / 1000).toFixed(1)}</span>
                        <span className="text-sm ml-1">L</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Target: {timeRange === "daily" ? "2.5" : timeRange === "weekly" ? "17.5" : "75"}L
                      </span>
                    </div>
                    <div className="h-2 w-full bg-fitdash-blue-light dark:bg-blue-950 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-fitdash-blue rounded-full"
                        style={{ 
                          width: `${Math.min((filteredData.water / (timeRange === "daily" ? 2500 : timeRange === "weekly" ? 17500 : 75000)) * 100, 100)}%` 
                        }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {Math.round((filteredData.water / (timeRange === "daily" ? 2500 : timeRange === "weekly" ? 17500 : 75000)) * 100)}% of {timeRange} goal
                      </span>
                      <span>
                        {((timeRange === "daily" ? 2.5 : timeRange === "weekly" ? 17.5 : 75) - filteredData.water / 1000).toFixed(1)}L remaining
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="dashboard-card hover-scale">
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-base font-medium flex items-center">
                    <Clock className="h-4 w-4 text-fitdash-purple mr-2" />
                    Sleep
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-bold">{filteredData.sleep.toFixed(1)}</span>
                        <span className="text-sm ml-1">hrs</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Target: {timeRange === "daily" ? sleepData.target.duration : timeRange === "weekly" ? sleepData.target.duration * 7 : sleepData.target.duration * 30}hrs
                      </span>
                    </div>
                    <div className="h-2 w-full bg-fitdash-purple-light dark:bg-purple-950 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-fitdash-purple rounded-full"
                        style={{ 
                          width: `${Math.min((filteredData.sleep / (timeRange === "daily" ? sleepData.target.duration : timeRange === "weekly" ? sleepData.target.duration * 7 : sleepData.target.duration * 30)) * 100, 100)}%` 
                        }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {Math.round((filteredData.sleep / (timeRange === "daily" ? sleepData.target.duration : timeRange === "weekly" ? sleepData.target.duration * 7 : sleepData.target.duration * 30)) * 100)}% of target
                      </span>
                      <span>{sleepData.lastNight.quality} quality</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Activity Chart */}
            <ActivityChart />
            
            {/* Weekly Progress and Streaks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
              <Card className="dashboard-card col-span-1 md:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <TrendingUp className="h-5 w-5 text-fitdash-purple mr-2" />
                    Weekly Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Workouts</span>
                        <span className="text-sm font-medium">{workoutData.thisWeek.workouts}/5</span>
                      </div>
                      <Progress value={weeklyProgress} className="h-2" indicatorClassName="bg-fitdash-purple" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <div className="flex items-center text-sm font-medium mb-1">
                          <Clock className="h-4 w-4 text-fitdash-blue mr-1" />
                          Active Time
                        </div>
                        <div className="flex items-baseline">
                          <span className="text-xl font-bold">{workoutData.thisWeek.duration}</span>
                          <span className="text-xs ml-1">min</span>
                        </div>
                        <div className="text-xs text-muted-foreground">This Week</div>
                      </div>
                      
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <div className="flex items-center text-sm font-medium mb-1">
                          <Heart className="h-4 w-4 text-fitdash-red mr-1" />
                          Calories Burned
                        </div>
                        <div className="flex items-baseline">
                          <span className="text-xl font-bold">{workoutData.thisWeek.caloriesBurned}</span>
                          <span className="text-xs ml-1">kcal</span>
                        </div>
                        <div className="text-xs text-muted-foreground">This Week</div>
                      </div>
                      
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <div className="flex items-center text-sm font-medium mb-1">
                          <Dumbbell className="h-4 w-4 text-fitdash-green mr-1" />
                          Workouts
                        </div>
                        <div className="flex items-baseline">
                          <span className="text-xl font-bold">{workoutData.thisWeek.workouts}</span>
                          <span className="text-xs ml-1">completed</span>
                        </div>
                        <div className="text-xs text-muted-foreground">This Week</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="dashboard-card">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <Zap className="h-5 w-5 text-fitdash-orange mr-2" />
                    Current Streak
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center h-full py-4">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute">
                        <span className="text-4xl font-bold">{workoutStreak}</span>
                      </div>
                      <svg className="w-32 h-32">
                        <circle
                          className="text-gray-200 dark:text-gray-700"
                          strokeWidth="6"
                          stroke="currentColor"
                          fill="transparent"
                          r="58"
                          cx="64"
                          cy="64"
                        />
                        <circle
                          className="text-fitdash-orange"
                          strokeWidth="6"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="58"
                          cx="64"
                          cy="64"
                          strokeDasharray="364.4"
                          strokeDashoffset={364.4 - (364.4 * workoutStreak) / 30}
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">days in a row</p>
                    <div className="flex items-center mt-4 bg-fitdash-orange/10 text-fitdash-orange px-3 py-1.5 rounded-md">
                      <Trophy className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Keep it up!</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Recent Achievements */}
            <Card className="dashboard-card animate-fade-in">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-lg">
                    <Award className="h-5 w-5 text-fitdash-green mr-2" />
                    Recent Achievements
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/profile" className="text-sm text-muted-foreground">
                      View All
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {userProfile.achievements.filter(a => a.completed).slice(0, 3).map((achievement, index) => (
                    <div key={index} className="bg-secondary/50 rounded-lg p-4 flex flex-col items-center text-center hover-scale">
                      <div className="w-12 h-12 bg-fitdash-green/20 rounded-full flex items-center justify-center mb-3">
                        <Trophy className="h-6 w-6 text-fitdash-green" />
                      </div>
                      <h4 className="font-medium mb-1">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Goals */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade-in">
              <GoalsCard className="lg:col-span-2" />
              <ProfileCard />
            </div>
            
            {/* Upcoming Workouts */}
            <Card className="dashboard-card animate-fade-in">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-lg">
                    <Calendar className="h-5 w-5 text-fitdash-blue mr-2" />
                    Upcoming Workouts
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/workouts" className="text-sm text-muted-foreground">
                      View All
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {workoutData.upcoming.map((workout, index) => {
                    const workoutDate = new Date(workout.scheduled);
                    const formattedTime = workoutDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    const formattedDate = workoutDate.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
                    
                    return (
                      <div key={index} className="border rounded-lg p-4 flex justify-between items-center hover-scale">
                        <div>
                          <h4 className="font-medium">{workout.name}</h4>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span>{formattedDate} • {formattedTime}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <div className="flex items-center text-xs bg-fitdash-purple/10 text-fitdash-purple px-2 py-0.5 rounded mr-2">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{workout.duration} min</span>
                            </div>
                            <div className="flex items-center text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
                              <Dumbbell className="h-3 w-3 mr-1" />
                              <span>{workout.type}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
              <CardFooter className="pt-0 justify-center">
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link to="/workouts">
                    <Dumbbell className="h-4 w-4 mr-2" />
                    Schedule Workout
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Navigation Footer */}
            <div className="border-t pt-6 mt-8">
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
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
