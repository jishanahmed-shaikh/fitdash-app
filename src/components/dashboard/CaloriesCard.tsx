
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";

// Create mock data directly in the component
const calorieData = {
  today: 420,
  target: 500,
  average: 377
};

interface CaloriesCardProps {
  calories?: number;
  timeRange?: "daily" | "weekly" | "monthly";
}

const CaloriesCard = ({ calories, timeRange = "daily" }: CaloriesCardProps) => {
  // Use provided calories or fallback to mock data
  const todayCalories = calories || calorieData.today;
  
  // Determine target based on timeRange
  const dailyTarget = 2800; // Default target as calorieData.goal might not exist
  const target = timeRange === "daily" 
    ? dailyTarget 
    : timeRange === "weekly"
    ? dailyTarget * 7
    : dailyTarget * 30;
  
  const calorieProgress = (todayCalories / target) * 100;
  
  // Calculate difference from yesterday's calories
  const yesterdayCalories = calorieData.average || (todayCalories * 0.9);  // Fallback to 90% of today
  const calorieDifference = todayCalories - yesterdayCalories;
  const percentChange = yesterdayCalories > 0 ? (calorieDifference / yesterdayCalories) * 100 : 0;

  return (
    <Card className="dashboard-card hover-scale">
      <CardHeader className="pb-2 pt-4">
        <CardTitle className="text-base font-medium flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="h-4 w-4 text-fitdash-red mr-2"
          >
            <path d="M8 2h8l4 4-4 4H8l-4-4 4-4Z" />
            <path d="M8 14h8l4 4-4 4H8l-4-4 4-4Z" />
          </svg>
          Calories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-2xl font-bold">{todayCalories.toLocaleString()}</span>
              <span className="text-sm ml-1">kcal</span>
            </div>
            <div className="flex items-center">
              {calorieDifference >= 0 ? (
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-fitdash-red mr-1" />
              )}
              <span className={`text-xs font-medium ${calorieDifference >= 0 ? 'text-green-500' : 'text-fitdash-red'}`}>
                {Math.abs(percentChange).toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="h-2 w-full bg-fitdash-red-light dark:bg-red-950 rounded-full overflow-hidden">
            <div 
              className="h-full bg-fitdash-red rounded-full"
              style={{ width: `${Math.min(calorieProgress, 100)}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{Math.round(calorieProgress)}% of {timeRange} goal</span>
            <span>Goal: {target.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaloriesCard;
