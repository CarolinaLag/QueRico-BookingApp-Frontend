import ReservationItem from "./ReservationItem";
import { AdminBookingsWrapper } from "../styles/adminBookings";
import Calendar from "react-calendar";
import moment from "moment";
import { IReservation } from "../../interface/interface";

interface IReservationListProps {
  reservations: IReservation[];
  deleteBooking(id: string): void;
  showDetailsPage: () => void;
  handleCalendarChange: (date: Date) => void;
  setDetailedReservation(reservation: IReservation): void;
  showReservationListPage(): void;
  selectedDate: string;
}

const Bookings = (props: IReservationListProps) => {
  let reservationItems = props.reservations.map((reservation: IReservation) => {
    return (
      <ReservationItem
        key={reservation._id}
        reservation={reservation}
        showDetailsPage={props.showDetailsPage}
        setDetailedReservation={props.setDetailedReservation}
        showReservationListPage={props.showReservationListPage}
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
      </AdminBookingsWrapper>
    </>
  );
};

export default Bookings;
