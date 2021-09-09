import styled from "styled-components";
import AdminBG from "../../assets/plates.jpg";

export const AdminBookingsWrapper = styled.div`
  background: url(${AdminBG}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  font-weight: bold;
  padding-bottom: 20px;
  p.errorMessage {
    margin-top: 20px;
    color: red;
    text-align: center;
  }
`;

export const CalenderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  padding: 20px;
`;

export const AddAdminReservationButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddAdminReservationButton = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  color: black;
  border: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 5px;
  background-color: #eebc1d;
  margin: 0.25px;
  width: 100%;
  height: 40px;
  font-weight: bold;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  :hover {
    background: #f5d72e;
  }
`;

export const BlackWhiteButton = styled.button`
  background: black;
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
    color: black;
  }
`;

export const ReservationListWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ReservationItemWrapper = styled.div`
  flex: 1 1 50%;
  background: white;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  @media screen and (min-width: 1024px) {
    width: 300px;
    flex: 1 1 30%;
  }
`;

export const ReservationItemStyle = styled.div`
  text-align: center;
`;

export const CalendarSection = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  p {
    margin-left: 10px;
  }
  .react-calendar {
    color: black;
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
`;

export const SelectGuestDropDown = styled.select`
  padding: 5px;
  background-color: #eebc1d;
  color: black;
  cursor: pointer;
  font-weight: bold;
  margin: 10px;
  border-radius: 5px;
  border: none;
  height: 40px;
  font-family: "Roboto", sans-serif;
  option {
    font-family: "Roboto", sans-serif;
  }
  }
`;

export const AdminDetails = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const AdminEditContactForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  input:first-of-type {
    border-radius: 5px 5px 0px 0px;
  }
  input:last-of-type {
    border-radius: 0px 0px 5px 5px;
  }
  input {
    font-family: "Roboto", sans-serif;
  }
`;

export const AdminEditSelectSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  }
`;

export const CalendarInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
