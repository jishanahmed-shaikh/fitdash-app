
import React, { useState, useEffect } from "react";
import { Quote, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Mock quotes data and utility function
const motivationalQuotes = [
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

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
};

const QuoteCard = () => {
  const [quote, setQuote] = useState(getRandomQuote());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  // Change quote every day
  useEffect(() => {
    const storedDate = localStorage.getItem("quoteDate");
    const today = new Date().toDateString();

    if (storedDate !== today) {
      const newQuote = getRandomQuote();
      setQuote(newQuote);
      localStorage.setItem("quoteDate", today);
    }
  }, []);

  const handleRefreshQuote = () => {
    setIsRefreshing(true);
    
    // Simulate loading
    setTimeout(() => {
      const newQuote = getRandomQuote();
      setQuote(newQuote);
      setIsRefreshing(false);
      toast({
        title: "Quote Refreshed",
        description: "Your daily motivation has been updated.",
        variant: "default",
      });
    }, 600);
  };

  return (
    <Card className="col-span-full dashboard-card hover-scale">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div className="bg-fitdash-purple-light dark:bg-fitdash-purple/20 p-2 rounded-full">
              <Quote className="h-5 w-5 text-fitdash-purple" />
            </div>
            <p className="text-sm md:text-base font-medium italic">{quote}</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-fitdash-purple transition-colors"
            onClick={handleRefreshQuote}
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="sr-only">Refresh Quote</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
