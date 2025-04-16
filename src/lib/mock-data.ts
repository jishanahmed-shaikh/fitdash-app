
// Mock user profile data
export const userProfile = {
  name: "Jishanahmed AR Shaikh",
  username: "jishanahmed.shaikh",
  age: 21,
  weight: 71, // in kg
  height: 175, // in cm
  fitnessLevel: "Athlete",
  profileImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  socialLinks: {
    instagram: "https://www.instagram.com/jishanahmed_shaikh",
    twitter: "https://www.x.com/jishanarshaikh",
    facebook: "https://www.facebook.com/jishanahmedarshaikh/",
    linkedin: "https://www.linkedin.com/in/jishanahmedshaikh",
    linktree: "https://linktr.ee/jishanahmedshaikh"
  },
  email: "shaikhjishan255@gmail.com",
  location: "Mumbai, India",
  achievements: [
    { id: 1, title: "Early Bird", description: "Complete 5 workouts before 9 AM", completed: true, icon: "sunrise" },
    { id: 2, title: "Step Master", description: "Reach 10,000 steps for 7 consecutive days", completed: true, icon: "footprints" },
    { id: 3, title: "Consistency King", description: "Log in for 30 consecutive days", completed: false, progress: 22, icon: "calendar" },
    { id: 4, title: "Goal Crusher", description: "Complete 10 fitness goals", completed: false, progress: 7, icon: "target" },
    { id: 5, title: "Cardio Champion", description: "Burn 5000 calories in one week", completed: false, progress: 3200, icon: "heart" }
  ],
  statistics: {
    workoutsCompleted: 27,
    totalCaloriesBurned: 15420,
    totalStepsTaken: 283450,
    averageWorkoutTime: 42, // minutes
    streakDays: 8,
    joinedDate: "2025-04-01",
    totalWorkouts: 120,
    averageCaloriesBurned: 550
  }
};

// Mock step data
export const stepData = {
  today: 8500,
  target: 10000,
  weekly: [6500, 7200, 9800, 8500, 5400, 9200, 8500],
  weeklyDates: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  monthly: [
    6800, 7500, 8200, 9000, 7800, 6500, 5400,
    8900, 9200, 9800, 10200, 9500, 8700, 7600,
    8300, 8500, 9100, 9600, 8800, 7900, 6700,
    7400, 8100, 8600, 9300, 9500, 8900, 8200,
    7800, 8300
  ],
  monthlyDates: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
  average: 6500
};

// Mock calorie data
export const calorieData = {
  today: 420,
  target: 500,
  weekly: [320, 380, 450, 420, 300, 350, 420],
  average: 377,
  weeklyDates: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  monthly: [
    340, 380, 410, 450, 420, 350, 300,
    420, 470, 500, 510, 480, 430, 380,
    400, 420, 460, 490, 450, 400, 350,
    370, 410, 440, 470, 480, 450, 410,
    390, 420
  ],
  monthlyDates: Array.from({ length: 30 }, (_, i) => `${i + 1}`)
};

// Mock activity data
export const activityData = {
  steps: [6500, 7200, 9800, 8500, 5400, 9200, 8500],
  calories: [320, 380, 450, 420, 300, 350, 420],
  dates: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  detailed: [
    { date: "Mon", steps: 6500, calories: 320, activeMinutes: 42, distance: 4.8 },
    { date: "Tue", steps: 7200, calories: 380, activeMinutes: 55, distance: 5.4 },
    { date: "Wed", steps: 9800, calories: 450, activeMinutes: 68, distance: 7.3 },
    { date: "Thu", steps: 8500, calories: 420, activeMinutes: 62, distance: 6.4 },
    { date: "Fri", steps: 5400, calories: 300, activeMinutes: 38, distance: 4.1 },
    { date: "Sat", steps: 9200, calories: 350, activeMinutes: 51, distance: 6.9 },
    { date: "Sun", steps: 8500, calories: 420, activeMinutes: 60, distance: 6.4 }
  ]
};

// Mock fitness goals data
export const fitnessGoals = [
  {
    id: 1,
    title: "Walk 10,000 steps daily",
    progress: 85,
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    status: "In Progress",
    icon: "activity",
    description: "Walk at least 10,000 steps every day to improve cardiovascular health and maintain fitness.",
    milestones: [
      { value: 25, label: "Week 1" },
      { value: 50, label: "Week 2" },
      { value: 75, label: "Week 3" },
      { value: 100, label: "Complete" }
    ]
  },
  {
    id: 2,
    title: "Burn 500 calories daily",
    progress: 100,
    startDate: "2025-04-01",
    endDate: "2025-04-07",
    status: "Completed",
    icon: "heart",
    description: "Burn at least 500 calories through exercise every day for a week.",
    milestones: [
      { value: 25, label: "2 days" },
      { value: 50, label: "4 days" },
      { value: 75, label: "6 days" },
      { value: 100, label: "Complete" }
    ]
  },
  {
    id: 3,
    title: "Drink 8 glasses of water",
    progress: 62,
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    status: "In Progress",
    icon: "activity",
    description: "Drink at least 8 glasses of water daily to stay hydrated and support overall health.",
    milestones: [
      { value: 25, label: "Week 1" },
      { value: 50, label: "Week 2" },
      { value: 75, label: "Week 3" },
      { value: 100, label: "Complete" }
    ]
  },
  {
    id: 4,
    title: "Sleep 8 hours daily",
    progress: 40,
    startDate: "2025-03-25",
    endDate: "2025-04-30",
    status: "Behind",
    icon: "heart",
    description: "Get at least 8 hours of sleep every night to improve recovery and overall health.",
    milestones: [
      { value: 25, label: "Week 1" },
      { value: 50, label: "Week 2" },
      { value: 75, label: "Week 3" },
      { value: 100, label: "Complete" }
    ]
  }
];

// Mock workout data
export const workoutData = {
  recent: [
    {
      id: 1,
      name: "Morning Cardio",
      date: "2025-04-06",
      duration: 32, // minutes
      caloriesBurned: 320,
      type: "Cardio",
      exercises: [
        { name: "Treadmill", duration: 20, distance: 2.5 },
        { name: "Jumping Jacks", sets: 3, reps: 20 },
        { name: "Mountain Climbers", sets: 3, duration: 1 }
      ]
    },
    {
      id: 2,
      name: "Full Body Strength",
      date: "2025-04-04",
      duration: 45, // minutes
      caloriesBurned: 380,
      type: "Strength",
      exercises: [
        { name: "Squats", sets: 3, reps: 12 },
        { name: "Push-ups", sets: 3, reps: 10 },
        { name: "Lunges", sets: 3, reps: 10 },
        { name: "Planks", sets: 3, duration: 1 }
      ]
    }
  ],
  upcoming: [
    {
      id: 4,
      name: "Lower Body Focus",
      scheduled: "2025-04-22T18:00:00",
      duration: 40, // minutes
      type: "Strength",
      difficulty: "Intermediate"
    },
    {
      id: 5,
      name: "Morning Yoga",
      scheduled: "2025-04-23T07:30:00",
      duration: 30, // minutes
      type: "Flexibility",
      difficulty: "Beginner"
    }
  ],
  thisWeek: {
    workouts: 3,
    duration: 120,
    caloriesBurned: 1250
  }
};

// Mock nutrition data
export const nutritionData = {
  today: {
    calories: 2100,
    protein: 120,
    carbs: 250,
    fat: 80,
    water: 2000,
  },
  average: {
    calories: 2300,
    protein: 110,
    carbs: 270,
    fat: 90,
    water: 2200,
  },
};

// Mock sleep data
export const sleepData = {
  lastNight: {
    duration: 7.5,
    quality: "Good",
  },
  average: {
    duration: 7,
    quality: "Okay",
  },
  target: {
    duration: 8,
  },
};

// Mock motivational quotes
export const motivationalQuotes = [
  "The only bad workout is the one that didn't happen.",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "The difference between try and triumph is a little umph.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "Take care of your body. It's the only place you have to live.",
  "You don't have to be extreme, just consistent.",
  "The only way to define your limits is by going beyond them.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Progress takes progress.",
  "No matter how slow you go, you're still lapping everyone on the couch."
];

// Get a random motivational quote function
export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
};

// Calculate BMI
export const calculateBMI = (weight: number, height: number) => {
  const heightInMeters = height / 100;
  return (weight / (heightInMeters * heightInMeters)).toFixed(1);
};

// Get BMI category
export const getBMICategory = (bmi: number) => {
  if (bmi < 18.5) {
    return { category: "Underweight", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" };
  } else if (bmi >= 18.5 && bmi < 25) {
    return { category: "Normal", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" };
  } else if (bmi >= 25 && bmi < 30) {
    return { category: "Overweight", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" };
  } else {
    return { category: "Obese", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" };
  }
};
