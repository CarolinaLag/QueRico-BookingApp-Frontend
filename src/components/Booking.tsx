import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import CalendarForm from "./CalendarForm";
import ContactForm from "./ContactForm";

const Booking = () => {
  const [booking, setBooking] = useState({
    date: moment().add(1, "days").format("DDMMYYYY"),
    guests: 0,
    timeslot: "",
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: 0,
  });
  const [showTimeSlotOne, setShowTimeSlotOne] = useState(false);
  const [showTimeSlotTwo, setShowTimeSlotTwo] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [message, setMessage] = useState("Välj antal gäster.");

  useEffect(() => {
    if (booking.guests > 0 && booking.timeslot === "") {
      axios
        .get<any>(
          `http://localhost:3001/checktables/${booking.date}/${booking.guests}`
        )
        .then((response) => {
          if (
            response.data.tablesAtFive === false &&
            response.data.tablesAtSeven === false
          ) {
            setMessage("Det finns tyvärr inga bord lediga bord.");
            setShowTimeSlotOne(false);
            setShowTimeSlotTwo(false);
            return;
          } else {
            setMessage("");
          }
          if (response.data.tablesAtFive === true) setShowTimeSlotOne(true);

          if (response.data.tablesAtSeven === true) setShowTimeSlotTwo(true);

          if (
            response.data.tablesAtFive === true ||
            response.data.tablesAtSeven === true
          )
            setMessage("Välj en tid.");
        });
    }
    if (booking.timeslot !== "") setShowContactForm(true);
  }, [booking]);

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

  const handleDateChange = (date: string) => {
    const newBooking = {
      date: date,
      guests: booking.guests,
      timeslot: booking.timeslot,
      firstname: booking.firstname,
      lastname: booking.lastname,
      email: booking.email,
      phonenumber: booking.phonenumber,
    };
    setBooking(newBooking);
  };

  const handleAmountChange = (amount: number) => {
    const newBooking = {
      date: booking.date,
      guests: amount,
      timeslot: booking.timeslot,
      firstname: booking.firstname,
      lastname: booking.lastname,
      email: booking.email,
      phonenumber: booking.phonenumber,
    };
    setBooking(newBooking);
  };

  const handleTimeslotChange = (timeslot: string) => {
    const newBooking = {
      date: booking.date,
      guests: booking.guests,
      timeslot: timeslot,
      firstname: booking.firstname,
      lastname: booking.lastname,
      email: booking.email,
      phonenumber: booking.phonenumber,
    };
    setBooking(newBooking);
  };

  return (
    <>
      <h1>Boka bord</h1>
      {showContactForm ? (
        <ContactForm addContactInfo={createContactBooking} />
      ) : (
        <CalendarForm
          handleDateChange={handleDateChange}
          handleAmountChange={handleAmountChange}
          handleTimeslotChange={handleTimeslotChange}
          showTimeSlotOne={showTimeSlotOne}
          showTimeSlotTwo={showTimeSlotTwo}
          message={message}
        />
      )}
    </>
  );
};

export default Booking;
