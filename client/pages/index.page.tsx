import React, { useState } from 'react';
import { apiClient } from 'utils/apiClient';

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
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question"
      />
      <button onClick={handleAskQuestion}>Send</button>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatComponent;
