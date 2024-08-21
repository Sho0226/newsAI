import React, { useState } from 'react';
import { apiClient } from 'utils/apiClient';
import styles from './index.module.css';

const ChatComponent: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleAskQuestion = async () => {
    try {
      const res = await apiClient.private.works.$post({
        body: { question },
      });
      setResponse(res.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <input
        className={styles.input}
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question"
      />
      <button className={styles.button} onClick={handleAskQuestion}>
        Send
      </button>
      <div>
        <h3 className={styles.responseTitle}>Response:</h3>
        <p className={styles.responseText}>{response}</p>
      </div>
    </div>
  );
};

export default ChatComponent;
