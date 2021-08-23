import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Book a table</Link>
          </li>
          <li>
            <Link to="/bookings">Bookings</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
