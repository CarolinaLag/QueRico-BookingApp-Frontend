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
