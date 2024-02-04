import React, { useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal, Container } from 'react-bootstrap';
import { BiClipboard } from 'react-icons/bi';
import { BsClipboard2Check } from 'react-icons/bs';
import CircleButton from '../CircleButton/CircleButton';
import "bootstrap/dist/css/bootstrap.min.css";
import "./EmailInput.css"

interface Message {
  message: string;
  sender: string;
}

function MyVerticallyCenteredModal(props: any) {
  const [currentClip, setClip] = useState(true);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Polish Complete!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Confidence Scoring: {props.score}</h4>
          <p>
            Polished Response: {props.response}
          </p>
          <div className = "circleButton">
            {currentClip && <CircleButton onClick = {() => setClip(false)} buttonType={BiClipboard}/>}
            {!currentClip && <CircleButton buttonType={BsClipboard2Check}/>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className = "button" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function EmailInput() {
  const API_KEY = "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";

  const [message, setMessage] = useState<Message>({ message: '', sender: '' });
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("... awaiting response");
  const [score, setScore] = useState<string>("");

  const [modalShow, setModalShow] = React.useState(false);

  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

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
      setModalShow(true)
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
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            placeholder="Enter your text here..."
            rows={10}
            cols={50}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='custom-textarea'
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSend} className='button'>
        Polish
      </Button>
      </Form>
      <MyVerticallyCenteredModal
        score={score}
        response={response}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default EmailInput;
