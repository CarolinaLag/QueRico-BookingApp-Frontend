import { Link } from "react-router-dom";
import { Header, HeadingWrapper } from "./styles/global";

const PageNotFound = () => {
  return (
    <>
      <Header>
        <HeadingWrapper>
          <h1>Något gick fel</h1>
        </HeadingWrapper>
      </Header>
      <p>Oj, något gick fel</p>
      <Link to={"/"}>Tillbaka</Link>
    </>
  );
};

export default PageNotFound;
