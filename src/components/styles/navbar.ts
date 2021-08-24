import styled from "styled-components";

export const NavbarWrapper = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  li {
    list-style: none;
  }
  a {
    padding: 10px;
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color: #670101;
  }
`;
