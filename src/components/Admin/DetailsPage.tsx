import { AdminBookingsWrapper } from "../styles/adminBookings";
import { Button } from "../styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { IReservation } from "../../interface/interface";

interface IDetailsPageProps {
  reservation: IReservation;
  showDetailsPage(): void;
  showEditPage(): void;
  showReservationListPage(): void;
  deleteBooking(id: string): void;
}

const DetailsPage = (props: IDetailsPageProps) => {
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
  let subtitle: any;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    setShowModal(true);
  };

  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <AdminBookingsWrapper>
        <h2>Bokningsdetaljer</h2>
        <div>
          <Button type="button" onClick={openModal}>
            Radera
          </Button>
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

            <button
              onClick={() => {
                props.deleteBooking(props.reservation._id);
                props.showDetailsPage();
                props.showReservationListPage();
              }}
              type="button"
            >
              Ja
            </button>
          </Modal>
          <p>
            <strong>Förnamn:</strong> {props.reservation.ContactInfo.firstname}
          </p>
          <p>
            <strong>Efternamn:</strong> {props.reservation.ContactInfo.lastname}
          </p>
          <p>
            <strong>Email:</strong> {props.reservation.ContactInfo.email}
          </p>
          <p>
            <strong>Telefon:</strong>{" "}
            {props.reservation.ContactInfo.phoneNumber}
          </p>
          <p>
            <strong>Antal gäster:</strong> {props.reservation.amountOfGuests}
          </p>
          <p>
            <strong>Antal bord:</strong> {props.reservation.amountOfTables}
          </p>
          <p>
            <strong>Datum:</strong> {props.reservation.date}
          </p>
          <p>
            <strong>Tid:</strong> {props.reservation.timeSlot}
          </p>
          <Button
            type="button"
            onClick={() => {
              props.showDetailsPage();
              props.showReservationListPage();
            }}
          >
            Tillbaka
          </Button>
          <Button
            type="button"
            onClick={() => {
              props.showDetailsPage();
              props.showEditPage();
            }}
          >
            Ändra
          </Button>
        </div>
      </AdminBookingsWrapper>
    </>
  );
};

export default DetailsPage;
