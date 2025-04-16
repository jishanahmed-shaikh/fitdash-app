
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";

// Create mock data directly in the component
const stepData = {
  today: 7850,
  average: 6500,
  target: 10000,
  weekly: [6500, 7200, 9800, 8500, 5400, 9200, 8500]
};

interface StepsCardProps {
  steps?: number;
  timeRange?: "daily" | "weekly" | "monthly";
}

const StepsCard = ({ steps, timeRange = "daily" }: StepsCardProps) => {
  // Use provided steps or fallback to mock data
  const todaySteps = steps || stepData.today;
  
  // Determine target based on timeRange
  const dailyTarget = stepData.target || 10000;
  const target = timeRange === "daily" 
    ? dailyTarget 
    : timeRange === "weekly"
    ? dailyTarget * 7
    : dailyTarget * 30;
  
  const stepProgress = (todaySteps / target) * 100;
  
  // Check if weekly data exists before accessing it
  const yesterdaySteps = stepData.weekly && stepData.weekly.length > 0 ? 
    stepData.weekly[stepData.weekly.length - 1] : todaySteps * 0.9;  // Fallback to 90% of today's steps
  
  // Calculate difference and percentage change safely
  const stepDifference = todaySteps - yesterdaySteps;
  const percentChange = yesterdaySteps > 0 ? (stepDifference / yesterdaySteps) * 100 : 0;

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
            className="h-4 w-4 text-fitdash-green mr-2"
          >
            <path d="M19 5.5V2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3.5" />
            <path d="M12 17.5V14a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3.5" />
            <path d="M5 21h14" />
            <path d="M6 13.7V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4.7" />
            <path d="M17 13.7V9a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v4.7" />
          </svg>
          Steps
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-2xl font-bold">{todaySteps.toLocaleString()}</span>
              <span className="text-sm ml-1">steps</span>
            </div>
            <div className="flex items-center">
              {stepDifference >= 0 ? (
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-fitdash-red mr-1" />
              )}
              <span className={`text-xs font-medium ${stepDifference >= 0 ? 'text-green-500' : 'text-fitdash-red'}`}>
                {Math.abs(percentChange).toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="h-2 w-full bg-fitdash-green-light dark:bg-green-950 rounded-full overflow-hidden">
            <div 
              className="h-full bg-fitdash-green rounded-full"
              style={{ width: `${Math.min(stepProgress, 100)}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{Math.round(stepProgress)}% of {timeRange} goal</span>
            <span>Goal: {target.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StepsCard;
