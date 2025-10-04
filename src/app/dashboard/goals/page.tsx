'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function GoalsPage() {
  const [goals, setGoals] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleToggleAchieved = (id: string) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, achieved: !goal.achieved } : goal
    ));
  };
  
  const handleNewGoal = () => {
    setIsDialogOpen(false);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold font-headline">Community Goals</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Goal
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Set a New Goal</DialogTitle>
              <DialogDescription>Define a new target for your community to strive for.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="goal-title">Goal Title</Label>
                <Input id="goal-title" placeholder="e.g., Reach 1,000 members" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="goal-category">Category</Label>
                 <Select>
                  <SelectTrigger id="goal-category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="growth">Growth</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="content">Content</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div className="grid gap-2">
                <Label htmlFor="goal-progress">Initial Progress (%)</Label>
                <Input id="goal-progress" type="number" min="0" max="100" defaultValue="0" />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleNewGoal}>Set Goal</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {goals.length === 0 && (
          <Card className="flex items-center justify-center h-48 border-2 border-dashed">
            <p className="text-muted-foreground">No goals defined yet. Add a new goal to get started!</p>
          </Card>
        )}
        {goals.map((goal) => (
          <Card key={goal.id} className={goal.achieved ? "bg-muted/50" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <Checkbox id={`goal-${goal.id}`} checked={goal.achieved} onCheckedChange={() => handleToggleAchieved(goal.id)} aria-label={goal.title} />
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
