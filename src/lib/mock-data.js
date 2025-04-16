
export const stepData = {
  today: 7850,
  average: 6500,
  goal: 10000,
  target: 10000,
  weekly: [6500, 7200, 9800, 8500, 5400, 9200, 8500],
};

export const calorieData = {
  today: 2200,
  average: 2500,
  goal: 2800,
};

export const userProfile = {
  name: "Jishanahmed AR Shaikh",
  username: "jishanahmed.shaikh",
  profileImage: "https://images.unsplash.com/photo-1500648767791-00d0ef9ca8ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  age: 21,
  weight: 71,
  height: 175,
  fitnessLevel: "Athlete",
  statistics: {
    streakDays: 15,
    totalWorkouts: 120,
    averageCaloriesBurned: 550,
  },
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
    {
      id: 1,
      title: "First Workout",
      description: "Completed your first workout!",
      date: "2023-04-01",
      completed: true,
    },
    {
      id: 2,
      title: "5 Workouts",
      description: "Completed 5 workouts!",
      date: "2023-04-07",
      completed: true,
    },
    {
      id: 3,
      title: "10 Workouts",
      description: "Completed 10 workouts!",
      date: "2023-04-15",
      completed: true,
    },
    {
      id: 4,
      title: "25 Workouts",
      description: "Completed 25 workouts!",
      date: "2023-05-01",
      completed: true,
    },
    {
      id: 5,
      title: "50 Workouts",
      description: "Completed 50 workouts!",
      date: "2023-06-01",
      completed: false,
    },
  ],
};

export const workoutData = {
  recent: [
    {
      id: 1,
      name: "Full Body Strength",
      date: "2023-09-15",
      duration: 60,
      caloriesBurned: 620,
      type: "Strength",
      exercises: [
        { name: "Squats", duration: 10, sets: 3, reps: 12 },
        { name: "Push-ups", duration: 10, sets: 3, reps: 10 },
        { name: "Dumbbell Rows", duration: 10, sets: 3, reps: 12 },
      ],
    },
    {
      id: 2,
      name: "Morning Run",
      date: "2023-09-15",
      duration: 30,
      caloriesBurned: 400,
      type: "Cardio",
      exercises: [{ name: "Running", duration: 30, distance: 5 }],
    },
    {
      id: 3,
      name: "Yoga Session",
      date: "2023-09-14",
      duration: 45,
      caloriesBurned: 250,
      type: "Flexibility",
      exercises: [
        { name: "Sun Salutations", duration: 15 },
        { name: "Downward Dog", duration: 10 },
        { name: "Warrior Poses", duration: 20 },
      ],
    },
  ],
  upcoming: [
    {
      id: 4,
      name: "HIIT Workout",
      scheduled: "2025-04-22T17:00:00",
      duration: 45,
      type: "Cardio",
    },
    {
      id: 5,
      name: "Leg Day",
      scheduled: "2025-04-23T10:00:00",
      duration: 60,
      type: "Strength",
    },
  ],
  stats: {
    totalWorkouts: 250,
    totalCaloriesBurned: 150000,
    averageWorkoutDuration: 45,
  },
  thisWeek: {
    workouts: 3,
    duration: 120,
    caloriesBurned: 1250
  }
};

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

export const fitnessGoals = [
  {
    id: 1,
    title: "Run a 5k",
    description: "Train to run a 5k in under 30 minutes.",
    startDate: "2025-04-01",
    endDate: "2025-06-30",
    icon: "target",
    status: "In Progress",
    progress: 60,
    milestones: [
      { value: 25, label: "25%" },
      { value: 50, label: "50%" },
      { value: 75, label: "75%" },
      { value: 100, label: "Complete" },
    ],
  },
  {
    id: 2,
    title: "Lose 10 Pounds",
    description: "Reduce body weight by 10 pounds through diet and exercise.",
    startDate: "2025-04-15",
    endDate: "2025-07-15",
    icon: "activity",
    status: "In Progress",
    progress: 30,
    milestones: [
      { value: 25, label: "25%" },
      { value: 50, label: "50%" },
      { value: 75, label: "75%" },
      { value: 100, label: "Complete" },
    ],
  },
  {
    id: 3,
    title: "Increase Bench Press",
    description: "Increase bench press weight by 20 pounds.",
    startDate: "2025-05-01",
    endDate: "2025-08-01",
    icon: "dumbbell",
    status: "In Progress",
    progress: 80,
    milestones: [
      { value: 25, label: "25%" },
      { value: 50, label: "50%" },
      { value: 75, label: "75%" },
      { value: 100, label: "Complete" },
    ],
  },
];

export const calculateBMI = (weight, height) => {
  if (!weight || !height) return 0;
  const heightInMeters = height / 100;
  return (weight / (heightInMeters * heightInMeters)).toFixed(1);
};

export const getBMICategory = (bmi) => {
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

export const activityData = {
  steps: [6500, 7200, 9800, 8500, 5400, 9200, 8500],
  calories: [320, 380, 450, 420, 300, 350, 420],
  dates: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
};

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

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
};
