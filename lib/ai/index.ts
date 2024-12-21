import { openai } from '@ai-sdk/openai';
import { groq } from '@ai-sdk/groq';
import { google } from '@ai-sdk/google';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    // model: openai(apiIdentifier),
    // model: groq('gemma2-9b-it'),
    model: google('gemini-1.5-flash'),
    middleware: customMiddleware,
  });
};
