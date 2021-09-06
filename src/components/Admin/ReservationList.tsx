import ReservationItem from "./ReservationItem";
import { AdminBookingsWrapper } from "../styles/adminBookings";
import Calendar from "react-calendar";
import moment from "moment";
import Modal from "react-modal";
import { useState } from "react";

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

interface IReservationListProps {
  reservations: IReservation[];
  deleteBooking(id: string): void;
  showDetailsPage: () => void;
  handleCalendarChange: (date: Date) => void;
  selectedDate: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Bookings = (props: IReservationListProps) => {
  let subtitle: any;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    //setShowModal((prev) => !prev);
    setShowModal(true);
  };

  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setShowModal(false);
  };

  let reservationItems = props.reservations.map((reservation: IReservation) => {
    return (
      <ReservationItem
        key={reservation._id}
        reservation={reservation}
        showDetailsPage={props.showDetailsPage}
      />
    );
  });
  return (
    <>
      <AdminBookingsWrapper>
        <h1>Admin Översikt Bokningar</h1>

        <Calendar
          minDate={moment().toDate()}
          maxDate={moment().add(2, "months").toDate()}
          showWeekNumbers={true}
          value={new Date(props.selectedDate)}
          onChange={props.handleCalendarChange}
        />
        {reservationItems}

        <button onClick={openModal}>Radera</button>
        <Modal
          isOpen={showModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={"Radera Modal"}
        >
          <button onClick={closeModal}>Stäng</button>
          <h3 ref={(_subtitle) => (subtitle = _subtitle)}>
            Är du säker på att du vill radera?
          </h3>

          {/* <button
            onClick={() => {
              props.deleteBooking(reservation._id);
            }}
            type="button"
          >
            Ja
          </button> */}
        </Modal>
      </AdminBookingsWrapper>
    </>
  );
};

export default Bookings;
