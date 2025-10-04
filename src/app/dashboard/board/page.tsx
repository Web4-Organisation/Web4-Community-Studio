'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

export default function BoardPage() {
  // TODO: Replace with dynamic data
  const [ideas, setIdeas] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddIdea = () => {
    // Logic to add idea will be here
    setIsDialogOpen(false);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold font-headline">Brainstorming Board</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Idea
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a New Idea</DialogTitle>
              <DialogDescription>
                What's your next big idea for the community?
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="idea-title">Title</Label>
                <Input id="idea-title" placeholder="e.g., Weekly Q&A Session" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="idea-description">Description</Label>
                <Textarea id="idea-description" placeholder="Describe the idea in more detail..." />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddIdea}>Add Idea</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Card className="h-52 flex items-center justify-center border-2 border-dashed hover:border-primary hover:bg-accent/10 transition-colors cursor-pointer">
              <CardContent className="flex flex-col items-center gap-2 text-muted-foreground p-6">
                <PlusCircle className="h-8 w-8" />
                <p>Add new idea</p>
              </CardContent>
            </Card>
          </DialogTrigger>
        </Dialog>
        
        {ideas.map((idea, index) => (
          <Card key={index} className="h-52">
            <CardHeader>
              <CardTitle className="text-lg font-headline">{idea.title}</CardTitle>
              <CardDescription>{idea.age}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{idea.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
