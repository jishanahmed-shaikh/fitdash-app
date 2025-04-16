
import React from "react";
import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { userProfile, calculateBMI, getBMICategory } from "@/lib/mock-data";

const ProfileCard = () => {
  const bmi = parseFloat(calculateBMI(userProfile.weight, userProfile.height));
  const bmiStatus = getBMICategory(bmi);

  return (
    <Card className="h-full animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Profile</CardTitle>
        <User className="h-4 w-4 text-fitdash-purple" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img
              src="/myimage/jishanahmed.png"
              alt={userProfile.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="font-medium">{userProfile.name}</div>
            <div className="text-xs text-muted-foreground">{userProfile.fitnessLevel} level</div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Age</span>
            <span className="text-sm font-medium">{userProfile.age} years</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Weight</span>
            <span className="text-sm font-medium">{userProfile.weight} kg</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Height</span>
            <span className="text-sm font-medium">{userProfile.height} cm</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">BMI</span>
            <span className={`text-sm font-medium ${bmiStatus.color}`}>
              {bmi} ({bmiStatus.category})
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
