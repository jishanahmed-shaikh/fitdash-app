
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock glossary data
const glossaryTerms = [
  {
    term: "AMRAP",
    definition: "As Many Reps (or Rounds) As Possible. A type of workout structure where you perform as many repetitions or rounds as possible within a set time frame.",
    category: "Workout Terms"
  },
  {
    term: "BMI",
    definition: "Body Mass Index. A measure of body fat based on height and weight that applies to adult men and women.",
    category: "Health Metrics"
  },
  {
    term: "DOMS",
    definition: "Delayed Onset Muscle Soreness. The muscular pain and stiffness that occurs hours to days after unaccustomed or strenuous exercise.",
    category: "Recovery"
  },
  {
    term: "EMOM",
    definition: "Every Minute On the Minute. A type of interval training where you perform a specific exercise at the start of every minute for a set number of minutes.",
    category: "Workout Terms"
  },
  {
    term: "HIIT",
    definition: "High-Intensity Interval Training. A training technique in which you give all-out, one hundred percent effort through quick, intense bursts of exercise, followed by short, sometimes active, recovery periods.",
    category: "Workout Terms"
  },
  {
    term: "Macros",
    definition: "Short for macronutrients: protein, carbohydrates, and fats. These are the nutrients that the body needs in large amounts.",
    category: "Nutrition"
  },
  {
    term: "PR",
    definition: "Personal Record. The maximum weight or best performance you've ever achieved for a particular exercise or workout.",
    category: "Workout Terms"
  },
  {
    term: "RPE",
    definition: "Rate of Perceived Exertion. A scale used to measure the intensity of your exercise based on how hard you feel your body is working.",
    category: "Workout Terms"
  },
  {
    term: "TDEE",
    definition: "Total Daily Energy Expenditure. The total number of calories you burn in a day, including exercise and normal bodily functions.",
    category: "Nutrition"
  },
  {
    term: "VO2 Max",
    definition: "The maximum rate of oxygen consumption measured during incremental exercise. It's a measure of aerobic fitness.",
    category: "Health Metrics"
  },
  {
    term: "WOD",
    definition: "Workout Of the Day. A term commonly used in CrossFit to describe the workout prescribed for that day.",
    category: "Workout Terms"
  },
  {
    term: "1RM",
    definition: "One-Rep Max. The maximum amount of weight that can be lifted for a single repetition for a given exercise.",
    category: "Workout Terms"
  },
  {
    term: "EIMD",
    definition: "Exercise-Induced Muscle Damage. Microscopic damage to muscle fibers caused by strenuous exercise, particularly eccentric exercises.",
    category: "Recovery"
  },
  {
    term: "LISS",
    definition: "Low-Intensity Steady State. A type of cardio workout where you maintain the same low-intensity pace throughout the session.",
    category: "Workout Terms"
  },
  {
    term: "BCAA",
    definition: "Branched-Chain Amino Acids. Essential amino acids (leucine, isoleucine, and valine) that play a crucial role in muscle protein synthesis.",
    category: "Nutrition"
  },
  {
    term: "MET",
    definition: "Metabolic Equivalent. A measure of the energy cost of physical activities. One MET is defined as the energy expended while sitting at rest.",
    category: "Health Metrics"
  },
  {
    term: "EPOC",
    definition: "Excess Post-exercise Oxygen Consumption. The increased rate of oxygen intake following strenuous activity.",
    category: "Recovery"
  },
  {
    term: "BMR",
    definition: "Basal Metabolic Rate. The number of calories your body needs to accomplish its most basic life-sustaining functions.",
    category: "Health Metrics"
  }
];

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Get unique categories
  const categories = ["all", ...new Set(glossaryTerms.map(term => term.category))];

  // Filter terms based on search and category
  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || term.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Group terms alphabetically
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  // Sort the keys alphabetically
  const sortedKeys = Object.keys(groupedTerms).sort();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Fitness Glossary</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive guide to fitness terminology and jargon.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 animate-fade-in">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search terms..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Tabs 
                value={activeCategory} 
                onValueChange={setActiveCategory}
                className="w-full md:w-auto"
              >
                <TabsList className="grid grid-cols-2 md:grid-cols-5">
                  {categories.map((category, index) => (
                    <TabsTrigger 
                      key={index} 
                      value={category}
                      className="text-xs md:text-sm"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {sortedKeys.length > 0 ? (
              <div className="space-y-8 animate-fade-in">
                {sortedKeys.map(letter => (
                  <div key={letter}>
                    <h2 className="text-2xl font-bold mb-4 text-fitdash-purple">{letter}</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {groupedTerms[letter].map((term, index) => (
                        <Card key={index} className="hover-scale">
                          <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                              <div className="font-bold text-lg min-w-[100px] mb-2 md:mb-0 md:text-right">
                                {term.term}
                              </div>
                              <div className="flex-1">
                                <p className="text-muted-foreground">{term.definition}</p>
                                <div className="mt-2">
                                  <span className="inline-block text-xs font-medium px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                                    {term.category}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <h3 className="text-xl font-medium mb-2">No terms found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default GlossaryPage;
