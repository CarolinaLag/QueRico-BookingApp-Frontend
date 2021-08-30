import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./styles/navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo>!Que Rico!</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Hem</MenuLink>
        <MenuLink href="/meny">Meny</MenuLink>
        <MenuLink href="/booking">Boka bord</MenuLink>
        <MenuLink href="/kontakt">Kontakta oss</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
