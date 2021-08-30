import styled from "styled-components";
import TapasMenuBG from "../../assets/meny-header.jpg";
import { Header } from "./global";

export const TapasMenuHeader = styled(Header)`
  background: url(${TapasMenuBG}) no-repeat center center fixed;
  background-size: cover;
`;

export const TapasMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  padding: 1em;
  ul {
    list-style: none;
    border: 1px solid black;
  }
  li,
  small {
    padding: 20px;
  }
  small {
    color: #eebc1d;
  }
`;
