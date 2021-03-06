import styled, { createGlobalStyle } from "styled-components";
import HeaderBG from "../../assets/drinks.jpg";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Playfair Display', serif;
  }
  body {
    overflow-x:hidden;
  }
  html {
    scroll-behavior: smooth;

  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
`;

export const Header = styled.div`
  background: url(${HeaderBG}) no-repeat center center fixed;
  background-size: cover;
  color: white;
  font-weight: bold;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-shadow: 2px 2px 4px #000000;
  }
  @media screen and (min-width: 1024px) {
    height: 400px;
  }
`;

export const LinkStyle = styled.a`
  color: black;
  border: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding-top: 10px;
  padding-left: 22px;
  padding-bottom: 10px;
  background-color: #eebc1d;
  text-decoration: none;
  margin: 0.25px;
  width: 100px;
  height: 40px;
  font-family: "Roboto", sans-serif;
  :hover {
    background: #f5d72e;
  }
`;
export const RedButton = styled.button`
  background: #670101;
  color: white;
  border: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin: 10px;
  width: 100px;
  height: 40px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  :hover {
    background: white;
    color: #670101;
  }
`;
export const Button = styled.button`
  color: black;
  border: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 5px;
  background-color: #eebc1d;
  margin: 5px;
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

export const DetailsWrapper = styled.div`
  margin: 20px;
`;
