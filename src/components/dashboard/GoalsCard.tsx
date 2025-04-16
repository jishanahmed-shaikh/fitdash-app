
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, PlusCircle, Check, Clock, X } from "lucide-react";
import { Link } from "react-router-dom";

// Mock fitness goals data directly in the component
const fitnessGoals = [
  {
    id: 1,
    title: "Walk 10,000 steps daily",
    progress: 85,
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    status: "In Progress",
    icon: "activity"
  },
  {
    id: 2,
    title: "Burn 500 calories daily",
    progress: 100,
    startDate: "2025-04-01",
    endDate: "2025-04-07",
    status: "Completed",
    icon: "heart"
  },
  {
    id: 3,
    title: "Drink 8 glasses of water",
    progress: 62,
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    status: "In Progress",
    icon: "activity"
  }
];

interface GoalsCardProps {
  className?: string;
}

const GoalsCard = ({ className }: GoalsCardProps) => {
  // Show only the first 3 goals
  const displayGoals = fitnessGoals.slice(0, 3);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <Check className="h-4 w-4 text-green-500" />;
      case "Behind":
        return <X className="h-4 w-4 text-fitdash-red" />;
      default:
        return <Clock className="h-4 w-4 text-fitdash-blue" />;
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

  return (
    <Card className={`dashboard-card ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg flex items-center">
          <Target className="mr-2 h-5 w-5 text-fitdash-purple" />
          Goals
        </CardTitle>
        <Button asChild variant="ghost" size="sm" className="text-xs text-muted-foreground">
          <Link to="/goals">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayGoals.map((goal) => (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {getStatusIcon(goal.status)}
                  <span className="ml-2 font-medium">{goal.title}</span>
                </div>
                <span className="text-sm">{goal.progress}%</span>
              </div>
              <Progress 
                value={goal.progress} 
                className="h-2" 
                indicatorClassName={getProgressColor(goal.status)} 
              />
            </div>
          ))}

          <Button asChild variant="outline" className="w-full mt-2">
            <Link to="/goals" className="flex items-center justify-center">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Goal
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalsCard;
