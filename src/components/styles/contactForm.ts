import styled from "styled-components";

export const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px ​40px 40px 40px;
  //   @media screen and (min-width: 1024px) {
  //     width: 30%;
  //   }
`;

export const ContactFormInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`;

export const ContactFormInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export const GdprWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  padding: 3% 0%;
  input {
    width: auto;
  }
`;
