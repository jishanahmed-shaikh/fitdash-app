
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart4,
  Calendar,
  User,
  Award,
  Settings,
  Home,
  InfoIcon,
  LogOut,
  BookOpen,
  Newspaper,
  Briefcase,
  Heart,
  GraduationCap,
  LifeBuoy,
  Dumbbell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";
import { userProfile } from "@/lib/mock-data";

const DashboardSidebar = () => {
  const context = useSidebar();
  const location = useLocation();
  const isOpen = context.open; // Use context.open instead of context.isOpen
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const primaryNavItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: BarChart4, label: "Dashboard", path: "/dashboard" },
    { icon: Calendar, label: "Workouts", path: "/workouts" },
    { icon: Heart, label: "Goals", path: "/goals" },
    { icon: Award, label: "Achievements", path: "/achievements" },
    { icon: InfoIcon, label: "About Us", path: "/about" },
    { icon: User, label: "Profile", path: "/profile" },
  ];
  
  const secondaryNavItems = [
    { icon: BookOpen, label: "Blog", path: "/blog" },
    { icon: GraduationCap, label: "Glossary", path: "/glossary" },
    { icon: Newspaper, label: "Press", path: "/press" },
    { icon: Briefcase, label: "Careers", path: "/careers" },
    { icon: LifeBuoy, label: "Contact", path: "/contact" },
  ];
  
  return (
    <div className={`border-r bg-card h-screen transition-width duration-300 flex flex-col ${isOpen ? "w-64" : "w-16"} sticky top-0 z-10`}>
      {/* Brand */}
      <div className={`p-4 border-b flex items-center ${isOpen ? "justify-start" : "justify-center"}`}>
        <div className="flex items-center">
          <div className="bg-fitdash-purple p-1 rounded text-white">
            <Dumbbell className="h-5 w-5" />
          </div>
          {isOpen && (
            <span className="ml-2 font-bold text-lg">FitDash</span>
          )}
        </div>
      </div>
      
      {/* Nav Items */}
      <div className="py-4 flex-1 overflow-y-auto">
        <div className="space-y-1 px-3">
          {primaryNavItems.map((item, index) => (
            <Button
              key={index}
              variant={isActive(item.path) ? "secondary" : "ghost"}
              size={isOpen ? "default" : "icon"}
              className={`w-full justify-${isOpen ? "start" : "center"} mb-1`}
              asChild
            >
              <Link to={item.path}>
                <item.icon className={`h-5 w-5 ${isOpen ? "mr-2" : ""}`} />
                {isOpen && <span>{item.label}</span>}
              </Link>
            </Button>
          ))}
        </div>
        
        <div className="mt-6 mb-6">
          <div className={`px-3 py-2 ${isOpen ? "text-start" : "text-center"}`}>
            <p className="text-xs font-medium text-muted-foreground uppercase">
              {isOpen ? "Resources" : ""}
            </p>
          </div>
          <div className="space-y-1 px-3">
            {secondaryNavItems.map((item, index) => (
              <Button
                key={index}
                variant={isActive(item.path) ? "secondary" : "ghost"}
                size={isOpen ? "default" : "icon"}
                className={`w-full justify-${isOpen ? "start" : "center"} mb-1`}
                asChild
              >
                <Link to={item.path}>
                  <item.icon className={`h-5 w-5 ${isOpen ? "mr-2" : ""}`} />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* User */}
      <div className="p-4 border-t">
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/myimage/jishanahmed.png" alt={userProfile.name} />
            <AvatarFallback>
              {userProfile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {isOpen && (
            <div className="ml-3 flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{userProfile.name}</p>
              <p className="text-xs text-muted-foreground truncate">{userProfile.email}</p>
            </div>
          )}
          {isOpen && (
            <Button variant="ghost" size="icon" className="ml-1 h-8 w-8 rounded-full" asChild>
              <Link to="/settings">
                <Settings className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
