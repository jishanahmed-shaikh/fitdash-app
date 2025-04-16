
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { ChevronRight, Calendar, User, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { userProfile } from "@/lib/mock-data";
import { defaultProfileImage } from "@/components/ui/avatar";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "7 Best Exercises for Building Core Strength",
    excerpt: "Discover the most effective exercises to build a strong core and improve your overall fitness.",
    content: `
      <p>A strong core is the foundation of all movement, providing stability, balance, and power for nearly every physical activity. Whether you're a beginner or a seasoned athlete, these seven exercises will help you build core strength efficiently.</p>
      
      <h3>1. Plank</h3>
      <p>The plank is the gold standard for core stability. Get into a push-up position but rest on your forearms instead of your hands. Keep your body in a straight line from head to heels, and hold for 30-60 seconds. Engage your core by drawing your navel toward your spine.</p>
      
      <h3>2. Dead Bug</h3>
      <p>Lie on your back with arms extended toward the ceiling and knees bent at 90 degrees. Slowly lower your right arm behind your head while extending your left leg, keeping your lower back pressed into the floor. Return to the starting position and repeat on the opposite side.</p>
      
      <h3>3. Bird Dog</h3>
      <p>Start on hands and knees. Simultaneously extend your right arm forward and left leg backward while maintaining a neutral spine. Hold briefly, then return to the starting position and repeat with the left arm and right leg.</p>
      
      <h3>4. Russian Twists</h3>
      <p>Sit on the floor with knees bent and feet lifted slightly. Lean back at a 45-degree angle and rotate your torso from side to side, touching the floor beside your hips. For added difficulty, hold a weight or medicine ball.</p>
      
      <h3>5. Hollow Hold</h3>
      <p>Lie on your back with arms extended overhead and legs straight. Lift your shoulders and legs off the floor simultaneously, creating a "hollow" position with your lower back pressed into the floor. Hold for 20-30 seconds.</p>
      
      <h3>6. Mountain Climbers</h3>
      <p>Start in a high plank position. Keeping your core engaged, quickly drive one knee toward your chest, then switch legs in a running motion. Maintain a tight core and level hips throughout the movement.</p>
      
      <h3>7. Side Plank</h3>
      <p>Lie on your side with legs straight and prop yourself up on your forearm. Lift your hips so your body forms a straight line from head to feet. Hold for 30 seconds, then switch sides.</p>
      
      <p>For best results, incorporate these exercises into your routine 2-3 times per week. Start with 2-3 sets of each exercise, gradually increasing duration and repetitions as you build strength.</p>
    `,
    category: "Workouts",
    author: "Sarah Chen",
    date: "April 3, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tags: ["core", "fitness", "exercises"]
  },
  {
    id: 2,
    title: "Nutrition Basics: What to Eat Before and After Workouts",
    excerpt: "Learn about the best foods to eat before and after your workouts to maximize results and recovery.",
    content: `
      <p>Proper nutrition before and after exercise plays a crucial role in performance, recovery, and results. This guide will help you understand what to eat around your workouts for optimal benefits.</p>
      
      <h3>Pre-Workout Nutrition: Fueling for Performance</h3>
      <p>The ideal pre-workout meal should be consumed 1-3 hours before exercise and include:</p>
      <ul>
        <li><strong>Complex Carbohydrates:</strong> Provide sustained energy during your workout. Good options include oatmeal, whole grain toast, sweet potatoes, or brown rice.</li>
        <li><strong>Moderate Protein:</strong> Helps prevent muscle breakdown during exercise. Try Greek yogurt, a small portion of chicken, or a protein shake with about 15-25g protein.</li>
        <li><strong>Limited Fat:</strong> Too much fat can slow digestion and feel heavy during exercise. Include small amounts of healthy fats like a quarter of an avocado or a tablespoon of nut butter.</li>
        <li><strong>Hydration:</strong> Drink 16-20oz of water in the hours before your workout.</li>
      </ul>
      
      <p>For short-notice workouts (30-60 minutes before), opt for easily digestible carbs like a banana, a small granola bar, or a slice of toast with honey.</p>
      
      <h3>Post-Workout Nutrition: Optimizing Recovery</h3>
      <p>The post-workout "window of opportunity" refers to the 30-60 minutes after exercise when your body is primed to absorb nutrients. Your post-workout meal should include:</p>
      <ul>
        <li><strong>Protein:</strong> Essential for muscle repair and growth. Aim for 20-40g of high-quality protein like chicken, fish, eggs, dairy, or a protein shake.</li>
        <li><strong>Fast-Acting Carbs:</strong> Replenish glycogen stores depleted during exercise. White rice, potatoes, fruit, or sports drinks can quickly restore energy levels.</li>
        <li><strong>Fluids and Electrolytes:</strong> Replace what was lost through sweat. Water with a pinch of salt or a sports drink can help restore electrolyte balance.</li>
        <li><strong>Anti-inflammatory Foods:</strong> Berries, tart cherries, or turmeric can help reduce exercise-induced inflammation and soreness.</li>
      </ul>
      
      <h3>Sample Pre and Post Workout Meals</h3>
      <p><strong>Pre-Workout Meal Ideas:</strong></p>
      <ul>
        <li>Oatmeal with banana and a tablespoon of almond butter</li>
        <li>Turkey and avocado sandwich on whole grain bread</li>
        <li>Greek yogurt with berries and granola</li>
        <li>Smoothie with banana, spinach, protein powder, and almond milk</li>
      </ul>
      
      <p><strong>Post-Workout Meal Ideas:</strong></p>
      <ul>
        <li>Grilled chicken with white rice and roasted vegetables</li>
        <li>Salmon with sweet potato and steamed broccoli</li>
        <li>Protein shake with banana and a handful of berries</li>
        <li>Egg white omelet with vegetables and a side of fruit</li>
      </ul>
      
      <p>Remember that individual needs vary based on workout intensity, duration, and personal goals. Experiment with different options to find what works best for your body and performance.</p>
    `,
    category: "Nutrition",
    author: "Michael Rodriguez",
    date: "April 1, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tags: ["nutrition", "food", "recovery"]
  },
  {
    id: 3,
    title: "How to Stay Motivated in Your Fitness Journey",
    excerpt: "Struggling to stay motivated? Discover practical tips to keep your fitness journey on track.",
    content: `
      <p>Maintaining motivation throughout your fitness journey can be challenging, especially when progress seems slow or life gets busy. Here are proven strategies to help you stay consistent and focused on your goals.</p>
      
      <h3>Set SMART Goals</h3>
      <p>Goals should be Specific, Measurable, Achievable, Relevant, and Time-bound. Instead of saying "I want to get fit," try "I will walk 30 minutes five days a week for the next month" or "I will increase my squat weight by 15 pounds within 8 weeks."</p>
      
      <h3>Find Your 'Why'</h3>
      <p>Dig deep to understand your true motivation. Is it to have more energy for your kids? To reduce health risks? To feel more confident? When your motivation aligns with your core values, you're more likely to stick with your routine even when it gets tough.</p>
      
      <h3>Track Your Progress</h3>
      <p>Keep a fitness journal or use an app to track workouts, measurements, and how you feel. Being able to look back and see improvement—even when it's slight—can provide tremendous motivation. Consider taking progress photos monthly as visual evidence of your changes.</p>
      
      <h3>Mix Up Your Routine</h3>
      <p>Boredom is a motivation killer. Try different workouts, exercise in new locations, join classes, or change your playlist regularly. Cross-training not only prevents mental burnout but also helps avoid physical plateaus and reduces injury risk.</p>
      
      <h3>Build a Support System</h3>
      <p>Surround yourself with supportive people who encourage your efforts. This might mean finding a workout buddy, joining a fitness community (online or in-person), or hiring a coach. Social accountability significantly increases the likelihood of sticking to your plan.</p>
      
      <h3>Celebrate Small Wins</h3>
      <p>Don't wait until you've reached your ultimate goal to celebrate. Acknowledge milestones along the way, such as completing a week of workouts, trying a new healthy recipe, or increasing your weights. Rewards can be non-food related treats like new workout gear or a massage.</p>
      
      <h3>Prepare for Setbacks</h3>
      <p>Expecting perfect adherence sets you up for failure. Instead, accept that there will be days when you miss workouts or indulge in less healthy foods. Have a plan for getting back on track immediately without self-criticism. Remember: consistency, not perfection, drives results.</p>
      
      <h3>Make It Convenient</h3>
      <p>Remove barriers to exercise by preparing gym clothes the night before, keeping equipment accessible, or choosing a gym near your home or workplace. The easier you make it to follow through, the more likely you will.</p>
      
      <p>Remember that motivation naturally ebbs and flows. On days when motivation is low, rely on discipline and habits to carry you through. Every time you push through resistance, you strengthen your fitness identity and build momentum toward lasting change.</p>
    `,
    category: "Motivation",
    author: "Alex Johnson",
    date: "March 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tags: ["motivation", "tips", "fitness"]
  },
  {
    id: 4,
    title: "The Science Behind HIIT Workouts",
    excerpt: "Explore the science behind High-Intensity Interval Training and why it's so effective for fat loss.",
    content: `
      <p>High-Intensity Interval Training (HIIT) has revolutionized the fitness world with its time-efficient approach and impressive results. But what's happening in your body during these challenging workouts? Let's break down the science that makes HIIT so effective.</p>
      
      <h3>What is HIIT?</h3>
      <p>HIIT alternates short periods of intense anaerobic exercise (typically 20-90 seconds) with brief recovery periods until you're too exhausted to continue. A complete HIIT workout might last only 15-30 minutes yet deliver equal or superior benefits to longer moderate-intensity workouts.</p>
      
      <h3>The VO2 Max Factor</h3>
      <p>HIIT significantly increases your VO2 max—the maximum amount of oxygen your body can utilize during exercise. A higher VO2 max improves cardiovascular health and exercise performance. Research shows that HIIT can increase VO2 max more effectively than moderate steady-state cardio, with improvements of up to 15% in just 8-12 weeks.</p>
      
      <h3>The EPOC Effect</h3>
      <p>One of HIIT's most significant benefits is Excess Post-exercise Oxygen Consumption (EPOC), commonly called the "afterburn effect." After high-intensity exercise, your body continues burning calories at an elevated rate for up to 24-48 hours while recovering and restoring oxygen levels. This prolonged calorie burn doesn't occur to the same extent after steady-state exercise.</p>
      
      <h3>Hormonal Response</h3>
      <p>HIIT triggers a powerful hormonal response that supports fat burning and muscle preservation:</p>
      <ul>
        <li><strong>Human Growth Hormone (HGH):</strong> HIIT can increase HGH production by up to 450%, supporting fat metabolism and muscle growth.</li>
        <li><strong>Catecholamines:</strong> These fight-or-flight hormones (adrenaline and noradrenaline) mobilize fat stores, particularly from the abdominal region.</li>
        <li><strong>Insulin Sensitivity:</strong> HIIT improves how efficiently your body processes carbohydrates, reducing fat storage and diabetes risk.</li>
      </ul>
      
      <h3>Mitochondrial Adaptations</h3>
      <p>HIIT increases both the number and efficiency of mitochondria—your cells' powerhouses. More mitochondria mean better energy production and greater fat-burning capacity, even at rest. This adaptation explains why HIIT can improve endurance despite its short duration.</p>
      
      <h3>Muscle Fiber Recruitment</h3>
      <p>Unlike steady-state cardio that primarily engages slow-twitch (Type I) muscle fibers, HIIT activates both slow and fast-twitch (Type II) fibers. Fast-twitch fibers have greater growth potential and require more energy to repair, contributing to HIIT's calorie-burning effects.</p>
      
      <h3>HIIT Programming Recommendations</h3>
      <p>To maximize HIIT benefits without overtraining:</p>
      <ul>
        <li>Perform 2-3 HIIT sessions weekly with at least 48 hours between sessions</li>
        <li>Keep workouts between 15-30 minutes (including warm-up and cool-down)</li>
        <li>Use work intervals of 20-90 seconds with 1:1 or 1:2 work-to-rest ratios</li>
        <li>Ensure intensity is genuinely high during work intervals (85-95% of max heart rate)</li>
        <li>Incorporate both cardiovascular (sprinting, cycling) and resistance-based HIIT</li>
      </ul>
      
      <p>While HIIT offers remarkable benefits, it's physiologically demanding and should be balanced with lower-intensity training and adequate recovery for optimal results and injury prevention. As with any exercise program, gradually increase intensity and consult a healthcare provider before beginning.</p>
    `,
    category: "Science",
    author: "Dr. Emily White",
    date: "March 25, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tags: ["hiit", "science", "fat loss"]
  },
  {
    id: 5,
    title: "5 Common Fitness Myths Debunked",
    excerpt: "Separate fact from fiction with this breakdown of common fitness myths that might be holding you back.",
    content: `
      <p>The fitness world is full of misconceptions that can mislead even the most dedicated enthusiasts. Let's examine five persistent myths and replace them with evidence-based facts to optimize your approach to fitness.</p>
      
      <h3>Myth #1: "No Pain, No Gain"</h3>
      <p><strong>The Myth:</strong> Exercise must be painful to be effective, and soreness indicates a good workout.</p>
      <p><strong>The Truth:</strong> While some discomfort during challenging exercise is normal, pain is your body's warning signal and should never be ignored. Muscle soreness (DOMS - Delayed Onset Muscle Soreness) isn't necessarily indicative of workout quality or effectiveness. Many highly effective workouts produce minimal soreness, particularly as your body adapts.</p>
      <p><strong>Better Approach:</strong> Focus on progressive overload (gradually increasing intensity) rather than pain. Judge workouts by performance improvements, not soreness level. If you experience sharp, sudden, or persistent pain during exercise, stop immediately.</p>
      
      <h3>Myth #2: "Cardio Kills Gains"</h3>
      <p><strong>The Myth:</strong> Cardiovascular exercise prevents or reduces muscle growth.</p>
      <p><strong>The Truth:</strong> Moderate cardio doesn't significantly impair muscle growth and offers numerous health benefits that support your fitness journey. Studies show that strategic cardio can improve recovery, increase work capacity, enhance nutrient delivery to muscles, and improve sleep quality—all of which support muscle development.</p>
      <p><strong>Better Approach:</strong> Incorporate both strength training and cardio in your routine, keeping these guidelines in mind:</p>
      <ul>
        <li>Separate cardio and strength sessions by at least 6 hours when possible</li>
        <li>Prioritize low-impact cardio (cycling, swimming, elliptical) if recovery is a concern</li>
        <li>Adjust calorie intake to account for additional cardio expenditure</li>
        <li>Consider heart health and longevity as important fitness goals alongside aesthetics</li>
      </ul>
      
      <h3>Myth #3: "Lifting Weights Makes Women Bulky"</h3>
      <p><strong>The Myth:</strong> Women who lift weights, especially heavy ones, will develop large, masculine muscles.</p>
      <p><strong>The Truth:</strong> Women typically have about one-tenth the testosterone of men, making substantial muscle gain biologically difficult. Female bodybuilders who develop significant muscle mass typically train with extreme volume and intensity for years, often with nutritional strategies specifically designed for muscle gain, and sometimes with performance-enhancing substances.</p>
      <p><strong>Better Approach:</strong> Embrace strength training for its numerous benefits, including:</p>
      <ul>
        <li>Increased bone density and reduced osteoporosis risk</li>
        <li>Improved metabolic rate and body composition</li>
        <li>Enhanced functional strength for daily activities</li>
        <li>Reduced risk of injury and improved posture</li>
        <li>The lean, toned appearance most women desire</li>
      </ul>
      
      <h3>Myth #4: "You Can Spot Reduce Fat"</h3>
      <p><strong>The Myth:</strong> Targeting specific exercises to particular body parts will burn fat in those areas.</p>
      <p><strong>The Truth:</strong> Fat loss occurs systemically throughout the body, not in specific areas where muscles are being worked. When you lose fat, your body decides where it comes from based largely on genetics, hormones, age, and gender. Thousands of sit-ups won't specifically reduce belly fat, just as tricep exercises won't specifically reduce arm fat.</p>
      <p><strong>Better Approach:</strong> Focus on:</p>
      <ul>
        <li>Creating a modest caloric deficit through diet and exercise for overall fat loss</li>
        <li>Performing compound strength exercises that burn more calories and build muscle</li>
        <li>Incorporating high-intensity interval training for efficient fat burning</li>
        <li>Being patient with areas that hold stubborn fat, as they often respond last</li>
        <li>Celebrating non-scale victories like improved strength, energy, and health markers</li>
      </ul>
      
      <h3>Myth #5: "More Exercise is Always Better"</h3>
      <p><strong>The Myth:</strong> Maximum results require maximum training volume and frequency.</p>
      <p><strong>The Truth:</strong> Exercise creates the stimulus for adaptation, but the adaptation itself (getting stronger, fitter, leaner) occurs during recovery. Without adequate recovery, overtraining can lead to diminished results, hormonal imbalances, increased injury risk, and mental burnout.</p>
      <p><strong>Better Approach:</strong> Optimize both training and recovery:</p>
      <ul>
        <li>Follow structured programs with planned progression and deload periods</li>
        <li>Ensure 7-9 hours of quality sleep nightly</li>
        <li>Schedule at least 1-2 rest days weekly</li>
        <li>Consider recovery techniques like proper nutrition, hydration, and stress management</li>
        <li>Monitor signs of overtraining: persistent fatigue, reduced performance, mood changes, and disrupted sleep</li>
      </ul>
      
      <p>By replacing these common myths with evidence-based approaches, you'll train smarter, reduce injury risk, and achieve better long-term results from your fitness efforts.</p>
    `,
    category: "Education",
    author: "Dr. James Lee",
    date: "March 22, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tags: ["myths", "facts", "fitness"]
  },
  {
    id: 6,
    title: "Beginner's Guide to Strength Training",
    excerpt: "New to strength training? This comprehensive guide will help you get started on the right foot.",
    content: `
      <p>Strength training is one of the most valuable forms of exercise for overall health, but getting started can feel intimidating. This beginner's guide will give you the knowledge and confidence to begin your strength training journey safely and effectively.</p>
      
      <h3>Benefits of Strength Training</h3>
      <p>Before diving into the how-to, let's look at why strength training is worth your time:</p>
      <ul>
        <li>Increased muscle mass and strength for daily activities</li>
        <li>Improved metabolic rate, aiding in fat loss and weight management</li>
        <li>Enhanced bone density, reducing osteoporosis risk</li>
        <li>Better blood sugar control and insulin sensitivity</li>
        <li>Reduced risk of injury through stronger muscles, tendons, and ligaments</li>
        <li>Improved posture, balance, and coordination</li>
        <li>Potential reduction in symptoms of anxiety and depression</li>
      </ul>
      
      <h3>Essential Equipment</h3>
      <p>You don't need a fully equipped gym to start strength training. Begin with:</p>
      <ul>
        <li><strong>For Home Training:</strong> A few dumbbells of different weights or adjustable dumbbells, resistance bands, and a stable chair or bench</li>
        <li><strong>For Gym Training:</strong> Most gyms provide everything you need, but bring a water bottle, towel, and appropriate footwear</li>
        <li><strong>For Both:</strong> Comfortable, non-restrictive clothing and a way to track your workouts (notebook or app)</li>
      </ul>
      
      <h3>Fundamental Movements</h3>
      <p>Focus on these six foundational movement patterns that train all major muscle groups:</p>
      <ol>
        <li><strong>Squat</strong> - Works quadriceps, hamstrings, glutes (bodyweight squat, goblet squat)</li>
        <li><strong>Hinge</strong> - Targets posterior chain (deadlift, Romanian deadlift)</li>
        <li><strong>Push</strong> - Engages chest, shoulders, triceps (push-up, dumbbell press)</li>
        <li><strong>Pull</strong> - Works back, biceps (dumbbell row, assisted pull-up)</li>
        <li><strong>Carry</strong> - Full-body stabilization (farmer's carry, suitcase carry)</li>
        <li><strong>Core</strong> - Abdominals and lower back (plank, bird-dog)</li>
      </ol>
      <p>Master these movements with proper form before adding significant weight.</p>
      
      <h3>Starting Routine</h3>
      <p>Begin with this simple full-body routine 2-3 times per week, allowing at least one day of rest between sessions:</p>
      <ol>
        <li>Goblet Squat - 3 sets of 10-12 reps</li>
        <li>Push-ups (or modified push-ups) - 3 sets of 8-10 reps</li>
        <li>Dumbbell Row - 3 sets of 10-12 reps per side</li>
        <li>Glute Bridge - 3 sets of 12-15 reps</li>
        <li>Plank - 3 sets, hold for 20-30 seconds</li>
        <li>Dumbbell Overhead Press - 3 sets of 10-12 reps</li>
      </ol>
      <p>Start with light weights to learn proper form, and gradually increase as you become comfortable with the movements.</p>
      
      <h3>Progressive Overload</h3>
      <p>The key principle for continuing improvement is progressive overload—gradually increasing the demands on your muscles. You can achieve this by:</p>
      <ul>
        <li>Adding weight (the most common method)</li>
        <li>Increasing repetitions</li>
        <li>Adding sets</li>
        <li>Decreasing rest periods</li>
        <li>Improving technique or range of motion</li>
        <li>Increasing workout frequency</li>
      </ul>
      <p>Aim to challenge yourself each workout while maintaining proper form.</p>
      
      <h3>Proper Form and Safety</h3>
      <p>To reduce injury risk and maximize effectiveness:</p>
      <ul>
        <li>Start each workout with a 5-10 minute dynamic warm-up</li>
        <li>Learn proper technique through qualified instructors or reputable resources</li>
        <li>Begin with lighter weights than you think you need</li>
        <li>Never sacrifice form for heavier weights</li>
        <li>Breathe consistently—typically exhale during exertion</li>
        <li>Listen to your body and distinguish between productive discomfort and pain</li>
      </ul>
      
      <h3>Recovery and Nutrition</h3>
      <p>Your progress happens during recovery, not during the workout itself. Support your training with:</p>
      <ul>
        <li>Adequate protein intake (aim for 0.7-1g per pound of bodyweight)</li>
        <li>Sufficient overall calories to support your goals</li>
        <li>Proper hydration before, during, and after workouts</li>
        <li>7-9 hours of quality sleep</li>
        <li>At least one full rest day per week</li>
      </ul>
      
      <h3>When to Progress</h3>
      <p>After 4-6 weeks of consistent training with the beginner routine, consider:</p>
      <ul>
        <li>Adding more exercises for specific muscle groups</li>
        <li>Splitting your routine into upper/lower body days</li>
        <li>Incorporating more challenging variations of the basic movements</li>
        <li>Working with a qualified personal trainer to design a more personalized program</li>
      </ul>
      
      <p>Remember that consistency trumps perfection. A sustainable routine that you can maintain for months and years will yield far better results than an "optimal" program that you abandon after a few weeks. Start small, focus on form, celebrate your progress, and enjoy the journey to becoming stronger.</p>
    `,
    category: "Workouts",
    author: "Mark Wilson",
    date: "March 18, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tags: ["strength", "beginners", "training"]
  }
];

// Get user added blogs from local storage
const getUserBlogs = () => {
  try {
    const userBlogs = JSON.parse(localStorage.getItem('userBlogs') || '[]');
    return userBlogs;
  } catch (error) {
    console.error("Error getting user blogs:", error);
    return [];
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    // Combine system and user blogs
    const allPosts = [...blogPosts, ...getUserBlogs()];
    
    // Find the current post
    const currentPost = allPosts.find(post => post.id.toString() === id);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts (same category or shared tags)
      const related = allPosts
        .filter(p => p.id.toString() !== id)
        .filter(p => 
          p.category === currentPost.category || 
          p.tags.some((tag: string) => currentPost.tags.includes(tag))
        )
        .slice(0, 3);
      
      setRelatedPosts(related);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DashboardSidebar />
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            <div className="max-w-3xl mx-auto mt-12 space-y-4">
              <div className="h-8 w-2/3 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
              <div className="h-64 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md mt-6"></div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    );
  }

  if (!post) {
    return (
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DashboardSidebar />
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
              <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <Link to="/blog">
                  Return to Blog
                </Link>
              </Button>
            </div>
          </main>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Breadcrumb Navigation */}
            <div className="text-sm text-muted-foreground">
              <Link to="/blog" className="hover:text-foreground">Blog</Link>
              <span className="mx-2">/</span>
              <span>{post.category}</span>
            </div>
            
            {/* Post Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Post Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t">
              {post.tags.map((tag: string, index: number) => (
                <div 
                  key={index}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                >
                  <div className="flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="pt-8 border-t">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="hover-scale">
                      <Link to={`/blog/${relatedPost.id}`}>
                        <div className="h-40 overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <CardContent className="pt-4">
                          <div className="flex items-center mb-2">
                            <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-fitdash-purple/10 text-fitdash-purple">
                              {relatedPost.category}
                            </span>
                          </div>
                          <h3 className="font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{relatedPost.date}</span>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button asChild variant="outline">
                    <Link to="/blog" className="flex items-center">
                      View All Articles
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default BlogPost;
