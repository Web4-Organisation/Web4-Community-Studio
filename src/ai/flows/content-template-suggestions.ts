'use server';

/**
 * @fileOverview Generates content template suggestions based on the community's theme.
 *
 * - generateContentTemplates - A function that generates content template suggestions.
 * - ContentTemplateSuggestionsInput - The input type for the generateContentTemplates function.
 * - ContentTemplateSuggestionsOutput - The return type for the generateContentTemplates function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentTemplateSuggestionsInputSchema = z.object({
  communityTheme: z
    .string()
    .describe('The theme of the community for which content is being generated.'),
});

export type ContentTemplateSuggestionsInput = z.infer<
  typeof ContentTemplateSuggestionsInputSchema
>;

const ContentTemplateSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of content format suggestions for the community.'),
});

export type ContentTemplateSuggestionsOutput = z.infer<
  typeof ContentTemplateSuggestionsOutputSchema
>;

export async function generateContentTemplates(
  input: ContentTemplateSuggestionsInput
): Promise<ContentTemplateSuggestionsOutput> {
  return generateContentTemplatesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentTemplateSuggestionsPrompt',
  input: {schema: ContentTemplateSuggestionsInputSchema},
  output: {schema: ContentTemplateSuggestionsOutputSchema},
  prompt: `You are a community engagement expert.  Generate content format suggestions for a community with the following theme: {{{communityTheme}}}. Return ONLY a JSON array of content format suggestions.  Some examples of content formats include "weekly Q&A sessions," "themed contests," and "member spotlight posts." Do not include any additional text, only the JSON array.`,
});

const generateContentTemplatesFlow = ai.defineFlow(
  {
    name: 'generateContentTemplatesFlow',
    inputSchema: ContentTemplateSuggestionsInputSchema,
    outputSchema: ContentTemplateSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
