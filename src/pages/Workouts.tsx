
import React, { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play, Clock, Dumbbell, Heart, BarChart, Plus, Save, Check, Share2, Bookmark, X, Calendar, Home } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// Mock workout data
const workouts = {
  beginner: [
    {
      id: 1,
      title: "Beginner Full Body",
      duration: "30 min",
      intensity: "Low",
      calories: 150,
      exercises: [
        { name: "Bodyweight Squats", sets: 3, reps: 10 },
        { name: "Push-ups (Modified)", sets: 3, reps: 8 },
        { name: "Walking Lunges", sets: 2, reps: 10 },
        { name: "Plank", sets: 3, time: "20 sec" },
        { name: "Glute Bridges", sets: 3, reps: 12 }
      ],
      level: "beginner",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Beginner Cardio",
      duration: "20 min",
      intensity: "Low-Medium",
      calories: 120,
      exercises: [
        { name: "Jumping Jacks", sets: 3, time: "30 sec" },
        { name: "March in Place", sets: 3, time: "45 sec" },
        { name: "Step Touches", sets: 3, time: "30 sec" },
        { name: "Knee Lifts", sets: 3, time: "30 sec" },
        { name: "Cool Down Walk", sets: 1, time: "3 min" }
      ],
      level: "beginner",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ],
  intermediate: [
    {
      id: 3,
      title: "Intermediate Strength",
      duration: "45 min",
      intensity: "Medium",
      calories: 250,
      exercises: [
        { name: "Dumbbell Squats", sets: 4, reps: 12 },
        { name: "Push-ups", sets: 3, reps: 15 },
        { name: "Dumbbell Rows", sets: 3, reps: 12 },
        { name: "Lunges", sets: 3, reps: 10 },
        { name: "Plank", sets: 3, time: "45 sec" }
      ],
      level: "intermediate",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "HIIT Circuit",
      duration: "35 min",
      intensity: "High",
      calories: 300,
      exercises: [
        { name: "Burpees", sets: 4, time: "30 sec" },
        { name: "Mountain Climbers", sets: 4, time: "30 sec" },
        { name: "Jump Squats", sets: 4, time: "30 sec" },
        { name: "Plank Jacks", sets: 4, time: "30 sec" },
        { name: "Rest", sets: 4, time: "30 sec" }
      ],
      level: "intermediate",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ],
  advanced: [
    {
      id: 5,
      title: "Advanced Strength",
      duration: "60 min",
      intensity: "High",
      calories: 400,
      exercises: [
        { name: "Barbell Squats", sets: 5, reps: 8 },
        { name: "Deadlifts", sets: 5, reps: 6 },
        { name: "Bench Press", sets: 4, reps: 8 },
        { name: "Pull-ups", sets: 4, reps: "Max" },
        { name: "Plank", sets: 3, time: "1 min" }
      ],
      level: "advanced",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      title: "CrossFit WOD",
      duration: "40 min",
      intensity: "Very High",
      calories: 450,
      exercises: [
        { name: "Thrusters", sets: "AMRAP", reps: 15 },
        { name: "Pull-ups", sets: "AMRAP", reps: 15 },
        { name: "Box Jumps", sets: "AMRAP", reps: 15 },
        { name: "Kettlebell Swings", sets: "AMRAP", reps: 15 },
        { name: "Double Unders", sets: "AMRAP", reps: 30 }
      ],
      level: "advanced",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ],
  favorites: []
};

const WorkoutDetailModal = ({ workout, onClose, onSave, onStart }) => {
  const { toast } = useToast();
  const [saved, setSaved] = useState(false);
  const [schedulingWorkout, setSchedulingWorkout] = useState(false);
  const [workoutDate, setWorkoutDate] = useState("");
  const [workoutTime, setWorkoutTime] = useState("");

  const handleSave = () => {
    setSaved(true);
    onSave(workout);
    toast({
      title: "Workout Saved",
      description: `${workout.title} has been added to your favorites.`,
    });
  };

  const handleSchedule = () => {
    setSchedulingWorkout(true);
  };

  const confirmSchedule = () => {
    if (workoutDate && workoutTime) {
      toast({
        title: "Workout Scheduled",
        description: `${workout.title} has been scheduled for ${workoutDate} at ${workoutTime}.`,
        variant: "default",
      });
      setSchedulingWorkout(false);
      setTimeout(() => {
        onClose();
      }, 1000);
    } else {
      toast({
        title: "Missing Information",
        description: "Please select both a date and time for your workout.",
        variant: "destructive",
      });
    }
  };

  const handleStart = () => {
    onStart(workout);
    toast({
      title: "Workout Started",
      description: `Starting ${workout.title}. Get ready!`,
      variant: "default",
    });
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {!schedulingWorkout ? (
        <div className="bg-background rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <img 
              src={workout.image} 
              alt={workout.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">{workout.title}</h2>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center text-white/80">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <BarChart className="h-4 w-4 mr-1" />
                    <span>{workout.intensity}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Dumbbell className="h-4 w-4 mr-1" />
                    <span>{workout.level}</span>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-fitdash-red" />
                <span className="font-medium">{workout.calories} calories</span>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center" 
                  onClick={() => {
                    toast({
                      title: "Workout Shared",
                      description: "Workout link copied to clipboard!",
                    });
                  }}
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
                <Button 
                  variant={saved ? "outline" : "default"} 
                  size="sm" 
                  className={`flex items-center ${saved ? 'text-green-500 border-green-500' : 'bg-fitdash-purple hover:bg-fitdash-purple-dark'}`}
                  onClick={handleSave}
                  disabled={saved}
                >
                  {saved ? (
                    <>
                      <Check className="h-4 w-4 mr-1" />
                      Saved
                    </>
                  ) : (
                    <>
                      <Bookmark className="h-4 w-4 mr-1" />
                      Save
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Exercises</h3>
                <div className="space-y-3">
                  {workout.exercises.map((exercise, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <div className="font-medium">{exercise.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {exercise.sets} {typeof exercise.sets === 'number' ? 'sets' : ''} × {exercise.reps || exercise.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3">Instructions</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Complete all exercises in order</li>
                  <li>Rest 30-60 seconds between sets</li>
                  <li>Focus on proper form over speed</li>
                  <li>Stay hydrated throughout the workout</li>
                  <li>Warm up before starting and cool down after finishing</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <Button 
                className="w-1/2 bg-fitdash-purple hover:bg-fitdash-purple-dark"
                size="lg"
                onClick={handleStart}
              >
                <Play className="mr-2 h-5 w-5" />
                Start Now
              </Button>
              <Button 
                className="w-1/2"
                variant="outline"
                size="lg"
                onClick={handleSchedule}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-background rounded-lg shadow-lg w-full max-w-md animate-scale-in p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Schedule Workout</h2>
            <Button variant="ghost" size="icon" onClick={() => setSchedulingWorkout(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">
                {workout.title}
              </h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>{workout.duration}</span>
                <Dumbbell className="h-4 w-4 ml-3 mr-1" />
                <span>{workout.level}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="workout-date">Select Date</Label>
                <Input 
                  id="workout-date" 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]}
                  value={workoutDate}
                  onChange={(e) => setWorkoutDate(e.target.value)}
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="workout-time">Select Time</Label>
                <Input 
                  id="workout-time" 
                  type="time"
                  value={workoutTime}
                  onChange={(e) => setWorkoutTime(e.target.value)} 
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="reminder">Set Reminder</Label>
                <Select defaultValue="30min">
                  <SelectTrigger id="reminder">
                    <SelectValue placeholder="Select reminder time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No reminder</SelectItem>
                    <SelectItem value="15min">15 minutes before</SelectItem>
                    <SelectItem value="30min">30 minutes before</SelectItem>
                    <SelectItem value="60min">1 hour before</SelectItem>
                    <SelectItem value="1day">1 day before</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="w-full bg-fitdash-purple hover:bg-fitdash-purple-dark" onClick={confirmSchedule}>
                Schedule Workout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const WorkoutInProgressModal = ({ workout, onClose }) => {
  const { toast } = useToast();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [isResting, setIsResting] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [workoutComplete, setWorkoutComplete] = useState(false);
  
  useEffect(() => {
    let interval;
    
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isTimerRunning]);
  
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const handleNextSet = () => {
    const currentExerciseData = workout.exercises[currentExercise];
    const maxSets = typeof currentExerciseData.sets === 'number' ? currentExerciseData.sets : 3;
    
    if (currentSet < maxSets) {
      setIsResting(true);
      toast({
        title: "Rest Period",
        description: "Take a 30-second rest before your next set.",
      });
      
      setTimeout(() => {
        setCurrentSet(prevSet => prevSet + 1);
        setIsResting(false);
        toast({
          title: "Next Set",
          description: `Set ${currentSet + 1} of ${currentExerciseData.name}`,
        });
      }, 5000); // 5 second rest for demo purposes (would be longer in real app)
    } else {
      if (currentExercise < workout.exercises.length - 1) {
        setCurrentExercise(prevExercise => prevExercise + 1);
        setCurrentSet(1);
        toast({
          title: "Next Exercise",
          description: `${workout.exercises[currentExercise + 1].name}`,
        });
      } else {
        setWorkoutComplete(true);
        toast({
          title: "Workout Complete!",
          description: `Congratulations! You've completed the ${workout.title} workout.`,
        });
      }
    }
  };
  
  const handlePauseResume = () => {
    setIsTimerRunning(!isTimerRunning);
  };
  
  const handleComplete = () => {
    toast({
      title: "Workout Saved",
      description: `${workout.title} has been added to your workout history.`,
    });
    onClose();
  };
  
  const currentExerciseData = workout.exercises[currentExercise];
  const exerciseProgress = (currentExercise / workout.exercises.length) * 100;
  const setProgress = (currentSet / (typeof currentExerciseData.sets === 'number' ? currentExerciseData.sets : 3)) * 100;
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-md animate-scale-in">
        {!workoutComplete ? (
          <>
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{workout.title}</h2>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Workout Progress</span>
                <span className="text-sm font-medium">{currentExercise + 1}/{workout.exercises.length}</span>
              </div>
              <Progress value={exerciseProgress} className="h-1.5 mb-4" />
              
              <div className="text-center mb-2">
                <div className="text-3xl font-mono font-bold">{formatTime(timer)}</div>
                <p className="text-xs text-muted-foreground">Total Time</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="bg-fitdash-purple/10 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-lg mb-1">{currentExerciseData.name}</h3>
                <div className="flex justify-between text-sm mb-2">
                  <span>Set {currentSet} of {typeof currentExerciseData.sets === 'number' ? currentExerciseData.sets : '-'}</span>
                  <span>{currentExerciseData.reps || currentExerciseData.time}</span>
                </div>
                <Progress value={setProgress} className="h-1.5" indicatorClassName="bg-fitdash-purple" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Instructions</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentExerciseData.reps 
                      ? `Complete ${currentExerciseData.reps} repetitions with proper form.`
                      : `Hold the position for ${currentExerciseData.time}.`}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={handlePauseResume}
                  >
                    {isTimerRunning ? "Pause" : "Resume"}
                  </Button>
                  
                  <Button 
                    className="w-full bg-fitdash-purple hover:bg-fitdash-purple-dark"
                    onClick={handleNextSet}
                    disabled={isResting}
                  >
                    {isResting ? "Resting..." : "Complete Set"}
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-fitdash-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-fitdash-green" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Workout Complete!</h2>
            <p className="text-muted-foreground mb-6">
              Great job! You've completed the {workout.title} workout in {formatTime(timer)}.
            </p>
            
            <div className="bg-secondary/50 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-bold">{formatTime(timer)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Calories</p>
                  <p className="font-bold">{workout.calories}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Exercises</p>
                  <p className="font-bold">{workout.exercises.length}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Level</p>
                  <p className="font-bold capitalize">{workout.level}</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-fitdash-purple hover:bg-fitdash-purple-dark"
              onClick={handleComplete}
            >
              Save & Complete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const WorkoutsPage = () => {
  const [activeTab, setActiveTab] = useState("beginner");
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [customWorkouts, setCustomWorkouts] = useState([]);
  const { toast } = useToast();

  const handleSaveWorkout = (workout) => {
    if (!favorites.some(fav => fav.id === workout.id)) {
      const newFavorites = [...favorites, workout];
      setFavorites(newFavorites);
      toast({
        title: "Workout Saved",
        description: `${workout.title} has been added to your favorites.`,
      });
    }
  };

  const handleStartWorkout = (workout) => {
    setActiveWorkout(workout);
  };

  const handleCreateCustomWorkout = (formData) => {
    const newWorkout = {
      id: Date.now(),
      title: formData.title,
      duration: formData.duration + " min",
      intensity: formData.intensity,
      calories: parseInt(formData.calories),
      exercises: formData.exercises,
      level: formData.level,
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      custom: true
    };
    
    setCustomWorkouts(prev => [...prev, newWorkout]);
    toast({
      title: "Custom Workout Created",
      description: `Your "${formData.title}" workout has been created successfully.`,
    });
    
    // Switch to custom tab
    setActiveTab("custom");
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in">
              <div>
                <div className="flex items-center gap-2">
                  <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
                    <Home className="h-4 w-4" />
                  </Link>
                  <span className="text-muted-foreground">/</span>
                  <span>Workouts</span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight mt-2">Workout Library</h1>
                <p className="text-muted-foreground">Find the perfect workout for your fitness level.</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-fitdash-purple hover:bg-fitdash-purple-dark">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Custom Workout
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <CustomWorkoutForm onSubmit={handleCreateCustomWorkout} />
                </DialogContent>
              </Dialog>
            </div>
            
            <Tabs 
              defaultValue="beginner" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="animate-fade-in"
            >
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger value="beginner">Beginner</TabsTrigger>
                <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
                <TabsTrigger value="favorites">Favorites ({favorites.length})</TabsTrigger>
                <TabsTrigger value="custom">Custom ({customWorkouts.length})</TabsTrigger>
              </TabsList>
              
              {/* Beginner, Intermediate, Advanced Tabs */}
              {Object.keys(workouts).map((level) => (
                <TabsContent key={level} value={level} className="space-y-4">
                  {level === "favorites" ? (
                    favorites.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favorites.map((workout) => (
                          <Card 
                            key={workout.id} 
                            className="overflow-hidden hover-scale cursor-pointer"
                            onClick={() => setSelectedWorkout(workout)}
                          >
                            <div className="h-48 relative">
                              <img
                                src={workout.image}
                                alt={workout.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                  <h3 className="font-bold text-lg">{workout.title}</h3>
                                  <div className="flex items-center space-x-2 text-xs mt-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{workout.duration}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <CardContent className="pt-4">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                  <Dumbbell className="h-4 w-4 text-fitdash-purple" />
                                  <span className="text-sm font-medium capitalize">{workout.level}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <BarChart className="h-4 w-4 text-fitdash-blue" />
                                  <span className="text-sm font-medium">{workout.intensity}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Heart className="h-4 w-4 text-fitdash-red" />
                                  <span className="text-sm font-medium">{workout.calories} cal</span>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="pt-0">
                              <Button 
                                className="w-full bg-fitdash-purple hover:bg-fitdash-purple-dark"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStartWorkout(workout);
                                }}
                              >
                                <Play className="mr-2 h-4 w-4" />
                                Start Workout
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="bg-fitdash-purple/10 dark:bg-fitdash-purple/5 rounded-full p-4 inline-flex mb-4">
                          <Bookmark className="h-8 w-8 text-fitdash-purple" />
                        </div>
                        <h3 className="text-xl font-medium mb-2">No Favorite Workouts Yet</h3>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                          Save your favorite workouts for quick access. Click the save button on any workout to add it to your favorites.
                        </p>
                        <Button 
                          variant="outline"
                          onClick={() => setActiveTab("beginner")}
                        >
                          Browse Workouts
                        </Button>
                      </div>
                    )
                  ) : level === "custom" ? (
                    customWorkouts.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {customWorkouts.map((workout) => (
                          <Card 
                            key={workout.id} 
                            className="overflow-hidden hover-scale cursor-pointer"
                            onClick={() => setSelectedWorkout(workout)}
                          >
                            <div className="h-48 relative">
                              <img
                                src={workout.image}
                                alt={workout.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                  <div className="flex items-center">
                                    <h3 className="font-bold text-lg">{workout.title}</h3>
                                    <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded">Custom</span>
                                  </div>
                                  <div className="flex items-center space-x-2 text-xs mt-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{workout.duration}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <CardContent className="pt-4">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                  <Dumbbell className="h-4 w-4 text-fitdash-purple" />
                                  <span className="text-sm font-medium capitalize">{workout.level}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <BarChart className="h-4 w-4 text-fitdash-blue" />
                                  <span className="text-sm font-medium">{workout.intensity}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Heart className="h-4 w-4 text-fitdash-red" />
                                  <span className="text-sm font-medium">{workout.calories} cal</span>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="pt-0">
                              <Button 
                                className="w-full bg-fitdash-purple hover:bg-fitdash-purple-dark"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStartWorkout(workout);
                                }}
                              >
                                <Play className="mr-2 h-4 w-4" />
                                Start Workout
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="bg-fitdash-purple/10 dark:bg-fitdash-purple/5 rounded-full p-4 inline-flex mb-4">
                          <Plus className="h-8 w-8 text-fitdash-purple" />
                        </div>
                        <h3 className="text-xl font-medium mb-2">No Custom Workouts Yet</h3>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                          Create your own custom workouts tailored to your specific goals and preferences.
                        </p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="bg-fitdash-purple hover:bg-fitdash-purple-dark">
                              Create First Workout
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px]">
                            <CustomWorkoutForm onSubmit={handleCreateCustomWorkout} />
                          </DialogContent>
                        </Dialog>
                      </div>
                    )
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {workouts[level].map((workout) => (
                        <Card 
                          key={workout.id} 
                          className="overflow-hidden hover-scale cursor-pointer"
                          onClick={() => setSelectedWorkout(workout)}
                        >
                          <div className="h-48 relative">
                            <img
                              src={workout.image}
                              alt={workout.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                              <div className="p-4 text-white">
                                <h3 className="font-bold text-lg">{workout.title}</h3>
                                <div className="flex items-center space-x-2 text-xs mt-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{workout.duration}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <CardContent className="pt-4">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-2">
                                <Dumbbell className="h-4 w-4 text-fitdash-purple" />
                                <span className="text-sm font-medium capitalize">{workout.level}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <BarChart className="h-4 w-4 text-fitdash-blue" />
                                <span className="text-sm font-medium">{workout.intensity}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Heart className="h-4 w-4 text-fitdash-red" />
                                <span className="text-sm font-medium">{workout.calories} cal</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="pt-0">
                            <Button 
                              className="w-full bg-fitdash-purple hover:bg-fitdash-purple-dark"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStartWorkout(workout);
                              }}
                            >
                              <Play className="mr-2 h-4 w-4" />
                              Start Workout
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="rounded-lg border bg-card p-6 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Track Your Progress</h3>
                  <p className="text-sm text-muted-foreground">Complete workouts to build your streak and earn achievements.</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-sm font-medium">Weekly Goal</p>
                    <p className="text-xs text-muted-foreground">3 of 5 workouts completed</p>
                  </div>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-fitdash-purple/10 text-fitdash-purple font-bold text-lg">
                    60%
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                  <span>Progress</span>
                  <span>3/5</span>
                </div>
                <Progress value={60} className="h-2" indicatorClassName="bg-fitdash-purple" />
              </div>
            </div>
          </div>
          
          {selectedWorkout && (
            <WorkoutDetailModal 
              workout={selectedWorkout} 
              onClose={() => setSelectedWorkout(null)} 
              onSave={handleSaveWorkout}
              onStart={handleStartWorkout}
            />
          )}
          
          {activeWorkout && (
            <WorkoutInProgressModal 
              workout={activeWorkout} 
              onClose={() => setActiveWorkout(null)} 
            />
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

// Custom Workout Form Component
const CustomWorkoutForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("Medium");
  const [level, setLevel] = useState("intermediate");
  const [calories, setCalories] = useState("");
  const [exercises, setExercises] = useState([
    { name: "", sets: "", reps: "" }
  ]);
  
  const handleAddExercise = () => {
    setExercises([...exercises, { name: "", sets: "", reps: "" }]);
  };
  
  const handleRemoveExercise = (index) => {
    const newExercises = [...exercises];
    newExercises.splice(index, 1);
    setExercises(newExercises);
  };
  
  const handleExerciseChange = (index, field, value) => {
    const newExercises = [...exercises];
    newExercises[index][field] = value;
    setExercises(newExercises);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!title || !duration || !intensity || !level || !calories || exercises.some(ex => !ex.name || !ex.sets)) {
      return; // Form validation failed
    }
    
    // Format exercises
    const formattedExercises = exercises.map(ex => ({
      name: ex.name,
      sets: parseInt(ex.sets),
      reps: ex.reps || "Until failure"
    }));
    
    onSubmit({
      title,
      duration,
      intensity,
      level,
      calories,
      exercises: formattedExercises
    });
  };
  
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create Custom Workout</DialogTitle>
        <DialogDescription>
          Design your own workout routine tailored to your specific needs and goals.
        </DialogDescription>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="title">Workout Title</Label>
          <Input 
            id="title" 
            placeholder="e.g., My HIIT Workout" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input 
              id="duration" 
              type="number"
              placeholder="e.g., 30" 
              value={duration} 
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="calories">Calories Burned</Label>
            <Input 
              id="calories" 
              type="number"
              placeholder="e.g., 300" 
              value={calories} 
              onChange={(e) => setCalories(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="intensity">Intensity</Label>
            <Select 
              value={intensity} 
              onValueChange={setIntensity}
            >
              <SelectTrigger id="intensity">
                <SelectValue placeholder="Select intensity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Very High">Very High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="level">Level</Label>
            <Select 
              value={level} 
              onValueChange={setLevel}
            >
              <SelectTrigger id="level">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>Exercises</Label>
            <Button 
              type="button" 
              variant="ghost" 
              size="sm" 
              onClick={handleAddExercise}
              className="h-8 text-xs"
            >
              <Plus className="h-3 w-3 mr-1" />
              Add Exercise
            </Button>
          </div>
          
          <div className="space-y-3 max-h-40 overflow-y-auto pr-2">
            {exercises.map((exercise, index) => (
              <div key={index} className="flex items-center gap-2 bg-secondary/30 p-2 rounded-md">
                <div className="flex-grow">
                  <Input 
                    placeholder="Exercise name" 
                    value={exercise.name} 
                    onChange={(e) => handleExerciseChange(index, "name", e.target.value)}
                    className="text-xs h-8 mb-1"
                    required
                  />
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Sets" 
                      value={exercise.sets} 
                      onChange={(e) => handleExerciseChange(index, "sets", e.target.value)}
                      className="text-xs h-7 w-16"
                      required
                    />
                    <Input 
                      placeholder="Reps" 
                      value={exercise.reps} 
                      onChange={(e) => handleExerciseChange(index, "reps", e.target.value)}
                      className="text-xs h-7"
                    />
                  </div>
                </div>
                {exercises.length > 1 && (
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7"
                    onClick={() => handleRemoveExercise(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <DialogFooter>
          <Button type="submit" className="w-full mt-2 bg-fitdash-purple hover:bg-fitdash-purple-dark">
            Create Workout
          </Button>
        </DialogFooter>
      </form>
    </>
  );
};

export default WorkoutsPage;
