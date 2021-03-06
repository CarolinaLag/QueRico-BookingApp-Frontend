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
import DetailsPage from "./DetailsPage";
import { IAddReservation, IReservation } from "../../interface/interface";

interface IReservationResponse {
  tablesAvailableAtFive: boolean;
  tablesAvailableAtSeven: boolean;
}

interface IEditResponse {
  tableAvailable: boolean;
  reservations: IReservation[];
}

interface INewReservationResponse {
  reservations: IReservation[];
  reservationIsPossible: boolean;
}

const AdminPage = () => {
  const [showReservationList, setShowReservationList] = useState(true);
  const [showReservationDetails, setShowReservationDetails] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showCalendarForm, setShowCalendarForm] = useState(false);
  const [showTimeSlotOne, setShowTimeSlotOne] = useState(false);
  const [showTimeSlotTwo, setShowTimeSlotTwo] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [toggleAddButton, setToggleAddButton] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>(
    moment().format("YYYY-MM-DD").toString()
  );
  const [reservations, setReservations] = useState<IReservation[]>([]);
  const [reservation, setReservation] = useState<IReservation>();
  const [addReservation, setAddReservation] = useState<IAddReservation>({
    date: moment().format("YYYY-MM-DD"),
    guests: 0,
    timeslot: "",
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: 0,
  });
  const [bookingDate, setBookingDate] = useState<string>(
    moment().format("YYYY-MM-DD")
  );
  const [calendarMessage, setCalendarMessage] = useState("Välj antal gäster.");
  const [reservationEditMessage, setReservationEditMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    //Hämtar ny lista med bokningar för valt datum när nytt datum valts av användaren i kalendern.
    axios
      .get<IReservation[]>(
        `https://que-rico-app.herokuapp.com/bookingsByDate/${selectedDate}`
      )
      .then((response) => setReservations(response.data));
  }, [selectedDate]);

  useEffect(() => {
    //Denna useEffect används för att sätta en ny tid i kalendern istället för dagens datum ifall klockan är 15:00 eller senare.
    const currentTime = moment().hours();
    if (currentTime > 14) {
      setBookingDate(moment().add(1, "days").format("YYYY-MM-DD"));

      setAddReservation({
        ...addReservation,
        date: moment().add(1, "days").format("YYYY-MM-DD"),
      });
    }
    console.log(toggleAddButton);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (addReservation.guests === 0) {
      //Nollställning av några states när man skapat en ny bokning, så att rätt saker syns när man gör ytterligare bokningar.
      setShowTimeSlotOne(false);
      setShowTimeSlotTwo(false);
      setCalendarMessage("Välj antal gäster.");
    }
    if (addReservation.guests > 0 && addReservation.timeslot === "") {
      //If för att förhindra att Axios går iväg när man ändrar i kontaktformuläret. Körs alltså när man valt antal gäster men inte hunnit välja timeslot,
      // och när man ändrar datum utan att ha valt timeslot än.
      axios
        .get<IReservationResponse>(
          `https://que-rico-app.herokuapp.com/checktables/${addReservation.date}/${addReservation.guests}`
        )
        .then((response) => {
          if (
            response.data.tablesAvailableAtFive === false &&
            response.data.tablesAvailableAtSeven === false
          ) {
            setCalendarMessage("Det finns tyvärr inga bord lediga bord.");
            setShowTimeSlotOne(false);
            setShowTimeSlotTwo(false);
          }

          if (response.data.tablesAvailableAtFive === true) {
            setShowTimeSlotOne(true);
            setCalendarMessage("Välj en tid.");
          } else {
            setShowTimeSlotOne(false);
          }

          if (response.data.tablesAvailableAtSeven === true) {
            setShowTimeSlotTwo(true);
            setCalendarMessage("Välj en tid.");
          } else {
            setShowTimeSlotTwo(false);
          }
        });
    }
  }, [addReservation]);

  const deleteBooking = (id: string) => {
    axios
      .delete<IReservation[]>(
        `https://que-rico-app.herokuapp.com/deleteAdmin/${id}`
      )
      .then((res) => {
        setReservations(res.data);
        showDetailsPage();
        showReservationListPage();
      });
  };

  const updateReservation = (reservation: IReservation) => {
    axios
      .put<IEditResponse>(
        `https://que-rico-app.herokuapp.com/edit/`,
        reservation
      )
      .then((response) => {
        if (response.status === 200 && response.data.tableAvailable === true) {
          setReservations(response.data.reservations);
          setReservationEditMessage("");
          showEditPage();
          showReservationListPage();
          setSelectedDate(response.data.reservations[0].date);
        } else {
          setReservationEditMessage("Det finns inga bord lediga.");
        }
      });
  };

  const createContactBooking = (
    //Skapa ny bokning
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string
  ): void => {
    const newAdminBooking: IAddReservation = addReservation;
    newAdminBooking.firstname = firstname;
    newAdminBooking.lastname = lastname;
    newAdminBooking.email = email;
    newAdminBooking.phonenumber = parseInt(phoneNumber);

    setAddReservation(newAdminBooking);

    axios
      .post<INewReservationResponse>(
        "https://que-rico-app.herokuapp.com/create",
        addReservation
      )
      .then((res) => {
        if (res.data.reservationIsPossible === false)
          setErrorMessage("Tyvärr gick inte din bokning igenom. Försök igen.");

        setReservations(res.data.reservations);
        resetReservation();
        showContactFormPage();
        showReservationListPage();
        setSelectedDate(res.data.reservations[0].date);
      });
  };

  const handleCalendarChange = (date: Date) => {
    setSelectedDate(moment(date).format("YYYY-MM-DD").toString());
    setErrorMessage("");
  };

  const showDetailsPage = () => {
    setShowReservationDetails(!showReservationDetails);
    setErrorMessage("");
  };

  const showEditPage = () => {
    setShowEditForm(!showEditForm);
  };

  const showReservationCalendarPage = () => {
    setShowCalendarForm(!showCalendarForm);
    setCalendarMessage("Välj antal gäster.");
    setShowTimeSlotOne(false);
    setShowTimeSlotTwo(false);
    setToggleAddButton(false);
  };

  const showContactFormPage = () => {
    setShowContactForm(!showContactForm);
  };

  const showReservationListPage = () => {
    setShowReservationList(!showReservationList);
    setToggleAddButton(!toggleAddButton);
  };

  const setDetailedReservation = (reservation: IReservation) => {
    setReservation(reservation);
    showDetailsPage();
  };

  const handleDateChange = (date: string) => {
    setAddReservation({ ...addReservation, date: date });
  };

  const handleAmountChange = (amount: number) => {
    setAddReservation({ ...addReservation, guests: amount });
  };

  const handleTimeslotChange = (timeslot: string) => {
    setAddReservation({ ...addReservation, timeslot: timeslot });

    showContactFormPage();
    showReservationCalendarPage();
  };

  const resetReservation = () => {
    setAddReservation({
      date: moment().format("YYYY-MM-DD"),
      guests: 0,
      timeslot: "",
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: 0,
    });
  };

  const resetReservationEditMessage = () => {
    setReservationEditMessage("");
  };

  return (
    <>
      <AddAdminReservationButtonContainer>
        {toggleAddButton ? (
          <AddAdminReservationButton
            onClick={() => {
              setErrorMessage("");
              showReservationListPage();
              showReservationCalendarPage();
              setToggleAddButton(!toggleAddButton);
            }}
          >
            Lägg till bokning
          </AddAdminReservationButton>
        ) : null}
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
          addReservation={addReservation}
          addContactInfo={createContactBooking}
          showReservationListPage={showReservationListPage}
          showReservationCalendarPage={showReservationCalendarPage}
          showContactFormPage={showContactFormPage}
          showContactForm={showContactForm}
          showCalendarForm={showCalendarForm}
          resetReservation={resetReservation}
        />

        {showReservationList ? (
          <ReservationList
            reservations={reservations}
            deleteBooking={deleteBooking}
            showDetailsPage={showDetailsPage}
            handleCalendarChange={handleCalendarChange}
            selectedDate={selectedDate}
            setDetailedReservation={setDetailedReservation}
            showReservationListPage={showReservationListPage}
            errorMessage={errorMessage}
          ></ReservationList>
        ) : null}

        {reservation && showReservationDetails ? (
          <DetailsPage
            reservation={reservation}
            showDetailsPage={showDetailsPage}
            showEditPage={showEditPage}
            showReservationListPage={showReservationListPage}
            deleteBooking={deleteBooking}
          />
        ) : null}

        {reservation && showEditForm ? (
          <EditForm
            reservation={reservation}
            updateReservation={updateReservation}
            reservationEditMessage={reservationEditMessage}
            showEditPage={showEditPage}
            showDetailsPage={showDetailsPage}
            showReservationListPage={showReservationListPage}
            bookingDate={bookingDate}
            resetReservationEditMessage={resetReservationEditMessage}
          />
        ) : null}
      </AdminBookingsWrapper>
    </>
  );
};

export default AdminPage;
