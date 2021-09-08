import { Link } from "react-router-dom";
import { Header } from "./styles/global";

const PageNotFound = () => {
  return (
    <>
      <Header>
        <h1>Något gick fel</h1>
      </Header>
      <p>Oj, något gick fel</p>
      <Link to={"/"}>Tillbaka</Link>
    </>
  );
};

export default PageNotFound;
