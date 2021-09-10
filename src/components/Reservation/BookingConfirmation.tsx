import { Link } from "react-router-dom";
import { BookingConfirmationWrapper } from "../styles/bookingConfirmation";
import { Button, Header } from "../styles/global";

const BookingConfirmation = () => {
  return (
    <>
      <Header>
        <h1>Boka bord</h1>
      </Header>
      <BookingConfirmationWrapper>
        <h1>Tack för din bokning!</h1>
        <p>Bokningsbekräftelse via mejl skickas till dig inom kort.</p>
        <Button>
          <Link to={"/"}>Tillbaka</Link>
        </Button>
      </BookingConfirmationWrapper>
    </>
  );
};

export default BookingConfirmation;
