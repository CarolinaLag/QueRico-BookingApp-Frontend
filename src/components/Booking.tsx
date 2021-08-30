import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import Reservation from "../models/Reservation";
import BookingConfirmation from "./BookingConfirmation";
import CalendarForm from "./CalendarForm";
import ContactForm from "./ContactForm";

interface IReservationResponse {
  tablesAvailableAtFive: boolean;
  tablesAvailableAtSeven: boolean;
}

const Booking = () => {
  const [reservationState, setReservationState] = useState<Reservation>({
    date: moment().format("DDMMYYYY"),
    guests: 0,
    timeslot: "",
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: 0,
  });
  const [bookingDate, setBookingDate] = useState(moment().toDate());
  const [showTimeSlotOne, setShowTimeSlotOne] = useState(false);
  const [showTimeSlotTwo, setShowTimeSlotTwo] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showCalenderForm, setShowCalenderForm] = useState(true);
  const [showConfirmation, setConfirmation] = useState(false);
  const [calendarMessage, setCalendarMessage] = useState("Välj antal gäster.");

  useEffect(() => {
    const currentTime = moment().hours();
    if (currentTime > 14) {
      setBookingDate(moment().add(1, "days").toDate());

      const newBooking: Reservation = {
        date: moment().add(1, "days").format("DDMMYYYY"),
        guests: reservationState.guests,
        timeslot: reservationState.timeslot,
        firstname: reservationState.firstname,
        lastname: reservationState.lastname,
        email: reservationState.email,
        phonenumber: reservationState.phonenumber,
      };
      setReservationState(newBooking);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reservationState.guests > 0 && reservationState.timeslot === "") {
      axios
        .get<IReservationResponse>(
          `http://localhost:3001/checktables/${reservationState.date}/${reservationState.guests}`
        )
        .then((response) => {
          if (
            response.data.tablesAvailableAtFive === false &&
            response.data.tablesAvailableAtSeven === false
          ) {
            setCalendarMessage("Det finns tyvärr inga bord lediga bord.");
            setShowTimeSlotOne(false);
            setShowTimeSlotTwo(false);
            return;
          } else {
            setCalendarMessage("");
          }

          if (response.data.tablesAvailableAtFive === true) {
            setShowTimeSlotOne(true);
          } else {
            setShowTimeSlotOne(false);
          }
<<<<<<< HEAD

          if (response.data.tablesAvailableAtSeven === true) {
            setShowTimeSlotTwo(true);
          } else {
            setShowTimeSlotTwo(false);
          }
=======
          if (response.data.tablesAvailableAtFive === true)
            setShowTimeSlotOne(true);

          if (response.data.tablesAvailableAtSeven === true)
            setShowTimeSlotTwo(true);
>>>>>>> 9eed0b058b211177ba0eb4d9620758959a5a3395

          if (
            response.data.tablesAvailableAtFive === true ||
            response.data.tablesAvailableAtSeven === true
          )
            setCalendarMessage("Välj en tid.");
        });
    }
    if (reservationState.timeslot !== "") {
      setShowContactForm(true);
      setShowCalenderForm(false);
    }
  }, [reservationState]);

  const createContactBooking = (
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string
  ): void => {
    const contactBooking: Reservation = {
      date: reservationState.date,
      guests: reservationState.guests,
      timeslot: reservationState.timeslot,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonenumber: parseInt(phoneNumber),
    };
    console.log(contactBooking);
    axios.post("http://localhost:3001/create", contactBooking);
  };

  const handleDateChange = (date: string) => {
    const newBooking: Reservation = {
      date: date,
      guests: reservationState.guests,
      timeslot: reservationState.timeslot,
      firstname: reservationState.firstname,
      lastname: reservationState.lastname,
      email: reservationState.email,
      phonenumber: reservationState.phonenumber,
    };
    setReservationState(newBooking);
  };

  const handleAmountChange = (amount: number) => {
    const newBooking: Reservation = {
      date: reservationState.date,
      guests: amount,
      timeslot: reservationState.timeslot,
      firstname: reservationState.firstname,
      lastname: reservationState.lastname,
      email: reservationState.email,
      phonenumber: reservationState.phonenumber,
    };
    setReservationState(newBooking);
  };

  const handleTimeslotChange = (timeslot: string) => {
    const newBooking: Reservation = {
      date: reservationState.date,
      guests: reservationState.guests,
      timeslot: timeslot,
      firstname: reservationState.firstname,
      lastname: reservationState.lastname,
      email: reservationState.email,
      phonenumber: reservationState.phonenumber,
    };
    setReservationState(newBooking);
  };

  const addShowContactForm = () => {
    setShowContactForm(false);
    setShowCalenderForm(true);
  };

  const addShowConfirmation = () => {
    setConfirmation(true);
    setShowContactForm(false);
  };

  return (
    <>
      {showContactForm ? (
        <ContactForm
          addShowContactForm={addShowContactForm}
          addContactInfo={createContactBooking}
          addShowConfirmation={addShowConfirmation}
        />
      ) : null}

      {showCalenderForm ? (
        <CalendarForm
          handleDateChange={handleDateChange}
          handleAmountChange={handleAmountChange}
          handleTimeslotChange={handleTimeslotChange}
          showTimeSlotOne={showTimeSlotOne}
          showTimeSlotTwo={showTimeSlotTwo}
          message={calendarMessage}
          bookingDate={bookingDate}
        />
      ) : null}

      {showConfirmation ? <BookingConfirmation /> : null}
    </>
  );
};

export default Booking;
