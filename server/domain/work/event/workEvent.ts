import { openai } from 'service/openai';

export async function streamChatCompletion(question: string): Promise<string> {
  let responseText = '';

  console.log('Sending question to OpenAI:', question); // 質問を送信する前にログ出力

  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: question }],
      stream: true,
    });

    for await (const chunk of stream) {
      console.log('Received chunk:', chunk); // 受信したチャンクデータをログ出力
      responseText += chunk.choices[0]?.delta?.content || '';
    }

    console.log('Final response text:', responseText); // 結合された最終のレスポンスをログ出力
    return responseText;
  } catch (error) {
    console.error('Error while calling OpenAI API:', error); // エラー発生時のログ
    throw error;
  }
}
