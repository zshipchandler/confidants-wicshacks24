import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import dotenv from 'dotenv'; 

interface Message {
  message: string;
  sender: string;
}

function EmailInput() {
  const API_KEY = "";

  const [message, setMessage] = useState<Message>({ message: '', sender: '' });
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("... awaiting response");
  const [score, setScore] = useState<string>("");

  const handleSend = async () => {
    const newMessage: Message = {
      message: input,
      sender: "user",
    };

    setMessage(newMessage);
    setInput("");

    try {
      setLoading(true);
      const data = await processMessageToChatGPT(newMessage);
      console.log(`data from open ai ${JSON.stringify(data)}`);
      const output = formatChatGPTResponse(data.choices[0]?.message?.content);
      console.log(output)
      const match = output.split('Message:');
      console.log(match)
      if (match) {
        const extractedScore = match[0].replace("Score:", '');
        const extractedMessage = match[1];
        setScore(extractedScore)
        setResponse(extractedMessage)
      }
      else {
        throw Error("invalid response")
      }
    } catch (error) {
      console.error('Error processing message:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const processMessageToChatGPT = async (chatMessage: Message) => {
    setLoading(true);
    const messages = [{
            content: "First, assign a score from 1-100 that combines and asses level of confidence, assertion, and politeness. Provide this in the form Score: score. On a new line, provide a revised version of the message emphasizing assertion and confidence while remaining polite. Also correct any incorrect grammar. Provide this in the form Message: revised message.",
            role: "system"
        },
        {
            role: "assistant", 
            content: chatMessage.message
        }];

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      max_tokens: 1000,
      messages: messages,
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API request failed with status ${response.status}`);
    }

    const data = await response.json();
    setMessage({
      message: data.choices[0]?.message?.content || 'No message content',
      sender: "ChatGPT",
    });
    return data;
  };


  const formatChatGPTResponse = (content: string | undefined): string => {
    if (!content) {
      return "No response from ChatGPT";
    }

    // Your formatting logic here
    return content;
  };

  return (
    <div>
      <br />
      <h1>Email Corrector!</h1>
      <Form.Control
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleSend} disabled={loading}>
        Send
      </Button>
      <Card>
        <Card.Body>
          <Card.Text>
            <h4>{loading ? 'Loading...' : "Score: " + score + ", Response: " + response}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EmailInput;
