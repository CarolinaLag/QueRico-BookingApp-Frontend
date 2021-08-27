import styled, { createGlobalStyle } from "styled-components";
import HeaderBG from "../../assets/drinks.jpg";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  background: url(${HeaderBG}) no-repeat center center fixed;
  background-size: cover;
  color: white;
  font-weight: bold;
  height: 400px;
`;

export const Button = styled.button`
  color: black;
  border: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 5px;
  background-color: #eebc1d;
  margin: 0.25px;
  width: 100px;
  height: 40px;
  font-family: "Roboto", sans-serif;
  :hover {
    background: #f5d72e;
  }
  :disabled {
    background-color: rgb(182, 182, 182) !important ;
    opacity: 0.7 !important;
    color: black;
    font-weight: bold;
    cursor: auto;
  }
`;

export const ButtonDisabled = styled.button`
  background-color: rgb(182, 182, 182) !important ;
  opacity: 0.7 !important;
  color: black;
  font-weight: bold;
  cursor: auto;
  color: black;
  border: none;
  border-radius: 5px;
  border: none;
  padding: 5px;
  background-color: #eebc1d;
  margin: 0.25px;
  width: 100px;
  height: 40px;
  font-family: "Roboto", sans-serif;
`;
