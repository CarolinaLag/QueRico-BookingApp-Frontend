import styled from "styled-components";
import TapasMenuBG from "../../assets/meny-header.jpg";
import { Header } from "./global";

export const TapasMenuHeader = styled(Header)`
  background: url(${TapasMenuBG}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-shadow: 2px 2px 4px #000000;
  }
`;

export const TapasMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  padding: 2em;
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
  @media screen and (min-width: 1024px) {
    padding: 1em;
  }
`;
