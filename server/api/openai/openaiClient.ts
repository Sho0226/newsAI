import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE,
});

async function main(): Promise<void> {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'Hello World',
      },
      {
        role: 'user',
        content: 'Hello',
      },
    ],
    model: 'gpt-4o-mini',
  });
  console.log(completion.choices);
}

main();
