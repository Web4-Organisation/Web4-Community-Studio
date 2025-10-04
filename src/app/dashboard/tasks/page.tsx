import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { PlusCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const tasks = [
  { id: 1, title: "Design welcome email template", assignee: "Alex", status: "Done", priority: "High" },
  { id: 2, title: "Schedule social media posts for launch week", assignee: "Sam", status: "In Progress", priority: "High" },
  { id: 3, title: "Write community guidelines", assignee: "Casey", status: "Todo", priority: "Medium" },
  { id: 4, title: "Set up Discord server roles", assignee: "Alex", status: "Done", priority: "Medium" },
  { id: 5, title: "Draft announcement blog post", assignee: "Sam", status: "Backlog", priority: "Low" },
];

const assigneeAvatars: { [key: string]: string } = {
  "Alex": "https://picsum.photos/seed/alex/40/40",
  "Sam": "https://picsum.photos/seed/sam/40/40",
  "Casey": "https://picsum.photos/seed/casey/40/40",
};

export default function TasksPage() {
  const getStatusBadgeVariant = (status: string): BadgeProps["variant"] => {
    switch (status) {
      case "Done":
        return "secondary";
      case "In Progress":
        return "default";
      case "Todo":
        return "outline";
      case "Backlog":
        return "outline";
      default:
        return "outline";
    }
  };

  const getPriorityBadgeVariant = (priority: string): BadgeProps["variant"] => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "secondary";
      case "Low":
        return "outline";
      default:
        return "outline";
    }
  };
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-headline">Task Management</CardTitle>
          <CardDescription>Divide your community project into smaller tasks.</CardDescription>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Task</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Assignee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map(task => (
              <TableRow key={task.id}>
                <TableCell className="font-medium">{task.title}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(task.status)}>{task.status}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getPriorityBadgeVariant(task.priority)}>{task.priority}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6 border">
                      <AvatarImage src={assigneeAvatars[task.assignee]} alt={task.assignee} data-ai-hint="person face" />
                      <AvatarFallback>{task.assignee.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{task.assignee}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
