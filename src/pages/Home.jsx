import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { deleteRequest, getRequest } from "../api/routerApi";
import { MyContext } from "../api/Context";
import { Table, Th, Td, Container, Header,  DeleteButton, StyledLink } from "./homeStyle";

const Home = () => {
  const { setUsers, users } = useContext(MyContext);

  useEffect(() => {
    getRequest(setUsers);
  }, [setUsers]);

  const handleDelete = async (id) => {
    try {
      await deleteRequest(id, setUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <Container>
      <Header>
        <h2>User List</h2>
        <StyledLink to="/add">Add New User</StyledLink>
      </Header>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <StyledLink to={`/update/${user.id}`}>Update</StyledLink>
                  <DeleteButton onClick={() => handleDelete(user.id)}>Delete</DeleteButton>
                </Td>
              </tr>
            ))
          ) : (
            <tr>
              <Td colSpan="3">No users found.</Td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
