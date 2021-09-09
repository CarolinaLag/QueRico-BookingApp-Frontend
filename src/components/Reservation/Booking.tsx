import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { IAddReservation, IReservation } from "../../interface/interface";
import BookingConfirmation from "./BookingConfirmation";
import CalendarForm from "./CalendarForm";
import ContactForm from "./ContactForm";

interface IReservationResponse {
  tablesAvailableAtFive: boolean;
  tablesAvailableAtSeven: boolean;
}

interface INewReservationResponse {
  reservations: IReservation[];
  reservationIsPossible: boolean;
}

const Booking = () => {
  const [reservationState, setReservationState] = useState<IAddReservation>({
    date: moment().format("YYYY-MM-DD"),
    timeslot: "",
    guests: 0,
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: 0,
  });
  const [bookingDate, setBookingDate] = useState(moment().format("YYYY-MM-DD"));
  const [showTimeSlotOne, setShowTimeSlotOne] = useState(false);
  const [showTimeSlotTwo, setShowTimeSlotTwo] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showCalenderForm, setShowCalenderForm] = useState(true);
  const [showConfirmation, setConfirmation] = useState(false);
  const [message, setMessage] = useState("Välj antal gäster.");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const currentTime = moment().hours();
    if (currentTime > 14) {
      setBookingDate(moment().add(1, "days").format("YYYY-MM-DD"));

      setReservationState({
        ...reservationState,
        date: moment().add(1, "days").format("YYYY-MM-DD"),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reservationState.guests === 0) {
      setMessage("Välj antal gäster.");
      setShowTimeSlotOne(false);
      setShowTimeSlotTwo(false);
    }
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
            setMessage("Det finns tyvärr inga bord lediga bord.");
            setShowTimeSlotOne(false);
            setShowTimeSlotTwo(false);
          }

          if (response.data.tablesAvailableAtFive === true) {
            setShowTimeSlotOne(true);
            setMessage("Välj en tid.");
          } else {
            setShowTimeSlotOne(false);
          }

          if (response.data.tablesAvailableAtSeven === true) {
            setShowTimeSlotTwo(true);
            setMessage("Välj en tid.");
          } else {
            setShowTimeSlotTwo(false);
          }
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
    const contactBooking: IAddReservation = {
      date: reservationState.date,
      guests: reservationState.guests,
      timeslot: reservationState.timeslot,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonenumber: parseInt(phoneNumber),
    };
    axios
      .post<INewReservationResponse>(
        "http://localhost:3001/create",
        contactBooking
      )
      .then((response) => {
        if (response.data.reservationIsPossible === true) {
          setConfirmation(true);
          setShowContactForm(false);
        } else {
          toggleCalendarForm();
          setErrorMessage("Tyvärr gick inte din bokning igenom. Försök igen.");
        }
      });
  };

  const handleDateChange = (date: string) => {
    setReservationState({ ...reservationState, date: date });
  };

  const handleAmountChange = (amount: number) => {
    setReservationState({ ...reservationState, guests: amount });
  };

  const handleTimeslotChange = (timeslot: string) => {
    setReservationState({ ...reservationState, timeslot: timeslot });
  };

  const toggleCalendarForm = () => {
    setShowContactForm(false);
    setShowCalenderForm(true);
    setReservationState({
      date: moment().format("YYYY-MM-DD"),
      timeslot: "",
      guests: 0,
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: 0,
    });
  };

  return (
    <>
      {showContactForm ? (
        <ContactForm
          toggleCalendarForm={toggleCalendarForm}
          addContactInfo={createContactBooking}
        />
      ) : null}

      {showCalenderForm ? (
        <CalendarForm
          handleDateChange={handleDateChange}
          handleAmountChange={handleAmountChange}
          handleTimeslotChange={handleTimeslotChange}
          showTimeSlotOne={showTimeSlotOne}
          showTimeSlotTwo={showTimeSlotTwo}
          message={message}
          errorMessage={errorMessage}
          bookingDate={bookingDate}
          reservation={reservationState}
        />
      ) : null}

      {showConfirmation ? <BookingConfirmation /> : null}
    </>
  );
};

export default Booking;
