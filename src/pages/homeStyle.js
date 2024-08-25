import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledLink = styled(RouterLink)`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #218838;
    box-shadow: 0 4px 6px rgba(0, 123, 255, 0.3);
  }

  &:active {
    background-color: #1e7e34;
  }
`;

export const DeleteButton = styled.button`
  padding: 12px 20px;
  border: none;
  background-color: #dc3545;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  margin-left: 10px;

  &:hover {
    background-color: #c82333;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #bd2130;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  background-color: #f4f4f4;
  text-align: left;
  font-weight: bold;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
`;
