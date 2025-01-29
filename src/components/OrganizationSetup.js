import React, { useState } from "react";
import styled from "styled-components";

const OrganizationSetup = ({ setStep }) => {
  const [companyData, setCompanyData] = useState({
    name: "",
    website: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4); // Move to chatbot integration step
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Company Name"
        value={companyData.name}
        onChange={(e) =>
          setCompanyData({ ...companyData, name: e.target.value })
        }
        required
      />
      <Input
        type="url"
        placeholder="Website URL"
        value={companyData.website}
        onChange={(e) =>
          setCompanyData({ ...companyData, website: e.target.value })
        }
        required
      />
      <TextArea
        placeholder="Description"
        value={companyData.description}
        onChange={(e) =>
          setCompanyData({ ...companyData, description: e.target.value })
        }
        required
      />
      <Button type="submit">Next</Button>
    </Form>
  );
};

export default OrganizationSetup;

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

const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 100px;
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
