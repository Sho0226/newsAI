import { configDotenv } from 'dotenv';
import OpenAI from 'openai';

configDotenv();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 環境変数からAPIキーを取得
  baseURL: process.env.OPENAI_API_BASE, // INIADのAPIベースURLを使用
});

export async function getChatCompletion(question: string): Promise<string> {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini', // GPT-3.5モデルを使用
    messages: [
      { role: 'system', content: 'Hello World' },
      { role: 'user', content: question },
    ],
  });

  return completion.choices[0].message.content as string; // 応答メッセージを返す
}
