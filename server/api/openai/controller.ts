import { defineController } from './$relay';
import { getChatCompletion } from './openaiClient';
export default defineController(() => ({
  post: async ({ body }) => {
    const answer = await getChatCompletion(body.question);
    return { status: 200, body: answer };
  },
}));
