import styled from "styled-components";

export const BookingCalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  p {
    align-self: end;
    margin-left: 25px;
  }

  @media screen and (min-width: 1024px) {
    padding: 2% 3% 10% 3%;
    p {
      margin-left: 510px;
    }
  }
`;

export const BookingCalendarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  margin-top: 15px;
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;
