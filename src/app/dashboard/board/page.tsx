'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function BoardPage() {
  // TODO: Replace with dynamic data
  const ideas: any[] = [];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold font-headline">Brainstorming Board</h1>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Idea
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card className="h-52 flex items-center justify-center border-2 border-dashed hover:border-primary hover:bg-accent/10 transition-colors cursor-pointer">
          <CardContent className="flex flex-col items-center gap-2 text-muted-foreground p-6">
            <PlusCircle className="h-8 w-8" />
            <p>Add new idea</p>
          </CardContent>
        </Card>
        
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
