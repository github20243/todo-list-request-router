import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { putRequest } from "../api/routerApi";
import { MyContext } from "../api/Context";

const UpdateUser = () => {
  const { users } = useContext(MyContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = users.find((item) => item.id === id);
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [id, users]);

  const handleUpdate = async () => {
    try {
      await putRequest(id, { name, email });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Update User</Title>
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
      <Button onClick={handleUpdate}>Update User</Button>
    </Container>
  );
};

export default UpdateUser;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #007bff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  color: #007bff;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  display: block;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 6px rgba(0, 123, 255, 0.3);
  }

  &:active {
    background-color: #004085;
  }
`;
