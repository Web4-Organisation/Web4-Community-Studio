'use client';

import { useStreamFlow } from '@genkit-ai/next/client';
import { generateContentTemplates } from '@/ai/flows/content-template-suggestions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Bot, Loader2, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  communityTheme: z.string().min(3, 'Please enter a theme for your community.'),
});

export default function TemplatesPage() {
  const { stream, loading: pending, data: suggestions } = useStreamFlow(generateContentTemplates);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      communityTheme: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await stream(values);
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center">
        <h1 className="font-headline text-3xl font-semibold">Content Template Generator</h1>
      </div>
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="font-headline">Get Content Ideas</CardTitle>
              <CardDescription>Enter your community's theme to get AI-powered suggestions for engaging content formats.</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="communityTheme"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Community Theme</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Vintage video games, sustainable living, indie music fans" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={pending}>
                {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Generate Suggestions
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {(pending || suggestions) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Bot className="h-6 w-6" />
              Suggested Content Formats
            </CardTitle>
          </CardHeader>
          <CardContent>
            {pending && !suggestions ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}
              </div>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {suggestions?.suggestions.map((suggestion, index) => (
                  <li key={index} className="bg-card border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
