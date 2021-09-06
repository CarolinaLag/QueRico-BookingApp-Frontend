import styled from "styled-components";
import AdminBG from "../../assets/plates.jpg";

export const AdminBookingsWrapper = styled.div`
  background: url(${AdminBG}) no-repeat center center fixed;
  background-size: cover;
  color: white;
  min-height: 100vh;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const AddAdminReservationButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddAdminReservationButton = styled.button`
  position: fixed;
  top: 20px;
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
  width: 100px;
  height: 40px;
  font-weight: bold;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  :hover {
    background: #f5d72e;
  }
`;
