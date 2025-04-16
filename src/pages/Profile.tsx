
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import {
  BarChart,
  Calendar,
  Camera,
  CheckCircle2,
  Dumbbell,
  Edit,
  Flame,
  Footprints,
  Heart,
  ListChecks,
  Mail,
  MapPin,
  MessageSquare,
  Settings,
  Share2,
  Trophy,
  User,
  Zap,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon
} from "lucide-react";
import { userProfile, getBMICategory, calculateBMI } from "@/lib/mock-data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState(userProfile.profileImage);

  // Mock edit profile state
  const [editProfileForm, setEditProfileForm] = useState({
    name: userProfile.name,
    age: userProfile.age,
    weight: userProfile.weight,
    height: userProfile.height,
    email: userProfile.email || "shaikhjishan255@gmail.com",
    location: userProfile.location || "Mumbai, India"
  });

  // Mock update goals state
  const [updateGoalsForm, setUpdateGoalsForm] = useState({
    dailySteps: 10000,
    caloriesBurn: 500,
    weeklyWorkouts: 5,
    sleepHours: 8
  });

  const handleEditProfileChange = (e) => {
    const { name, value } = e.target;
    setEditProfileForm(prev => ({
      ...prev,
      [name]: name === 'age' || name === 'weight' || name === 'height' ? Number(value) : value
    }));
  };

  const handleUpdateGoalsChange = (e) => {
    const { name, value } = e.target;
    setUpdateGoalsForm(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  const handleEditProfileSubmit = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleUpdateGoalsSubmit = () => {
    toast({
      title: "Goals Updated",
      description: "Your fitness goals have been successfully updated.",
    });
  };

  const handleAvatarChange = () => {
    // In a real app, we would handle file upload here
    // For now, just show a success message
    toast({
      title: "Avatar Updated",
      description: "Your profile picture has been successfully updated.",
    });
  };

  const bmi = parseFloat(calculateBMI(userProfile.weight, userProfile.height));
  const bmiStatus = getBMICategory(bmi);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="container py-4 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column - Profile Details */}
              <div className="md:col-span-1">
                <Card className="bg-white dark:bg-secondary">
                  <CardHeader className="flex flex-col items-center pb-4 space-y-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={profileImage} alt={userProfile.name} />
                      <AvatarFallback>{userProfile.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg font-semibold">{userProfile.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">@{userProfile.username}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm font-medium">Age:</span>
                      <span className="text-sm text-muted-foreground">{userProfile.age} years</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm font-medium">Weight:</span>
                      <span className="text-sm text-muted-foreground">{userProfile.weight} kg</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm font-medium">Height:</span>
                      <span className="text-sm text-muted-foreground">{userProfile.height} cm</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm font-medium">Fitness Level:</span>
                      <span className="text-sm text-muted-foreground">{userProfile.fitnessLevel}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm font-medium">BMI:</span>
                      <span>{bmi}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm font-medium">BMI Category:</span>
                      <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${bmiStatus.color}`}>
                        {bmiStatus.category}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mt-6 bg-white dark:bg-secondary">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 py-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${userProfile.email || "shaikhjishan255@gmail.com"}`} className="text-sm text-muted-foreground hover:underline">
                        {userProfile.email || "shaikhjishan255@gmail.com"}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{userProfile.location || "Mumbai, India"}</span>
                    </div>
                    <div className="flex items-center justify-center mt-4 space-x-4">
                      <a href={userProfile.socialLinks?.instagram || "https://www.instagram.com/jishanahmed_shaikh"} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5 text-muted-foreground hover:text-fitdash-red" />
                      </a>
                      <a href={userProfile.socialLinks?.twitter || "https://www.x.com/jishanarshaikh"} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5 text-muted-foreground hover:text-fitdash-blue" />
                      </a>
                      <a href={userProfile.socialLinks?.facebook || "https://www.facebook.com/jishanahmedarshaikh/"} target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-5 w-5 text-muted-foreground hover:text-fitdash-blue" />
                      </a>
                      <a href={userProfile.socialLinks?.linkedin || "https://www.linkedin.com/in/jishanahmedshaikh"} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-fitdash-blue" />
                      </a>
                      <a href={userProfile.socialLinks?.linktree || "https://linktr.ee/jishanahmedshaikh"} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="h-5 w-5 text-muted-foreground hover:text-green-500" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Middle Column - Statistics */}
              <div className="md:col-span-1">
                <Card className="bg-white dark:bg-secondary">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50">
                        <BarChart className="h-6 w-6 text-fitdash-blue mb-2" />
                        <span className="text-2xl font-bold">{userProfile.statistics.totalWorkouts}</span>
                        <span className="text-sm text-muted-foreground">Total Workouts</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50">
                        <Flame className="h-6 w-6 text-fitdash-red mb-2" />
                        <span className="text-2xl font-bold">{userProfile.statistics.averageCaloriesBurned}</span>
                        <span className="text-sm text-muted-foreground">Avg Calories Burned</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50">
                        <Calendar className="h-6 w-6 text-fitdash-orange mb-2" />
                        <span className="text-2xl font-bold">{userProfile.statistics.streakDays}</span>
                        <span className="text-sm text-muted-foreground">Workout Streak</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50">
                        <Footprints className="h-6 w-6 text-fitdash-green mb-2" />
                        <span className="text-2xl font-bold">150k</span>
                        <span className="text-sm text-muted-foreground">Total Steps</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Achievements Section */}
                <Card className="mt-6 bg-white dark:bg-secondary">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-base font-semibold">Achievements</CardTitle>
                      <Button variant="ghost" size="sm" asChild>
                        <RouterLink to="/achievements" className="text-sm text-muted-foreground">
                          View All
                        </RouterLink>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[240px] w-full rounded-md border">
                      <div className="space-y-3 p-3">
                        {userProfile.achievements.map((achievement) => (
                          <div key={achievement.id} className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="rounded-full bg-secondary/50 p-2">
                                <Trophy className="h-4 w-4 text-muted-foreground" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">{achievement.title}</p>
                                <p className="text-xs text-muted-foreground">{achievement.description}</p>
                              </div>
                            </div>
                            {achievement.completed ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                              <Badge variant="outline">
                                {achievement.progress ? `Progress: ${achievement.progress}%` : "In Progress"}
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Actions and Social */}
              <div className="md:col-span-1">
                <Card className="bg-white dark:bg-secondary">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="outline">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Profile</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={editProfileForm.name}
                              onChange={handleEditProfileChange}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="age" className="text-right">
                              Age
                            </Label>
                            <Input
                              id="age"
                              name="age"
                              type="number"
                              value={editProfileForm.age}
                              onChange={handleEditProfileChange}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="weight" className="text-right">
                              Weight (kg)
                            </Label>
                            <Input
                              id="weight"
                              name="weight"
                              type="number"
                              value={editProfileForm.weight}
                              onChange={handleEditProfileChange}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="height" className="text-right">
                              Height (cm)
                            </Label>
                            <Input
                              id="height"
                              name="height"
                              type="number"
                              value={editProfileForm.height}
                              onChange={handleEditProfileChange}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={editProfileForm.email}
                              onChange={handleEditProfileChange}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="location" className="text-right">
                              Location
                            </Label>
                            <Input
                              id="location"
                              name="location"
                              value={editProfileForm.location}
                              onChange={handleEditProfileChange}
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button onClick={handleEditProfileSubmit}>Save changes</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="outline">
                          <ListChecks className="h-4 w-4 mr-2" />
                          Update Goals
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Update Goals</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="dailySteps" className="text-right">
                              Daily Steps
                            </Label>
                            <Input
                              id="dailySteps"
                              name="dailySteps"
                              type="number"
                              value={updateGoalsForm.dailySteps}
                              onChange={handleUpdateGoalsChange}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="caloriesBurn" className="text-right">
                              Calories Burn
                            </Label>
                            <Input
                              id="caloriesBurn"
                              name="caloriesBurn"
                              type="number"
                              value={updateGoalsForm.caloriesBurn}
                              onChange={handleUpdateGoalsChange}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="weeklyWorkouts" className="text-right">
                              Weekly Workouts
                            </Label>
                            <Input
                              id="weeklyWorkouts"
                              name="weeklyWorkouts"
                              type="number"
                              value={updateGoalsForm.weeklyWorkouts}
                              onChange={handleUpdateGoalsChange}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="sleepHours" className="text-right">
                              Sleep Hours
                            </Label>
                            <Input
                              id="sleepHours"
                              name="sleepHours"
                              type="number"
                              value={updateGoalsForm.sleepHours}
                              onChange={handleUpdateGoalsChange}
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button onClick={handleUpdateGoalsSubmit}>Save goals</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="outline">
                          <Camera className="h-4 w-4 mr-2" />
                          Change Avatar
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Change Avatar</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col items-center justify-center gap-4 py-4">
                          <Avatar className="h-24 w-24">
                            <AvatarImage src={profileImage} alt={userProfile.name} />
                            <AvatarFallback>{userProfile.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <Input id="picture" type="file" className="max-w-xs" />
                          <p className="text-sm text-muted-foreground">
                            Supported formats: JPG, PNG. Max size: 5MB.
                          </p>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button onClick={handleAvatarChange}>Update avatar</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>

                <Card className="mt-6 bg-white dark:bg-secondary">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">Social Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Chad Next</p>
                          <p className="text-xs text-muted-foreground">Shared a workout</p>
                        </div>
                      </div>
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="https://github.com/Pedro-Technical.png" alt="User Avatar" />
                          <AvatarFallback>PT</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Pedro Technical</p>
                          <p className="text-xs text-muted-foreground">Completed a goal</p>
                        </div>
                      </div>
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6 bg-white dark:bg-secondary">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">Share Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Share your profile with friends and family.</p>
                    <Button 
                      className="w-full mt-4" 
                      variant="outline"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        toast({
                          title: "Link Copied",
                          description: "Profile link copied to clipboard",
                        });
                      }}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Copy Profile Link
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Profile;
