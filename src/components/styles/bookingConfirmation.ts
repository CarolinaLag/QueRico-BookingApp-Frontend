import styled from "styled-components";

export const BookingConfirmationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  h1,
  p {
    padding: 20px;
    text-align: center;
  }
  button {
    padding: 10px;
    a {
      text-decoration: none;
      color: black;
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 10% 3% 20% 3%;
  }
`;
