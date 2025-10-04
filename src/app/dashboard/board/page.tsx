import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function BoardPage() {
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
        
        <Card className="h-52">
          <CardHeader>
            <CardTitle className="text-lg font-headline">Community Launch Plan</CardTitle>
            <CardDescription>1 day ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Outline steps for a successful launch.</p>
          </CardContent>
        </Card>
        <Card className="h-52">
          <CardHeader>
            <CardTitle className="text-lg font-headline">Content Pillars</CardTitle>
            <CardDescription>3 days ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Define key topics for our community: tutorials, showcases, and Q&A.</p>
          </CardContent>
        </Card>
        <Card className="h-52">
          <CardHeader>
            <CardTitle className="text-lg font-headline">Member Onboarding Flow</CardTitle>
            <CardDescription>5 days ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">How do we welcome new members and guide them?</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
