import { Badge } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const achievements = [
  {
    id: 1,
    name: "Challenge Master",
    description: "Complete all unique challenges",
    icon: "🏆",
  },
  {
    id: 2,
    name: "Community Star",
    description: "Join the daily player community",
    icon: "🌟",
  },
  {
    id: 3,
    name: "Match Legend",
    description: "Play 1000 matches",
    icon: "🎮",
  },
];

export const AchievementBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {achievements.map((achievement) => (
        <TooltipProvider key={achievement.id}>
          <Tooltip>
            <TooltipTrigger>
              <div className="glass-effect p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all cursor-help">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{achievement.icon}</span>
                  <Badge className="w-5 h-5" />
                  <span className="text-sm font-medium">{achievement.name}</span>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{achievement.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};
