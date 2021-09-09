import styled from "styled-components";

export const BookingCalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  p {
    margin: 0px 10px;
  }

  @media screen and (min-width: 1024px) {
    padding: 2% 3% 10% 3%;
  }
  .react-calendar {
    border-radius: 5px;
  }
  .react-calendar__tile--active {
    background-color: #eebc1d;
    color: black;
  }
  select {
    border-radius: 5px;
    border: 1px solid #eebc1d;
    height: 40px;
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
