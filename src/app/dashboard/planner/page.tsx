import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Paintbrush } from "lucide-react";

export default function PlannerPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline mb-6">Community Planner</h1>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Coming Soon!</CardTitle>
          <CardDescription>
            A fully interactive drag-and-drop planner to design your community structure and layout.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-80 border-2 border-dashed rounded-lg bg-muted/20">
            <Paintbrush className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">Planner Canvas</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
