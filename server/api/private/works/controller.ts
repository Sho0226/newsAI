import { streamChatCompletion } from '../../../domain/work/event/workEvent';
import { defineController } from './$relay';
export default defineController(() => ({
  post: async ({ body }) => {
    const responseText = await streamChatCompletion(body.question);
    return {
      status: 200,
      body: { response: responseText },
    };
  },
}));
