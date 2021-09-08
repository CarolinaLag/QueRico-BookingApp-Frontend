import ReservationItem from "./ReservationItem";
import {
  AdminBookingsWrapper,
  CalendarSection,
  CalenderWrapper,
  HeadingWrapper,
  ReservationItemWrapper,
  ReservationListWrapper,
} from "../styles/adminBookings";
import Calendar from "react-calendar";
import moment from "moment";

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
  setDetailedReservation(reservation: IReservation): void;
  showReservationListPage(): void;
  selectedDate: string;
}

const Bookings = (props: IReservationListProps) => {
  let reservationItems = props.reservations.map((reservation: IReservation) => {
    return (
      <ReservationItemWrapper>
        <ReservationItem
          key={reservation._id}
          reservation={reservation}
          showDetailsPage={props.showDetailsPage}
          setDetailedReservation={props.setDetailedReservation}
          showReservationListPage={props.showReservationListPage}
        />
      </ReservationItemWrapper>
    );
  });
  return (
    <>
      <CalenderWrapper>
        <AdminBookingsWrapper>
          <HeadingWrapper>
            <h1>Admin Översikt </h1>
          </HeadingWrapper>
          <CalendarSection>
            <Calendar
              minDate={moment().toDate()}
              maxDate={moment().add(2, "months").toDate()}
              showWeekNumbers={true}
              value={new Date(props.selectedDate)}
              onChange={props.handleCalendarChange}
            />
          </CalendarSection>
          <ReservationListWrapper>{reservationItems}</ReservationListWrapper>
        </AdminBookingsWrapper>
      </CalenderWrapper>
    </>
  );
};

export default Bookings;
