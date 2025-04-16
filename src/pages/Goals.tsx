
import React, { useState } from "react";
import { PlusCircle, X, Clock, Check, Filter, Calendar as CalIcon, Target, Dumbbell, Zap, Trash2, Edit3, BarChart2, Plus, Heart } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

// Create mock data directly in the component
const fitnessGoals = [
  {
    id: 1,
    title: "Walk 10,000 steps daily",
    description: "Take at least 10,000 steps every day to improve cardiovascular health and manage weight.",
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    status: "In Progress",
    progress: 85,
    icon: "activity",
    milestones: [
      { value: 25, label: "25%" },
      { value: 50, label: "50%" },
      { value: 75, label: "75%" },
      { value: 100, label: "Complete" }
    ]
  },
  {
    id: 2,
    title: "Burn 500 calories daily",
    description: "Burn at least 500 calories through various exercises to maintain fitness and energy levels.",
    startDate: "2025-04-01",
    endDate: "2025-04-07",
    status: "Completed",
    progress: 100,
    icon: "heart",
    milestones: [
      { value: 25, label: "25%" },
      { value: 50, label: "50%" },
      { value: 75, label: "75%" },
      { value: 100, label: "Complete" }
    ]
  },
  {
    id: 3,
    title: "Drink 8 glasses of water",
    description: "Drink at least 8 glasses of water daily to stay hydrated and support overall health.",
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    status: "In Progress",
    progress: 62,
    icon: "activity",
    milestones: [
      { value: 25, label: "25%" },
      { value: 50, label: "50%" },
      { value: 75, label: "75%" },
      { value: 100, label: "Complete" }
    ]
  },
  {
    id: 4,
    title: "Complete a 5K run",
    description: "Train for and complete a 5K run to improve endurance and running capabilities.",
    startDate: "2025-04-15",
    endDate: "2025-05-15",
    status: "Behind",
    progress: 30,
    icon: "target",
    milestones: [
      { value: 25, label: "25%" },
      { value: 50, label: "50%" },
      { value: 75, label: "75%" },
      { value: 100, label: "Complete" }
    ]
  }
];

type GoalStatus = "All" | "Completed" | "In Progress" | "Behind";

const GoalDetailsDialog = ({ goal, onClose, onDelete, onEdit }) => {
  const { toast } = useToast();
  
  const handleDelete = () => {
    onDelete(goal.id);
    onClose();
    toast({
      title: "Goal Deleted",
      description: `"${goal.title}" has been deleted.`,
      variant: "destructive",
    });
  };
  
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="flex items-center">
          <div className="p-2 rounded-full bg-fitdash-purple/10 mr-2">
            <Target className="h-4 w-4 text-fitdash-purple" />
          </div>
          <span>Goal Details</span>
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-4 py-4">
        <div>
          <h3 className="text-xl font-bold">{goal.title}</h3>
          <div className="flex items-center mt-1 text-sm text-muted-foreground">
            <CalIcon className="h-4 w-4 mr-1" />
            <span>
              {new Date(goal.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - 
              {new Date(goal.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center">
            <div className={`flex items-center px-2 py-0.5 rounded-full text-xs font-medium 
              ${goal.status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : 
                goal.status === "Behind" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : 
                "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"}`}
            >
              {goal.status === "Completed" ? (
                <Check className="h-3 w-3 mr-1" />
              ) : goal.status === "Behind" ? (
                <X className="h-3 w-3 mr-1" />
              ) : (
                <Clock className="h-3 w-3 mr-1" />
              )}
              {goal.status}
            </div>
          </div>
        </div>
        
        <div>
          <Label className="text-sm font-medium">Description</Label>
          <p className="text-sm text-muted-foreground mt-1">{goal.description}</p>
        </div>
        
        <div>
          <Label className="text-sm font-medium">Progress</Label>
          <div className="mt-2">
            <div className="flex justify-between mb-1 text-sm">
              <span>{goal.progress}% Complete</span>
            </div>
            <Progress 
              value={goal.progress} 
              className="h-2" 
              indicatorClassName={
                goal.status === "Completed" ? "bg-green-500" :
                goal.status === "Behind" ? "bg-fitdash-red" :
                "bg-fitdash-purple"
              }
            />
            
            <div className="flex justify-between mt-2">
              {goal.milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className={`w-3 h-3 rounded-full mb-1 ${
                      goal.progress >= milestone.value 
                      ? (goal.status === "Completed" ? "bg-green-500" : 
                         goal.status === "Behind" ? "bg-fitdash-red" : 
                         "bg-fitdash-purple") 
                      : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                  <span className="text-xs text-muted-foreground">{milestone.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
        <Button 
          variant="destructive" 
          onClick={handleDelete}
          type="button"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete Goal
        </Button>
        
        <div className="flex space-x-2 mb-2 sm:mb-0">
          <DialogClose asChild>
            <Button variant="outline" type="button">Close</Button>
          </DialogClose>
          <Button onClick={() => onEdit(goal)}>
            <Edit3 className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  );
};

const NewGoalDialog = ({ onSave, onClose, goalToEdit = null }) => {
  const isEditing = !!goalToEdit;
  const [formData, setFormData] = useState({
    title: goalToEdit?.title || "",
    description: goalToEdit?.description || "",
    startDate: goalToEdit?.startDate || format(new Date(), 'yyyy-MM-dd'),
    endDate: goalToEdit?.endDate || format(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
    icon: goalToEdit?.icon || "target",
    status: goalToEdit?.status || "In Progress",
    progress: goalToEdit?.progress || 0
  });
  
  const [startDate, setStartDate] = useState<Date | undefined>(
    goalToEdit ? new Date(goalToEdit.startDate) : new Date()
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    goalToEdit ? new Date(goalToEdit.endDate) : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  );
  
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  
  const { toast } = useToast();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleStartDateSelect = (date: Date | undefined) => {
    setStartDate(date);
    if (date) {
      setFormData({
        ...formData,
        startDate: format(date, 'yyyy-MM-dd')
      });
      setStartOpen(false);
    }
  };
  
  const handleEndDateSelect = (date: Date | undefined) => {
    setEndDate(date);
    if (date) {
      setFormData({
        ...formData,
        endDate: format(date, 'yyyy-MM-dd')
      });
      setEndOpen(false);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title) {
      toast({
        title: "Validation Error",
        description: "Please enter a title for your goal.",
        variant: "destructive",
      });
      return;
    }
    
    if (new Date(formData.endDate) <= new Date(formData.startDate)) {
      toast({
        title: "Validation Error",
        description: "End date must be after start date.",
        variant: "destructive",
      });
      return;
    }
    
    const milestones = [
      { value: 25, label: "25%" },
      { value: 50, label: "50%" },
      { value: 75, label: "75%" },
      { value: 100, label: "Complete" }
    ];
    
    const newGoal = {
      id: goalToEdit?.id || Math.floor(Math.random() * 10000),
      ...formData,
      milestones
    };
    
    onSave(newGoal, isEditing);
    onClose();
    
    toast({
      title: isEditing ? "Goal Updated" : "Goal Created",
      description: isEditing
        ? `"${newGoal.title}" has been updated.`
        : `"${newGoal.title}" has been added to your goals.`,
    });
  };
  
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>{isEditing ? "Edit Goal" : "Create New Goal"}</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="title">Goal Title</Label>
          <Input 
            id="title" 
            name="title" 
            placeholder="e.g., Run 5k in under 30 minutes"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input 
            id="description" 
            name="description" 
            placeholder="Describe your goal in more detail"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Popover open={startOpen} onOpenChange={setStartOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={handleStartDateSelect}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Popover open={endOpen} onOpenChange={setEndOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={handleEndDateSelect}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="icon">Icon</Label>
            <Select 
              value={formData.icon}
              onValueChange={(value) => handleSelectChange('icon', value)}
            >
              <SelectTrigger id="icon">
                <SelectValue placeholder="Select an icon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="activity">Activity</SelectItem>
                <SelectItem value="heart">Heart</SelectItem>
                <SelectItem value="target">Target</SelectItem>
                <SelectItem value="zap">Energy</SelectItem>
                <SelectItem value="dumbbell">Workout</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {isEditing && (
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select 
                value={formData.status}
                onValueChange={(value) => handleSelectChange('status', value)}
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Behind">Behind</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          {isEditing && (
            <div className="space-y-2 col-span-2">
              <div className="flex justify-between">
                <Label htmlFor="progress">Progress: {formData.progress}%</Label>
              </div>
              <Input
                id="progress"
                type="range"
                name="progress"
                min="0"
                max="100"
                value={formData.progress}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
          )}
        </div>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" type="button">Cancel</Button>
          </DialogClose>
          <Button type="submit" className="bg-fitdash-purple hover:bg-fitdash-purple-dark">
            {isEditing ? "Save Changes" : "Create Goal"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

const Goals = () => {
  const [filter, setFilter] = useState<GoalStatus>("All");
  const [goals, setGoals] = useState(fitnessGoals);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [goalToEdit, setGoalToEdit] = useState(null);
  const [isNewGoalDialogOpen, setIsNewGoalDialogOpen] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");
  const { toast } = useToast();
  
  const filteredGoals = filter === "All" 
    ? goals 
    : goals.filter(goal => goal.status === filter);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <Check className="h-5 w-5 text-green-500" />;
      case "Behind":
        return <X className="h-5 w-5 text-fitdash-red" />;
      default:
        return <Clock className="h-5 w-5 text-fitdash-blue" />;
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "Behind":
        return "bg-fitdash-red";
      default:
        return "bg-fitdash-purple";
    }
  };
  
  const getGoalIcon = (icon: string) => {
    switch (icon) {
      case "target":
        return <Target className="h-5 w-5" />;
      case "heart":
        return <Heart className="h-5 w-5" />;
      case "activity":
        return <BarChart2 className="h-5 w-5" />;
      case "dumbbell":
        return <Dumbbell className="h-5 w-5" />;
      case "zap":
        return <Zap className="h-5 w-5" />;
      default:
        return <Target className="h-5 w-5" />;
    }
  };
  
  const handleDeleteGoal = (id: number) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };
  
  const handleSaveGoal = (goal, isEditing) => {
    if (isEditing) {
      setGoals(goals.map(g => g.id === goal.id ? goal : g));
    } else {
      setGoals([...goals, goal]);
    }
  };
  
  const handleEditGoal = (goal) => {
    setGoalToEdit(goal);
    setIsNewGoalDialogOpen(true);
  };
  
  const handleCreateGoal = () => {
    setGoalToEdit(null);
    setIsNewGoalDialogOpen(true);
  };
  
  const handleProgressUpdate = (id: number, newProgress: number) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        const updatedGoal = { ...goal, progress: newProgress };
        if (newProgress === 100) {
          updatedGoal.status = "Completed";
        } else {
          const startDate = new Date(goal.startDate).getTime();
          const endDate = new Date(goal.endDate).getTime();
          const now = new Date().getTime();
          const totalDuration = endDate - startDate;
          const elapsed = now - startDate;
          const percentTimeElapsed = (elapsed / totalDuration) * 100;
          
          if (percentTimeElapsed > 25 && newProgress < percentTimeElapsed / 2) {
            updatedGoal.status = "Behind";
          } else {
            updatedGoal.status = "In Progress";
          }
        }
        return updatedGoal;
      }
      return goal;
    }));

    toast({
      title: "Progress Updated",
      description: `Goal progress has been updated to ${newProgress}%.`,
    });
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Fitness Goals</h1>
                <p className="text-muted-foreground">Track your progress and achieve your fitness goals.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex items-center space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Filter className="h-4 w-4 mr-2" />
                        {filter}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setFilter("All")}>All</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("Completed")}>Completed</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("In Progress")}>In Progress</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("Behind")}>Behind</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <div className="border rounded-md overflow-hidden">
                    <Button
                      variant={view === "grid" ? "secondary" : "ghost"}
                      size="sm"
                      className="rounded-none h-8 w-8 p-0"
                      onClick={() => setView("grid")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid-2x2"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
                    </Button>
                    <Button
                      variant={view === "list" ? "secondary" : "ghost"}
                      size="sm"
                      className="rounded-none h-8 w-8 p-0"
                      onClick={() => setView("list")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
                    </Button>
                  </div>
                </div>
                
                <Dialog open={isNewGoalDialogOpen} onOpenChange={setIsNewGoalDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-fitdash-purple hover:bg-fitdash-purple-dark" onClick={handleCreateGoal}>
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add Goal
                    </Button>
                  </DialogTrigger>
                  <NewGoalDialog 
                    onSave={handleSaveGoal}
                    onClose={() => setIsNewGoalDialogOpen(false)}
                    goalToEdit={goalToEdit}
                  />
                </Dialog>
              </div>
            </div>
            
            {view === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {filteredGoals.length > 0 ? (
                  filteredGoals.map((goal) => (
                    <Dialog key={goal.id}>
                      <DialogTrigger asChild>
                        <Card className="dashboard-card hover-scale cursor-pointer" onClick={() => setSelectedGoal(goal)}>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="flex items-center">
                                <div className={`mr-2 p-2 rounded-full ${
                                  goal.status === "Completed" ? "bg-green-100 text-green-500 dark:bg-green-900" : 
                                  goal.status === "Behind" ? "bg-red-100 text-red-500 dark:bg-red-900" : 
                                  "bg-blue-100 text-blue-500 dark:bg-blue-900"
                                }`}>
                                  {getGoalIcon(goal.icon)}
                                </div>
                                <div className="space-y-1">
                                  <span>{goal.title}</span>
                                  <div className="flex items-center text-xs text-muted-foreground">
                                    <CalIcon className="h-3 w-3 mr-1" />
                                    <span>
                                      {new Date(goal.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - 
                                      {new Date(goal.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </span>
                                  </div>
                                </div>
                              </CardTitle>
                              <div className="flex items-center">
                                <div className={`flex items-center px-2 py-0.5 rounded-full text-xs font-medium 
                                  ${goal.status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : 
                                    goal.status === "Behind" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : 
                                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"}`}
                                >
                                  {goal.status === "Completed" ? (
                                    <Check className="h-3 w-3 mr-1" />
                                  ) : goal.status === "Behind" ? (
                                    <X className="h-3 w-3 mr-1" />
                                  ) : (
                                    <Clock className="h-3 w-3 mr-1" />
                                  )}
                                  {goal.status}
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm font-medium">Progress</span>
                                  <span className="text-sm font-medium">{goal.progress}%</span>
                                </div>
                                <Progress 
                                  value={goal.progress} 
                                  className="h-2" 
                                  indicatorClassName={getProgressColor(goal.status)} 
                                />
                              </div>
                              <div className="flex justify-between text-xs text-muted-foreground">
                                {goal.milestones.map((milestone, index) => (
                                  <div key={index} className="flex flex-col items-center">
                                    <div 
                                      className={`w-2 h-2 rounded-full mb-1 ${
                                        goal.progress >= milestone.value 
                                        ? (goal.status === "Completed" ? "bg-green-500" : 
                                           goal.status === "Behind" ? "bg-fitdash-red" : 
                                           "bg-fitdash-purple") 
                                        : "bg-gray-200 dark:bg-gray-700"
                                      }`}
                                    />
                                    <span>{milestone.label}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <GoalDetailsDialog 
                        goal={goal} 
                        onClose={() => setSelectedGoal(null)}
                        onDelete={handleDeleteGoal}
                        onEdit={handleEditGoal}
                      />
                    </Dialog>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                    <div className="bg-secondary rounded-full p-4 mb-4">
                      <Target className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">No goals found</h3>
                    <p className="text-muted-foreground max-w-md mb-6">
                      {filter === "All"
                        ? "You haven't created any goals yet. Add a new goal to start tracking your progress."
                        : `You don't have any ${filter.toLowerCase()} goals. Try changing the filter or adding a new goal.`}
                    </p>
                    <Button className="bg-fitdash-purple hover:bg-fitdash-purple-dark" onClick={handleCreateGoal}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Your First Goal
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <Card className="animate-fade-in">
                <CardContent className="p-0">
                  {filteredGoals.length > 0 ? (
                    <div className="divide-y">
                      {filteredGoals.map((goal) => (
                        <Dialog key={goal.id}>
                          <DialogTrigger asChild>
                            <div 
                              className="p-4 hover:bg-secondary/50 transition-colors cursor-pointer"
                              onClick={() => setSelectedGoal(goal)}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-4">
                                  <div className={`p-2 rounded-full flex-shrink-0 ${
                                    goal.status === "Completed" ? "bg-green-100 text-green-500 dark:bg-green-900" : 
                                    goal.status === "Behind" ? "bg-red-100 text-red-500 dark:bg-red-900" : 
                                    "bg-blue-100 text-blue-500 dark:bg-blue-900"
                                  }`}>
                                    {getGoalIcon(goal.icon)}
                                  </div>
                                  <div>
                                    <h3 className="font-medium">{goal.title}</h3>
                                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                                      <CalIcon className="h-3 w-3 mr-1" />
                                      <span>
                                        {new Date(goal.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - 
                                        {new Date(goal.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                  <div className="text-right">
                                    <div className="text-sm font-medium">{goal.progress}%</div>
                                    <div className={`text-xs font-medium px-2 py-0.5 rounded-full 
                                      ${goal.status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : 
                                        goal.status === "Behind" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : 
                                        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"}`}
                                    >
                                      {goal.status}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Progress 
                                  value={goal.progress} 
                                  className="h-1.5" 
                                  indicatorClassName={getProgressColor(goal.status)} 
                                />
                              </div>
                            </div>
                          </DialogTrigger>
                          <GoalDetailsDialog 
                            goal={goal} 
                            onClose={() => setSelectedGoal(null)}
                            onDelete={handleDeleteGoal}
                            onEdit={handleEditGoal}
                          />
                        </Dialog>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="bg-secondary rounded-full p-4 mb-4">
                        <Target className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">No goals found</h3>
                      <p className="text-muted-foreground max-w-md mb-6">
                        {filter === "All"
                          ? "You haven't created any goals yet. Add a new goal to start tracking your progress."
                          : `You don't have any ${filter.toLowerCase()} goals. Try changing the filter or adding a new goal.`}
                      </p>
                      <Button className="bg-fitdash-purple hover:bg-fitdash-purple-dark" onClick={handleCreateGoal}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Your First Goal
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
            
            <Card className="bg-fitdash-purple/10 dark:bg-fitdash-purple/5 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Target className="h-5 w-5 text-fitdash-purple mr-2" />
                  Goal Setting Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Make Goals SMART</h3>
                    <p className="text-sm text-muted-foreground">
                      Set goals that are Specific, Measurable, Achievable, Relevant, and Time-bound.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Track Consistently</h3>
                    <p className="text-sm text-muted-foreground">
                      Update your progress regularly to stay motivated and on track.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Celebrate Milestones</h3>
                    <p className="text-sm text-muted-foreground">
                      Acknowledge and reward yourself when you reach key milestones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Goals;
