import React, { useState } from "react";
import styled from "styled-components";

const EmailVerification = ({ setStep }) => {
  const [code, setCode] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    setStep(3); // Move to organization setup step
  };

  return (
    <Form onSubmit={handleVerify}>
      <h2>Email Verification</h2>
      <Input
        type="text"
        placeholder="Enter Verification Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <Button type="submit">Verify & Continue</Button>
      <p>Didn't receive a code? <a href="#">Resend</a></p>
    </Form>
  );
};

export default EmailVerification;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

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
