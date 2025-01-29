import React, { useState } from "react";
import styled from "styled-components";
import SignUp from "./components/SignUp";
import EmailVerification from "./components/EmailVerification";
import OrganizationSetup from "./components/OrganizationSetup";
import ChatbotIntegration from "./components/ChatBotIntegeration";

function App() {
  const [step, setStep] = useState(1);

  return (
    <Container>
      <Header>BeyondChats Chatbot Setup</Header>
      <FormContainer>
        {step === 1 && <SignUp setStep={setStep} />}
        {step === 2 && <EmailVerification setStep={setStep} />}
        {step === 3 && <OrganizationSetup setStep={setStep} />}
        {step === 4 && <ChatbotIntegration setStep={setStep} />}
      </FormContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  @media (max-width: 600px) {
    padding: 15px;
  }
`;
