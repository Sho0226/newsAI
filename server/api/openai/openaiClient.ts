import { configDotenv } from 'dotenv';
import Configuration from 'openai';

configDotenv();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE,
});
