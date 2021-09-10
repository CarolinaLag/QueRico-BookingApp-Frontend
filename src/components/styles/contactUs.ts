import styled from "styled-components";
import HeaderBG from "../../assets/drinks.jpg";

export const ContactUsWrapper = styled.div`
  background: url(${HeaderBG}) no-repeat center center fixed;
  background-size: cover;
  color: white;
  font-weight: bold;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    padding: 0.5em;
  }
  a {
    color: #eebc1d;
    text-decoration: none;
    :hover {
      color: #670101;
    }
  }
`;

export const ContactUsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;
