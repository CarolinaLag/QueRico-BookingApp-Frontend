import { Link } from "react-router-dom";
import { Button, Header } from "./styles/global";
import { NotFoundPageWrapper } from "./styles/pageNotFound";

const PageNotFound = () => {
  return (
    <>
      <Header>
        <h1>Något gick fel</h1>
      </Header>
      <NotFoundPageWrapper>
        <p>Oj, något gick fel</p>
        <Button>
          <Link to={"/"}>Tillbaka</Link>
        </Button>
      </NotFoundPageWrapper>
    </>
  );
};

export default PageNotFound;
