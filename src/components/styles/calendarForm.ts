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
  .react-calendar__tile--active {
    background-color: #eebc1d;
    color: black;
  }
  select {
    border-radius: 5px;
    border: none;
    height: 40px;
  }
  p.errorMessage {
    margin-top: 20px;
    color: red;
    text-align: center;
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
