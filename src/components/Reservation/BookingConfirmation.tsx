import { BookingConfirmationWrapper } from "../styles/bookingConfirmation";
import { Header } from "../styles/global";

const BookingConfirmation = () => {
  return (
    <>
      <Header>
        <h1>Boka bord</h1>
      </Header>
      <BookingConfirmationWrapper>
        <h1>Tack för din bokning!</h1>
        <p>Bokningsbekräftelse via mejl skickas till dig inom kort.</p>
      </BookingConfirmationWrapper>
    </>
  );
};

export default BookingConfirmation;
