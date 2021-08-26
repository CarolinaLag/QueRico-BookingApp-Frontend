import axios from "axios";
import ContactForm from "./ContactForm";

const Booking = () => {
  const createContactBooking = (
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string
  ): void => {
    let contactBooking = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phoneNumber: phoneNumber,
    };
    console.log(contactBooking);
    axios.post("http://localhost:3001/create", contactBooking);
  };

  return (
    <>
      <ContactForm addContactInfo={createContactBooking} />
    </>
  );
};

export default Booking;
