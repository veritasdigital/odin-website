import { Search, Wrench, Rocket, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
export const Process = () => {
  const phases = [{
    icon: Search,
    title: "Discovery & Strategic Planning",
    timeframe: "Weeks 1-2",
    tasks: ["Comprehensive business and market analysis", "Competitive landscape assessment", "Target audience research and persona development", "Strategic roadmap and campaign planning"]
  }, {
    icon: Wrench,
    title: "Campaign Development & Setup",
    timeframe: "Weeks 3-4",
    tasks: ["Creative asset development and optimization", "Landing page creation and conversion optimization", "Analytics and tracking system implementation", "Campaign launch preparation and testing"]
  }, {
    icon: Rocket,
    title: "Launch & Initial Optimization",
    timeframe: "Weeks 5-8",
    tasks: ["Campaign launch and performance monitoring", "Initial performance analysis and optimization", "Regular reporting and strategic communication", "Continuous improvement implementation"]
  }, {
    icon: TrendingUp,
    title: "Scale & Long-term Optimization",
    timeframe: "Ongoing",
    tasks: ["Successful campaign scaling and expansion", "New channel exploration and testing", "Advanced strategy implementation", "Long-term growth planning and execution"]
  }];
  return;
};