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
}

const ReservationItem = (props: IReservationProps) => {
  return (
    <>
      <p>{props.reservation.ContactInfo.firstname}</p>
      <p>{props.reservation.ContactInfo.lastname}</p>
      <p>{props.reservation.ContactInfo.email}</p>
      <p>{props.reservation.ContactInfo.phoneNumber}</p>
      <button onClick={props.showDetailsPage}>Detaljer</button>
    </>
  );
};

export default ReservationItem;
