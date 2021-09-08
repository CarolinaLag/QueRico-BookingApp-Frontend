import { ReservationItemStyle } from "../styles/adminBookings";
import { Button } from "../styles/global";

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

interface IReservationProps {
  reservation: IReservation;
  showDetailsPage: () => void;
  setDetailedReservation(reservation: IReservation): void;
  showReservationListPage(): void;
}

const ReservationItem = (props: IReservationProps) => {
  return (
    <>
      <ReservationItemStyle>
        <p>{props.reservation.ContactInfo.firstname}</p>
        <p>{props.reservation.ContactInfo.lastname}</p>
        <p>{props.reservation.ContactInfo.email}</p>
        <p>{props.reservation.ContactInfo.phoneNumber}</p>
        <Button
          onClick={() => {
            props.showDetailsPage();
            props.setDetailedReservation(props.reservation);
            props.showReservationListPage();
          }}
        >
          Detaljer
        </Button>
      </ReservationItemStyle>
    </>
  );
};

export default ReservationItem;
