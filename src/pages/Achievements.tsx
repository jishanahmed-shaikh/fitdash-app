
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { userProfile } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, Lock, Medal, Star, Trophy, Award, Crown, Target, Flame, Heart, Footprints, Calendar, Zap, BarChart, Dumbbell } from "lucide-react";

// Define achievements structure to avoid TypeScript errors
type Achievement = {
  id: number;
  title: string;
  description: string;
  completed?: boolean;
  progress?: number;
  icon: string;
  date?: string;
  category?: string;
};

// Mock achievement data
const achievementData = {
  unlocked: [
    { 
      id: 1, 
      title: "Early Bird", 
      description: "Complete 5 workouts before 9 AM", 
      completed: true,
      icon: "sunrise",
      date: "2025-03-15",
      category: "Workout"
    },
    { 
      id: 2, 
      title: "Step Master", 
      description: "Reach 10,000 steps for 7 consecutive days", 
      completed: true,
      icon: "footprints",
      date: "2025-03-28",
      category: "Activity"
    },
    { 
      id: 6, 
      title: "First Milestone", 
      description: "Complete your first workout", 
      completed: true,
      icon: "flag",
      date: "2025-02-10",
      category: "Beginner"
    }
  ] as Achievement[],
  inProgress: [
    { 
      id: 3, 
      title: "Consistency King", 
      description: "Log in for 30 consecutive days", 
      icon: "calendar",
      progress: 22,
      category: "Dedication"
    },
    { 
      id: 4, 
      title: "Goal Crusher", 
      description: "Complete 10 fitness goals", 
      icon: "target",
      progress: 7,
      category: "Goals"
    },
    { 
      id: 5, 
      title: "Cardio Champion", 
      description: "Burn 5000 calories in one week", 
      icon: "heart",
      progress: 3200,
      category: "Cardio"
    }
  ] as Achievement[],
  locked: [
    { 
      id: 7, 
      title: "Fitness Fanatic", 
      description: "Complete 100 workouts", 
      icon: "zap",
      category: "Dedication"
    },
    { 
      id: 8, 
      title: "Marathon Runner", 
      description: "Run a total of 42.2 km", 
      icon: "rocket",
      category: "Running"
    },
    { 
      id: 9, 
      title: "Night Owl", 
      description: "Complete 5 workouts after 8 PM", 
      icon: "moon",
      category: "Workout"
    },
    { 
      id: 10, 
      title: "Strength Master", 
      description: "Complete 50 strength workouts", 
      icon: "dumbbell",
      category: "Strength"
    }
  ] as Achievement[]
};

const AchievementIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "sunrise":
      return <Star className="h-6 w-6 text-amber-500" />;
    case "footprints":
      return <Footprints className="h-6 w-6 text-blue-500" />;
    case "calendar":
      return <Calendar className="h-6 w-6 text-indigo-500" />;
    case "target":
      return <Target className="h-6 w-6 text-red-500" />;
    case "heart":
      return <Heart className="h-6 w-6 text-pink-500" />;
    case "flag":
      return <Trophy className="h-6 w-6 text-green-500" />;
    case "zap":
      return <Zap className="h-6 w-6 text-yellow-500" />;
    case "rocket":
      return <Flame className="h-6 w-6 text-orange-500" />;
    case "moon":
      return <BarChart className="h-6 w-6 text-blue-600" />;
    case "dumbbell":
      return <Dumbbell className="h-6 w-6 text-gray-600" />;
    default:
      return <Award className="h-6 w-6 text-purple-500" />;
  }
};

const AchievementCard = ({ achievement, status }: { achievement: Achievement, status: "unlocked" | "inProgress" | "locked" }) => {
  return (
    <Card className="overflow-hidden transition duration-300 hover:shadow-md">
      <CardContent className="p-0">
        <div className={`h-2 w-full ${
          status === "unlocked" ? "bg-green-500" : 
          status === "inProgress" ? "bg-amber-500" : 
          "bg-gray-300 dark:bg-gray-700"
        }`}></div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="rounded-full p-3 bg-primary/10">
              <AchievementIcon icon={achievement.icon} />
            </div>
            <Badge variant="outline" className={`
              ${status === "unlocked" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : 
                status === "inProgress" ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300" : 
                "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"}
            `}>
              {status === "unlocked" ? (
                <div className="flex items-center">
                  <Check className="h-3 w-3 mr-1" />
                  Completed
                </div>
              ) : status === "inProgress" ? (
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  In Progress
                </div>
              ) : (
                <div className="flex items-center">
                  <Lock className="h-3 w-3 mr-1" />
                  Locked
                </div>
              )}
            </Badge>
          </div>
          
          <h3 className="text-lg font-semibold mt-4">{achievement.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
          
          {achievement.progress && status === "inProgress" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">{typeof achievement.progress === 'number' ? Math.round((achievement.progress / 100) * 100) : 0}%</span>
              </div>
              <Progress value={typeof achievement.progress === 'number' ? Math.round((achievement.progress / 100) * 100) : 0} className="h-2" />
            </div>
          )}
          
          {achievement.category && (
            <div className="mt-4">
              <Badge variant="secondary" className="text-xs">
                {achievement.category}
              </Badge>
            </div>
          )}
          
          {achievement.date && status === "unlocked" && (
            <p className="text-xs text-muted-foreground mt-4">
              Achieved on {new Date(achievement.date).toLocaleDateString()}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Achievements = () => {
  const [filter, setFilter] = useState<"all" | "unlocked" | "inProgress" | "locked">("all");
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="container max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Achievements</h1>
                <p className="text-muted-foreground">Track your fitness journey milestones</p>
              </div>
              <Button asChild variant="default">
                <Link to="/profile">Back to Profile</Link>
              </Button>
            </div>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Medal className="h-5 w-5 text-green-500" />
                    <span>Unlocked</span>
                  </CardTitle>
                  <CardDescription>Achievements you've completed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{achievementData.unlocked.length}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-500" />
                    <span>In Progress</span>
                  </CardTitle>
                  <CardDescription>Achievements you're working on</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{achievementData.inProgress.length}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Lock className="h-5 w-5 text-gray-500" />
                    <span>Locked</span>
                  </CardTitle>
                  <CardDescription>Achievements to unlock</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{achievementData.locked.length}</div>
                </CardContent>
              </Card>
            </div>
            
            {/* Achievement Tabs */}
            <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setFilter(value as any)}>
              <div className="flex justify-center mb-6">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unlocked">Unlocked</TabsTrigger>
                  <TabsTrigger value="inProgress">In Progress</TabsTrigger>
                  <TabsTrigger value="locked">Locked</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievementData.unlocked.map(achievement => (
                    <AchievementCard 
                      key={`unlocked-${achievement.id}`} 
                      achievement={achievement} 
                      status="unlocked" 
                    />
                  ))}
                  
                  {achievementData.inProgress.map(achievement => (
                    <AchievementCard 
                      key={`inProgress-${achievement.id}`} 
                      achievement={achievement} 
                      status="inProgress" 
                    />
                  ))}
                  
                  {achievementData.locked.map(achievement => (
                    <AchievementCard 
                      key={`locked-${achievement.id}`} 
                      achievement={achievement} 
                      status="locked" 
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="unlocked" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievementData.unlocked.map(achievement => (
                    <AchievementCard 
                      key={`unlocked-${achievement.id}`} 
                      achievement={achievement} 
                      status="unlocked" 
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="inProgress" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievementData.inProgress.map(achievement => (
                    <AchievementCard 
                      key={`inProgress-${achievement.id}`} 
                      achievement={achievement} 
                      status="inProgress" 
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="locked" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievementData.locked.map(achievement => (
                    <AchievementCard 
                      key={`locked-${achievement.id}`} 
                      achievement={achievement} 
                      status="locked" 
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Achievements;
