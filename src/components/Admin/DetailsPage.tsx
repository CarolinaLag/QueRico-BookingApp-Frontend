import { AdminBookingsWrapper } from "../styles/adminBookings";
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

interface IDetailsPageProps {
  reservation: IReservation;
  showDetailsPage(): void;
}

const DetailsPage = (props: IDetailsPageProps) => {
  return (
    <>
      <AdminBookingsWrapper>
        <h2>Bokningsdetaljer</h2>
        <div>
          <Button type='button'>Radera</Button>
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
          <Button type='button' onClick={props.showDetailsPage}>
            Tillbaka
          </Button>
          <Button type='button' onClick={props.showDetailsPage}>
            Ändra
          </Button>
        </div>
      </AdminBookingsWrapper>
    </>
  );
};

export default DetailsPage;
