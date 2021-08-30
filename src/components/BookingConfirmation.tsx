import { BookingConfirmationWrapper } from "./styles/bookingConfirmation";
import { Header, HeadingWrapper } from "./styles/global";

const BookingConfirmation = () => {
  return (
    <>
      <Header>
        <HeadingWrapper>
          <h1>Boka bord</h1>
        </HeadingWrapper>
      </Header>
      <BookingConfirmationWrapper>
        <h1>Tack för din bokning!</h1>
        <p>Bokningsbekräftelse via mejl skickas till dig inom kort.</p>
      </BookingConfirmationWrapper>
    </>
  );
};

export default BookingConfirmation;
