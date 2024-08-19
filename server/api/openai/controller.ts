import { defineController } from './$relay';
import { streamChatCompletion } from './openaiClient';
export default defineController(() => ({
  post: async ({ body }) => {
    const answer = await streamChatCompletion(body.question);
    return { status: 200, body: answer };
  },
}));
