import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postRequest } from "../api/routerApi";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const value = {
      name,
      email,
    };

    await postRequest(value);
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Heading>Add New User</Heading>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">Add User</Button>
    </Container>
  );
};

export default AddUser;

const Container = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #28a745;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }

  &:focus {
    outline: none;
  }
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
`;
