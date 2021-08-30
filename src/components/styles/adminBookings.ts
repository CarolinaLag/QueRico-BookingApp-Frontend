import styled from "styled-components";
import AdminBG from "../../assets/plates.jpg";

export const AdminBookingsWrapper = styled.div`
  background: url(${AdminBG}) no-repeat center center fixed;
  background-size: cover;
  color: white;
  font-weight: bold;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
