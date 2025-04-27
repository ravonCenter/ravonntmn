import { key } from '@/app/settings/ai';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: key, // Replace with your actual OpenAI API key
});

async function getResponse() {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Hello, AI!' }],
  });
  console.log(completion.choices[0].message.content);
}

getResponse();
