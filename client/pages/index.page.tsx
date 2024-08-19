import React, { useState } from 'react';
import { streamChatCompletion } from './../api/openai/openaiClient';
import styles from './index.module.css';

const ChatComponent = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await streamChatCompletion(question);
      setAnswer(response); // 直接文字列として利用
    } catch (error) {
      console.error('Error fetching completion:', error);
      setAnswer('Failed to get a response.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Ask OpenAI</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      <p className={styles.answer}>Response: {answer}</p>
    </div>
  );
};

export default ChatComponent;
