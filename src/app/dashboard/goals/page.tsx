import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Target, PlusCircle } from "lucide-react";

const goals = [
  { id: 1, title: "Reach 1,000 members", progress: 75, achieved: false, category: "Growth" },
  { id: 2, title: "Host first virtual event", progress: 100, achieved: true, category: "Engagement" },
  { id: 3, title: "Increase daily active users by 20%", progress: 40, achieved: false, category: "Activity" },
  { id: 4, title: "Launch a weekly newsletter", progress: 90, achieved: false, category: "Content" },
  { id: 5, title: "Onboard 5 community moderators", progress: 100, achieved: true, category: "Operations" },
];

export default function GoalsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold font-headline">Community Goals</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Goal
        </Button>
      </div>

      <div className="grid gap-4">
        {goals.map((goal) => (
          <Card key={goal.id} className={goal.achieved ? "bg-muted/50" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <Checkbox id={`goal-${goal.id}`} checked={goal.achieved} aria-label={goal.title} />
                  <label htmlFor={`goal-${goal.id}`} className={`text-lg font-headline ${goal.achieved ? "line-through text-muted-foreground" : ""}`}>
                    {goal.title}
                  </label>
                </CardTitle>
                <Badge variant="outline">{goal.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm">
                <Progress value={goal.progress} aria-label={`${goal.progress}% complete`} className="flex-1" />
                <span className="text-muted-foreground font-medium">{goal.progress}%</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
