import { openai } from 'service/openai';
// ストリーミングのAPIリクエスト
export async function streamChatCompletion(question: string): Promise<string> {
  let responseText = '';

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: question }],
    stream: true,
  });

  for await (const chunk of stream) {
    responseText += chunk.choices[0]?.delta?.content || '';
  }

  return responseText; // 最終的にstringを返す
}

async function main(): Promise<void> {
  const response = await streamChatCompletion('What is the weather like today?');
  console.log('Chat completion response:', response);
  console.log('Streaming chat completion:');
  await streamChatCompletion('Please continue...');
}

main();
