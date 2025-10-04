'use client';

import { useFlow } from '@genkit-ai/next/useFlow';
import { analyzeCommunityTrends } from '@/ai/flows/analyze-community-trends';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LineChart, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  communicationData: z.string().min(50, 'Please paste a significant amount of communication data for analysis.'),
});

export default function AnalyzerPage() {
  const [analyze, { loading: pending, data: analysis }] = useFlow(analyzeCommunityTrends);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      communicationData: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await analyze(values);
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center">
        <h1 className="font-headline text-3xl font-semibold">Community Analyzer</h1>
      </div>
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="font-headline">Analyze Communication Trends</CardTitle>
              <CardDescription>Paste raw communication data (e.g., chat logs, forum posts) to get an AI-powered summary of trends, topics, and sentiment.</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="communicationData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Communication Data</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your community's chat logs or posts here..."
                        className="min-h-[200px] resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={pending}>
                {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Analyze Trends
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {(pending || analysis) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <LineChart className="h-6 w-6" />
              Analysis Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            {pending ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[75%]" />
              </div>
            ) : (
               <div className="space-y-4 text-sm text-foreground/90">
                {analysis?.summary.split('\n').filter(p => p).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
