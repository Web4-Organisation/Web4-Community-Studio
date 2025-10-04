'use server';

/**
 * @fileOverview An AI agent to analyze community communication trends.
 *
 * - analyzeCommunityTrends - A function that analyzes communication trends within a community.
 * - AnalyzeCommunityTrendsInput - The input type for the analyzeCommunityTrends function.
 * - AnalyzeCommunityTrendsOutput - The return type for the analyzeCommunityTrends function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeCommunityTrendsInputSchema = z.object({
  communicationData: z
    .string()
    .describe(
      'A comprehensive log of communication data from the community, including messages, posts, comments, and any other relevant interactions.'
    ),
});
export type AnalyzeCommunityTrendsInput = z.infer<typeof AnalyzeCommunityTrendsInputSchema>;

const AnalyzeCommunityTrendsOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A summarized report of the key communication trends identified in the community data, including patterns, frequently discussed topics, sentiment analysis, and potential areas of concern or opportunity.'
    ),
});
export type AnalyzeCommunityTrendsOutput = z.infer<typeof AnalyzeCommunityTrendsOutputSchema>;

export async function analyzeCommunityTrends(
  input: AnalyzeCommunityTrendsInput
): Promise<AnalyzeCommunityTrendsOutput> {
  return analyzeCommunityTrendsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeCommunityTrendsPrompt',
  input: {schema: AnalyzeCommunityTrendsInputSchema},
  output: {schema: AnalyzeCommunityTrendsOutputSchema},
  prompt: `You are an expert community analyst. Analyze the following community communication data and provide a summarized report of the key trends, patterns, topics, and sentiment.

Communication Data:
{{{communicationData}}}`,
});

const analyzeCommunityTrendsFlow = ai.defineFlow(
  {
    name: 'analyzeCommunityTrendsFlow',
    inputSchema: AnalyzeCommunityTrendsInputSchema,
    outputSchema: AnalyzeCommunityTrendsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
