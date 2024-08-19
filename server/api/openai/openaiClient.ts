import { configDotenv } from 'dotenv';
import OpenAI from 'openai';

configDotenv();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 環境変数からAPIキーを取得
  baseURL: process.env.OPENAI_API_BASE, // INIADのAPIベースURLを使用
});
