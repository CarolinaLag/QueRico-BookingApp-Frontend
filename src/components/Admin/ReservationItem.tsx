import { IReservation } from "../../interface/interface";

interface IReservationProps {
  reservation: IReservation;
  showDetailsPage: () => void;
  setDetailedReservation(reservation: IReservation): void;
  showReservationListPage(): void;
}

const ReservationItem = (props: IReservationProps) => {
  return (
    <>
      <p>{props.reservation.ContactInfo.firstname}</p>
      <p>{props.reservation.ContactInfo.lastname}</p>
      <p>{props.reservation.ContactInfo.email}</p>
      <p>{props.reservation.ContactInfo.phoneNumber}</p>
      <button
        onClick={() => {
          props.showDetailsPage();
          props.setDetailedReservation(props.reservation);
          props.showReservationListPage();
        }}
      >
        Detaljer
      </button>
    </>
  );
};

export default ReservationItem;
