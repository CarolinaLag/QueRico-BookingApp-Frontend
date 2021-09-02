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
}

const Bookings = (props: IReservationListProps) => {
  return (
    <>
      <h1>Admin Översikt Bokningar</h1>
      {props.reservations.map((reservation: IReservation) => (
        <div key={reservation._id}>
          <p>{reservation.ContactInfo.firstname}</p>
          <p>{reservation.ContactInfo.lastname}</p>
          <p>{reservation.ContactInfo.email}</p>
          <p>{reservation.ContactInfo.phoneNumber}</p>
          <button
            type='button'
            onClick={() => {
              props.deleteBooking(reservation._id);
            }}
          >
            Radera
          </button>
        </div>
      ))}
    </>
  );
};

export default Bookings;
