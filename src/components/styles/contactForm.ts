import styled from "styled-components";

export const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  //   @media screen and (min-width: 1024px) {
  //     width: 30%;
  //   }
`;

export const ContactFormInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    width: 300px;
    background: linear-gradient(#000, #000) center bottom 5px /
      calc(100% - 10px) 2px no-repeat;
    background-color: #fcfcfc;
    border: none;
    padding: 20px;
  }

  small {
    color: red;
  }
`;

export const ContactFormButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  a {
    color: black;
    border: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    padding-left: 25px;
    padding-top: 12px;
    background-color: #eebc1d;
    margin: 0.25px;
    width: 100px;
    height: 40px;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    :hover {
      background: #f5d72e;
    }
  }
`;

export const ContactFormInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GdprWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
