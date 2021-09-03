import { useEffect, useState } from "react";
import axios from "axios";
import ReservationList from "./ReservationList";
import moment from "moment";
import AddReservation from "./AddReservation";
import EditForm from "./EditForm";
import { AdminBookingsWrapper } from "../styles/adminBookings";

interface IReservationResponse {
  tablesAvailableAtFive: boolean;
  tablesAvailableAtSeven: boolean;
}

interface IReservation {
  _id: string;
  amountOfGuests: number;
  amountOfTables: number;
  timeSlot: string;
  date: string;
  ContactInfo: {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: number;
  };
}

interface IAddReservation {
  date: string;
  timeslot: string;
  guests: number;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
}

const AdminPage = () => {
  const [showReservationDetails, setShowReservationDetails] = useState(false);
  const showDetailsPage = () => {
    setShowReservationDetails(true);
  };

  const [reservations, setReservations] = useState<IReservation[]>([]);
  useEffect(() => {
    axios
      .get<IReservation[]>("http://localhost:3001/bookings")
      .then((response) => {
        if (response.status === 200) {
          setReservations(response.data);
          console.log(response.data[3]);
        }
      });
  }, []);

  const [addReservation, setAddReservation] = useState<IAddReservation>({
    date: moment().format("DD-MM-YYYY"),
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
  // const [showContactForm, setShowContactForm] = useState(false);
  // const [showCalenderForm, setShowCalenderForm] = useState(true);
  // const [showConfirmation, setConfirmation] = useState(false);
  const [calendarMessage, setCalendarMessage] = useState("Välj antal gäster.");

  useEffect(() => {
    const currentTime = moment().hours();
    if (currentTime > 14) {
      setBookingDate(moment().add(1, "days").toDate());

      const newAdminBooking: IAddReservation = {
        date: moment().add(1, "days").format("YYYY-MM-DD"),
        guests: addReservation.guests,
        timeslot: addReservation.timeslot,
        firstname: addReservation.firstname,
        lastname: addReservation.lastname,
        email: addReservation.email,
        phonenumber: addReservation.phonenumber,
      };
      setAddReservation(newAdminBooking);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (addReservation.guests > 0 && addReservation.timeslot === "") {
      axios
        .get<IReservationResponse>(
          `http://localhost:3001/checktables/${addReservation.date}/${addReservation.guests}`
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

          if (response.data.tablesAvailableAtSeven === true) {
            setShowTimeSlotTwo(true);
          } else {
            setShowTimeSlotTwo(false);
          }

          if (
            response.data.tablesAvailableAtFive === true ||
            response.data.tablesAvailableAtSeven === true
          )
            setCalendarMessage("Välj en tid.");
        });
    }
    if (addReservation.timeslot !== "") {
    }
  }, [addReservation]);

  const createContactBooking = (
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string
  ): void => {
    const contactAdminBooking: IAddReservation = {
      date: addReservation.date,
      guests: addReservation.guests,
      timeslot: addReservation.timeslot,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonenumber: parseInt(phoneNumber),
    };
    // console.log(contactAdminBooking);
    axios
      .post("http://localhost:3001/create", contactAdminBooking)
      .then((res) => {
        const newReservations = [...reservations];
        newReservations.push(res.data);
        setReservations(newReservations);
      });
  };

  const handleDateChange = (date: string) => {
    const newAdminBooking: IAddReservation = {
      date: date,
      guests: addReservation.guests,
      timeslot: addReservation.timeslot,
      firstname: addReservation.firstname,
      lastname: addReservation.lastname,
      email: addReservation.email,
      phonenumber: addReservation.phonenumber,
    };
    setAddReservation(newAdminBooking);
  };

  const handleAmountChange = (amount: number) => {
    const newAdminBooking: IAddReservation = {
      date: addReservation.date,
      guests: amount,
      timeslot: addReservation.timeslot,
      firstname: addReservation.firstname,
      lastname: addReservation.lastname,
      email: addReservation.email,
      phonenumber: addReservation.phonenumber,
    };
    setAddReservation(newAdminBooking);
  };

  const handleTimeslotChange = (timeslot: string) => {
    const newAdminBooking: IAddReservation = {
      date: addReservation.date,
      guests: addReservation.guests,
      timeslot: timeslot,
      firstname: addReservation.firstname,
      lastname: addReservation.lastname,
      email: addReservation.email,
      phonenumber: addReservation.phonenumber,
    };
    setAddReservation(newAdminBooking);
  };

  const deleteBooking = (id: string) => {
    axios.delete<any>(`http://localhost:3001/delete/${id}`).then((res) => {
      setReservations(res.data);
    });
  };

  const handleAmountChangeEdit = (id: string, guests: number) => {
    console.log(guests);
  };

  const handleDateChangeEdit = (id: string, date: string) => {
    console.log(date);
  };

  const handleTimeslotChangeEdit = (id: string, timeslot: string) => {
    console.log(timeslot);
  };

  const handleChange = () => {
    console.log("Hej");
  };

  return (
    <>
      <AdminBookingsWrapper>
        <AddReservation
          handleDateChange={handleDateChange}
          handleAmountChange={handleAmountChange}
          handleTimeslotChange={handleTimeslotChange}
          showTimeSlotOne={showTimeSlotOne}
          showTimeSlotTwo={showTimeSlotTwo}
          message={calendarMessage}
          bookingDate={bookingDate}
          //addShowContactForm={addShowContactForm}
          addContactInfo={createContactBooking}
          // addShowConfirmation={addShowConfirmation}
        />
        <ReservationList
          reservations={reservations}
          deleteBooking={deleteBooking}
          showDetailsPage={showDetailsPage}
        ></ReservationList>
        {reservations[0] === undefined ? null : (
          <EditForm
            handleAmountChange={handleAmountChangeEdit}
            handleDateChange={handleDateChangeEdit}
            handleTimeslotChange={handleTimeslotChangeEdit}
            handleChange={handleChange}
            reservation={reservations[3]}
          />
        )}
      </AdminBookingsWrapper>
    </>
  );
};

export default AdminPage;
