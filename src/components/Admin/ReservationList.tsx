import { AdminBookingsWrapper } from "../styles/adminBookings";

interface IReservation {
  _id: string;
  amountOfGuests: Number;
  amountOfTables: Number;
  timeSlot: String;
  date: String;
  ContactInfo: {
    firstname: String;
    lastname: String;
    email: String;
    phoneNumber: Number;
  };
}

interface IReservationListProps {
  reservations: IReservation[];
  deleteBooking(id: string): void;
}

const Bookings = (props: IReservationListProps) => {
  return (
    <>
      <AdminBookingsWrapper>
        <h1>Admin Översikt Bokningar</h1>
        {props.reservations.map((reservation: IReservation) => (
          <div key={reservation._id}>
            <p>{reservation.ContactInfo.firstname}</p>
            <p>{reservation.ContactInfo.lastname}</p>
            <p>{reservation.ContactInfo.email}</p>
            <p>{reservation.ContactInfo.phoneNumber}</p>
            <button
              type="button"
              onClick={() => {
                props.deleteBooking(reservation._id);
              }}
            >
              Radera
            </button>
          </div>
        ))}
      </AdminBookingsWrapper>
    </>
  );
};

export default Bookings;
