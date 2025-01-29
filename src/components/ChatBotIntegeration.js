import React from "react";
import styled from "styled-components";

const ChatbotIntegration = ({ setStep }) => {
  return (
    <div>
      <h2>Test Your Chatbot</h2>
      <Button onClick={() => setStep(5)}>Test Chatbot</Button>
    </div>
  );
};

export default ChatbotIntegration;

const Button = styled.button`
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
