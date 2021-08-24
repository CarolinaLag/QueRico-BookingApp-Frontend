import { Link } from "react-router-dom";
import { NavbarWrapper } from "./styles/navbar";

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/booking">Book a table</Link>
            </li>
            <li>
              <Link to="/bookings">Bookings</Link>
            </li>
          </ul>
        </nav>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
