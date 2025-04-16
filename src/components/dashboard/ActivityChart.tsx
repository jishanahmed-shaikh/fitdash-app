
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";

// Create mock data directly in the component until we fix the data source
const activityData = {
  steps: [6500, 7200, 9800, 8500, 5400, 9200, 8500],
  calories: [320, 380, 450, 420, 300, 350, 420],
  dates: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
};

const ActivityChart = () => {
  // Transform data for recharts
  const chartData = activityData.dates.map((date, index) => ({
    date,
    steps: activityData.steps[index],
    calories: activityData.calories[index]
  }));

  return (
    <Card className="col-span-full h-[300px] animate-fade-in">
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent className="h-[210px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" orientation="left" stroke="#9b87f5" />
            <YAxis yAxisId="right" orientation="right" stroke="#ea384c" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="steps"
              name="Steps"
              stroke="#9b87f5"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="calories"
              name="Calories"
              stroke="#ea384c"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
