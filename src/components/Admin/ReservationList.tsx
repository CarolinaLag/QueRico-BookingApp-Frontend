import ReservationItem from "./ReservationItem";

import { AdminBookingsWrapper } from "../styles/adminBookings";

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
}

const Bookings = (props: IReservationListProps) => {
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
        {reservationItems}

        {/*  <button
              type='button'
              onClick={() => {
                props.deleteBooking(reservation._id);
              }}
            >
              Radera
            </button> */}
      </AdminBookingsWrapper>
    </>
  );
};

export default Bookings;
