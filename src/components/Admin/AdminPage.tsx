import { useEffect, useState } from "react";
import axios from "axios";
import ReservationList from "./ReservationList";
import moment from "moment";
import AddReservation from "./AddReservation";
import EditForm from "./EditForm";
import {
  AddAdminReservationButton,
  AddAdminReservationButtonContainer,
  AdminBookingsWrapper,
} from "../styles/adminBookings";

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

interface IEditResponse {
  tableAvailable: boolean;
  reservations: IReservation[];
}

const AdminPage = () => {
  const [showReservationList, setShowReservationList] = useState(true);
  const [showReservationDetails, setShowReservationDetails] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showCalendarForm, setShowCalendarForm] = useState(false);
  const [showTimeSlotOne, setShowTimeSlotOne] = useState(false);
  const [showTimeSlotTwo, setShowTimeSlotTwo] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const showDetailsPage = () => {
    setShowReservationDetails(!showReservationDetails);
  };

  const showEditPage = () => {
    setShowEditForm(!showEditForm);
  };

  const showReservationCalendarPage = () => {
    setShowCalendarForm(!showCalendarForm);
  };

  const showContactFormPage = () => {
    setShowContactForm(!showContactForm);
  };

  const showReservationListPage = () => {
    setShowReservationList(!showReservationList);
  };

  const [selectedDate, setSelectedDate] = useState<string>(
    moment().format("YYYY-MM-DD").toString()
  );

  const handleCalendarChange = (date: Date) => {
    setSelectedDate(moment(date).format("YYYY-MM-DD").toString());
  };

  const [reservations, setReservations] = useState<IReservation[]>([]);
  useEffect(() => {
    axios
      .get<IReservation[]>(
        `http://localhost:3001/bookingsByDate/${selectedDate}`
      )
      .then((response) => setReservations(response.data));
  }, [selectedDate]);

  const [addReservation, setAddReservation] = useState<IAddReservation>({
    date: moment().format("YYYY-MM-DD"),
    guests: 0,
    timeslot: "",
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: 0,
  });
  const [bookingDate, setBookingDate] = useState(moment().toDate());

  const [calendarMessage, setCalendarMessage] = useState("Välj antal gäster.");
  const [reservationEditMessage, setReservationEditMessage] = useState("");

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

    axios
      .post("http://localhost:3001/create", contactAdminBooking)
      .then((res) => {
        const newReservations = [...reservations];
        newReservations.push(res.data);
        setReservations(newReservations);
      });
    setShowContactForm(false);
    setShowReservationList(true);
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
    console.log(timeslot);

    setAddReservation(newAdminBooking);
    showContactFormPage();
    showReservationCalendarPage();
  };

  const deleteBooking = (id: string) => {
    axios
      .delete<IReservation[]>(`http://localhost:3001/deleteAdmin/${id}`)
      .then((res) => {
        setReservations(res.data);
      });
    setShowEditForm(false);
    setShowReservationList(true);
  };

  const updateReservation = (reservation: IReservation) => {
    axios
      .put<IEditResponse>(`http://localhost:3001/edit/`, reservation)
      .then((response) => {
        if (response.status === 200 && response.data.tableAvailable === true) {
          setReservations(response.data.reservations);
          setReservationEditMessage("");
          setShowEditForm(false);
        } else {
          setReservationEditMessage("Det finns inga bord lediga.");
        }
      });
  };

  return (
    <>
      <AddAdminReservationButtonContainer>
        <AddAdminReservationButton
          onClick={() => {
            showReservationListPage();
            showReservationCalendarPage();
          }}
        >
          Lägg till bokning
        </AddAdminReservationButton>
      </AddAdminReservationButtonContainer>
      <AdminBookingsWrapper>
        <AddReservation
          handleDateChange={handleDateChange}
          handleAmountChange={handleAmountChange}
          handleTimeslotChange={handleTimeslotChange}
          showTimeSlotOne={showTimeSlotOne}
          showTimeSlotTwo={showTimeSlotTwo}
          message={calendarMessage}
          bookingDate={bookingDate}
          addContactInfo={createContactBooking}
          showReservationListPage={showReservationListPage}
          showReservationCalendarPage={showReservationCalendarPage}
          showContactFormPage={showContactFormPage}
          showContactForm={showContactForm}
          showCalendarForm={showCalendarForm}
          // addShowConfirmation={addShowConfirmation}
        />

        {showReservationList ? (
          <ReservationList
            reservations={reservations}
            deleteBooking={deleteBooking}
            showDetailsPage={showDetailsPage}
            handleCalendarChange={handleCalendarChange}
            selectedDate={selectedDate}
          ></ReservationList>
        ) : null}

        {reservations[0] && showEditForm ? (
          <EditForm
            reservation={reservations[0]}
            updateReservation={updateReservation}
            reservationEditMessage={reservationEditMessage}
            showEditPage={showEditPage}
            showDetailsPage={showDetailsPage}
          />
        ) : null}
      </AdminBookingsWrapper>
    </>
  );
};

export default AdminPage;
